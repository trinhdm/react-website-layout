(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// either or would work
var React = require('react');
var ReactDOM = require('react-dom');
var HomeSlider = require('./components/home.js');
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

var AboutSlider = React.createClass({
  displayName: 'AboutSlider',

  render: function render() {
    return React.createElement(
      'div',
      null,
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
        React.createElement('img', { src: 'http://s.mlkshk.com/r/ZJPL' })
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

},{"./components/footer.js":2,"./components/home.js":3,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
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

},{"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
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

  scream: function scream() {
    alert('AAAAAAAAHHH!!!!!');
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

},{"react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qcyIsImFwcFxcY29tcG9uZW50c1xcZm9vdGVyLmpzIiwiYXBwXFxjb21wb25lbnRzXFxob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLElBQUksUUFBUSxRQUFRLE9BQVIsQ0FBWjtBQUNBLElBQUksV0FBVyxRQUFRLFdBQVIsQ0FBZjtBQUNBLElBQUksYUFBYSxRQUFRLHNCQUFSLENBQWpCO0FBQ0EsSUFBSSxTQUFTLFFBQVEsd0JBQVIsQ0FBYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLElBQUksVUFBVSw2QkFBZDs7QUFFQSxJQUFJLFVBQVUsQ0FDVixFQUFFLE1BQU0sQ0FBUixFQUFXLFFBQVEsRUFBbkIsRUFBdUIsT0FBTyxPQUE5QixFQURVLEVBRVYsRUFBRSxNQUFNLENBQVIsRUFBVyxRQUFRLFdBQW5CLEVBQWdDLE9BQU8sWUFBdkMsRUFGVSxFQUdWLEVBQUUsTUFBTSxDQUFSLEVBQVcsUUFBUSxPQUFuQixFQUE0QixPQUFPLFFBQW5DLEVBSFUsRUFJVixFQUFFLE1BQU0sQ0FBUixFQUFXLFFBQVEsU0FBbkIsRUFBOEIsT0FBTyxVQUFyQyxFQUpVLEVBS1YsRUFBRSxNQUFNLENBQVIsRUFBVyxRQUFRLFVBQW5CLEVBQStCLE9BQU8sV0FBdEMsRUFMVSxDQUFkOztBQVVBO0FBQ0E7QUFDQTtBQUNBLElBQUksVUFBVTtBQUFBO0FBQUEsSUFBRyxNQUFLLCtCQUFSO0FBQUE7QUFBQSxDQUFkOztBQUVBLElBQUksTUFBTSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDMUI7QUFDRSxlQUFhLHFCQUFTLENBQVQsRUFBVztBQUNwQixNQUFFLGNBQUY7QUFDSCxTQUFLLEtBQUwsQ0FBVyxXQUFYO0FBQ0EsR0FMdUI7O0FBT3hCLFVBQVEsa0JBQVU7QUFDZCxXQUNJO0FB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V0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUFBO0FBQUE7QUFERixPQURGO0FBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVJGO0FBU0U7QUFBQTtBQUFBLFVBQUssV0FBVSxLQUFmO0FBQ0UsNEJBQUMsZ0JBQUQsSUFBa0IsY0FBYSxvQkFBL0IsRUFBb0QsYUFBWSw0QkFBaEUsRUFBNkYsY0FBYSw2QkFBMUcsR0FERjtBQUdFLDRCQUFDLGdCQUFELElBQWtCLGNBQWEsb0JBQS9CLEVBQW9ELGFBQVksd0NBQWhFLEVBQXlHLGNBQWEsMkJBQXRILEdBSEY7QUFLRSw0QkFBQyxnQkFBRCxJQUFrQixjQUFhLHdCQUEvQixFQUF3RCxhQUFZLE9BQXBFLEVBQTRFLGNBQWEsMkVBQXpGO0FBTEYsT0FURjtBQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BakJGO0FBa0JFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLGNBQUQsSUFBZ0IsV0FBVSxNQUExQixFQUFpQyxVQUFTLFVBQTFDLEVBQXFELGlCQUFnQixzR0FBckUsR0FERjtBQUdFLDRCQUFDLGNBQUQsSUFBZ0IsV0FBVSxvQkFBMUIsRUFBK0MsVUFBUyxVQUF4RCxFQUFtRSxpQkFBZ0Isa0dBQW5GLEdBSEY7QUFLRSw0QkFBQyxjQUFELElBQWdCLFdBQVUsWUFBMUIsRUFBdUMsVUFBUyxVQUFoRCxFQUEyRCxpQkFBZ0Isa1BBQTNFO0FBTEY7QUFsQkYsS0FERjtBQTRCRDtBQWxDZ0MsQ0FBbEIsQ0FBakI7O0FBcUNBLE9BQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBlaXRoZXIgb3Igd291bGQgd29ya1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIEhvbWVTbGlkZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvaG9tZS5qcycpO1xudmFyIEZvb3RlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9mb290ZXIuanMnKTtcblxuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG4vLyBpbXBvcnQgU2VhcmNoYWJsZVRhYmxlIGZyb20gJy4vU2VhcmNoYWJsZVRhYmxlJztcbi8vIGltcG9ydCB7ZGF0YX0gZnJvbSAnLi9kYXRhJztcbi8vIGltcG9ydCBzbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xuXG4vLyBGaWx0ZXJhYmxlIENoZWF0U2hlZXQgQ29tcG9uZW50XG4vLyBSZWFjdERPTS5yZW5kZXIoIDxTZWFyY2hhYmxlVGFibGUgZGF0YT17ZGF0YX0vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaGFibGVUYWJsZScpICk7XG5cblxuLy8gd2hlbiB5b3UgY2xpY2sgb24gYSB0YWIsIGNhbGwgb25DbGljayBpbiB0aGUgdGFiJ3MgaHRtbCB0byBmYWRlIG9yIHNsaWRlIHRoZSBib2R5IHVzaW5nIGEgZnVuY3Rpb25cbi8vICAgIGxlc3NvbiAjOCBpbiBhZHZhbmNlZCBKU1ggaW4gY29kZWFjYWRlbXlcblxudmFyIGhlYWRpbmcgPSAnSGksIG15IG5hbWUgaXMgRG9yZWVuIFRyaW5oJzsgXG5cbnZhciB0YWJMaXN0ID0gW1xuICAgIHsgJ2lkJzogMCwgJ25hbWUnOiAnJywgJ3VybCc6ICcvaG9tZScgfSxcbiAgICB7ICdpZCc6IDEsICduYW1lJzogJ1BvcnRmb2xpbycsICd1cmwnOiAnL3BvcnRmb2xpbycgfSxcbiAgICB7ICdpZCc6IDIsICduYW1lJzogJ0Fib3V0JywgJ3VybCc6ICcvYWJvdXQnIH0sXG4gICAgeyAnaWQnOiAzLCAnbmFtZSc6ICdDb250YWN0JywgJ3VybCc6ICcvY29udGFjdCcgfSxcbiAgICB7ICdpZCc6IDQsICduYW1lJzogJ1dyaXRpbmdzJywgJ3VybCc6ICcvd3JpdGluZ3MnIH1cbl07XG5cblxuXG4vLyB3aXRob3V0IEpTWFxuLy8gdmFyIGVtYWlsTWUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywge2hyZWY6ICdtYWlsdG86ZG9yZWVubXRyaW5oQGdtYWlsLmNvbSd9LCAnZG9yZWVubXRyaW5oQGdtYWlsLmNvbScpO1xuLy8gd2l0aCBKU1hcbnZhciBlbWFpbE1lID0gPGEgaHJlZj1cIm1haWx0bzpkb3JlZW5tdHJpbmhAZ21haWwuY29tXCI+ZG9yZWVubXRyaW5oQGdtYWlsLmNvbTwvYT47XG5cbnZhciBUYWIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIC8vIGhhbmRsZUNsaWNrIGlzIGFuIGV2ZW50IGxpc3RlbmVyIGluIGEgcmVuZGVyIGZ1bmN0aW9uXG4gICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXHR0aGlzLnByb3BzLmhhbmRsZUNsaWNrKCk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMuaXNDdXJyZW50ID8gJ2N1cnJlbnQnIDogbnVsbH0+XG4gICAgICAgICAgICBcdDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGhyZWY9e3RoaXMucHJvcHMudXJsfT5cbiAgICAgICAgICAgIFx0XHR7dGhpcy5wcm9wcy5uYW1lfVxuXHQgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG52YXIgSGFtYnVyZ2VyTWVudSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7Y2xhc3NOYW1lOiAnaWNvbi1iYXInfSk7XG5cbnZhciBOYXZiYXJCcmFuZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIubmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLW5hbWVcIiBocmVmPVwiL2hvbWVcIj5cbiAgICAgICAgICAgIHtoZWFkaW5nfVxuICAgICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgVGFicyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBoYW5kbGVDbGljazogZnVuY3Rpb24odGFiKXtcbiAgICBcdHRoaXMucHJvcHMuY2hhbmdlVGFiKHRhYik7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bmF2IGlkPVwicG9ydGZvbGlvLW5hdmJhclwiIGNsYXNzTmFtZT1cIm5hdmJhclwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibmF2YmFyLWludGVyaW9yXCI+XG4gICAgICAgICAgICAgIDxOYXZiYXJCcmFuZCAvPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50YWJMaXN0Lm1hcChmdW5jdGlvbih0YWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMsIHRhYil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFiLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3RhYi51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RhYi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnQ9eyh0aGlzLnByb3BzLmN1cnJlbnRUYWIgPT09IHRhYi5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cblxuXG52YXIgQWJvdXRTbGlkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+QWJvdXQ8L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTXkgbmFtZSBpcyBEb3JlZW4gVHJpbmggYW5kIG15IGJhY2tncm91bmQgbGllcyBpbiBJbnRlcm5hdGlvbmFsIFN0dWRpZXMgd2l0aCBhIHNwZWNpYWxpemF0aW9uIGluIGVjb25vbWljcyBmcm9tIFVuaXZlcnNpdHkgb2YgQ2FsaWZvcm5pYSwgSXJ2aW5lLiBPdXRzaWRlIG9mIG15IGVkdWNhdGlvbiBhdCBVQ0ksIEkgaGF2ZSBhbHNvIHN0dWRpZWQgYXQgRWFzdCBDaGluYSBOb3JtYWwgVW5pdmVyc2l0eSAo5Y2O5biI5aSnKSBpbiBTaGFuZ2hhaS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBBcyB0aGUgZ2xvYmFsIGVjb25vbXkgY29udGludWVzIHRvIGV4cGFuZCwgdGhlIG5lZWQgdG8gY29ubmVjdCBidXNpbmVzc2VzIHRvIGNsaWVudHMgcmlzZXMgb24gYSBtdWx0aW5hdGlvbmFsIHNjYWxlLiBBcyBhIGZyb250LWVuZCBkZXZlbG9wZXIgYW5kIGEgc3BlY2lhbGlzdCB3aG8gdW5kZXJzdGFuZHMgdGhlIGRpdmVyc2l0eSBvZiB0aGUgd29ybGR3aWRlIGVjb25vbXksIEkgYnJpZGdlIHRoZSBnYXAgYmV0d2VlbiBidXNpbmVzc2VzIGFuZCBjbGllbnRzIG9uIGFuIGludGVybmF0aW9uYWwgc2NhbGUgYnkgaGVscGluZyB0aGVtIGNvbW11bmljYXRlIGRpZ2l0YWxseSB0aHJvdWdoIGNvZGUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgV2hlbiBJIGFtIG5vdCBjb2RpbmcgdGhlIGRheSBhd2F5LCB5b3UgY291bGQgbm9ybWFsbHkgZmluZCBtZSBoaWtpbmcgaW4gdGhlIHdvb2RzLCBkaXNjb3ZlcmluZyBuZXcgZWF0ZXJpZXMgaW4gdGhlIGNpdHkgb3IgdHJ5aW5nIG91dCAzIGNvZmZlZSBzaG9wcyBhIGRheS5cbiAgICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIGNvbnRhY3RNZSA9IDxwPkhhdmUgYSBjb29sIHByb2plY3QgaW4gbWluZCBhbmQgdGhpbmsgSSBjb3VsZCBoZWxwIHlvdSB3aXRoIGl0PyBGZWVsIGZyZWUgdG8gZW1haWwgbWUgYXQge2VtYWlsTWV9LiBPciB2aWV3IG15IHJlc3VtZSBoZXJlLjwvcD47XG5cbnZhciBDb250YWN0U2xpZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkNvbnRhY3Q8L2gyPlxuICAgICAgICA8cD57Y29udGFjdE1lfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgQ29udGVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jdXJyZW50VGFiID09PSAwID9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxIb21lU2xpZGVyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcdDpudWxsfVxuXG4gICAgICAgICAgICBcdHt0aGlzLnByb3BzLmN1cnJlbnRUYWIgPT09IDEgP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3MubWxrc2hrLmNvbS9yLzEwNFROXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFx0Om51bGx9XG5cbiAgICAgICAgICAgIFx0e3RoaXMucHJvcHMuY3VycmVudFRhYiA9PT0gMiA/XG4gICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRcIj5cbiAgICAgICAgICAgIFx0XHQ8QWJvdXRTbGlkZXIgLz5cbiAgICAgICAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgICBcdDpudWxsfVxuXG4gICAgICAgICAgICBcdHt0aGlzLnByb3BzLmN1cnJlbnRUYWIgPT09IDMgP1xuXHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgIFx0XHQ8Q29udGFjdFNsaWRlciAvPlxuICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgIFx0Om51bGx9XG5cbiAgICAgICAgICAgIFx0e3RoaXMucHJvcHMuY3VycmVudFRhYiA9PT0gNCA/XG4gICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwid3JpdGluZ3NcIj5cbiAgICAgICAgICAgIFx0XHQ8aW1nIHNyYz1cImh0dHA6Ly9zLm1sa3Noay5jb20vci9aSlBMXCIgLz5cbiAgICAgICAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgICBcdDpudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cblxudmFyIFBvcnRmb2xpb05hdiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YWJMaXN0OiB0YWJMaXN0LFxuICAgICAgICAgICAgY3VycmVudFRhYjogMFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjaGFuZ2VUYWI6IGZ1bmN0aW9uKHRhYikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFRhYjogdGFiLmlkIH0pO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgIFx0XHRjdXJyZW50VGFiPXt0aGlzLnN0YXRlLmN1cnJlbnRUYWJ9XG4gICAgICAgICAgICBcdFx0dGFiTGlzdD17dGhpcy5zdGF0ZS50YWJMaXN0fVxuICAgICAgICAgICAgXHRcdGNoYW5nZVRhYj17dGhpcy5jaGFuZ2VUYWJ9XG4gICAgICAgICAgICBcdC8+XG4gICAgICAgICAgICBcdDxDb250ZW50IGN1cnJlbnRUYWI9e3RoaXMuc3RhdGUuY3VycmVudFRhYn0gLz5cbiAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cblJlYWN0LnJlbmRlcihcbiAgICA8UG9ydGZvbGlvTmF2IC8+LFxuICAgIGRvY3VtZW50LmJvZHlcbik7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcclxuXHJcbnZhciBnaXRodWIgPSB7XHJcbiAgdGl0bGU6ICdHaXRIdWInLFxyXG4gIHNyYzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90cmluaGRtJ1xyXG59O1xyXG5cclxudmFyIGZvb3Rlckxpc3QgPSBbXHJcbiAgICAnR2l0aHViJywgJ0UtTWFpbCdcclxuXTtcclxuXHJcbi8vIHZhciBmb290ZXJMaXN0ID0ge1xyXG4vLyAgIGdpdGh1YjogJ3RyaW5oZG0uZ2l0aHViLmlvJyxcclxuLy8gICBlbWFpbDogJ2RvcmVlbm10cmluaEBnbWFpbC5jb20nXHJcbi8vIH07XHJcblxyXG52YXIgRm9vdGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwicG9ydGZvbGlvLWZvb3RlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWZvb3Rlci1pbnRlcmlvclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBmb290ZXItY29weXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIERvcmVlbiBUcmluaFxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBmb290ZXItbGlua3NcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGZvb3Rlckxpc3QubWFwKGZ1bmN0aW9uIChmb290bmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua1wiPntmb290bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGb290ZXI7XHJcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xyXG5cclxudmFyIFNlbGVjdGVkUHJvamVjdHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10aHVtYm5haWwgY29sLW1kLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtdGh1bWJuYWlsLXdyYXBcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLnByb2plY3RJbWFnZX0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10aHVtYm5haWwtdGV4dFwiPlxyXG4gICAgICAgICAgICA8aDQ+e3RoaXMucHJvcHMucHJvamVjdFRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgIDxoNT57dGhpcy5wcm9wcy5wcm9qZWN0VHlwZX08L2g1PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIFJlY2VudFdyaXRpbmdzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB3cml0aW5ncy1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuYmxvZ1RpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8aDQ+e3RoaXMucHJvcHMuYmxvZ0RhdGV9PC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5ibG9nRGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgPGEgaHJlZj17dGhpcy5wcm9wcy5ibG9nTGlua30+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNjcmVhbX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi12aWV3LXBvc3RcIj5WaWV3IFBvc3Q8L2J1dHRvbj48L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIEhvbWVTbGlkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgc2NyZWFtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBhbGVydCgnQUFBQUFBQUFISEghISEhIScpO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LW5vLW1hcmdpbiByb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1pbnRybyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICA8aDE+SGksIG15IG5hbWUgaXMgRG9yZWVuIFRyaW5oLjwvaDE+XHJcbiAgICAgICAgICAgIEp1bmlvciBGcm9udC1FbmQgRGV2ZWxvcGVyIGFuZCBEZXNpZ25lciBmcm9tIFNvdXRoZXJuIENhbGlmb3JuaWEsIGN1cnJlbnRseSB3b3JraW5nIGFzIGFuIGluZGVwZW5kZW50IGNvbnRyYWN0b3IuIEkgc3RhbmQgb24gYSBzd2VldCBzcG90IHdoZXJlIGRlc2lnbiAmIGNvZGUgaW50ZXJzZWN0cy5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDI+U2VsZWN0ZWQgUHJvamVjdHM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8U2VsZWN0ZWRQcm9qZWN0cyBwcm9qZWN0VGl0bGU9XCJGb3JlZ3JvdW5kIFN0dWRpb3NcIiBwcm9qZWN0VHlwZT1cIldvcmRQcmVzcywgV2ViIERldmVsb3BtZW50XCIgcHJvamVjdEltYWdlPVwiLi9hc3NldHMvaW1nL2ZvcmVncm91bmQuanBnXCIgLz5cclxuXHJcbiAgICAgICAgICA8U2VsZWN0ZWRQcm9qZWN0cyBwcm9qZWN0VGl0bGU9XCJBbmRlcnNvbiBEZW50aXN0cnlcIiBwcm9qZWN0VHlwZT1cIldvcmRQcmVzcywgV2ViIERlc2lnbiwgV2ViIERldmVsb3BtZW50XCIgcHJvamVjdEltYWdlPVwiLi9hc3NldHMvaW1nL2FuZGVyc29uLmpwZ1wiIC8+XHJcblxyXG4gICAgICAgICAgPFNlbGVjdGVkUHJvamVjdHMgcHJvamVjdFRpdGxlPVwiU291bmRDbG91ZDogQ2FzZSBTdHVkeVwiIHByb2plY3RUeXBlPVwiVUkvVVhcIiBwcm9qZWN0SW1hZ2U9XCJodHRwOi8vdHJpbmhkbS5naXRodWIuaW8vYXNzZXRzL2ltZy9ibG9nXzgtMzBfc2NfbWFjYm9va19wcmV2aWV3X21pbmUuanBnXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGgyPldyaXRpbmdzPC9oMj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFJlY2VudFdyaXRpbmdzIGJsb2dUaXRsZT1cIkxpZmVcIiBibG9nRGF0ZT1cIjA5LjEyLjE2XCIgYmxvZ0Rlc2NyaXB0aW9uPVwiQSBicmFpbi1kdW1wIG9mIG15IHJlY2VudCBleHBlcmllbmNlcyAtIG1vdmluZyBmcm9tIHVuaXZlcnNpdHkgc3lsbGFiaSB0byBhbiBldmVyLWNoYW5naW5nIGluZHVzdHJ5LlwiIC8+XHJcblxyXG4gICAgICAgICAgPFJlY2VudFdyaXRpbmdzIGJsb2dUaXRsZT1cIkZhdm9yaXRlIFJlc291cmNlc1wiIGJsb2dEYXRlPVwiMDkuMDUuMTZcIiBibG9nRGVzY3JpcHRpb249XCJBIGNvbXByZWhlbnNpdmUgbGlzdCBvZiBteSBwZXJzb25hbCBmYXZvcml0ZSByZXNvdXJjZXMgYW5kIHRvb2xzIGZvciB3ZWIgZGVzaWduIGFuZCBkZXZlbG9wbWVudC5cIiAvPlxyXG5cclxuICAgICAgICAgIDxSZWNlbnRXcml0aW5ncyBibG9nVGl0bGU9XCJTb3VuZENsb3VkXCIgYmxvZ0RhdGU9XCIwOC4zMC4xNlwiIGJsb2dEZXNjcmlwdGlvbj1cIlNvdW5kQ2xvdWTigJlzIGN1cnJlbnQgZGVzaWduIGdldHMgdGhlIGpvYiBkb25lLCBidXQgSSBmZWVsIGxpa2UgdGhleSBjb3VsZCBtYWtlIHNldmVyYWwgaW1wcm92ZW1lbnRzIHRvIHRoZWlyIFVYL1VJLiBJdCBoYXMgY29tZSBhIGxvbmcgd2F5IHNpbmNlIEkgc3RhcnRlZCB1c2luZyBTb3VuZENsb3VkIGJhY2sgaW4gMjAxMywgYnV0IHRoZWlyIGludGVyZmFjZSBzdGlsbCBmZWVscyBjbHV0dGVyZWQgYW5kIHVuY2xlYW4uXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWVTbGlkZXI7XHJcbiJdfQ==
