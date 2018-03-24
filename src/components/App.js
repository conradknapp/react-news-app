import React, { Component } from "react";
import News from "./News";

export default class App extends Component {
  state = {
    base_url: "https://newsapi.org/v2/top-headlines?country=us&category=",
    category: "business",
    api_key: "&apiKey=3d27521af72e4b01a81a1d68d66bd08a",
    articles: []
  };

  componentWillMount() {
    const { base_url, category, api_key } = this.state;
    fetch(`${base_url}${category}${api_key}`)
      .then(res => res.json())
      .then(({ articles }) => this.setState({ articles }));
  }

  render() {
    return (
      <main>
        <h1>{this.state.category} feed</h1>
        <News articles={this.state.articles} />
      </main>
    );
  }
}
