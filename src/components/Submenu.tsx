import { useAtom } from "jotai";
import { TOption } from "../types";
import { optionsAtom } from "../state";

const Submenu = ({
  options,
  level = 1,
  parentIdx = [],
  recursivelySetClose,
}: {
  options?: TOption[];
  level?: number;
  parentIdx?: number[];
  recursivelySetClose: (options: TOption[]) => TOption[];
}) => {
  const [navOptions, setNavOptions] = useAtom(optionsAtom);
  const optns = options ?? navOptions;

  const handleClick = (i: number) => {
    setNavOptions((nav) => {
      return toggleActive([...parentIdx, i], nav);
    });
  };

  const toggleActive = (
    parentIdx: number[],
    oldNavOptions: TOption[]
  ): TOption[] => {
    let newNavOptions = [...oldNavOptions];
    let num = parentIdx.shift();
    if (num !== undefined) {
      if (parentIdx.length === 0) {
        let opt = newNavOptions[num];
        newNavOptions[num].state = opt.state === "OPEN" ? "CLOSE" : "OPEN";
        if (newNavOptions[num].state === "CLOSE") {
          let newChildren = recursivelySetClose(
            newNavOptions[num].children || []
          );
          newNavOptions[num].children = newChildren;
        }
        return newNavOptions;
      }
      let res = toggleActive(parentIdx, newNavOptions[num].children ?? []);
      newNavOptions[num].children = res;
    }
    return newNavOptions;
  };

  return (
    <div
      className={`content-center  flex  ${
        level > 1 ? "flex-col gap-5" : "gap-12"
      }`}
    >
      {optns.map((option, i) => (
        <div className="content-center relative" key={i}>
          {!option.children ? (
            <a href={option.link}>{option.name}</a>
          ) : (
            <>
              <div className="flex gap-2 text-black">
                <a href={option.link}>{option.name}</a>
                <img
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(i);
                  }}
                  src={level > 1 ? "/arrowright.svg" : "/arrowdown.svg"}
                  alt="arrow"
                  className={`cursor-pointer`}
                />
              </div>
              {option.state === "OPEN" && (
                <div
                  className={`absolute shadow-lg 
                    rounded-md ${
                      level > 1 ? "left-[100px]" : "top-[40px]"
                    } border-solid border-black border-2 py-5 px-10`}
                >
                  <Submenu
                    recursivelySetClose={recursivelySetClose}
                    options={option.children}
                    level={level + 1}
                    parentIdx={[...parentIdx, i]}
                  />
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Submenu;
