import React, { useState, useEffect } from "react";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        role: "Web Developer",
        message: "This platform has completely transformed the way I collaborate with my team. From seamless file sharing to real-time updates, it has significantly improved our productivity. The integration with other tools is seamless, and the user interface is intuitive and user-friendly. Whether I'm working remotely or in the office, I can always stay connected with my team. Highly recommend this platform to anyone looking to enhance their workflow!",
        company: "TechCorp",
        rating: 5,
        image: "/assets/people.png",  // Correct image path
        social: {
            linkedin: "#",
            twitter: "#",
        },
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Graphic Designer",
        message: "As a designer, I need tools that are both powerful and easy to use, and this platform delivers on both fronts. The design assets and collaboration features allow me to get feedback from my clients quickly, and the smooth project management keeps me on track. I no longer need to switch between multiple apps to get my work done. It's all here in one place. I’ve never experienced a more streamlined workflow, and it’s been a game-changer for my productivity.",
        company: "Designify",
        rating: 4,
        image: "/assets/people.png",  // Correct image path
        social: {
            linkedin: "#",
            twitter: "#",
        },
    },
    {
        id: 3,
        name: "Emily Johnson",
        role: "Project Manager",
        message: "A fantastic experience overall. The platform helps me manage projects effortlessly. It’s easy to assign tasks, track progress, and communicate with my team all in one place. The real-time notifications ensure I’m always up to date, and the analytics features provide valuable insights into how my team is performing. The support team is also responsive and knowledgeable, making the whole experience smooth and worry-free. I can confidently say this is one of the best project management tools I’ve used.",
        company: "ManagePro",
        rating: 5,
        image: "/assets/people.png",  // Correct image path
        social: {
            linkedin: "#",
            twitter: "#",
        },
    },
];

const Testimonial = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(3);
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(1);
            }
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(testimonials.length / itemsPerPage));
        }, 5000);

        return () => clearInterval(interval);
    }, [itemsPerPage]);

    // Calculate the items to display on the current page
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentTestimonials = testimonials.slice(startIndex, endIndex);

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-lg shadow-lg p-4 sm:p-6 transition-transform transform hover:scale-105"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 border-2 border-blue-500"
                            />
                            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                            <p className="text-gray-600 mb-1">
                                {testimonial.role} at {" "}
                                <span className="text-blue-500">{testimonial.company}</span>
                            </p>
                            <p className="text-gray-700 mb-4">{testimonial.message}</p>
                            <div className="flex justify-center space-x-4">
                                {testimonial.social.linkedin && (
                                    <a
                                        href={testimonial.social.linkedin}
                                        className="text-blue-500 hover:text-blue-700"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.12 19h-2.88v-8.76h2.88v8.76zm-1.44-10.02c-.92 0-1.56-.64-1.56-1.56s.64-1.56 1.56-1.56 1.56.64 1.56 1.56-.64 1.56-1.56 1.56zm11.56 10.02h-2.88v-4.44c0-1.12-.4-1.88-1.4-1.88-.76 0-1.12.52-1.32 1.02-.08.2-.1.52-.1.82v4.48h-2.88s.04-7.28 0-8.04h2.88v1.14c.38-.58 1.04-1.4 2.52-1.4 1.84 0 3.22 1.2 3.22 3.78v4.52z" />
                                        </svg>
                                    </a>
                                )}
                                {testimonial.social.twitter && (
                                    <a
                                        href={testimonial.social.twitter}
                                        className="text-blue-400 hover:text-blue-600"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23.643 4.937c-.835.371-1.732.621-2.675.733.962-.576 1.699-1.487 2.048-2.573-.894.528-1.88.905-2.926 1.112-.841-.897-2.034-1.457-3.356-1.457-2.602 0-4.715 2.113-4.715 4.715 0 .371.042.733.122 1.081-3.918-.196-7.392-2.074-9.717-4.928-.406.696-.637 1.505-.637 2.368 0 1.632.832 3.073 2.1 3.916-.774-.024-1.503-.237-2.14-.593v.061c0 2.282 1.622 4.183 3.766 4.617-.396.108-.813.165-1.244.165-.304 0-.599-.03-.888-.085.599 1.871 2.34 3.232 4.404 3.271-1.616 1.267-3.654 2.023-5.867 2.023-.38 0-.755-.022-1.125-.067 2.092 1.34 4.58 2.125 7.258 2.125 8.717 0 13.489-7.219 13.489-13.489 0-.206-.005-.414-.014-.621.926-.667 1.729-1.501 2.36-2.452z" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                    {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-3 h-3 rounded-full ${currentPage === index ? "bg-green-500" : "bg-gray-300"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Testimonial;
