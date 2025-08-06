import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts() {
    // Simulating real blog posts
    const customPosts = [
      {
        id: 1,
        title: 'React Lifecycle Methods',
        body: 'Learn how to use componentDidMount and componentDidCatch effectively in React.'
      },
      {
        id: 2,
        title: 'Understanding Props and State',
        body: 'Props are read-only data passed from parent to child, while state is local and mutable.'
      },
      {
        id: 3,
        title: 'Component-Based Architecture',
        body: 'React encourages modular code with reusable components that make code scalable and clean.'
      },
      {
        id: 4,
        title: 'React vs Vanilla JavaScript',
        body: 'React offers better UI organization with its declarative approach and virtual DOM.'
      },
      {
        id: 5,
        title: 'Handling Events in React',
        body: 'React uses camelCase for event handlers and you can pass functions as props to handle logic.'
      }
    ];

    this.setState({ posts: customPosts });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('An error occurred in Posts component!');
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong while loading posts.</h1>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;

