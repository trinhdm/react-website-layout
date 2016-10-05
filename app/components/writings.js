var React = require('react');
var ReactDOM = require('react-dom');


var Writings = React.createClass({
  scream: function () {
    alert('AAAAAAAAHHH!!!!!');
  },

  render: function() {
    return (
      <div className="row writings-row">
        <div className="col-md-3">
          <h3>{this.props.blogTitle}</h3>
          <h4>{this.props.blogDate}</h4>
        </div>
        <div className="col-md-7">
          {this.props.blogDescription}
        </div>
        <div className="col-md-2">
          <a href={this.props.blogLink}><button onClick={this.scream} className="btn btn-view-post">View Post</button></a>
        </div>
      </div>
    );
  }
});

var WritingsSlider = React.createClass({
  render: function() {
    return (
      <div className="row">
        <h2>Writings</h2>
        <p>Some of my musings on web development, design, and life.</p>

        <Writings blogTitle="Progress" blogDate="09.12.16" blogDescription="A brain-dump of my recent experiences - moving from university syllabi to an ever-changing industry." />

        <Writings blogTitle="Favorite Resources" blogDate="09.05.16" blogDescription="A comprehensive list of my personal favorite resources and tools for web design and development." />

        <Writings blogTitle="SoundCloud" blogDate="08.30.16" blogDescription="My case study and redesign of my favorite application, SoundCloud. Their current design gets the job done, but I feel like they could make several improvements to their UX/UI." />

        <Writings blogTitle="Parallax Slider" blogDate="07.20.16" blogDescription="I've created this walk-through on how I created this three layered “slider” that fades from layer to layer on scroll." />

        <Writings blogTitle="Revisiting Links" blogDate="07.09.16" blogDescription="Whatever happened to visited and unvisited links? My thoughts on the lost UX practice of styling them." />

        <Writings blogTitle="Radio Buttons & Wp-Admin" blogDate="06.13.16" blogDescription="A nifty guide on how to implement radio buttons into your WP-Admin." />

        <Writings blogTitle="Pseudo Elements" blogDate="05.07.16" blogDescription="In this blog post, I’ll discuss how I did Foreground Studio’s navigation, where I used data-attributes and pseudo-elements to create interesting CSS hovers." />

        <Writings blogTitle="A Not-So-Short Intro" blogDate="05.07.16" blogDescription="I'm like, 'hey, what's up, hello?'" />
      </div>
    );
  }
});

module.exports = WritingsSlider;
