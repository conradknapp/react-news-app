import React, { Component } from "react";
import News from "./News";

import { connect } from "react-redux";
import {
  onSearchByCategory,
  onSearchByKeyword,
  onFetchNews
} from "../actions/index";

class App extends Component {
  state = {
    base_url: "https://newsapi.org/v2/",
    default_path: "top-headlines?country=us&category=",
    default_query: "",
    category: "business",
    api_key: "&apiKey=3d27521af72e4b01a81a1d68d66bd08a"
  };

  componentWillMount() {
    this.props.onFetchNews();
  }

  handleCategorySearch = event => {
    event.preventDefault();
    const { base_url, api_key } = this.state;

    const path = "top-headlines?country=us&category=";
    const category = event.target[0].value;

    this.setState({ category });

    const url = `${base_url}${path}${category}${api_key}`;

    this.props.onSearchByCategory(url);
  };

  handleKeywordSearch = event => {
    event.preventDefault();
    const { base_url, api_key } = this.state;

    const path = "everything?q=";
    const query = this.textInput.value;

    this.setState({ category: query });

    if (this.textInput.value) {
      const url = `${base_url}${path}${query}${api_key}`;
      this.props.onSearchByKeyword(url);
    }
  };

  render() {
    const { articles } = this.props.news;
    if (!articles) return <div>Loading</div>;

    return (
      <main className="container">
        <form onSubmit={this.handleCategorySearch}>
          <label>Search Top Headlines</label>
          <select>
            <option defaultValue="business">Business</option>
            <option value="sports">Sports</option>
            <option value="general">General</option>
            <option value="technology">Technology</option>
          </select>
          <button>Submit</button>
        </form>
        <form onSubmit={this.handleKeywordSearch}>
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
        <News articles={this.props.news.articles} />
      </main>
    );
  }
}

const mapStateToProps = state => {
  return { news: state.news };
};

export default connect(mapStateToProps, {
  onSearchByCategory,
  onSearchByKeyword,
  onFetchNews
})(App);
