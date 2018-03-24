import React, { Component } from "react";
import News from "./News";

export default class App extends Component {
  state = {
    base_url: "https://newsapi.org/v2/",
    path: "top-headlines?country=us&category=",
    query: "",
    category: "business",
    api_key: "&apiKey=3d27521af72e4b01a81a1d68d66bd08a",
    articles: []
  };

  handleThemeSubmit = event => {
    event.preventDefault();
    this.setState({
      path: "top-headlines?country=us&category=",
      query: "",
      category: event.target[0].value
    });
  };

  handleTopicSearch = event => {
    event.preventDefault();
    this.setState({
      path: "everything?q="
    });

    if (this.textInput.value) {
      this.setState({
        query: this.textInput.value
      });
    }
  };

  fetchData = () => {
    const { base_url, path, query, category, api_key } = this.state;
    fetch(`${base_url}${path}${query}${category}${api_key}`)
      .then(res => res.json())
      .then(({ articles }) => this.setState({ articles }));
  };

  componentWillMount() {
    this.fetchData();
  }

  componentWillUpdate() {
    this.fetchData();
  }

  render() {
    return (
      <main className="container">
        <form onSubmit={this.handleThemeSubmit}>
          <label>Search Top Headlines</label>
          <select>
            <option value="sports">Sports</option>
            <option value="business">Business</option>
            <option value="general">General</option>
            <option value="technology">Technology</option>
          </select>
          <button>Submit</button>
        </form>
        <form onSubmit={this.handleTopicSearch}>
          <label>Search by Keyword</label>
          <input
            ref={input => {
              this.textInput = input;
            }}
            type="text"
          />
          <button>Submit</button>
        </form>
        <h1>{this.state.category} feed</h1>
        <News articles={this.state.articles} />
      </main>
    );
  }
}
