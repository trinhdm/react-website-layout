var React = require('react');
var ReactDOM = require('react-dom');
// var ScrollEffect = require('./scroll-effects.js').default;

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

var RecentWritings = React.createClass({
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


var HomeSlider = React.createClass({
  fadeOnScroll: function() {
    // hide our element on page load
    $('#selected-projects').css('opacity', 0);

    $('#selected-projects').waypoint(function() {
      $('#selected-projects').addClass('fadeInLeft');
    }, { offset: '50%' });
  },

  render: function() {
    return (
      <div>
        <div className="row-no-margin row">
          <div className="home-intro col-md-10">
            <p className="small with-margin">– Hi!</p>
            <p className="intro-text">My name is <b>Doreen Trinh</b>,
            and I am a junior <b>Front-End Developer</b> and <b>Designer</b> from Southern California, currently working as a freelancer.<br /> I stand on a sweet spot where design & code intersects.
            </p>

            <p className="small with-margin"><a href="./about">– Read more about me →</a></p>
            <p className="small with-margin"><a href="mailto:doreenmtrinh@gmail.com">– Send me an email (doreenmtrinh@gmail.com) →</a></p>
            <p className="small">– Find me on</p>
            <span className="links-wrap"><a href="https://github.com/trinhdm/" className="links">GitHub</a></span> – <a className="links">Behance</a> – <a href="https://www.linkedin.com/in/doreen-trinh-378a99100" className="links">LinkedIn</a>
          </div>
        </div>

        <h2>Selected Projects</h2>
        <div className="row" id="selected-projects" onScroll={this.fadeOnScroll}>
          <SelectedProjects projectTitle="Foreground Studios" projectType="WordPress, Web Development" projectImage="./assets/img/foreground.jpg" />

          <SelectedProjects projectTitle="Anderson Dentistry" projectType="WordPress, Web Design, Web Development" projectImage="./assets/img/anderson.jpg" />

          <SelectedProjects projectTitle="SoundCloud: Case Study" projectType="UI/UX" projectImage="http://trinhdm.github.io/assets/img/blog_8-30_sc_macbook_preview_mine.jpg" />
        </div>

        <h2>Writings</h2>
        <div>
          <RecentWritings blogTitle="Life" blogDate="09.12.16" blogLink="./writings/2016-09-12-progress.html" blogDescription="A brain-dump of my recent experiences - moving from university syllabi to an ever-changing industry." />

          <RecentWritings blogTitle="Favorite Resources" blogDate="09.05.16" blogDescription="A comprehensive list of my personal favorite resources and tools for web design and development." />

          <RecentWritings blogTitle="SoundCloud" blogDate="08.30.16" blogDescription="SoundCloud’s current design gets the job done, but I feel like they could make several improvements to their UX/UI. It has come a long way since I started using SoundCloud back in 2013, but their interface still feels cluttered and unclean." />
        </div>
      </div>
    );
  }
});

module.exports = HomeSlider;
