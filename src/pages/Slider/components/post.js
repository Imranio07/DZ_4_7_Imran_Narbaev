import React, { useState } from "react";

export default function Post({ post, editPost, deletePost }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(post.title);
  const [updatedBody, setUpdatedBody] = useState(post.body);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editPost(post.id, updatedTitle, updatedBody);
    setIsEditing(false);
    // Обновляем состояния updatedTitle и updatedBody после сохранения
    setUpdatedTitle(updatedTitle);
    setUpdatedBody(updatedBody);
  };

  return (
    <div>
      <img src={post.catImage} alt="Котенок" />
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedBody}
            onChange={(e) => setUpdatedBody(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{updatedTitle}</h3>
          <p>{updatedBody}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <button onClick={() => deletePost(post.id)}>Delete</button>
    </div>
  );
}