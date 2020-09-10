import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class QBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ind-project-page default-bg">
        <div className="back-button"><NavLink to="/projects"><button type="button" className="button-var-1"><i className="fas fa-undo" />Back</button></NavLink></div>
        <div className="ind-project-title">QBlog</div>
        <div className="ind-project-partners">Partners: None</div>
        <div id="qblog-img" />
        <div className="ind-project-mission">
          <span className="mission">Goal: </span>
          Create a blog-like platform that requires authentication and utilizes a custom API to store data.
        </div>
        <div className="ind-project-desc">
          QBlog is a blog site in which users can create, edit, and delete their own posts. Users can also comment, like, and dislike the posts of other users.
          This website also has a filter option which one can use to search for posts by tag. This filter is generated automatically to contain all of the unique
          tags in the posts, and updates whenever a new tag is added.
        </div>
        <div>***NOTE: Posts may take a minute or so to show up as the Heroku server boots up***</div>
        <div className="link-to-project"><a href="http://qblog.surge.sh/"><button type="button" className="button-var-1">Visit Site</button></a></div>
      </div>
    );
  }
}

export default QBlog;
