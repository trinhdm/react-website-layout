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
        'h2',
        null,
        'Selected Projects'
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(SelectedProjects, { projectTitle: 'Foreground Studios', projectType: 'WordPress, Web Development', projectImage: './assets/img/foreground.jpg' }),
        React.createElement(SelectedProjects, { projectTitle: 'SoundCloud: Case Study', projectType: 'UI/UX', projectImage: 'http://trinhdm.github.io/assets/img/blog_8-30_sc_macbook_preview_mine.jpg' }),
        React.createElement(SelectedProjects, { projectTitle: 'Anderson Dentistry Redesign', projectType: 'WordPress, Web Design, Web Development', projectImage: './assets/img/anderson.jpg' }),
        React.createElement('div', { className: 'project-thumbnail col-md-6' })
      ),
      React.createElement(
        'h2',
        null,
        'Writings'
      ),
      React.createElement(
        'div',
        { className: 'row writings-row' },
        React.createElement(
          'div',
          { className: 'col-md-3' },
          React.createElement(
            'h3',
            null,
            'Life'
          ),
          React.createElement(
            'h4',
            null,
            '09.12.16'
          )
        ),
        React.createElement(
          'div',
          { className: 'col-md-7' },
          'A brain-dump of my recent experiences - moving from university syllabi to an ever-changing industry.'
        ),
        React.createElement(
          'div',
          { className: 'col-md-2' },
          React.createElement(
            'button',
            { onClick: this.scream, className: 'btn btn-view-post' },
            'View Post'
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'row writings-row' },
        React.createElement(
          'div',
          { className: 'col-md-3' },
          React.createElement(
            'h3',
            null,
            'Favorite Resources'
          ),
          React.createElement(
            'h4',
            null,
            '09.05.16'
          )
        ),
        React.createElement(
          'div',
          { className: 'col-md-7' },
          'A comprehensive list of my personal favorite resources and tools for web design and development.'
        ),
        React.createElement(
          'div',
          { className: 'col-md-2' },
          React.createElement(
            'button',
            { onClick: this.scream, className: 'btn btn-view-post' },
            'View Post'
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'row writings-row' },
        React.createElement(
          'div',
          { className: 'col-md-3' },
          React.createElement(
            'h3',
            null,
            'SoundCloud'
          ),
          React.createElement(
            'h4',
            null,
            '08.30.16'
          )
        ),
        React.createElement(
          'div',
          { className: 'col-md-7' },
          'SoundCloud’s current design gets the job done, but I feel like they could make several improvements to their UX/UI. It has come a long way since I started using SoundCloud back in 2013, but their interface still feels cluttered and unclean.'
        ),
        React.createElement(
          'div',
          { className: 'col-md-2' },
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

module.exports = HomeSlider;

},{"react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qcyIsImFwcFxcY29tcG9uZW50c1xcZm9vdGVyLmpzIiwiYXBwXFxjb21wb25lbnRzXFxob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLElBQUksUUFBUSxRQUFRLE9BQVIsQ0FBWjtBQUNBLElBQUksV0FBVyxRQUFRLFdBQVIsQ0FBZjtBQUNBLElBQUksYUFBYSxRQUFRLHNCQUFSLENBQWpCO0FBQ0EsSUFBSSxTQUFTLFFBQVEsd0JBQVIsQ0FBYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLElBQUksVUFBVSw2QkFBZDs7QUFFQSxJQUFJLFVBQVUsQ0FDVixFQUFFLE1BQU0sQ0FBUixFQUFXLFFBQVEsRUFBbkIsRUFBdUIsT0FBTyxPQUE5QixFQURVLEVBRVYsRUFBRSxNQUFNLENBQVIsRUFBVyxRQUFRLFdBQW5CLEVBQWdDLE9BQU8sWUFBdkMsRUFGVSxFQUdWLEVBQUUsTUFBTSxDQUFSLEVBQVcsUUFBUSxPQUFuQixFQUE0QixPQUFPLFFBQW5DLEVBSFUsRUFJVixFQUFFLE1BQU0sQ0FBUixFQUFXLFFBQVEsU0FBbkIsRUFBOEIsT0FBTyxVQUFyQyxFQUpVLEVBS1YsRUFBRSxNQUFNLENBQVIsRUFBVyxRQUFRLFVBQW5CLEVBQStCLE9BQU8sV0FBdEMsRUFMVSxDQUFkOztBQVVBO0FBQ0E7QUFDQTtBQUNBLElBQUksVUFBVTtBQUFBO0FBQUEsSUFBRyxNQUFLLCtCQUFSO0FBQUE7QUFBQSxDQUFkOztBQUVBLElBQUksTUFBTSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDMUI7QUFDRSxlQUFhLHFCQUFTLENBQVQsRUFBVztBQUNwQixNQUFFLGNBQUY7QUFDSCxTQUFLLEtBQUwsQ0FBVyxXQUFYO0FBQ0EsR0FMdUI7O0FBT3hCLFVBQVEsa0JBQVU7QUFDZCxXQUNJO0FB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O0FBUUU7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQVEsU0FBUyxLQUFLLE1BQXRCLEVBQThCLFdBQVUsbUJBQXhDO0FBQUE7QUFBQTtBQURGO0FBUkYsT0FkRjtBQTJCRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLFNBREY7QUFLRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFBQTtBQUFBLFNBTEY7QUFTRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsY0FBUSxTQUFTLEtBQUssTUFBdEIsRUFBOEIsV0FBVSxtQkFBeEM7QUFBQTtBQUFBO0FBREY7QUFURixPQTNCRjtBQXlDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLFNBREY7QUFLRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFBQTtBQUFBLFNBTEY7QUFTRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsY0FBUSxTQUFTLEtBQUssTUFBdEIsRUFBOEIsV0FBVSxtQkFBeEM7QUFBQTtBQUFBO0FBREY7QUFURjtBQXpDRixLQURGO0FBeUREO0FBL0RnQyxDQUFsQixDQUFqQjs7QUFrRUEsT0FBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGVpdGhlciBvciB3b3VsZCB3b3JrXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgSG9tZVNsaWRlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9ob21lLmpzJyk7XG52YXIgRm9vdGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Zvb3Rlci5qcycpO1xuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbi8vIGltcG9ydCBTZWFyY2hhYmxlVGFibGUgZnJvbSAnLi9TZWFyY2hhYmxlVGFibGUnO1xuLy8gaW1wb3J0IHtkYXRhfSBmcm9tICcuL2RhdGEnO1xuLy8gaW1wb3J0IHNsaWRlciBmcm9tICcuL3NsaWRlcic7XG5cbi8vIEZpbHRlcmFibGUgQ2hlYXRTaGVldCBDb21wb25lbnRcbi8vIFJlYWN0RE9NLnJlbmRlciggPFNlYXJjaGFibGVUYWJsZSBkYXRhPXtkYXRhfS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoYWJsZVRhYmxlJykgKTtcblxuXG4vLyB3aGVuIHlvdSBjbGljayBvbiBhIHRhYiwgY2FsbCBvbkNsaWNrIGluIHRoZSB0YWIncyBodG1sIHRvIGZhZGUgb3Igc2xpZGUgdGhlIGJvZHkgdXNpbmcgYSBmdW5jdGlvblxuLy8gICAgbGVzc29uICM4IGluIGFkdmFuY2VkIEpTWCBpbiBjb2RlYWNhZGVteVxuXG52YXIgaGVhZGluZyA9ICdIaSwgbXkgbmFtZSBpcyBEb3JlZW4gVHJpbmgnO1xuXG52YXIgdGFiTGlzdCA9IFtcbiAgICB7ICdpZCc6IDAsICduYW1lJzogJycsICd1cmwnOiAnL2hvbWUnIH0sXG4gICAgeyAnaWQnOiAxLCAnbmFtZSc6ICdQb3J0Zm9saW8nLCAndXJsJzogJy9wb3J0Zm9saW8nIH0sXG4gICAgeyAnaWQnOiAyLCAnbmFtZSc6ICdBYm91dCcsICd1cmwnOiAnL2Fib3V0JyB9LFxuICAgIHsgJ2lkJzogMywgJ25hbWUnOiAnQ29udGFjdCcsICd1cmwnOiAnL2NvbnRhY3QnIH0sXG4gICAgeyAnaWQnOiA0LCAnbmFtZSc6ICdXcml0aW5ncycsICd1cmwnOiAnL3dyaXRpbmdzJyB9XG5dO1xuXG5cblxuLy8gd2l0aG91dCBKU1hcbi8vIHZhciBlbWFpbE1lID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiAnbWFpbHRvOmRvcmVlbm10cmluaEBnbWFpbC5jb20nfSwgJ2RvcmVlbm10cmluaEBnbWFpbC5jb20nKTtcbi8vIHdpdGggSlNYXG52YXIgZW1haWxNZSA9IDxhIGhyZWY9XCJtYWlsdG86ZG9yZWVubXRyaW5oQGdtYWlsLmNvbVwiPmRvcmVlbm10cmluaEBnbWFpbC5jb208L2E+O1xuXG52YXIgVGFiID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAvLyBoYW5kbGVDbGljayBpcyBhbiBldmVudCBsaXN0ZW5lciBpbiBhIHJlbmRlciBmdW5jdGlvblxuICAgIGhhbmRsZUNsaWNrOiBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFx0dGhpcy5wcm9wcy5oYW5kbGVDbGljaygpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmlzQ3VycmVudCA/ICdjdXJyZW50JyA6IG51bGx9PlxuICAgICAgICAgICAgXHQ8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBocmVmPXt0aGlzLnByb3BzLnVybH0+XG4gICAgICAgICAgICBcdFx0e3RoaXMucHJvcHMubmFtZX1cblx0ICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxudmFyIEhhbWJ1cmdlck1lbnUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge2NsYXNzTmFtZTogJ2ljb24tYmFyJ30pO1xuXG52YXIgTmF2YmFyQnJhbmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1uYW1lXCIgaHJlZj1cIi9ob21lXCI+XG4gICAgICAgICAgICB7aGVhZGluZ31cbiAgICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIFRhYnMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKHRhYil7XG4gICAgXHR0aGlzLnByb3BzLmNoYW5nZVRhYih0YWIpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPG5hdiBpZD1cInBvcnRmb2xpby1uYXZiYXJcIiBjbGFzc05hbWU9XCJuYXZiYXJcIiByb2xlPVwibmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhci1pbnRlcmlvclwiPlxuICAgICAgICAgICAgICA8TmF2YmFyQnJhbmQgLz5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGFiTGlzdC5tYXAoZnVuY3Rpb24odGFiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzLCB0YWIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhYi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXt0YWIudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0YWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDdXJyZW50PXsodGhpcy5wcm9wcy5jdXJyZW50VGFiID09PSB0YWIuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICA8L3VsPiBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuXG5cbnZhciBBYm91dFNsaWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5BYm91dDwvaDI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBNeSBuYW1lIGlzIERvcmVlbiBUcmluaCBhbmQgbXkgYmFja2dyb3VuZCBsaWVzIGluIEludGVybmF0aW9uYWwgU3R1ZGllcyB3aXRoIGEgc3BlY2lhbGl6YXRpb24gaW4gZWNvbm9taWNzIGZyb20gVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLCBJcnZpbmUuIE91dHNpZGUgb2YgbXkgZWR1Y2F0aW9uIGF0IFVDSSwgSSBoYXZlIGFsc28gc3R1ZGllZCBhdCBFYXN0IENoaW5hIE5vcm1hbCBVbml2ZXJzaXR5ICjljY7luIjlpKcpIGluIFNoYW5naGFpLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEFzIHRoZSBnbG9iYWwgZWNvbm9teSBjb250aW51ZXMgdG8gZXhwYW5kLCB0aGUgbmVlZCB0byBjb25uZWN0IGJ1c2luZXNzZXMgdG8gY2xpZW50cyByaXNlcyBvbiBhIG11bHRpbmF0aW9uYWwgc2NhbGUuIEFzIGEgZnJvbnQtZW5kIGRldmVsb3BlciBhbmQgYSBzcGVjaWFsaXN0IHdobyB1bmRlcnN0YW5kcyB0aGUgZGl2ZXJzaXR5IG9mIHRoZSB3b3JsZHdpZGUgZWNvbm9teSwgSSBicmlkZ2UgdGhlIGdhcCBiZXR3ZWVuIGJ1c2luZXNzZXMgYW5kIGNsaWVudHMgb24gYW4gaW50ZXJuYXRpb25hbCBzY2FsZSBieSBoZWxwaW5nIHRoZW0gY29tbXVuaWNhdGUgZGlnaXRhbGx5IHRocm91Z2ggY29kZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXaGVuIEkgYW0gbm90IGNvZGluZyB0aGUgZGF5IGF3YXksIHlvdSBjb3VsZCBub3JtYWxseSBmaW5kIG1lIGhpa2luZyBpbiB0aGUgd29vZHMsIGRpc2NvdmVyaW5nIG5ldyBlYXRlcmllcyBpbiB0aGUgY2l0eSBvciB0cnlpbmcgb3V0IDMgY29mZmVlIHNob3BzIGEgZGF5LlxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgY29udGFjdE1lID0gPHA+SGF2ZSBhIGNvb2wgcHJvamVjdCBpbiBtaW5kIGFuZCB0aGluayBJIGNvdWxkIGhlbHAgeW91IHdpdGggaXQ/IEZlZWwgZnJlZSB0byBlbWFpbCBtZSBhdCB7ZW1haWxNZX0uIE9yIHZpZXcgbXkgcmVzdW1lIGhlcmUuPC9wPjtcblxudmFyIENvbnRhY3RTbGlkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+Q29udGFjdDwvaDI+XG4gICAgICAgIDxwPntjb250YWN0TWV9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBDb250ZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmN1cnJlbnRUYWIgPT09IDAgP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgICAgICAgICAgICAgPEhvbWVTbGlkZXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFx0Om51bGx9XG5cbiAgICAgICAgICAgIFx0e3RoaXMucHJvcHMuY3VycmVudFRhYiA9PT0gMSA/XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcy5tbGtzaGsuY29tL3IvMTA0VE5cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXHQ6bnVsbH1cblxuICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5jdXJyZW50VGFiID09PSAyID9cbiAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPlxuICAgICAgICAgICAgXHRcdDxBYm91dFNsaWRlciAvPlxuICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgIFx0Om51bGx9XG5cbiAgICAgICAgICAgIFx0e3RoaXMucHJvcHMuY3VycmVudFRhYiA9PT0gMyA/XG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgXHRcdDxDb250YWN0U2xpZGVyIC8+XG4gICAgICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgXHQ6bnVsbH1cblxuICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5jdXJyZW50VGFiID09PSA0ID9cbiAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJ3cml0aW5nc1wiPlxuICAgICAgICAgICAgXHRcdDxpbWcgc3JjPVwiaHR0cDovL3MubWxrc2hrLmNvbS9yL1pKUExcIiAvPlxuICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgIFx0Om51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuXG52YXIgUG9ydGZvbGlvTmF2ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhYkxpc3Q6IHRhYkxpc3QsXG4gICAgICAgICAgICBjdXJyZW50VGFiOiAwXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNoYW5nZVRhYjogZnVuY3Rpb24odGFiKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VGFiOiB0YWIuaWQgfSk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgXHRcdGN1cnJlbnRUYWI9e3RoaXMuc3RhdGUuY3VycmVudFRhYn1cbiAgICAgICAgICAgIFx0XHR0YWJMaXN0PXt0aGlzLnN0YXRlLnRhYkxpc3R9XG4gICAgICAgICAgICBcdFx0Y2hhbmdlVGFiPXt0aGlzLmNoYW5nZVRhYn1cbiAgICAgICAgICAgIFx0Lz5cbiAgICAgICAgICAgIFx0PENvbnRlbnQgY3VycmVudFRhYj17dGhpcy5zdGF0ZS5jdXJyZW50VGFifSAvPlxuICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuUmVhY3QucmVuZGVyKFxuICAgIDxQb3J0Zm9saW9OYXYgLz4sXG4gICAgZG9jdW1lbnQuYm9keVxuKTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xyXG5cclxudmFyIGdpdGh1YiA9IHtcclxuICB0aXRsZTogJ0dpdEh1YicsXHJcbiAgc3JjOiAnaHR0cHM6Ly9naXRodWIuY29tL3RyaW5oZG0nXHJcbn07XHJcblxyXG52YXIgZm9vdGVyTGlzdCA9IFtcclxuICAgICdHaXRodWInLCAnRS1NYWlsJ1xyXG5dO1xyXG5cclxuLy8gdmFyIGZvb3Rlckxpc3QgPSB7XHJcbi8vICAgZ2l0aHViOiAndHJpbmhkbS5naXRodWIuaW8nLFxyXG4vLyAgIGVtYWlsOiAnZG9yZWVubXRyaW5oQGdtYWlsLmNvbSdcclxuLy8gfTtcclxuXHJcbnZhciBGb290ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJwb3J0Zm9saW8tZm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZm9vdGVyLWludGVyaW9yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGZvb3Rlci1jb3B5cmlnaHRcIj5cclxuICAgICAgICAgICAgRG9yZWVuIFRyaW5oXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGZvb3Rlci1saW5rc1wiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZm9vdGVyTGlzdC5tYXAoZnVuY3Rpb24gKGZvb3RuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1saW5rXCI+e2Zvb3RuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlcjtcclxuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XHJcblxyXG52YXIgU2VsZWN0ZWRQcm9qZWN0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRodW1ibmFpbCBjb2wtbWQtNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10aHVtYm5haWwtd3JhcFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMucHJvamVjdEltYWdlfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRodW1ibmFpbC10ZXh0XCI+XHJcbiAgICAgICAgICAgIDxoND57dGhpcy5wcm9wcy5wcm9qZWN0VGl0bGV9PC9oND5cclxuICAgICAgICAgICAgPGg1Pnt0aGlzLnByb3BzLnByb2plY3RUeXBlfTwvaDU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG52YXIgSG9tZVNsaWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBzY3JlYW06IGZ1bmN0aW9uICgpIHtcclxuICAgIGFsZXJ0KCdBQUFBQUFBQUhISCEhISEhJyk7XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPlNlbGVjdGVkIFByb2plY3RzPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPFNlbGVjdGVkUHJvamVjdHMgcHJvamVjdFRpdGxlPVwiRm9yZWdyb3VuZCBTdHVkaW9zXCIgcHJvamVjdFR5cGU9XCJXb3JkUHJlc3MsIFdlYiBEZXZlbG9wbWVudFwiIHByb2plY3RJbWFnZT1cIi4vYXNzZXRzL2ltZy9mb3JlZ3JvdW5kLmpwZ1wiIC8+XHJcblxyXG4gICAgICAgICAgPFNlbGVjdGVkUHJvamVjdHMgcHJvamVjdFRpdGxlPVwiU291bmRDbG91ZDogQ2FzZSBTdHVkeVwiIHByb2plY3RUeXBlPVwiVUkvVVhcIiBwcm9qZWN0SW1hZ2U9XCJodHRwOi8vdHJpbmhkbS5naXRodWIuaW8vYXNzZXRzL2ltZy9ibG9nXzgtMzBfc2NfbWFjYm9va19wcmV2aWV3X21pbmUuanBnXCIgLz5cclxuXHJcbiAgICAgICAgICA8U2VsZWN0ZWRQcm9qZWN0cyBwcm9qZWN0VGl0bGU9XCJBbmRlcnNvbiBEZW50aXN0cnkgUmVkZXNpZ25cIiBwcm9qZWN0VHlwZT1cIldvcmRQcmVzcywgV2ViIERlc2lnbiwgV2ViIERldmVsb3BtZW50XCIgcHJvamVjdEltYWdlPVwiLi9hc3NldHMvaW1nL2FuZGVyc29uLmpwZ1wiIC8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRodW1ibmFpbCBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMj5Xcml0aW5nczwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgd3JpdGluZ3Mtcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgIDxoMz5MaWZlPC9oMz5cclxuICAgICAgICAgICAgPGg0PjA5LjEyLjE2PC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICBBIGJyYWluLWR1bXAgb2YgbXkgcmVjZW50IGV4cGVyaWVuY2VzIC0gbW92aW5nIGZyb20gdW5pdmVyc2l0eSBzeWxsYWJpIHRvIGFuIGV2ZXItY2hhbmdpbmcgaW5kdXN0cnkuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNjcmVhbX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi12aWV3LXBvc3RcIj5WaWV3IFBvc3Q8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB3cml0aW5ncy1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgPGgzPkZhdm9yaXRlIFJlc291cmNlczwvaDM+XHJcbiAgICAgICAgICAgIDxoND4wOS4wNS4xNjwvaDQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgQSBjb21wcmVoZW5zaXZlIGxpc3Qgb2YgbXkgcGVyc29uYWwgZmF2b3JpdGUgcmVzb3VyY2VzIGFuZCB0b29scyBmb3Igd2ViIGRlc2lnbiBhbmQgZGV2ZWxvcG1lbnQuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zY3JlYW19IGNsYXNzTmFtZT1cImJ0biBidG4tdmlldy1wb3N0XCI+VmlldyBQb3N0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgd3JpdGluZ3Mtcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgIDxoMz5Tb3VuZENsb3VkPC9oMz5cclxuICAgICAgICAgICAgPGg0PjA4LjMwLjE2PC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICBTb3VuZENsb3Vk4oCZcyBjdXJyZW50IGRlc2lnbiBnZXRzIHRoZSBqb2IgZG9uZSwgYnV0IEkgZmVlbCBsaWtlIHRoZXkgY291bGQgbWFrZSBzZXZlcmFsIGltcHJvdmVtZW50cyB0byB0aGVpciBVWC9VSS4gSXQgaGFzIGNvbWUgYSBsb25nIHdheSBzaW5jZSBJIHN0YXJ0ZWQgdXNpbmcgU291bmRDbG91ZCBiYWNrIGluIDIwMTMsIGJ1dCB0aGVpciBpbnRlcmZhY2Ugc3RpbGwgZmVlbHMgY2x1dHRlcmVkIGFuZCB1bmNsZWFuLlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2NyZWFtfSBjbGFzc05hbWU9XCJidG4gYnRuLXZpZXctcG9zdFwiPlZpZXcgUG9zdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBIb21lU2xpZGVyO1xyXG4iXX0=
