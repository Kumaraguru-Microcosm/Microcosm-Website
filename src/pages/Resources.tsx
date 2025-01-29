import { useEffect, useState } from "react";
import DownloadArtifacts from "../components/DownloadArtifacts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { getAllBlogs } from "../api/blog";

const PostListing = ({ posts }) => {
  return (
    <div className="bg-white p-8">
      <h1 className="md:text-3xl text-2xl font-bold text-green-700 mb-6 py-5 text-center">
        Our Blog and Latest News
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <p className="text-gray-700 mb-4">
                {post.content.slice(0, 100)}...
              </p>
              <Link
                to={`/post/${post._id}`}
                className="text-green-600 hover:text-green-500 font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Resources = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="mt-10">
        <PostListing posts={posts} />
      </div>
      <DownloadArtifacts />
      <Footer />
    </>
  );
};

export default Resources;
