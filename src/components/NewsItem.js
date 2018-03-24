import React from "react";

const NewsItem = ({
  article: { title, publishedAt, description, urlToImage, url }
}) => {
  return (
    <li className="card">
      <img src={urlToImage} alt="" />
      <div className="card-content">
        <h1>
          <a href={url}>{title}</a>
        </h1>
      </div>
    </li>
  );
};

export default NewsItem;
