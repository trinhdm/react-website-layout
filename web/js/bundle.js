(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// either or would work
var React = require('react');
var ReactDOM = require('react-dom');
// var ScrollEffect = require('./components/scroll-effects.js');

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

var heading = 'Doreen Trinh | Front-end Dev & Designer';

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
                { className: 'navbar-name', href: './index.html' },
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

    fadeOut: function fadeOut() {
        return {};
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

ReactDOM.render(React.createElement(PortfolioNav, null), document.getElementById('container'));

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
// var ScrollEffect = require('./scroll-effects.js').default;

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

  fadeOnScroll: function fadeOnScroll() {
    // hide our element on page load
    $('#selected-projects').css('opacity', 0);

    $('#selected-projects').waypoint(function () {
      $('#selected-projects').addClass('fadeInLeft');
    }, { offset: '50%' });
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'row-no-margin row' },
        React.createElement(
          'div',
          { className: 'home-intro col-md-10' },
          React.createElement(
            'p',
            { className: 'small with-margin' },
            '– Hi!'
          ),
          React.createElement(
            'p',
            { className: 'intro-text' },
            'My name is ',
            React.createElement(
              'b',
              null,
              'Doreen Trinh'
            ),
            ', and I am a junior ',
            React.createElement(
              'b',
              null,
              'Front-End Developer'
            ),
            ' and ',
            React.createElement(
              'b',
              null,
              'Designer'
            ),
            ' from Southern California, currently working as a freelancer.',
            React.createElement('br', null),
            ' I stand on a sweet spot where design & code intersects.'
          ),
          React.createElement(
            'p',
            { className: 'small with-margin' },
            React.createElement(
              'a',
              { href: './about' },
              '– Read more about me →'
            )
          ),
          React.createElement(
            'p',
            { className: 'small with-margin' },
            React.createElement(
              'a',
              { href: 'mailto:doreenmtrinh@gmail.com' },
              '– Send me an email (doreenmtrinh@gmail.com) →'
            )
          ),
          React.createElement(
            'p',
            { className: 'small' },
            '– Find me on'
          ),
          React.createElement(
            'span',
            { className: 'links-wrap' },
            React.createElement(
              'a',
              { href: 'https://github.com/trinhdm/', className: 'links' },
              'GitHub'
            )
          ),
          ' – ',
          React.createElement(
            'a',
            { className: 'links' },
            'Behance'
          ),
          ' – ',
          React.createElement(
            'a',
            { href: 'https://www.linkedin.com/in/doreen-trinh-378a99100', className: 'links' },
            'LinkedIn'
          )
        )
      ),
      React.createElement(
        'h2',
        null,
        'Selected Projects'
      ),
      React.createElement(
        'div',
        { className: 'row', id: 'selected-projects', onScroll: this.fadeOnScroll },
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
        React.createElement(RecentWritings, { blogTitle: 'Life', blogDate: '09.12.16', blogLink: './writings/2016-09-12-progress.html', blogDescription: 'A brain-dump of my recent experiences - moving from university syllabi to an ever-changing industry.' }),
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
      React.createElement(Writings, { blogTitle: 'Revisiting Links', blogDate: '07.09.16', blogDescription: 'Whatever happened to visited and unvisited links? My thoughts on the lost UX practice of styling them.' }),
      React.createElement(Writings, { blogTitle: 'Radio Buttons & Wp-Admin', blogDate: '06.13.16', blogDescription: 'A nifty guide on how to implement radio buttons into your WP-Admin.' }),
      React.createElement(Writings, { blogTitle: 'Pseudo Elements', blogDate: '05.07.16', blogDescription: 'In this blog post, I’ll discuss how I did Foreground Studio’s navigation, where I used data-attributes and pseudo-elements to create interesting CSS hovers.' }),
      React.createElement(Writings, { blogTitle: 'A Not-So-Short Intro', blogDate: '05.07.16', blogDescription: 'I\'m like, \'hey, what\'s up, hello?\'' })
    );
  }
});

module.exports = WritingsSlider;

},{"react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qcyIsImFwcFxcY29tcG9uZW50c1xcYWJvdXQuanMiLCJhcHBcXGNvbXBvbmVudHNcXGZvb3Rlci5qcyIsImFwcFxcY29tcG9uZW50c1xcaG9tZS5qcyIsImFwcFxcY29tcG9uZW50c1xcd3JpdGluZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0EsSUFBSSxRQUFRLFFBQVEsT0FBUixDQUFaO0FBQ0EsSUFBSSxXQUFXLFFBQVEsV0FBUixDQUFmO0FBQ0E7O0FBRUEsSUFBSSxhQUFhLFFBQVEsc0JBQVIsQ0FBakI7QUFDQSxJQUFJLGNBQWMsUUFBUSx1QkFBUixDQUFsQjtBQUNBLElBQUksaUJBQWlCLFFBQVEsMEJBQVIsQ0FBckI7QUFDQSxJQUFJLFNBQVMsUUFBUSx3QkFBUixDQUFiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsSUFBSSxVQUFVLHlDQUFkOztBQUVBLElBQUksVUFBVSxDQUNWLEVBQUUsTUFBTSxDQUFSLEVBQVcsUUFBUSxFQUFuQixFQUF1QixPQUFPLE9BQTlCLEVBRFUsRUFFVixFQUFFLE1BQU0sQ0FBUixFQUFXLFFBQVEsV0FBbkIsRUFBZ0MsT0FBTyxZQUF2QyxFQUZVLEVBR1YsRUFBRSxNQUFNLENBQVIsRUFBVyxRQUFRLE9BQW5CLEVBQTRCLE9BQU8sUUFBbkMsRUFIVSxFQUlWLEVBQUUsTUFBTSxDQUFSLEVBQVcsUUFBUSxTQUFuQixFQUE4QixPQUFPLFVBQXJDLEVBSlUsRUFLVixFQUFFLE1BQU0sQ0FBUixFQUFXLFFBQVEsVUFBbkIsRUFBK0IsT0FBTyxXQUF0QyxFQUxVLENBQWQ7O0FBVUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxVQUFVO0FBQUE7QUFBQSxNQUFHLE1BQUssK0JBQVI7QUFBQTtBQUFBLENBQWQ7O0FBRUEsSUFBSSxNQUFNLE1BQU0s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QUFNRSwwQkFBQyxRQUFELElBQVUsV0FBVSxvQkFBcEIsRUFBeUMsVUFBUyxVQUFsRCxFQUE2RCxpQkFBZ0Isa0dBQTdFLEdBTkY7QUFRRSwwQkFBQyxRQUFELElBQVUsV0FBVSxZQUFwQixFQUFpQyxVQUFTLFVBQTFDLEVBQXFELGlCQUFnQixpTEFBckUsR0FSRjtBQVVFLDBCQUFDLFFBQUQsSUFBVSxXQUFVLGlCQUFwQixFQUFzQyxVQUFTLFVBQS9DLEVBQTBELGlCQUFnQix3SEFBMUUsR0FWRjtBQVlFLDBCQUFDLFFBQUQsSUFBVSxXQUFVLGtCQUFwQixFQUF1QyxVQUFTLFVBQWhELEVBQTJELGlCQUFnQix3R0FBM0UsR0FaRjtBQWNFLDBCQUFDLFFBQUQsSUFBVSxXQUFVLDBCQUFwQixFQUErQyxVQUFTLFVBQXhELEVBQW1FLGlCQUFnQixxRUFBbkYsR0FkRjtBQWdCRSwwQkFBQyxRQUFELElBQVUsV0FBVSxpQkFBcEIsRUFBc0MsVUFBUyxVQUEvQyxFQUEwRCxpQkFBZ0IsOEpBQTFFLEdBaEJGO0FBa0JFLDBCQUFDLFFBQUQsSUFBVSxXQUFVLHNCQUFwQixFQUEyQyxVQUFTLFVBQXBELEVBQStELGlCQUFnQix3Q0FBL0U7QUFsQkYsS0FERjtBQXNCRDtBQXhCb0MsQ0FBbEIsQ0FBckI7O0FBMkJBLE9BQU8sT0FBUCxHQUFpQixjQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBlaXRoZXIgb3Igd291bGQgd29ya1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuLy8gdmFyIFNjcm9sbEVmZmVjdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9zY3JvbGwtZWZmZWN0cy5qcycpO1xuICBcbnZhciBIb21lU2xpZGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2hvbWUuanMnKTtcbnZhciBBYm91dFNsaWRlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYm91dC5qcycpO1xudmFyIFdyaXRpbmdzU2xpZGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3dyaXRpbmdzLmpzJyk7XG52YXIgRm9vdGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Zvb3Rlci5qcycpO1xuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbi8vIGltcG9ydCBTZWFyY2hhYmxlVGFibGUgZnJvbSAnLi9TZWFyY2hhYmxlVGFibGUnO1xuLy8gaW1wb3J0IHtkYXRhfSBmcm9tICcuL2RhdGEnO1xuLy8gaW1wb3J0IHNsaWRlciBmcm9tICcuL3NsaWRlcic7XG5cbi8vIEZpbHRlcmFibGUgQ2hlYXRTaGVldCBDb21wb25lbnRcbi8vIFJlYWN0RE9NLnJlbmRlciggPFNlYXJjaGFibGVUYWJsZSBkYXRhPXtkYXRhfS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoYWJsZVRhYmxlJykgKTtcblxuXG4vLyB3aGVuIHlvdSBjbGljayBvbiBhIHRhYiwgY2FsbCBvbkNsaWNrIGluIHRoZSB0YWIncyBodG1sIHRvIGZhZGUgb3Igc2xpZGUgdGhlIGJvZHkgdXNpbmcgYSBmdW5jdGlvblxuLy8gICAgbGVzc29uICM4IGluIGFkdmFuY2VkIEpTWCBpbiBjb2RlYWNhZGVteVxuXG52YXIgaGVhZGluZyA9ICdEb3JlZW4gVHJpbmggfCBGcm9udC1lbmQgRGV2ICYgRGVzaWduZXInO1xuXG52YXIgdGFiTGlzdCA9IFtcbiAgICB7ICdpZCc6IDAsICduYW1lJzogJycsICd1cmwnOiAnL2hvbWUnIH0sXG4gICAgeyAnaWQnOiAxLCAnbmFtZSc6ICdQb3J0Zm9saW8nLCAndXJsJzogJy9wb3J0Zm9saW8nIH0sXG4gICAgeyAnaWQnOiAyLCAnbmFtZSc6ICdBYm91dCcsICd1cmwnOiAnL2Fib3V0JyB9LFxuICAgIHsgJ2lkJzogMywgJ25hbWUnOiAnQ29udGFjdCcsICd1cmwnOiAnL2NvbnRhY3QnIH0sXG4gICAgeyAnaWQnOiA0LCAnbmFtZSc6ICdXcml0aW5ncycsICd1cmwnOiAnL3dyaXRpbmdzJyB9XG5dO1xuXG5cblxuLy8gd2l0aG91dCBKU1hcbi8vIHZhciBlbWFpbE1lID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiAnbWFpbHRvOmRvcmVlbm10cmluaEBnbWFpbC5jb20nfSwgJ2RvcmVlbm10cmluaEBnbWFpbC5jb20nKTtcbi8vIHdpdGggSlNYXG52YXIgZW1haWxNZSA9IDxhIGhyZWY9XCJtYWlsdG86ZG9yZWVubXRyaW5oQGdtYWlsLmNvbVwiPmRvcmVlbm10cmluaEBnbWFpbC5jb208L2E+O1xuXG52YXIgVGFiID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAvLyBoYW5kbGVDbGljayBpcyBhbiBldmVudCBsaXN0ZW5lciBpbiBhIHJlbmRlciBmdW5jdGlvblxuICAgIGhhbmRsZUNsaWNrOiBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFx0dGhpcy5wcm9wcy5oYW5kbGVDbGljaygpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmlzQ3VycmVudCA/ICdjdXJyZW50JyA6IG51bGx9PlxuICAgICAgICAgICAgXHQ8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBocmVmPXt0aGlzLnByb3BzLnVybH0+XG4gICAgICAgICAgICBcdFx0e3RoaXMucHJvcHMubmFtZX1cblx0ICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxudmFyIEhhbWJ1cmdlck1lbnUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge2NsYXNzTmFtZTogJ2ljb24tYmFyJ30pO1xuXG52YXIgTmF2YmFyQnJhbmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1uYW1lXCIgaHJlZj1cIi4vaW5kZXguaHRtbFwiPlxuICAgICAgICAgICAge2hlYWRpbmd9XG4gICAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBUYWJzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGhhbmRsZUNsaWNrOiBmdW5jdGlvbih0YWIpe1xuICAgIFx0dGhpcy5wcm9wcy5jaGFuZ2VUYWIodGFiKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxuYXYgaWQ9XCJwb3J0Zm9saW8tbmF2YmFyXCIgY2xhc3NOYW1lPVwibmF2YmFyXCIgcm9sZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXItaW50ZXJpb3JcIj5cbiAgICAgICAgICAgICAgPE5hdmJhckJyYW5kIC8+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRhYkxpc3QubWFwKGZ1bmN0aW9uKHRhYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcywgdGFiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0YWIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17dGFiLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGFiLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ3VycmVudD17KHRoaXMucHJvcHMuY3VycmVudFRhYiA9PT0gdGFiLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuXG5cbnZhciBjb250YWN0TWUgPSA8cD5IYXZlIGEgY29vbCBwcm9qZWN0IGluIG1pbmQgYW5kIHRoaW5rIEkgY291bGQgaGVscCB5b3Ugd2l0aCBpdD8gRmVlbCBmcmVlIHRvIGVtYWlsIG1lIGF0IHtlbWFpbE1lfS4gT3IgdmlldyBteSByZXN1bWUgaGVyZS48L3A+O1xuXG52YXIgQ29udGFjdFNsaWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5Db250YWN0PC9oMj5cbiAgICAgICAgPHA+e2NvbnRhY3RNZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIENvbnRlbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuY3VycmVudFRhYiA9PT0gMCA/XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICAgICAgICAgICAgICA8SG9tZVNsaWRlciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXHQ6bnVsbH1cblxuICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5jdXJyZW50VGFiID09PSAxID9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9zLm1sa3Noay5jb20vci8xMDRUTlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcdDpudWxsfVxuXG4gICAgICAgICAgICBcdHt0aGlzLnByb3BzLmN1cnJlbnRUYWIgPT09IDIgP1xuICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImFib3V0XCI+XG4gICAgICAgICAgICBcdFx0PEFib3V0U2xpZGVyIC8+XG4gICAgICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgXHQ6bnVsbH1cblxuICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5jdXJyZW50VGFiID09PSAzID9cblx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICBcdFx0PENvbnRhY3RTbGlkZXIgLz5cbiAgICAgICAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgICBcdDpudWxsfVxuXG4gICAgICAgICAgICBcdHt0aGlzLnByb3BzLmN1cnJlbnRUYWIgPT09IDQgP1xuICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIndyaXRpbmdzXCI+XG4gICAgICAgICAgICBcdFx0PFdyaXRpbmdzU2xpZGVyIC8+XG4gICAgICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgXHQ6bnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5cbnZhciBQb3J0Zm9saW9OYXYgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFiTGlzdDogdGFiTGlzdCxcbiAgICAgICAgICAgIGN1cnJlbnRUYWI6IDBcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY2hhbmdlVGFiOiBmdW5jdGlvbih0YWIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRUYWI6IHRhYi5pZCB9KTtcbiAgICB9LFxuXG4gICAgZmFkZU91dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcblxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICBcdFx0Y3VycmVudFRhYj17dGhpcy5zdGF0ZS5jdXJyZW50VGFifVxuICAgICAgICAgICAgXHRcdHRhYkxpc3Q9e3RoaXMuc3RhdGUudGFiTGlzdH1cbiAgICAgICAgICAgIFx0XHRjaGFuZ2VUYWI9e3RoaXMuY2hhbmdlVGFifVxuICAgICAgICAgICAgXHQvPlxuICAgICAgICAgICAgXHQ8Q29udGVudCBjdXJyZW50VGFiPXt0aGlzLnN0YXRlLmN1cnJlbnRUYWJ9IC8+XG4gICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFBvcnRmb2xpb05hdiAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcbik7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcclxuXHJcbnZhciBBYm91dFNsaWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtc2xpZGVyXCI+XHJcbiAgICAgICAgPGgyPkFib3V0PC9oMj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBNeSBuYW1lIGlzIERvcmVlbiBUcmluaCBhbmQgbXkgYmFja2dyb3VuZCBsaWVzIGluIEludGVybmF0aW9uYWwgU3R1ZGllcyB3aXRoIGEgc3BlY2lhbGl6YXRpb24gaW4gZWNvbm9taWNzIGZyb20gVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLCBJcnZpbmUuIE91dHNpZGUgb2YgbXkgZWR1Y2F0aW9uIGF0IFVDSSwgSSBoYXZlIGFsc28gc3R1ZGllZCBhdCBFYXN0IENoaW5hIE5vcm1hbCBVbml2ZXJzaXR5ICjljY7luIjlpKcpIGluIFNoYW5naGFpLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEFzIHRoZSBnbG9iYWwgZWNvbm9teSBjb250aW51ZXMgdG8gZXhwYW5kLCB0aGUgbmVlZCB0byBjb25uZWN0IGJ1c2luZXNzZXMgdG8gY2xpZW50cyByaXNlcyBvbiBhIG11bHRpbmF0aW9uYWwgc2NhbGUuIEFzIGEgZnJvbnQtZW5kIGRldmVsb3BlciBhbmQgYSBzcGVjaWFsaXN0IHdobyB1bmRlcnN0YW5kcyB0aGUgZGl2ZXJzaXR5IG9mIHRoZSB3b3JsZHdpZGUgZWNvbm9teSwgSSBicmlkZ2UgdGhlIGdhcCBiZXR3ZWVuIGJ1c2luZXNzZXMgYW5kIGNsaWVudHMgb24gYW4gaW50ZXJuYXRpb25hbCBzY2FsZSBieSBoZWxwaW5nIHRoZW0gY29tbXVuaWNhdGUgZGlnaXRhbGx5IHRocm91Z2ggY29kZS5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBXaGVuIEkgYW0gbm90IGNvZGluZyB0aGUgZGF5IGF3YXksIHlvdSBjb3VsZCBub3JtYWxseSBmaW5kIG1lIGhpa2luZyBpbiB0aGUgd29vZHMsIGRpc2NvdmVyaW5nIG5ldyBlYXRlcmllcyBpbiB0aGUgY2l0eSBvciB0cnlpbmcgb3V0IDMgY29mZmVlIHNob3BzIGEgZGF5LlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFib3V0U2xpZGVyO1xyXG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcclxuXHJcbnZhciBnaXRodWIgPSB7XHJcbiAgdGl0bGU6ICdHaXRIdWInLFxyXG4gIHNyYzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90cmluaGRtJ1xyXG59O1xyXG5cclxudmFyIGZvb3Rlckxpc3QgPSBbXHJcbiAgICAnR2l0aHViJywgJ0UtTWFpbCdcclxuXTtcclxuXHJcbi8vIHZhciBmb290ZXJMaXN0ID0ge1xyXG4vLyAgIGdpdGh1YjogJ3RyaW5oZG0uZ2l0aHViLmlvJyxcclxuLy8gICBlbWFpbDogJ2RvcmVlbm10cmluaEBnbWFpbC5jb20nXHJcbi8vIH07XHJcblxyXG52YXIgRm9vdGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwicG9ydGZvbGlvLWZvb3RlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWZvb3Rlci1pbnRlcmlvclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBmb290ZXItY29weXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIERvcmVlbiBUcmluaFxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBmb290ZXItbGlua3NcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGZvb3Rlckxpc3QubWFwKGZ1bmN0aW9uIChmb290bmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua1wiPntmb290bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGb290ZXI7XHJcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xyXG4vLyB2YXIgU2Nyb2xsRWZmZWN0ID0gcmVxdWlyZSgnLi9zY3JvbGwtZWZmZWN0cy5qcycpLmRlZmF1bHQ7XHJcblxyXG52YXIgU2VsZWN0ZWRQcm9qZWN0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRodW1ibmFpbCBjb2wtbWQtNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10aHVtYm5haWwtd3JhcFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMucHJvamVjdEltYWdlfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRodW1ibmFpbC10ZXh0XCI+XHJcbiAgICAgICAgICAgIDxoND57dGhpcy5wcm9wcy5wcm9qZWN0VGl0bGV9PC9oND5cclxuICAgICAgICAgICAgPGg1Pnt0aGlzLnByb3BzLnByb2plY3RUeXBlfTwvaDU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG52YXIgUmVjZW50V3JpdGluZ3MgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgc2NyZWFtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBhbGVydCgnQUFBQUFBQUFISEghISEhIScpO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB3cml0aW5ncy1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuYmxvZ1RpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8aDQ+e3RoaXMucHJvcHMuYmxvZ0RhdGV9PC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5ibG9nRGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgPGEgaHJlZj17dGhpcy5wcm9wcy5ibG9nTGlua30+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNjcmVhbX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi12aWV3LXBvc3RcIj5WaWV3IFBvc3Q8L2J1dHRvbj48L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbnZhciBIb21lU2xpZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIGZhZGVPblNjcm9sbDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBoaWRlIG91ciBlbGVtZW50IG9uIHBhZ2UgbG9hZFxyXG4gICAgJCgnI3NlbGVjdGVkLXByb2plY3RzJykuY3NzKCdvcGFjaXR5JywgMCk7XHJcblxyXG4gICAgJCgnI3NlbGVjdGVkLXByb2plY3RzJykud2F5cG9pbnQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJyNzZWxlY3RlZC1wcm9qZWN0cycpLmFkZENsYXNzKCdmYWRlSW5MZWZ0Jyk7XHJcbiAgICB9LCB7IG9mZnNldDogJzUwJScgfSk7XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctbm8tbWFyZ2luIHJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWludHJvIGNvbC1tZC0xMFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbWFsbCB3aXRoLW1hcmdpblwiPuKAkyBIaSE8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImludHJvLXRleHRcIj5NeSBuYW1lIGlzIDxiPkRvcmVlbiBUcmluaDwvYj4sXHJcbiAgICAgICAgICAgIGFuZCBJIGFtIGEganVuaW9yIDxiPkZyb250LUVuZCBEZXZlbG9wZXI8L2I+IGFuZCA8Yj5EZXNpZ25lcjwvYj4gZnJvbSBTb3V0aGVybiBDYWxpZm9ybmlhLCBjdXJyZW50bHkgd29ya2luZyBhcyBhIGZyZWVsYW5jZXIuPGJyIC8+IEkgc3RhbmQgb24gYSBzd2VldCBzcG90IHdoZXJlIGRlc2lnbiAmIGNvZGUgaW50ZXJzZWN0cy5cclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic21hbGwgd2l0aC1tYXJnaW5cIj48YSBocmVmPVwiLi9hYm91dFwiPuKAkyBSZWFkIG1vcmUgYWJvdXQgbWUg4oaSPC9hPjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic21hbGwgd2l0aC1tYXJnaW5cIj48YSBocmVmPVwibWFpbHRvOmRvcmVlbm10cmluaEBnbWFpbC5jb21cIj7igJMgU2VuZCBtZSBhbiBlbWFpbCAoZG9yZWVubXRyaW5oQGdtYWlsLmNvbSkg4oaSPC9hPjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic21hbGxcIj7igJMgRmluZCBtZSBvbjwvcD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlua3Mtd3JhcFwiPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdHJpbmhkbS9cIiBjbGFzc05hbWU9XCJsaW5rc1wiPkdpdEh1YjwvYT48L3NwYW4+IOKAkyA8YSBjbGFzc05hbWU9XCJsaW5rc1wiPkJlaGFuY2U8L2E+IOKAkyA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RvcmVlbi10cmluaC0zNzhhOTkxMDBcIiBjbGFzc05hbWU9XCJsaW5rc1wiPkxpbmtlZEluPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMj5TZWxlY3RlZCBQcm9qZWN0czwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBpZD1cInNlbGVjdGVkLXByb2plY3RzXCIgb25TY3JvbGw9e3RoaXMuZmFkZU9uU2Nyb2xsfT5cclxuICAgICAgICAgIDxTZWxlY3RlZFByb2plY3RzIHByb2plY3RUaXRsZT1cIkZvcmVncm91bmQgU3R1ZGlvc1wiIHByb2plY3RUeXBlPVwiV29yZFByZXNzLCBXZWIgRGV2ZWxvcG1lbnRcIiBwcm9qZWN0SW1hZ2U9XCIuL2Fzc2V0cy9pbWcvZm9yZWdyb3VuZC5qcGdcIiAvPlxyXG5cclxuICAgICAgICAgIDxTZWxlY3RlZFByb2plY3RzIHByb2plY3RUaXRsZT1cIkFuZGVyc29uIERlbnRpc3RyeVwiIHByb2plY3RUeXBlPVwiV29yZFByZXNzLCBXZWIgRGVzaWduLCBXZWIgRGV2ZWxvcG1lbnRcIiBwcm9qZWN0SW1hZ2U9XCIuL2Fzc2V0cy9pbWcvYW5kZXJzb24uanBnXCIgLz5cclxuXHJcbiAgICAgICAgICA8U2VsZWN0ZWRQcm9qZWN0cyBwcm9qZWN0VGl0bGU9XCJTb3VuZENsb3VkOiBDYXNlIFN0dWR5XCIgcHJvamVjdFR5cGU9XCJVSS9VWFwiIHByb2plY3RJbWFnZT1cImh0dHA6Ly90cmluaGRtLmdpdGh1Yi5pby9hc3NldHMvaW1nL2Jsb2dfOC0zMF9zY19tYWNib29rX3ByZXZpZXdfbWluZS5qcGdcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDI+V3JpdGluZ3M8L2gyPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8UmVjZW50V3JpdGluZ3MgYmxvZ1RpdGxlPVwiTGlmZVwiIGJsb2dEYXRlPVwiMDkuMTIuMTZcIiBibG9nTGluaz1cIi4vd3JpdGluZ3MvMjAxNi0wOS0xMi1wcm9ncmVzcy5odG1sXCIgYmxvZ0Rlc2NyaXB0aW9uPVwiQSBicmFpbi1kdW1wIG9mIG15IHJlY2VudCBleHBlcmllbmNlcyAtIG1vdmluZyBmcm9tIHVuaXZlcnNpdHkgc3lsbGFiaSB0byBhbiBldmVyLWNoYW5naW5nIGluZHVzdHJ5LlwiIC8+XHJcblxyXG4gICAgICAgICAgPFJlY2VudFdyaXRpbmdzIGJsb2dUaXRsZT1cIkZhdm9yaXRlIFJlc291cmNlc1wiIGJsb2dEYXRlPVwiMDkuMDUuMTZcIiBibG9nRGVzY3JpcHRpb249XCJBIGNvbXByZWhlbnNpdmUgbGlzdCBvZiBteSBwZXJzb25hbCBmYXZvcml0ZSByZXNvdXJjZXMgYW5kIHRvb2xzIGZvciB3ZWIgZGVzaWduIGFuZCBkZXZlbG9wbWVudC5cIiAvPlxyXG5cclxuICAgICAgICAgIDxSZWNlbnRXcml0aW5ncyBibG9nVGl0bGU9XCJTb3VuZENsb3VkXCIgYmxvZ0RhdGU9XCIwOC4zMC4xNlwiIGJsb2dEZXNjcmlwdGlvbj1cIlNvdW5kQ2xvdWTigJlzIGN1cnJlbnQgZGVzaWduIGdldHMgdGhlIGpvYiBkb25lLCBidXQgSSBmZWVsIGxpa2UgdGhleSBjb3VsZCBtYWtlIHNldmVyYWwgaW1wcm92ZW1lbnRzIHRvIHRoZWlyIFVYL1VJLiBJdCBoYXMgY29tZSBhIGxvbmcgd2F5IHNpbmNlIEkgc3RhcnRlZCB1c2luZyBTb3VuZENsb3VkIGJhY2sgaW4gMjAxMywgYnV0IHRoZWlyIGludGVyZmFjZSBzdGlsbCBmZWVscyBjbHV0dGVyZWQgYW5kIHVuY2xlYW4uXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWVTbGlkZXI7XHJcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xyXG5cclxuXHJcbnZhciBXcml0aW5ncyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBzY3JlYW06IGZ1bmN0aW9uICgpIHtcclxuICAgIGFsZXJ0KCdBQUFBQUFBQUhISCEhISEhJyk7XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHdyaXRpbmdzLXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5ibG9nVGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxoND57dGhpcy5wcm9wcy5ibG9nRGF0ZX08L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmJsb2dEZXNjcmlwdGlvbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXt0aGlzLnByb3BzLmJsb2dMaW5rfT48YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2NyZWFtfSBjbGFzc05hbWU9XCJidG4gYnRuLXZpZXctcG9zdFwiPlZpZXcgUG9zdDwvYnV0dG9uPjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG52YXIgV3JpdGluZ3NTbGlkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGgyPldyaXRpbmdzPC9oMj5cclxuICAgICAgICA8cD5Tb21lIG9mIG15IG11c2luZ3Mgb24gd2ViIGRldmVsb3BtZW50LCBkZXNpZ24sIGFuZCBsaWZlLjwvcD5cclxuXHJcbiAgICAgICAgPFdyaXRpbmdzIGJsb2dUaXRsZT1cIlByb2dyZXNzXCIgYmxvZ0RhdGU9XCIwOS4xMi4xNlwiIGJsb2dEZXNjcmlwdGlvbj1cIkEgYnJhaW4tZHVtcCBvZiBteSByZWNlbnQgZXhwZXJpZW5jZXMgLSBtb3ZpbmcgZnJvbSB1bml2ZXJzaXR5IHN5bGxhYmkgdG8gYW4gZXZlci1jaGFuZ2luZyBpbmR1c3RyeS5cIiAvPlxyXG5cclxuICAgICAgICA8V3JpdGluZ3MgYmxvZ1RpdGxlPVwiRmF2b3JpdGUgUmVzb3VyY2VzXCIgYmxvZ0RhdGU9XCIwOS4wNS4xNlwiIGJsb2dEZXNjcmlwdGlvbj1cIkEgY29tcHJlaGVuc2l2ZSBsaXN0IG9mIG15IHBlcnNvbmFsIGZhdm9yaXRlIHJlc291cmNlcyBhbmQgdG9vbHMgZm9yIHdlYiBkZXNpZ24gYW5kIGRldmVsb3BtZW50LlwiIC8+XHJcblxyXG4gICAgICAgIDxXcml0aW5ncyBibG9nVGl0bGU9XCJTb3VuZENsb3VkXCIgYmxvZ0RhdGU9XCIwOC4zMC4xNlwiIGJsb2dEZXNjcmlwdGlvbj1cIk15IGNhc2Ugc3R1ZHkgYW5kIHJlZGVzaWduIG9mIG15IGZhdm9yaXRlIGFwcGxpY2F0aW9uLCBTb3VuZENsb3VkLiBUaGVpciBjdXJyZW50IGRlc2lnbiBnZXRzIHRoZSBqb2IgZG9uZSwgYnV0IEkgZmVlbCBsaWtlIHRoZXkgY291bGQgbWFrZSBzZXZlcmFsIGltcHJvdmVtZW50cyB0byB0aGVpciBVWC9VSS5cIiAvPlxyXG5cclxuICAgICAgICA8V3JpdGluZ3MgYmxvZ1RpdGxlPVwiUGFyYWxsYXggU2xpZGVyXCIgYmxvZ0RhdGU9XCIwNy4yMC4xNlwiIGJsb2dEZXNjcmlwdGlvbj1cIkkndmUgY3JlYXRlZCB0aGlzIHdhbGstdGhyb3VnaCBvbiBob3cgSSBjcmVhdGVkIHRoaXMgdGhyZWUgbGF5ZXJlZCDigJxzbGlkZXLigJ0gdGhhdCBmYWRlcyBmcm9tIGxheWVyIHRvIGxheWVyIG9uIHNjcm9sbC5cIiAvPlxyXG5cclxuICAgICAgICA8V3JpdGluZ3MgYmxvZ1RpdGxlPVwiUmV2aXNpdGluZyBMaW5rc1wiIGJsb2dEYXRlPVwiMDcuMDkuMTZcIiBibG9nRGVzY3JpcHRpb249XCJXaGF0ZXZlciBoYXBwZW5lZCB0byB2aXNpdGVkIGFuZCB1bnZpc2l0ZWQgbGlua3M/IE15IHRob3VnaHRzIG9uIHRoZSBsb3N0IFVYIHByYWN0aWNlIG9mIHN0eWxpbmcgdGhlbS5cIiAvPlxyXG5cclxuICAgICAgICA8V3JpdGluZ3MgYmxvZ1RpdGxlPVwiUmFkaW8gQnV0dG9ucyAmIFdwLUFkbWluXCIgYmxvZ0RhdGU9XCIwNi4xMy4xNlwiIGJsb2dEZXNjcmlwdGlvbj1cIkEgbmlmdHkgZ3VpZGUgb24gaG93IHRvIGltcGxlbWVudCByYWRpbyBidXR0b25zIGludG8geW91ciBXUC1BZG1pbi5cIiAvPlxyXG5cclxuICAgICAgICA8V3JpdGluZ3MgYmxvZ1RpdGxlPVwiUHNldWRvIEVsZW1lbnRzXCIgYmxvZ0RhdGU9XCIwNS4wNy4xNlwiIGJsb2dEZXNjcmlwdGlvbj1cIkluIHRoaXMgYmxvZyBwb3N0LCBJ4oCZbGwgZGlzY3VzcyBob3cgSSBkaWQgRm9yZWdyb3VuZCBTdHVkaW/igJlzIG5hdmlnYXRpb24sIHdoZXJlIEkgdXNlZCBkYXRhLWF0dHJpYnV0ZXMgYW5kIHBzZXVkby1lbGVtZW50cyB0byBjcmVhdGUgaW50ZXJlc3RpbmcgQ1NTIGhvdmVycy5cIiAvPlxyXG5cclxuICAgICAgICA8V3JpdGluZ3MgYmxvZ1RpdGxlPVwiQSBOb3QtU28tU2hvcnQgSW50cm9cIiBibG9nRGF0ZT1cIjA1LjA3LjE2XCIgYmxvZ0Rlc2NyaXB0aW9uPVwiSSdtIGxpa2UsICdoZXksIHdoYXQncyB1cCwgaGVsbG8/J1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBXcml0aW5nc1NsaWRlcjtcclxuIl19
