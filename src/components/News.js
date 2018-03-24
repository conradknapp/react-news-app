import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  renderNewsItems() {
    return this.props.articles.map((article, i) => (
      <NewsItem key={i} article={article} />
    ));
  }

  render() {
    return <ul className="card-grid">{this.renderNewsItems()}</ul>;
  }
}
