import React, { useState } from "react";

export default function AddPost({ addPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [catImage, setCatImage] = useState("");

  const fetchRandomCat = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await response.json();
      const catImageUrl = data[0].url;
      setCatImage(catImageUrl);
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, body, catImage });
  };

  return (
    <div>
      <button onClick={fetchRandomCat}>next slide</button>
      {catImage && <img src={catImage} alt="Котенок" />}

    </div>
  );
}
