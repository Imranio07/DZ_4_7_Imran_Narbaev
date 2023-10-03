import React, { useState, useEffect } from "react";
import AddPost from "./components/addPost";
import Post from "./components/post";

function Slider() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Ошибка при загрузке постов:", error);
    }
  };

  const addPost = async ({ title, body, catImage }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title,
            body,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();

      setPosts((prevPosts) => [
        {
          id: data.id,
          title,
          body,
          catImage,
        },
        ...prevPosts,
      ]);
    } catch (error) {
      console.error("Ошибка при добавлении поста:", error);
    }
  };

  const editPost = async (id, title, body) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            id,
            title,
            body,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (response.status === 200) {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === id ? { ...post, title, body } : post
          )
        );
      }
    } catch (error) {
      console.error("Ошибка при редактировании поста:", error);
    }
  };

  const deletePost = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 200) {
        setPosts((prevPosts) =>
          prevPosts.filter((post) => post.id !== id)
        );
      }
    } catch (error) {
      console.error("Ошибка при удалении поста:", error);
    }
  };

  return (
    <div>
      <h1>Cats Blog</h1>
      <AddPost addPost={addPost} />

    </div>
  );
}

export default Slider;