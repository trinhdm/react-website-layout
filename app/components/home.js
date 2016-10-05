var React = require('react');
var ReactDOM = require('react-dom');

var SelectedProjects = React.createClass({
  render: function() {
    return (
      <div className="project-thumbnail col-md-6">
        <div className="project-thumbnail-wrap">
          <img src={this.props.projectImage} />
          <div className="project-thumbnail-text">
            <h4>{this.props.projectTitle}</h4>
            <h5>{this.props.projectType}</h5>
          </div>
        </div>
      </div>
    );
  }
});

var HomeSlider = React.createClass({
  scream: function () {
    alert('AAAAAAAAHHH!!!!!');
  },

  render: function() {
    return (
      <div>
        <h2>Selected Projects</h2>
        <div className="row">
          <SelectedProjects projectTitle="Foreground Studios" projectType="WordPress, Web Development" projectImage="./assets/img/foreground.jpg" />

          <SelectedProjects projectTitle="SoundCloud: Case Study" projectType="UI/UX" projectImage="http://trinhdm.github.io/assets/img/blog_8-30_sc_macbook_preview_mine.jpg" />

          <SelectedProjects projectTitle="Anderson Dentistry Redesign" projectType="WordPress, Web Design, Web Development" projectImage="./assets/img/anderson.jpg" />

          <div className="project-thumbnail col-md-6">
          </div>
        </div>

        <h2>Writings</h2>
        <div className="row writings-row">
          <div className="col-md-3">
            <h3>Life</h3>
            <h4>09.12.16</h4>
          </div>
          <div className="col-md-7">
            A brain-dump of my recent experiences - moving from university syllabi to an ever-changing industry.
          </div>
          <div className="col-md-2">
            <button onClick={this.scream} className="btn btn-view-post">View Post</button>
          </div>
        </div>

        <div className="row writings-row">
          <div className="col-md-3">
            <h3>Favorite Resources</h3>
            <h4>09.05.16</h4>
          </div>
          <div className="col-md-7">
            A comprehensive list of my personal favorite resources and tools for web design and development.
          </div>

          <div className="col-md-2">
            <button onClick={this.scream} className="btn btn-view-post">View Post</button>
          </div>
        </div>

        <div className="row writings-row">
          <div className="col-md-3">
            <h3>SoundCloud</h3>
            <h4>08.30.16</h4>
          </div>
          <div className="col-md-7">
            SoundCloud’s current design gets the job done, but I feel like they could make several improvements to their UX/UI. It has come a long way since I started using SoundCloud back in 2013, but their interface still feels cluttered and unclean.
          </div>

          <div className="col-md-2">
            <button onClick={this.scream} className="btn btn-view-post">View Post</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HomeSlider;
