(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// either or would work
var React = require('react');
var ReactDOM = require('react-dom');
var HomeSlider = require('./components/home.js');
var AboutSlider = require('./components/about.js');
var WritingsSlider = require('./components/writings.js');
var Footer = require('./components/footer.js');

// import React from 'react';
// import ReactDOM from 'react-dom';

// import SearchableTable from './SearchableTable';
// import {data} from './data';
// import slider from './slider';

// Filterable CheatSheet Component
// ReactDOM.render( <SearchableTable data={data}/>, document.getElementById('searchableTable') );


// when you click on a tab, call onClick in the tab's html to fade or slide the body using a function
//    lesson #8 in advanced JSX in codeacademy

var heading = 'Hi, my name is Doreen Trinh';

var tabList = [{ 'id': 0, 'name': '', 'url': '/home' }, { 'id': 1, 'name': 'Portfolio', 'url': '/portfolio' }, { 'id': 2, 'name': 'About', 'url': '/about' }, { 'id': 3, 'name': 'Contact', 'url': '/contact' }, { 'id': 4, 'name': 'Writings', 'url': '/writings' }];

// without JSX
// var emailMe = React.createElement('a', {href: 'mailto:doreenmtrinh@gmail.com'}, 'doreenmtrinh@gmail.com');
// with JSX
var emailMe = React.createElement(
    'a',
    { href: 'mailto:doreenmtrinh@gmail.com' },
    'doreenmtrinh@gmail.com'
);

var Tab = React.createClass({
    displayName: 'Tab',

    // handleClick is an event listener in a render function
    handleClick: function handleClick(e) {
        e.preventDefault();
        this.props.handleClick();
    },

    render: function render() {
        return React.createElement(
            'li',
            { className: this.props.isCurrent ? 'current' : null },
            React.createElement(
                'a',
                { onClick: this.handleClick, href: this.props.url },
                this.props.name
            )
        );
    }
});

var HamburgerMenu = React.createElement('span', { className: 'icon-bar' });

var NavbarBrand = React.createClass({
    displayName: 'NavbarBrand',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'navbar-header' },
            React.createElement(
                'button',
                { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-collapse' },
                React.createElement('span', { className: 'icon-bar' }),
                React.createElement('span', { className: 'icon-bar' }),
                React.createElement('span', { className: 'icon-bar' })
            ),
            React.createElement(
                'a',
                { className: 'navbar-name', href: '/home' },
                heading
            )
        );
    }
});

var Tabs = React.createClass({
    displayName: 'Tabs',

    handleClick: function handleClick(tab) {
        this.props.changeTab(tab);
    },

    render: function render() {
        return React.createElement(
            'nav',
            { id: 'portfolio-navbar', className: 'navbar', role: 'navigation' },
            React.createElement(
                'div',
                { id: 'navbar-interior' },
                React.createElement(NavbarBrand, null),
                React.createElement(
                    'div',
                    { className: 'navbar-collapse collapse' },
                    React.createElement(
                        'ul',
                        { className: 'nav navbar-nav navbar-right' },
                        this.props.tabList.map(function (tab) {
                            return React.createElement(Tab, {
                                handleClick: this.handleClick.bind(this, tab),
                                key: tab.id,
                                url: tab.url,
                                name: tab.name,
                                isCurrent: this.props.currentTab === tab.id
                            });
                        }.bind(this))
                    )
                )
            )
        );
    }
});

var contactMe = React.createElement(
    'p',
    null,
    'Have a cool project in mind and think I could help you with it? Feel free to email me at ',
    emailMe,
    '. Or view my resume here.'
);

var ContactSlider = React.createClass({
    displayName: 'ContactSlider',

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h2',
                null,
                'Contact'
            ),
            React.createElement(
                'p',
                null,
                contactMe
            )
        );
    }
});

var Content = React.createClass({
    displayName: 'Content',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'content' },
            this.props.currentTab === 0 ? React.createElement(
                'div',
                { className: 'home' },
                React.createElement(HomeSlider, null)
            ) : null,
            this.props.currentTab === 1 ? React.createElement(
                'div',
                { className: 'portfolio' },
                React.createElement('img', { src: 'http://s.mlkshk.com/r/104TN' })
            ) : null,
            this.props.currentTab === 2 ? React.createElement(
                'div',
                { className: 'about' },
                React.createElement(AboutSlider, null)
            ) : null,
            this.props.currentTab === 3 ? React.createElement(
                'div',
                { className: 'contact' },
                React.createElement(ContactSlider, null)
            ) : null,
            this.props.currentTab === 4 ? React.createElement(
                'div',
                { className: 'writings' },
                React.createElement(WritingsSlider, null)
            ) : null
        );
    }
});

var PortfolioNav = React.createClass({
    displayName: 'PortfolioNav',

    getInitialState: function getInitialState() {
        return {
            tabList: tabList,
            currentTab: 0
        };
    },

    changeTab: function changeTab(tab) {
        this.setState({ currentTab: tab.id });
    },

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Tabs, {
                currentTab: this.state.currentTab,
                tabList: this.state.tabList,
                changeTab: this.changeTab
            }),
            React.createElement(Content, { currentTab: this.state.currentTab }),
            React.createElement(Footer, null)
        );
    }
});

React.render(React.createElement(PortfolioNav, null), document.body);

},{"./components/about.js":2,"./components/footer.js":3,"./components/home.js":4,"./components/writings.js":5,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var AboutSlider = React.createClass({
  displayName: 'AboutSlider',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'about-slider' },
      React.createElement(
        'h2',
        null,
        'About'
      ),
      React.createElement(
        'p',
        null,
        'My name is Doreen Trinh and my background lies in International Studies with a specialization in economics from University of California, Irvine. Outside of my education at UCI, I have also studied at East China Normal University (华师大) in Shanghai.'
      ),
      React.createElement(
        'p',
        null,
        'As the global economy continues to expand, the need to connect businesses to clients rises on a multinational scale. As a front-end developer and a specialist who understands the diversity of the worldwide economy, I bridge the gap between businesses and clients on an international scale by helping them communicate digitally through code.'
      ),
      React.createElement(
        'p',
        null,
        'When I am not coding the day away, you could normally find me hiking in the woods, discovering new eateries in the city or trying out 3 coffee shops a day.'
      )
    );
  }
});

module.exports = AboutSlider;

},{"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var github = {
  title: 'GitHub',
  src: 'https://github.com/trinhdm'
};

var footerList = ['Github', 'E-Mail'];

// var footerList = {
//   github: 'trinhdm.github.io',
//   email: 'doreenmtrinh@gmail.com'
// };

var Footer = React.createClass({
  displayName: 'Footer',

  render: function render() {
    return React.createElement(
      'div',
      { id: 'portfolio-footer' },
      React.createElement(
        'div',
        { className: 'portfolio-footer-interior' },
        React.createElement(
          'div',
          { className: 'col-md-6 footer-copyright' },
          'Doreen Trinh'
        ),
        React.createElement(
          'div',
          { className: 'col-md-6 footer-links' },
          footerList.map(function (footname) {
            return React.createElement(
              'div',
              { className: 'footer-link' },
              footname
            );
          })
        ),
        React.createElement('div', { className: 'clear' })
      )
    );
  }
});

module.exports = Footer;

},{"react":"react","react-dom":"react-dom"}],4:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var SelectedProjects = React.createClass({
  displayName: 'SelectedProjects',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'project-thumbnail col-md-6' },
      React.createElement(
        'div',
        { className: 'project-thumbnail-wrap' },
        React.createElement('img', { src: this.props.projectImage }),
        React.createElement(
          'div',
          { className: 'project-thumbnail-text' },
          React.createElement(
            'h4',
            null,
            this.props.projectTitle
          ),
          React.createElement(
            'h5',
            null,
            this.props.projectType
          )
        )
      )
    );
  }
});

var RecentWritings = React.createClass({
  displayName: 'RecentWritings',

  scream: function scream() {
    alert('AAAAAAAAHHH!!!!!');
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'row writings-row' },
      React.createElement(
        'div',
        { className: 'col-md-3' },
        React.createElement(
          'h3',
          null,
          this.props.blogTitle
        ),
        React.createElement(
          'h4',
          null,
          this.props.blogDate
        )
      ),
      React.createElement(
        'div',
        { className: 'col-md-7' },
        this.props.blogDescription
      ),
      React.createElement(
        'div',
        { className: 'col-md-2' },
        React.createElement(
          'a',
          { href: this.props.blogLink },
          React.createElement(
            'button',
            { onClick: this.scream, className: 'btn btn-view-post' },
            'View Post'
          )
        )
      )
    );
  }
});

var HomeSlider = React.createClass({
  displayName: 'HomeSlider',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'row-no-margin row' },
        React.createElement(
          'div',
          { className: 'home-intro col-md-6' },
          React.createElement(
            'h1',
            null,
            'Hi, my name is Doreen Trinh.'
          ),
          'Junior Front-End Developer and Designer from Southern California, currently working as an independent contractor. I stand on a sweet spot where design & code intersects.'
        )
      ),
      React.createElement(
        'h2',
        null,
        'Selected Projects'
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(SelectedProjects, { projectTitle: 'Foreground Studios', projectType: 'WordPress, Web Development', projectImage: './assets/img/foreground.jpg' }),
        React.createElement(SelectedProjects, { projectTitle: 'Anderson Dentistry', projectType: 'WordPress, Web Design, Web Development', projectImage: './assets/img/anderson.jpg' }),
        React.createElement(SelectedProjects, { projectTitle: 'SoundCloud: Case Study', projectType: 'UI/UX', projectImage: 'http://trinhdm.github.io/assets/img/blog_8-30_sc_macbook_preview_mine.jpg' })
      ),
      React.createElement(
        'h2',
        null,
        'Writings'
      ),
      React.createElement(
        'div',
        null,
        React.createElement(RecentWritings, { blogTitle: 'Life', blogDate: '09.12.16', blogDescription: 'A brain-dump of my recent experiences - moving from university syllabi to an ever-changing industry.' }),
        React.createElement(RecentWritings, { blogTitle: 'Favorite Resources', blogDate: '09.05.16', blogDescription: 'A comprehensive list of my personal favorite resources and tools for web design and development.' }),
        React.createElement(RecentWritings, { blogTitle: 'SoundCloud', blogDate: '08.30.16', blogDescription: 'SoundCloud’s current design gets the job done, but I feel like they could make several improvements to their UX/UI. It has come a long way since I started using SoundCloud back in 2013, but their interface still feels cluttered and unclean.' })
      )
    );
  }
});

module.exports = HomeSlider;

},{"react":"react","react-dom":"react-dom"}],5:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Writings = React.createClass({
  displayName: 'Writings',

  scream: function scream() {
    alert('AAAAAAAAHHH!!!!!');
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'row writings-row' },
      React.createElement(
        'div',
        { className: 'col-md-3' },
        React.createElement(
          'h3',
          null,
          this.props.blogTitle
        ),
        React.createElement(
          'h4',
          null,
          this.props.blogDate
        )
      ),
      React.createElement(
        'div',
        { className: 'col-md-7' },
        this.props.blogDescription
      ),
      React.createElement(
        'div',
        { className: 'col-md-2' },
        React.createElement(
          'a',
          { href: this.props.blogLink },
          React.createElement(
            'button',
            { onClick: this.scream, className: 'btn btn-view-post' },
            'View Post'
          )
        )
      )
    );
  }
});

var WritingsSlider = React.createClass({
  displayName: 'WritingsSlider',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'h2',
        null,
        'Writings'
      ),
      React.createElement(
        'p',
        null,
        'Some of my musings on web development, design, and life.'
      ),
      React.createElement(Writings, { blogTitle: 'Progress', blogDate: '09.12.16', blogDescription: 'A brain-dump of my recent experiences - moving from university syllabi to an ever-changing industry.' }),
      React.createElement(Writings, { blogTitle: 'Favorite Resources', blogDate: '09.05.16', blogDescription: 'A comprehensive list of my personal favorite resources and tools for web design and development.' }),
      React.createElement(Writings, { blogTitle: 'SoundCloud', blogDate: '08.30.16', blogDescription: 'My case study and redesign of my favorite application, SoundCloud. Their current design gets the job done, but I feel like they could make several improvements to their UX/UI.' }),
      React.createElement(Writings, { blogTitle: 'Parallax Slider', blogDate: '07.20.16', blogDescription: 'I\'ve created this walk-through on how I created this three layered “slider” that fades from layer to layer on scroll.' }),
      React.createElement(Writings, { blogTitle: 'Revisiting links', blogDate: '07.09.16', blogDescription: 'Whatever happened to visited and unvisited links? My thoughts on the lost UX practice of styling them.' }),
      React.createElement(Writings, { blogTitle: 'Radio Buttons & Wp-Admin', blogDate: '06.13.16', blogDescription: 'A nifty guide on how to implement radio buttons into your WP-Admin.' }),
      React.createElement(Writings, { blogTitle: 'Pseudo Elements', blogDate: '05.07.16', blogDescription: 'In this blog post, I’ll discuss how I did Foreground Studio’s navigation, where I used data-attributes and pseudo-elements to create interesting CSS hovers.' }),
      React.createElement(Writings, { blogTitle: 'A Not-So-Short Intro', blogDate: '05.07.16', blogDescription: 'I\'m like, \'hey, what\'s up, hello?\'' })
    );
  }
});

module.exports = WritingsSlider;

},{"react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qcyIsImFwcFxcY29tcG9uZW50c1xcYWJvdXQuanMiLCJhcHBcXGNvbXBvbmVudHNcXGZvb3Rlci5qcyIsImFwcFxcY29tcG9uZW50c1xcaG9tZS5qcyIsImFwcFxcY29tcG9uZW50c1xcd3JpdGluZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0EsSUFBSSxRQUFRLFFBQVEsT0FBUixDQUFaO0FBQ0EsSUFBSSxXQUFXLFFBQVEsV0FBUixDQUFmO0FBQ0EsSUFBSSxhQUFhLFFBQVEsc0JBQVIsQ0FBakI7QUFDQSxJQUFJLGNBQWMsUUFBUSx1QkFBUixDQUFsQjtBQUNBLElBQUksaUJBQWlCLFFBQVEsMEJBQVIsQ0FBckI7QUFDQSxJQUFJLFNBQVMsUUFBUSx3QkFBUixDQUFiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsSUFBSSxVQUFVLDZCQUFkOztBQUVBLElBQUksVUFBVSxDQUNWLEVBQUUsTUFBTSxDQUFSLEVBQVcsUUFBUSxFQUFuQixFQUF1QixPQUFPLE9BQTlCLEVBRFUsRUFFVixFQUFFLE1BQU0sQ0FBUixFQUFXLFFBQVEsV0FBbkIsRUFBZ0MsT0FBTyxZQUF2QyxFQUZVLEVBR1YsRUFBRSxNQUFNLENBQVIsRUFBVyxRQUFRLE9BQW5CLEVBQTRCLE9BQU8sUUFBbkMsRUFIVSxFQUlWLEVBQUUsTUFBTSxDQUFSLEVBQVcsUUFBUSxTQUFuQixFQUE4QixPQUFPLFVBQXJDLEVBSlUsRUFLVixFQUFFLE1BQU0sQ0FBUixFQUFXLFFBQVEsVUFBbkIsRUFBK0IsT0FBTyxXQUF0QyxFQUxVLENBQWQ7O0FBVUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxVQUFVO0FBQUE7QUFBQSxNQUFHLE1BQUssK0JBQVI7QUFBQTtBQUFBLENBQWQ7O0FBRUEsSUFBSSxNQUFNLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUMxQjtBQUNFLGlCQUFhLHFCQUFTLENBQVQsRUFBVztBQUNwQixVQUFFLGNBQUY7QUFDSCxhQUFLLEtBQUwsQ0FBVyxXQUFYO0FBQ0EsS0FMdUI7O0FBT3hCLFlBQVEsa0JBQVU7QUFDZCxlQUNJO0FBQUE7QUFBQSxjQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixTQUF2QixHQUFtQyxJQUFsRDtBQUNDO0FBQUE7QUFBQSxrQkFBRyxTQUFTLEtBQUssV0FBakIsRUFBOEIsTUFBTSxLQUFLLEtBQUwsQ0FBVyxHQUEvQztBQUNFLHFCQUFLLEtBQUwsQ0FBVztBQURiO0FBREQsU0FESjtBQU9IO0FBZnVCLENBQWxCLENBQVY7O0FBa0JBLElBQUksZ0JBQWdCLE1BQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixFQUFDLFdBQVcsVUFBWixFQUE1QixDQUFwQjs7QUFFQSxJQUFJLGNBQWMsTUFBTSxXQUFOLENBQWtCO0FBQUE7O0FBQ2xDLFlBQVEsa0JBQVc7QUFDakIsZUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsZUFBaEMsRUFBZ0QsZUFBWSxVQUE1RCxFQUF1RSxlQUFZLGtCQUFuRjtBQUNFLDhDQUFNLFdBQVUsVUFBaEIsR0FERjtBQUVFLDhDQUFNLFdBQVUsVUFBaEIsR0FGRjtBQUdFLDhDQUFNLFdBQVUsVUFBaEI7QUFIRixhQURGO0FBTUk7QUFBQTtBQUFBLGtCQUFHLFdBQVUsYUFBYixFQUEyQixNQUFLLE9BQWhDO0FBQ0c7QUFESDtBQU5KLFNBREY7QUFZRDtBQWRpQyxDQUFsQixDQUFsQjs7QUFpQkEsSUFBSSxPQUFPLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUN6QixpQkFBYSxxQkFBUyxHQUFULEVBQWE7QUFDekIsYUFBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixHQUFyQjtBQUNBLEtBSHdCOztBQUt6QixZQUFRLGtCQUFVO0FBQ2QsZUFDRTtBQUFBO0FBQUEsY0FBSyxJQUFHLGtCQUFSLEVBQTJCLFdBQVUsUUFBckMsRUFBOEMsTUFBSyxZQUFuRDtBQUNFO0FBQUE7QUFBQSxrQkFBSyxJQUFHLGlCQUFSO0FBQ0Usb0NBQUMsV0FBRCxPQURGO0FBR0U7QUFBQTtBQUFBLHNCQUFLLFdBQVUsMEJBQWY7QUFDRTtBQUFBO0FBQUEsMEJBQUksV0FBVSw2QkFBZDtBQUNLLDZCQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLEdBQW5CLENBQXVCLFVBQVMsR0FBVCxFQUFjO0FBQ2xDLG1DQUNJLG9CQUFDLEdBQUQ7QUFDSSw2Q0FBYSxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEIsR0FBNUIsQ0FEakI7QUFFSSxxQ0FBSyxJQUFJLEVBRmI7QUFHSSxxQ0FBSyxJQUFJLEdBSGI7QUFJSSxzQ0FBTSxJQUFJLElBSmQ7QUFLSSwyQ0FBWSxLQUFLLEtBQUwsQ0FBVyxVQUFYLEtBQTBCLElBQUk7QUFMOUMsOEJBREo7QUFTSCx5QkFWdUIsQ0FVdEIsSUFWc0IsQ0FVakIsSUFWaUIsQ0FBdkI7QUFETDtBQURGO0FBSEY7QUFERixTQURGO0FBdUJIO0FBN0J3QixDQUFsQixDQUFYOztBQWtDQSxJQUFJLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBNkYsV0FBN0Y7QUFBQTtBQUFBLENBQWhCOztBQUVBLElBQUksZ0JBQWdCLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUNwQyxZQUFRLGtCQUFVO0FBQ2hCLGVBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBSjtBQUZGLFNBREY7QUFNRDtBQVJtQyxDQUFsQixDQUFwQjs7QUFXQSxJQUFJLFVBQVUsTUFBTSxXQUFOLENBQWtCO0FBQUE7O0FBQzVCLFlBQVEsa0JBQVU7QUFDZCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsU0FBZjtBQUNHLGlCQUFLLEtBQUwsQ0FBVyxVQUFYLEtBQTBCLENBQTFCLEdBQ0M7QUFBQTtBQUFBLGtCQUFLLFdBQVUsTUFBZjtBQUNFLG9DQUFDLFVBQUQ7QUFERixhQURELEdBSUQsSUFMRjtBQU9FLGlCQUFLLEtBQUwsQ0FBVyxVQUFYLEtBQTBCLENBQTFCLEdBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsV0FBZjtBQUNJLDZDQUFLLEtBQUksNkJBQVQ7QUFESixhQURGLEdBSUEsSUFYRjtBQWFFLGlCQUFLLEtBQUwsQ0FBVyxVQUFYLEtBQTBCLENBQTFCLEdBQ0Q7QUFBQTtBQUFBLGtCQUFLLFdBQVUsT0FBZjtBQUNDLG9DQUFDLFdBQUQ7QUFERCxhQURDLEdBSUEsSUFqQkY7QUFtQkUsaUJBQUssS0FBTCxDQUFXLFVBQVgsS0FBMEIsQ0FBMUIsR0FDRDtBQUFBO0FBQUEsa0JBQUssV0FBVSxTQUFmO0FBQ0Msb0NBQUMsYUFBRDtBQURELGFBREMsR0FJQSxJQXZCRjtBQXlCRSxpQkFBSyxLQUFMLENBQVcsVUFBWCxLQUEwQixDQUExQixHQUNEO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFVBQWY7QUFDQyxvQ0FBQyxjQUFEO0FBREQsYUFEQyxHQUlBO0FBN0JGLFNBREo7QUFpQ0g7QUFuQzJCLENBQWxCLENBQWQ7O0FBdUNBLElBQUksZUFBZSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDcEMscUJBQWlCLDJCQUFZO0FBQ3RCLGVBQU87QUFDSCxxQkFBUyxPQUROO0FBRUgsd0JBQVk7QUFGVCxTQUFQO0FBSUgsS0FOZ0M7O0FBUWpDLGVBQVcsbUJBQVMsR0FBVCxFQUFjO0FBQ3JCLGFBQUssUUFBTCxDQUFjLEVBQUUsWUFBWSxJQUFJLEVBQWxCLEVBQWQ7QUFDSCxLQVZnQzs7QUFZakMsWUFBUSxrQkFBVTtBQUNkLGVBQ0k7QUFBQTtBQUFBO0FBQ0ksZ0NBQUMsSUFBRDtBQUNGLDRCQUFZLEtBQUssS0FBTCxDQUFXLFVBRHJCO0FBRUYseUJBQVMsS0FBSyxLQUFMLENBQVcsT0FGbEI7QUFHRiwyQkFBVyxLQUFLO0FBSGQsY0FESjtBQU1DLGdDQUFDLE9BQUQsSUFBUyxZQUFZLEtBQUssS0FBTCxDQUFXLFVBQWhDLEdBTkQ7QUFPRSxnQ0FBQyxNQUFEO0FBUEYsU0FESjtBQVdIO0FBeEJnQyxDQUFsQixDQUFuQjs7QUEyQkEsTUFBTSxNQUFOLENBQ0ksb0JBQUMsWUFBRCxPQURKLEVBRUksU0FBUyxJQUZiOzs7OztBQzdMQSxJQUFJLFFBQVEsUUFBUSxPQUFSLENBQVo7QUFDQSxJQUFJLFdBQVcsUUFBUSxXQUFSLENBQWY7O0FBRUEsSUFBSSxjQUFjLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUNsQyxVQUFRLGtCQUFVO0FBQ2hCLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZKO0FBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUxKO0FBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKLEtBREY7QUFjRDtBQWhCaUMsQ0FBbEIsQ0FBbEI7O0FBb0JBLE9BQU8sT0FBUCxHQUFpQixXQUFqQjs7Ozs7QUN2QkEsSUFBSSxRQUFRLFFBQVEsT0FBUixDQUFaO0FBQ0EsSUFBSSxXQUFXLFFBQVEsV0FBUixDQUFmOztBQUVBLElBQUksU0FBUztBQUNYLFNBQU8sUUFESTtBQUVYLE9BQUs7QUFGTSxDQUFiOztBQUtBLElBQUksYUFBYSxDQUNiLFFBRGEsRUFDSCxRQURHLENBQWpCOztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksU0FBUyxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDN0IsVUFBUSxrQkFBVztBQUNqQixXQUNFO0FBQUE7QUFBQSxRQUFLLElBQUcsa0JBQVI7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLDJCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSwyQkFBZjtBQUFBO0FBQUEsU0FERjtBQUtFO0FBQUE7QUFBQSxZQUFLLFdBQVUsdUJBQWY7QUFFSSxxQkFBVyxHQUFYLENBQWUsVUFBVSxRQUFWLEVBQW9CO0FBQy9CLG1CQUFPO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGFBQWY7QUFBOEI7QUFBOUIsYUFBUDtBQUNILFdBRkQ7QUFGSixTQUxGO0FBYUUscUNBQUssV0FBVSxPQUFmO0FBYkY7QUFERixLQURGO0FBbUJEO0FBckI0QixDQUFsQixDQUFiOztBQXdCQSxPQUFPLE9BQVAsR0FBaUIsTUFBakI7Ozs7O0FDekNBLElBQUksUUFBUSxRQUFRLE9BQVIsQ0FBWjtBQUNBLElBQUksV0FBVyxRQUFRLFdBQVIsQ0FBZjs7QUFFQSxJQUFJLG1CQUFtQixNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDdkMsVUFBUSxrQkFBVztBQUNqQixXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsNEJBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHdCQUFmO0FBQ0UscUNBQUssS0FBSyxLQUFLLEtBQUwsQ0FBVyxZQUFyQixHQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLLGlCQUFLLEtBQUwsQ0FBVztBQUFoQixXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUssaUJBQUssS0FBTCxDQUFXO0FBQWhCO0FBRkY7QUFGRjtBQURGLEtBREY7QUFXRDtBQWJzQyxDQUFsQixDQUF2Qjs7QUFnQkEsSUFBSSxpQkFBaUIsTUFBTSxXQUFOLENBQWtCO0FBQUE7O0FBQ3JDLFVBQVEsa0JBQVk7QUFDbEIsVUFBTSxrQkFBTjtBQUNELEdBSG9DOztBQUtyQyxVQUFRLGtCQUFXO0FBQ2pCLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLLGVBQUssS0FBTCxDQUFXO0FBQWhCLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBSyxlQUFLLEtBQUwsQ0FBVztBQUFoQjtBQUZGLE9BREY7QUFLRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFVBQWY7QUFDRyxhQUFLLEtBQUwsQ0FBVztBQURkLE9BTEY7QUFRRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFNLEtBQUssS0FBTCxDQUFXLFFBQXBCO0FBQThCO0FBQUE7QUFBQSxjQUFRLFNBQVMsS0FBSyxNQUF0QixFQUE4QixXQUFVLG1CQUF4QztBQUFBO0FBQUE7QUFBOUI7QUFERjtBQVJGLEtBREY7QUFjRDtBQXBCb0MsQ0FBbEIsQ0FBckI7O0FBdUJBLElBQUksYUFBYSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDakMsVUFBUSxrQkFBVztBQUNqQixXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsbUJBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBQUE7QUFBQTtBQURGLE9BREY7QUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUkY7QUFTRTtBQUFBO0FBQUEsVUFBSyxXQUFVLEtBQWY7QUFDRSw0QkFBQyxnQkFBRCxJQUFrQixjQUFhLG9CQUEvQixFQUFvRCxhQUFZLDRCQUFoRSxFQUE2RixjQUFhLDZCQUExRyxHQURGO0FBR0UsNEJBQUMsZ0JBQUQsSUFBa0IsY0FBYSxvQkFBL0IsRUFBb0QsYUFBWSx3Q0FBaEUsRUFBeUcsY0FBYSwyQkFBdEgsR0FIRjtBQUtFLDRCQUFDLGdCQUFELElBQWtCLGNBQWEsd0JBQS9CLEVBQXdELGFBQVksT0FBcEUsRUFBNEUsY0FBYSwyRUFBekY7QUFMRixPQVRGO0FBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FqQkY7QUFrQkU7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsY0FBRCxJQUFnQixXQUFVLE1BQTFCLEVBQWlDLFVBQVMsVUFBMUMsRUFBcUQsaUJBQWdCLHNHQUFyRSxHQURGO0FBR0UsNEJBQUMsY0FBRCxJQUFnQixXQUFVLG9CQUExQixFQUErQyxVQUFTLFVBQXhELEVBQW1FLGlCQUFnQixrR0FBbkYsR0FIRjtBQUtFLDRCQUFDLGNBQUQsSUFBZ0IsV0FBVSxZQUExQixFQUF1QyxVQUFTLFVBQWhELEVBQTJELGlCQUFnQixrUEFBM0U7QUFMRjtBQWxCRixLQURGO0FBNEJEO0FBOUJnQyxDQUFsQixDQUFqQjs7QUFpQ0EsT0FBTyxPQUFQLEdBQWlCLFVBQWpCOzs7OztBQzNFQSxJQUFJLFFBQVEsUUFBUSxPQUFSLENBQVo7QUFDQSxJQUFJLFdBQVcsUUFBUSxXQUFSLENBQWY7O0FBR0EsSUFBSSxXQUFXLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUMvQixVQUFRLGtCQUFZO0FBQ2xCLFVBQU0sa0JBQU47QUFDRCxHQUg4Qjs7QUFLL0IsVUFBUSxrQkFBVztBQUNqQixXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUE7QUFBSyxlQUFLLEtBQUwsQ0FBVztBQUFoQixTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUssZUFBSyxLQUFMLENBQVc7QUFBaEI7QUFGRixPQURGO0FBS0U7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBQ0csYUFBSyxLQUFMLENBQVc7QUFEZCxPQUxGO0FBUUU7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBTSxLQUFLLEtBQUwsQ0FBVyxRQUFwQjtBQUE4QjtBQUFBO0FBQUEsY0FBUSxTQUFTLEtBQUssTUFBdEIsRUFBOEIsV0FBVSxtQkFBeEM7QUFBQTtBQUFBO0FBQTlCO0FBREY7QUFSRixLQURGO0FBY0Q7QUFwQjhCLENBQWxCLENBQWY7O0FBdUJBLElBQUksaUJBQWlCLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUNyQyxVQUFRLGtCQUFXO0FBQ2pCLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZGO0FBSUUsMEJBQUMsUUFBRCxJQUFVLFdBQVUsVUFBcEIsRUFBK0IsVUFBUyxVQUF4QyxFQUFtRCxpQkFBZ0Isc0dBQW5FLEdBSkY7QUFNRSwwQkFBQyxRQUFELElBQVUsV0FBVSxvQkFBcEIsRUFBeUMsVUFBUyxVQUFsRCxFQUE2RCxpQkFBZ0Isa0dBQTdFLEdBTkY7QUFRRSwwQkFBQyxRQUFELElBQVUsV0FBVSxZQUFwQixFQUFpQyxVQUFTLFVBQTFDLEVBQXFELGlCQUFnQixpTEFBckUsR0FSRjtBQVVFLDBCQUFDLFFBQUQsSUFBVSxXQUFVLGlCQUFwQixFQUFzQyxVQUFTLFVBQS9DLEVBQTBELGlCQUFnQix3SEFBMUUsR0FWRjtBQVlFLDBCQUFDLFFBQUQsSUFBVSxXQUFVLGtCQUFwQixFQUF1QyxVQUFTLFVBQWhELEVBQTJELGlCQUFnQix3R0FBM0UsR0FaRjtBQWNFLDBCQUFDLFFBQUQsSUFBVSxXQUFVLDBCQUFwQixFQUErQyxVQUFTLFVBQXhELEVBQW1FLGlCQUFnQixxRUFBbkYsR0FkRjtBQWdCRSwwQkFBQyxRQUFELElBQVUsV0FBVSxpQkFBcEIsRUFBc0MsVUFBUyxVQUEvQyxFQUEwRCxpQkFBZ0IsOEpBQTFFLEdBaEJGO0FBa0JFLDBCQUFDLFFBQUQsSUFBVSxXQUFVLHNCQUFwQixFQUEyQyxVQUFTLFVBQXBELEVBQStELGlCQUFnQix3Q0FBL0U7QUFsQkYsS0FERjtBQXNCRDtBQXhCb0MsQ0FBbEIsQ0FBckI7O0FBMkJBLE9BQU8sT0FBUCxHQUFpQixjQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBlaXRoZXIgb3Igd291bGQgd29ya1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIEhvbWVTbGlkZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvaG9tZS5qcycpO1xudmFyIEFib3V0U2xpZGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Fib3V0LmpzJyk7XG52YXIgV3JpdGluZ3NTbGlkZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvd3JpdGluZ3MuanMnKTtcbnZhciBGb290ZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZm9vdGVyLmpzJyk7XG5cbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuLy8gaW1wb3J0IFNlYXJjaGFibGVUYWJsZSBmcm9tICcuL1NlYXJjaGFibGVUYWJsZSc7XG4vLyBpbXBvcnQge2RhdGF9IGZyb20gJy4vZGF0YSc7XG4vLyBpbXBvcnQgc2xpZGVyIGZyb20gJy4vc2xpZGVyJztcblxuLy8gRmlsdGVyYWJsZSBDaGVhdFNoZWV0IENvbXBvbmVudFxuLy8gUmVhY3RET00ucmVuZGVyKCA8U2VhcmNoYWJsZVRhYmxlIGRhdGE9e2RhdGF9Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hhYmxlVGFibGUnKSApO1xuXG5cbi8vIHdoZW4geW91IGNsaWNrIG9uIGEgdGFiLCBjYWxsIG9uQ2xpY2sgaW4gdGhlIHRhYidzIGh0bWwgdG8gZmFkZSBvciBzbGlkZSB0aGUgYm9keSB1c2luZyBhIGZ1bmN0aW9uXG4vLyAgICBsZXNzb24gIzggaW4gYWR2YW5jZWQgSlNYIGluIGNvZGVhY2FkZW15XG5cbnZhciBoZWFkaW5nID0gJ0hpLCBteSBuYW1lIGlzIERvcmVlbiBUcmluaCc7XG5cbnZhciB0YWJMaXN0ID0gW1xuICAgIHsgJ2lkJzogMCwgJ25hbWUnOiAnJywgJ3VybCc6ICcvaG9tZScgfSxcbiAgICB7ICdpZCc6IDEsICduYW1lJzogJ1BvcnRmb2xpbycsICd1cmwnOiAnL3BvcnRmb2xpbycgfSxcbiAgICB7ICdpZCc6IDIsICduYW1lJzogJ0Fib3V0JywgJ3VybCc6ICcvYWJvdXQnIH0sXG4gICAgeyAnaWQnOiAzLCAnbmFtZSc6ICdDb250YWN0JywgJ3VybCc6ICcvY29udGFjdCcgfSxcbiAgICB7ICdpZCc6IDQsICduYW1lJzogJ1dyaXRpbmdzJywgJ3VybCc6ICcvd3JpdGluZ3MnIH1cbl07XG5cblxuXG4vLyB3aXRob3V0IEpTWFxuLy8gdmFyIGVtYWlsTWUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywge2hyZWY6ICdtYWlsdG86ZG9yZWVubXRyaW5oQGdtYWlsLmNvbSd9LCAnZG9yZWVubXRyaW5oQGdtYWlsLmNvbScpO1xuLy8gd2l0aCBKU1hcbnZhciBlbWFpbE1lID0gPGEgaHJlZj1cIm1haWx0bzpkb3JlZW5tdHJpbmhAZ21haWwuY29tXCI+ZG9yZWVubXRyaW5oQGdtYWlsLmNvbTwvYT47XG5cbnZhciBUYWIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIC8vIGhhbmRsZUNsaWNrIGlzIGFuIGV2ZW50IGxpc3RlbmVyIGluIGEgcmVuZGVyIGZ1bmN0aW9uXG4gICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXHR0aGlzLnByb3BzLmhhbmRsZUNsaWNrKCk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMuaXNDdXJyZW50ID8gJ2N1cnJlbnQnIDogbnVsbH0+XG4gICAgICAgICAgICBcdDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGhyZWY9e3RoaXMucHJvcHMudXJsfT5cbiAgICAgICAgICAgIFx0XHR7dGhpcy5wcm9wcy5uYW1lfVxuXHQgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG52YXIgSGFtYnVyZ2VyTWVudSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7Y2xhc3NOYW1lOiAnaWNvbi1iYXInfSk7XG5cbnZhciBOYXZiYXJCcmFuZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIubmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLW5hbWVcIiBocmVmPVwiL2hvbWVcIj5cbiAgICAgICAgICAgIHtoZWFkaW5nfVxuICAgICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgVGFicyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBoYW5kbGVDbGljazogZnVuY3Rpb24odGFiKXtcbiAgICBcdHRoaXMucHJvcHMuY2hhbmdlVGFiKHRhYik7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bmF2IGlkPVwicG9ydGZvbGlvLW5hdmJhclwiIGNsYXNzTmFtZT1cIm5hdmJhclwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibmF2YmFyLWludGVyaW9yXCI+XG4gICAgICAgICAgICAgIDxOYXZiYXJCcmFuZCAvPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50YWJMaXN0Lm1hcChmdW5jdGlvbih0YWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMsIHRhYil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFiLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3RhYi51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RhYi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnQ9eyh0aGlzLnByb3BzLmN1cnJlbnRUYWIgPT09IHRhYi5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cblxuXG52YXIgY29udGFjdE1lID0gPHA+SGF2ZSBhIGNvb2wgcHJvamVjdCBpbiBtaW5kIGFuZCB0aGluayBJIGNvdWxkIGhlbHAgeW91IHdpdGggaXQ/IEZlZWwgZnJlZSB0byBlbWFpbCBtZSBhdCB7ZW1haWxNZX0uIE9yIHZpZXcgbXkgcmVzdW1lIGhlcmUuPC9wPjtcblxudmFyIENvbnRhY3RTbGlkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+Q29udGFjdDwvaDI+XG4gICAgICAgIDxwPntjb250YWN0TWV9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBDb250ZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmN1cnJlbnRUYWIgPT09IDAgP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgICAgICAgICAgICAgPEhvbWVTbGlkZXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFx0Om51bGx9XG5cbiAgICAgICAgICAgIFx0e3RoaXMucHJvcHMuY3VycmVudFRhYiA9PT0gMSA/XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcy5tbGtzaGsuY29tL3IvMTA0VE5cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXHQ6bnVsbH1cblxuICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5jdXJyZW50VGFiID09PSAyID9cbiAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPlxuICAgICAgICAgICAgXHRcdDxBYm91dFNsaWRlciAvPlxuICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgIFx0Om51bGx9XG5cbiAgICAgICAgICAgIFx0e3RoaXMucHJvcHMuY3VycmVudFRhYiA9PT0gMyA/XG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgXHRcdDxDb250YWN0U2xpZGVyIC8+XG4gICAgICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgXHQ6bnVsbH1cblxuICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5jdXJyZW50VGFiID09PSA0ID9cbiAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJ3cml0aW5nc1wiPlxuICAgICAgICAgICAgXHRcdDxXcml0aW5nc1NsaWRlciAvPlxuICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgIFx0Om51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuXG52YXIgUG9ydGZvbGlvTmF2ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhYkxpc3Q6IHRhYkxpc3QsXG4gICAgICAgICAgICBjdXJyZW50VGFiOiAwXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNoYW5nZVRhYjogZnVuY3Rpb24odGFiKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VGFiOiB0YWIuaWQgfSk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgXHRcdGN1cnJlbnRUYWI9e3RoaXMuc3RhdGUuY3VycmVudFRhYn1cbiAgICAgICAgICAgIFx0XHR0YWJMaXN0PXt0aGlzLnN0YXRlLnRhYkxpc3R9XG4gICAgICAgICAgICBcdFx0Y2hhbmdlVGFiPXt0aGlzLmNoYW5nZVRhYn1cbiAgICAgICAgICAgIFx0Lz5cbiAgICAgICAgICAgIFx0PENvbnRlbnQgY3VycmVudFRhYj17dGhpcy5zdGF0ZS5jdXJyZW50VGFifSAvPlxuICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuUmVhY3QucmVuZGVyKFxuICAgIDxQb3J0Zm9saW9OYXYgLz4sXG4gICAgZG9jdW1lbnQuYm9keVxuKTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xyXG5cclxudmFyIEFib3V0U2xpZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1zbGlkZXJcIj5cclxuICAgICAgICA8aDI+QWJvdXQ8L2gyPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIE15IG5hbWUgaXMgRG9yZWVuIFRyaW5oIGFuZCBteSBiYWNrZ3JvdW5kIGxpZXMgaW4gSW50ZXJuYXRpb25hbCBTdHVkaWVzIHdpdGggYSBzcGVjaWFsaXphdGlvbiBpbiBlY29ub21pY3MgZnJvbSBVbml2ZXJzaXR5IG9mIENhbGlmb3JuaWEsIElydmluZS4gT3V0c2lkZSBvZiBteSBlZHVjYXRpb24gYXQgVUNJLCBJIGhhdmUgYWxzbyBzdHVkaWVkIGF0IEVhc3QgQ2hpbmEgTm9ybWFsIFVuaXZlcnNpdHkgKOWNjuW4iOWkpykgaW4gU2hhbmdoYWkuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgQXMgdGhlIGdsb2JhbCBlY29ub215IGNvbnRpbnVlcyB0byBleHBhbmQsIHRoZSBuZWVkIHRvIGNvbm5lY3QgYnVzaW5lc3NlcyB0byBjbGllbnRzIHJpc2VzIG9uIGEgbXVsdGluYXRpb25hbCBzY2FsZS4gQXMgYSBmcm9udC1lbmQgZGV2ZWxvcGVyIGFuZCBhIHNwZWNpYWxpc3Qgd2hvIHVuZGVyc3RhbmRzIHRoZSBkaXZlcnNpdHkgb2YgdGhlIHdvcmxkd2lkZSBlY29ub215LCBJIGJyaWRnZSB0aGUgZ2FwIGJldHdlZW4gYnVzaW5lc3NlcyBhbmQgY2xpZW50cyBvbiBhbiBpbnRlcm5hdGlvbmFsIHNjYWxlIGJ5IGhlbHBpbmcgdGhlbSBjb21tdW5pY2F0ZSBkaWdpdGFsbHkgdGhyb3VnaCBjb2RlLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFdoZW4gSSBhbSBub3QgY29kaW5nIHRoZSBkYXkgYXdheSwgeW91IGNvdWxkIG5vcm1hbGx5IGZpbmQgbWUgaGlraW5nIGluIHRoZSB3b29kcywgZGlzY292ZXJpbmcgbmV3IGVhdGVyaWVzIGluIHRoZSBjaXR5IG9yIHRyeWluZyBvdXQgMyBjb2ZmZWUgc2hvcHMgYSBkYXkuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQWJvdXRTbGlkZXI7XHJcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xyXG5cclxudmFyIGdpdGh1YiA9IHtcclxuICB0aXRsZTogJ0dpdEh1YicsXHJcbiAgc3JjOiAnaHR0cHM6Ly9naXRodWIuY29tL3RyaW5oZG0nXHJcbn07XHJcblxyXG52YXIgZm9vdGVyTGlzdCA9IFtcclxuICAgICdHaXRodWInLCAnRS1NYWlsJ1xyXG5dO1xyXG5cclxuLy8gdmFyIGZvb3Rlckxpc3QgPSB7XHJcbi8vICAgZ2l0aHViOiAndHJpbmhkbS5naXRodWIuaW8nLFxyXG4vLyAgIGVtYWlsOiAnZG9yZWVubXRyaW5oQGdtYWlsLmNvbSdcclxuLy8gfTtcclxuXHJcbnZhciBGb290ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJwb3J0Zm9saW8tZm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZm9vdGVyLWludGVyaW9yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGZvb3Rlci1jb3B5cmlnaHRcIj5cclxuICAgICAgICAgICAgRG9yZWVuIFRyaW5oXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGZvb3Rlci1saW5rc1wiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZm9vdGVyTGlzdC5tYXAoZnVuY3Rpb24gKGZvb3RuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1saW5rXCI+e2Zvb3RuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlcjtcclxuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XHJcblxyXG52YXIgU2VsZWN0ZWRQcm9qZWN0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRodW1ibmFpbCBjb2wtbWQtNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10aHVtYm5haWwtd3JhcFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMucHJvamVjdEltYWdlfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRodW1ibmFpbC10ZXh0XCI+XHJcbiAgICAgICAgICAgIDxoND57dGhpcy5wcm9wcy5wcm9qZWN0VGl0bGV9PC9oND5cclxuICAgICAgICAgICAgPGg1Pnt0aGlzLnByb3BzLnByb2plY3RUeXBlfTwvaDU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG52YXIgUmVjZW50V3JpdGluZ3MgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgc2NyZWFtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBhbGVydCgnQUFBQUFBQUFISEghISEhIScpO1xyXG4gIH0sXHJcbiAgXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHdyaXRpbmdzLXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5ibG9nVGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxoND57dGhpcy5wcm9wcy5ibG9nRGF0ZX08L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmJsb2dEZXNjcmlwdGlvbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXt0aGlzLnByb3BzLmJsb2dMaW5rfT48YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2NyZWFtfSBjbGFzc05hbWU9XCJidG4gYnRuLXZpZXctcG9zdFwiPlZpZXcgUG9zdDwvYnV0dG9uPjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG52YXIgSG9tZVNsaWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1uby1tYXJnaW4gcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtaW50cm8gY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgPGgxPkhpLCBteSBuYW1lIGlzIERvcmVlbiBUcmluaC48L2gxPlxyXG4gICAgICAgICAgICBKdW5pb3IgRnJvbnQtRW5kIERldmVsb3BlciBhbmQgRGVzaWduZXIgZnJvbSBTb3V0aGVybiBDYWxpZm9ybmlhLCBjdXJyZW50bHkgd29ya2luZyBhcyBhbiBpbmRlcGVuZGVudCBjb250cmFjdG9yLiBJIHN0YW5kIG9uIGEgc3dlZXQgc3BvdCB3aGVyZSBkZXNpZ24gJiBjb2RlIGludGVyc2VjdHMuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGgyPlNlbGVjdGVkIFByb2plY3RzPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPFNlbGVjdGVkUHJvamVjdHMgcHJvamVjdFRpdGxlPVwiRm9yZWdyb3VuZCBTdHVkaW9zXCIgcHJvamVjdFR5cGU9XCJXb3JkUHJlc3MsIFdlYiBEZXZlbG9wbWVudFwiIHByb2plY3RJbWFnZT1cIi4vYXNzZXRzL2ltZy9mb3JlZ3JvdW5kLmpwZ1wiIC8+XHJcblxyXG4gICAgICAgICAgPFNlbGVjdGVkUHJvamVjdHMgcHJvamVjdFRpdGxlPVwiQW5kZXJzb24gRGVudGlzdHJ5XCIgcHJvamVjdFR5cGU9XCJXb3JkUHJlc3MsIFdlYiBEZXNpZ24sIFdlYiBEZXZlbG9wbWVudFwiIHByb2plY3RJbWFnZT1cIi4vYXNzZXRzL2ltZy9hbmRlcnNvbi5qcGdcIiAvPlxyXG5cclxuICAgICAgICAgIDxTZWxlY3RlZFByb2plY3RzIHByb2plY3RUaXRsZT1cIlNvdW5kQ2xvdWQ6IENhc2UgU3R1ZHlcIiBwcm9qZWN0VHlwZT1cIlVJL1VYXCIgcHJvamVjdEltYWdlPVwiaHR0cDovL3RyaW5oZG0uZ2l0aHViLmlvL2Fzc2V0cy9pbWcvYmxvZ184LTMwX3NjX21hY2Jvb2tfcHJldmlld19taW5lLmpwZ1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMj5Xcml0aW5nczwvaDI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxSZWNlbnRXcml0aW5ncyBibG9nVGl0bGU9XCJMaWZlXCIgYmxvZ0RhdGU9XCIwOS4xMi4xNlwiIGJsb2dEZXNjcmlwdGlvbj1cIkEgYnJhaW4tZHVtcCBvZiBteSByZWNlbnQgZXhwZXJpZW5jZXMgLSBtb3ZpbmcgZnJvbSB1bml2ZXJzaXR5IHN5bGxhYmkgdG8gYW4gZXZlci1jaGFuZ2luZyBpbmR1c3RyeS5cIiAvPlxyXG5cclxuICAgICAgICAgIDxSZWNlbnRXcml0aW5ncyBibG9nVGl0bGU9XCJGYXZvcml0ZSBSZXNvdXJjZXNcIiBibG9nRGF0ZT1cIjA5LjA1LjE2XCIgYmxvZ0Rlc2NyaXB0aW9uPVwiQSBjb21wcmVoZW5zaXZlIGxpc3Qgb2YgbXkgcGVyc29uYWwgZmF2b3JpdGUgcmVzb3VyY2VzIGFuZCB0b29scyBmb3Igd2ViIGRlc2lnbiBhbmQgZGV2ZWxvcG1lbnQuXCIgLz5cclxuXHJcbiAgICAgICAgICA8UmVjZW50V3JpdGluZ3MgYmxvZ1RpdGxlPVwiU291bmRDbG91ZFwiIGJsb2dEYXRlPVwiMDguMzAuMTZcIiBibG9nRGVzY3JpcHRpb249XCJTb3VuZENsb3Vk4oCZcyBjdXJyZW50IGRlc2lnbiBnZXRzIHRoZSBqb2IgZG9uZSwgYnV0IEkgZmVlbCBsaWtlIHRoZXkgY291bGQgbWFrZSBzZXZlcmFsIGltcHJvdmVtZW50cyB0byB0aGVpciBVWC9VSS4gSXQgaGFzIGNvbWUgYSBsb25nIHdheSBzaW5jZSBJIHN0YXJ0ZWQgdXNpbmcgU291bmRDbG91ZCBiYWNrIGluIDIwMTMsIGJ1dCB0aGVpciBpbnRlcmZhY2Ugc3RpbGwgZmVlbHMgY2x1dHRlcmVkIGFuZCB1bmNsZWFuLlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBIb21lU2xpZGVyO1xyXG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcclxuXHJcblxyXG52YXIgV3JpdGluZ3MgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgc2NyZWFtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBhbGVydCgnQUFBQUFBQUFISEghISEhIScpO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB3cml0aW5ncy1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuYmxvZ1RpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8aDQ+e3RoaXMucHJvcHMuYmxvZ0RhdGV9PC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5ibG9nRGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgPGEgaHJlZj17dGhpcy5wcm9wcy5ibG9nTGlua30+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNjcmVhbX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi12aWV3LXBvc3RcIj5WaWV3IFBvc3Q8L2J1dHRvbj48L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIFdyaXRpbmdzU2xpZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxoMj5Xcml0aW5nczwvaDI+XHJcbiAgICAgICAgPHA+U29tZSBvZiBteSBtdXNpbmdzIG9uIHdlYiBkZXZlbG9wbWVudCwgZGVzaWduLCBhbmQgbGlmZS48L3A+XHJcblxyXG4gICAgICAgIDxXcml0aW5ncyBibG9nVGl0bGU9XCJQcm9ncmVzc1wiIGJsb2dEYXRlPVwiMDkuMTIuMTZcIiBibG9nRGVzY3JpcHRpb249XCJBIGJyYWluLWR1bXAgb2YgbXkgcmVjZW50IGV4cGVyaWVuY2VzIC0gbW92aW5nIGZyb20gdW5pdmVyc2l0eSBzeWxsYWJpIHRvIGFuIGV2ZXItY2hhbmdpbmcgaW5kdXN0cnkuXCIgLz5cclxuXHJcbiAgICAgICAgPFdyaXRpbmdzIGJsb2dUaXRsZT1cIkZhdm9yaXRlIFJlc291cmNlc1wiIGJsb2dEYXRlPVwiMDkuMDUuMTZcIiBibG9nRGVzY3JpcHRpb249XCJBIGNvbXByZWhlbnNpdmUgbGlzdCBvZiBteSBwZXJzb25hbCBmYXZvcml0ZSByZXNvdXJjZXMgYW5kIHRvb2xzIGZvciB3ZWIgZGVzaWduIGFuZCBkZXZlbG9wbWVudC5cIiAvPlxyXG5cclxuICAgICAgICA8V3JpdGluZ3MgYmxvZ1RpdGxlPVwiU291bmRDbG91ZFwiIGJsb2dEYXRlPVwiMDguMzAuMTZcIiBibG9nRGVzY3JpcHRpb249XCJNeSBjYXNlIHN0dWR5IGFuZCByZWRlc2lnbiBvZiBteSBmYXZvcml0ZSBhcHBsaWNhdGlvbiwgU291bmRDbG91ZC4gVGhlaXIgY3VycmVudCBkZXNpZ24gZ2V0cyB0aGUgam9iIGRvbmUsIGJ1dCBJIGZlZWwgbGlrZSB0aGV5IGNvdWxkIG1ha2Ugc2V2ZXJhbCBpbXByb3ZlbWVudHMgdG8gdGhlaXIgVVgvVUkuXCIgLz5cclxuXHJcbiAgICAgICAgPFdyaXRpbmdzIGJsb2dUaXRsZT1cIlBhcmFsbGF4IFNsaWRlclwiIGJsb2dEYXRlPVwiMDcuMjAuMTZcIiBibG9nRGVzY3JpcHRpb249XCJJJ3ZlIGNyZWF0ZWQgdGhpcyB3YWxrLXRocm91Z2ggb24gaG93IEkgY3JlYXRlZCB0aGlzIHRocmVlIGxheWVyZWQg4oCcc2xpZGVy4oCdIHRoYXQgZmFkZXMgZnJvbSBsYXllciB0byBsYXllciBvbiBzY3JvbGwuXCIgLz5cclxuXHJcbiAgICAgICAgPFdyaXRpbmdzIGJsb2dUaXRsZT1cIlJldmlzaXRpbmcgbGlua3NcIiBibG9nRGF0ZT1cIjA3LjA5LjE2XCIgYmxvZ0Rlc2NyaXB0aW9uPVwiV2hhdGV2ZXIgaGFwcGVuZWQgdG8gdmlzaXRlZCBhbmQgdW52aXNpdGVkIGxpbmtzPyBNeSB0aG91Z2h0cyBvbiB0aGUgbG9zdCBVWCBwcmFjdGljZSBvZiBzdHlsaW5nIHRoZW0uXCIgLz5cclxuXHJcbiAgICAgICAgPFdyaXRpbmdzIGJsb2dUaXRsZT1cIlJhZGlvIEJ1dHRvbnMgJiBXcC1BZG1pblwiIGJsb2dEYXRlPVwiMDYuMTMuMTZcIiBibG9nRGVzY3JpcHRpb249XCJBIG5pZnR5IGd1aWRlIG9uIGhvdyB0byBpbXBsZW1lbnQgcmFkaW8gYnV0dG9ucyBpbnRvIHlvdXIgV1AtQWRtaW4uXCIgLz5cclxuXHJcbiAgICAgICAgPFdyaXRpbmdzIGJsb2dUaXRsZT1cIlBzZXVkbyBFbGVtZW50c1wiIGJsb2dEYXRlPVwiMDUuMDcuMTZcIiBibG9nRGVzY3JpcHRpb249XCJJbiB0aGlzIGJsb2cgcG9zdCwgSeKAmWxsIGRpc2N1c3MgaG93IEkgZGlkIEZvcmVncm91bmQgU3R1ZGlv4oCZcyBuYXZpZ2F0aW9uLCB3aGVyZSBJIHVzZWQgZGF0YS1hdHRyaWJ1dGVzIGFuZCBwc2V1ZG8tZWxlbWVudHMgdG8gY3JlYXRlIGludGVyZXN0aW5nIENTUyBob3ZlcnMuXCIgLz5cclxuXHJcbiAgICAgICAgPFdyaXRpbmdzIGJsb2dUaXRsZT1cIkEgTm90LVNvLVNob3J0IEludHJvXCIgYmxvZ0RhdGU9XCIwNS4wNy4xNlwiIGJsb2dEZXNjcmlwdGlvbj1cIkknbSBsaWtlLCAnaGV5LCB3aGF0J3MgdXAsIGhlbGxvPydcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gV3JpdGluZ3NTbGlkZXI7XHJcbiJdfQ==
