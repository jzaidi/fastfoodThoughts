import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./Components/Search/Search";
import Table from "./Components/Table/Table";
import Header from "./Components/Header/Header"
import PostForm from "./Components/Form/PostForm"
import axios from 'axios'
const DEFAULT_QUERY = '';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;


const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: [],
      editing: false,
      searchTerm: DEFAULT_QUERY,
      currentPost: {
        id: null,
        title: "",
        author: "",
        description: "",
        upvotes: 0,
        downvotes: 0,
        images: ""
      }
    };

    this.setSearchTopStories - this.setSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  updatePosts = posts => {
    this.setState({
      posts: posts,
      editing: false,
      currentPost: {
        id: null,
        title: "",
        author: "",
        description: "",
        upvotes: 0,
        downvotes: 0,
        images: ""
      }
    });
  };

  editPost = (id) => {
    const post = this.state.posts.find((p) => p.id === id)
    this.setState({ editing: true, currentPost: post })

  }

  onClick = (id) => {
    console.log('inside delete post');
    axios.delete(`/api/posts/${id}`)
      .then((result) => { this.updatePosts(result.data) })
  }
  stopEdit = () => {
    this.setState({
      editing: false,
      currentPost: {
        id: null,
        title: "",
        author: "",
        description: "",
        upvotes: 0,
        downvotes: 0,
        images: ""
      }
    });
  }

  updatePost = (attribute, value) => {
    this.setState({
      currentPost: {
        ...this.state.currentPost, [attribute]: value
      }
    })
  };

  setSearchTopStories(posts) {
    this.setState({ posts });
  }

  componentWillMount = async () => {
    const response = await fetch("/api/posts");
    const json = await response.json();
    console.log(json.posts);
    if (json.posts) this.setState({posts: json.posts });
  };

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedHits = this.state.result.hits.filter(isNotId);
    this.setState({
      result: { ...this.state.result, hits: updatedHits }
    });
  }
  
  handleUpvote = (id) => {
    const post = this.state.posts.find((p) => p.id === id)
    console.log(post);
    this.setState({
        currentPost: post, upvotes: post.votes + 1
      }
    )
    this.forceUpdate()
  } 
  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { searchTerm, posts } = this.state;

    if (!posts) {
      return null;
    }
    return (
      <div className="page">
        <div className="interactions">
        <Header/>
          <Search value={searchTerm} onChange={this.onSearchChange}>
            {" "}
            Search{" "}
          </Search>
        </div>
        {posts ? (
          <Table list={posts} pattern={searchTerm} onDismiss={this.onDismiss} handleUpvote={this.handleUpvote.bind(this)} onClick={this.onClick} editPost={this.editPost}/>
        ) : null}
        <PostForm
          updatePosts={this.updatePosts}
          updatePost={this.updatePost}
          currentPost={this.state.currentPost}
          editing={this.state.editing}
          stopEdit={this.stopEdit}
        />
      </div>
    );
  }
}

export { isSearched };
export default App;
