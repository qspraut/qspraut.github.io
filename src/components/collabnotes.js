import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CollabNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ind-project-page default-bg">
        <div className="back-button"><NavLink to="/projects"><button type="button" className="button-var-1"><i className="fas fa-undo" />Back</button></NavLink></div>
        <div className="ind-project-title">Collaborative Notes</div>
        <div className="ind-project-partners">Partners: None</div>
        <div id="collabnotes-img" />
        <div className="ind-project-mission">
          <span className="mission">Goal: </span>
          Design a live-updating sticky note platform that multiple users can interact with at once.
        </div>
        <div className="ind-project-desc">
          Collaborative notes utilizes the Firebase database to store and fetch data on notes taken by users. This allows for the notes to be updated live
          on the screen of each active user. Each note can be edited, moved, deleted, or marked as important. There is also an undo feature. Lastly,
          there are multiple colored boards.
        </div>
        <div className="link-to-project"><a href="http://quinn-cs52-collabnotes.surge.sh/"><button type="button" className="button-var-1">Visit Site</button></a></div>
      </div>
    );
  }
}

export default CollabNotes;
