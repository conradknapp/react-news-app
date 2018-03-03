import React from "react";

const NewsItem = ({ article: { title, publishedAt, description, url } }) => {
  return (
    <li>
      <h1>
        <a href={url}>{title}</a>
      </h1>
      <p>{publishedAt}</p>
      <p>{description}</p>
    </li>
  );
};

export default NewsItem;
