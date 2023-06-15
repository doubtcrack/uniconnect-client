// "use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Client, Databases, ID } from "appwrite";
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("uniconnect");

const Posts = () => {
  const [blogPosts, setblogPosts] = useState([]);
  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments("blogposts", "blogs");

    promise.then(
      function (response) {
        console.log(response);
        setblogPosts(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post) => (
          <>
            {console.log(post.imagess)}
            <BlogPost
              key={post.id}
              image={
                post.images
                  ? post.images
                  : "https://media.istockphoto.com/id/1435226158/photo/circuit-board-background-computer-data-technology-artificial-intelligence.webp?b=1&s=170667a&w=0&k=20&c=d-gHg6uCV5JEaKJCpxhJ01Ab19m032daRC8vDo8NzDI="
              }
              title={post.title}
              content={post.content}
              link={post.link}
              meta_desc={post.meta_desc}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Posts;

const BlogPost = ({ image, title, content, link, meta_desc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <img src={image} alt={title} className="w-full h-auto mb-4 rounded-lg" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{meta_desc}</p>
      <Link
        to={link}
        className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-color-orange"
      >
        Read More
      </Link>
    </div>
  );
};
