import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p._id === +id);

  if (!post) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-red-600">Post Not Found</h2>
        <Link to="/" className="text-green-700 hover:text-green-500">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="p-8 bg-green-50 min-h-screen mt-10">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <Link
            to="/resources"
            //make the link to push the page back to last page
            onClick={() => window.history.back()}
            className="inline-block my-3 text-green-700 hover:text-green-500 font-medium"
          >
            ← Back to Blog
          </Link>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-60 object-cover mb-4"
          />
          <h1 className="text-3xl font-bold text-green-800 mb-2">
            {post.title}
          </h1>
          <p className="text-gray-600 text-sm mb-4">{post.date}</p>
          <p className="text-gray-700 leading-relaxed">{post.content}</p>
          <p className="mt-10">Written By</p>
          <p>{post.author}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostDetail;
