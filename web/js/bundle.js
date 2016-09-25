(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// either or would work
var React = require('react');
var ReactDOM = require('react-dom');
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

var footerList = ['Github', 'E-Mail'];

// var footerList = {
//   github: 'trinhdm.github.io',
//   email: 'doreenmtrinh@gmail.com'
// };

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

var HomeSlider = React.createClass({
  displayName: 'HomeSlider',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h2',
        null,
        'Selected Projects'
      ),
      'asfhkasl'
    );
  }
});

var aboutDoreen1 = React.createElement(
  'p',
  null,
  'My name is Doreen Trinh and my background lies in International Studies with a specialization in economics from University of California, Irvine. Outside of my education at UCI, I have also studied at East China Normal University (华师大) in Shanghai.'
);
var aboutDoreen2 = React.createElement(
  'p',
  null,
  'As the global economy continues to expand, the need to connect businesses to clients rises on a multinational scale. As a front-end developer and a specialist who understands the diversity of the worldwide economy, I bridge the gap between businesses and clients on an international scale by helping them communicate digitally through code.'
);
var aboutDoreen3 = React.createElement(
  'p',
  null,
  'When I am not coding the day away, you could normally find me hiking in the woods, discovering new eateries in the city or trying out 3 coffee shops a day.'
);

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
      aboutDoreen1,
      aboutDoreen2,
      aboutDoreen3
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

},{"react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQSxJQUFJLFFBQVEsUUFBUSxPQUFSLENBQVo7QUFDQSxJQUFJLFdBQVcsUUFBUSxXQUFSLENBQWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLElBQUksVUFBVSw2QkFBZDs7QUFFQSxJQUFJLFVBQVUsQ0FDVixFQUFFLE1BQU0sQ0FBUixFQUFXLFFBQVEsRUFBbkIsRUFBdUIsT0FBTyxPQUE5QixFQURVLEVBRVYsRUFBRSxNQUFNLENBQVIsRUFBVyxRQUFRLFdBQW5CLEVBQWdDLE9BQU8sWUFBdkMsRUFGVSxFQUdWLEVBQUUsTUFBTSxDQUFSLEVBQVcsUUFBUSxPQUFuQixFQUE0QixPQUFPLFFBQW5DLEVBSFUsRUFJVixFQUFFLE1BQU0sQ0FBUixFQUFXLFFBQVEsU0FBbkIsRUFBOEIsT0FBTyxVQUFyQyxFQUpVLEVBS1YsRUFBRSxNQUFNLENBQVIsRUFBVyxRQUFRLFVBQW5CLEVBQStCLE9BQU8sV0FBdEMsRUFMVSxDQUFkOztBQVFBLElBQUksYUFBYSxDQUNiLFFBRGEsRUFDSCxRQURHLENBQWpCOztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksVUFBVTtBQUFBO0FBQUEsSUFBRyxNQUFLLCtCQUFSO0FBQUE7QUFBQSxDQUFkOztBQUVBLElBQUksTUFBTSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDeEIsZUFBYSxxQkFBUyxDQUFULEVBQVc7QUFDcEIsTUFBRSxjQUFGO0FBQ0gsU0FBSyxLQUFMLENBQVcsV0FBWDtBQUNBLEdBSnVCOztBQU14QixVQUFRLGtCQUFVO0FBQ2QsV0FDSTtBQUFBO0FBQUEsUUFBSSxXQUFXLEtBQUssS0FBTCxDQUFXLFNBQVgsR0FBdUIsU0FBdkIsR0FBbUMsSUFBbEQ7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S0U7QUFBQTtBQUFBLFlBQUssV0FBVSx1QkFBZjtBQUVJLHFCQUFXLEdBQVgsQ0FBZSxVQUFVLFFBQVYsRUFBb0I7QUFDL0IsbUJBQU87QUFBQTtBQUFBLGdCQUFLLFdBQVUsYUFBZjtBQUE4QjtBQUE5QixhQUFQO0FBQ0gsV0FGRDtBQUZKLFNBTEY7QUFhRSxxQ0FBSyxXQUFVLE9BQWY7QUFiRjtBQURGLEtBREY7QUFtQkQ7QUFyQjRCLENBQWxCLENBQWI7O0FBeUJBLElBQUksZUFBZSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDcEMsbUJBQWlCLDJCQUFZO0FBQ3RCLFdBQU87QUFDSCxlQUFTLE9BRE47QUFFSCxrQkFBWTtBQUZULEtBQVA7QUFJSCxHQU5nQzs7QUFRakMsYUFBVyxtQkFBUyxHQUFULEVBQWM7QUFDckIsU0FBSyxRQUFMLENBQWMsRUFBRSxZQUFZLElBQUksRUFBbEIsRUFBZDtBQUNILEdBVmdDOztBQVlqQyxVQUFRLGtCQUFVO0FBQ2QsV0FDSTtBQUFBO0FBQUE7QUFDSSwwQkFBQyxJQUFEO0FBQ0Ysb0JBQVksS0FBSyxLQUFMLENBQVcsVUFEckI7QUFFRixpQkFBUyxLQUFLLEtBQUwsQ0FBVyxPQUZsQjtBQUdGLG1CQUFXLEtBQUs7QUFIZCxRQURKO0FBTUMsMEJBQUMsT0FBRCxJQUFTLFlBQVksS0FBSyxLQUFMLENBQVcsVUFBaEMsR0FORDtBQU9FLDBCQUFDLE1BQUQ7QUFQRixLQURKO0FBV0g7QUF4QmdDLENBQWxCLENBQW5COztBQTJCQSxNQUFNLE1BQU4sQ0FDSSxvQkFBQyxZQUFELE9BREosRUFFSSxTQUFTLElBRmIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gZWl0aGVyIG9yIHdvdWxkIHdvcmtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTsgIFxuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG4vLyBpbXBvcnQgU2VhcmNoYWJsZVRhYmxlIGZyb20gJy4vU2VhcmNoYWJsZVRhYmxlJztcbi8vIGltcG9ydCB7ZGF0YX0gZnJvbSAnLi9kYXRhJztcbi8vIGltcG9ydCBzbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xuXG4vLyBGaWx0ZXJhYmxlIENoZWF0U2hlZXQgQ29tcG9uZW50XG4vLyBSZWFjdERPTS5yZW5kZXIoIDxTZWFyY2hhYmxlVGFibGUgZGF0YT17ZGF0YX0vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaGFibGVUYWJsZScpICk7XG5cblxuLy8gd2hlbiB5b3UgY2xpY2sgb24gYSB0YWIsIGNhbGwgb25DbGljayBpbiB0aGUgdGFiJ3MgaHRtbCB0byBmYWRlIG9yIHNsaWRlIHRoZSBib2R5IHVzaW5nIGEgZnVuY3Rpb25cbi8vICAgIGxlc3NvbiAjOCBpbiBhZHZhbmNlZCBKU1ggaW4gY29kZWFjYWRlbXlcblxudmFyIGhlYWRpbmcgPSAnSGksIG15IG5hbWUgaXMgRG9yZWVuIFRyaW5oJztcblxudmFyIHRhYkxpc3QgPSBbXG4gICAgeyAnaWQnOiAwLCAnbmFtZSc6ICcnLCAndXJsJzogJy9ob21lJyB9LFxuICAgIHsgJ2lkJzogMSwgJ25hbWUnOiAnUG9ydGZvbGlvJywgJ3VybCc6ICcvcG9ydGZvbGlvJyB9LFxuICAgIHsgJ2lkJzogMiwgJ25hbWUnOiAnQWJvdXQnLCAndXJsJzogJy9hYm91dCcgfSxcbiAgICB7ICdpZCc6IDMsICduYW1lJzogJ0NvbnRhY3QnLCAndXJsJzogJy9jb250YWN0JyB9LFxuICAgIHsgJ2lkJzogNCwgJ25hbWUnOiAnV3JpdGluZ3MnLCAndXJsJzogJy93cml0aW5ncycgfVxuXTtcblxudmFyIGZvb3Rlckxpc3QgPSBbXG4gICAgJ0dpdGh1YicsICdFLU1haWwnXG5dO1xuXG4vLyB2YXIgZm9vdGVyTGlzdCA9IHtcbi8vICAgZ2l0aHViOiAndHJpbmhkbS5naXRodWIuaW8nLFxuLy8gICBlbWFpbDogJ2RvcmVlbm10cmluaEBnbWFpbC5jb20nXG4vLyB9O1xuXG4vLyB3aXRob3V0IEpTWFxuLy8gdmFyIGVtYWlsTWUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywge2hyZWY6ICdtYWlsdG86ZG9yZWVubXRyaW5oQGdtYWlsLmNvbSd9LCAnZG9yZWVubXRyaW5oQGdtYWlsLmNvbScpO1xuLy8gd2l0aCBKU1hcbnZhciBlbWFpbE1lID0gPGEgaHJlZj1cIm1haWx0bzpkb3JlZW5tdHJpbmhAZ21haWwuY29tXCI+ZG9yZWVubXRyaW5oQGdtYWlsLmNvbTwvYT47XG5cbnZhciBUYWIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXHR0aGlzLnByb3BzLmhhbmRsZUNsaWNrKCk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMuaXNDdXJyZW50ID8gJ2N1cnJlbnQnIDogbnVsbH0+XG4gICAgICAgICAgICBcdDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGhyZWY9e3RoaXMucHJvcHMudXJsfT5cbiAgICAgICAgICAgIFx0XHR7dGhpcy5wcm9wcy5uYW1lfVxuXHQgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG52YXIgSGFtYnVyZ2VyTWVudSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7Y2xhc3NOYW1lOiAnaWNvbi1iYXInfSk7XG5cbnZhciBOYXZiYXJCcmFuZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIubmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLW5hbWVcIiBocmVmPVwiL2hvbWVcIj5cbiAgICAgICAgICAgIHtoZWFkaW5nfVxuICAgICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgVGFicyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBoYW5kbGVDbGljazogZnVuY3Rpb24odGFiKXtcbiAgICBcdHRoaXMucHJvcHMuY2hhbmdlVGFiKHRhYik7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bmF2IGlkPVwicG9ydGZvbGlvLW5hdmJhclwiIGNsYXNzTmFtZT1cIm5hdmJhclwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibmF2YmFyLWludGVyaW9yXCI+XG4gICAgICAgICAgICAgIDxOYXZiYXJCcmFuZCAvPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50YWJMaXN0Lm1hcChmdW5jdGlvbih0YWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMsIHRhYil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFiLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3RhYi51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RhYi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnQ9eyh0aGlzLnByb3BzLmN1cnJlbnRUYWIgPT09IHRhYi5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbnZhciBIb21lU2xpZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+U2VsZWN0ZWQgUHJvamVjdHM8L2gyPlxuICAgICAgICBhc2Zoa2FzbFxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBhYm91dERvcmVlbjEgPSA8cD5NeSBuYW1lIGlzIERvcmVlbiBUcmluaCBhbmQgbXkgYmFja2dyb3VuZCBsaWVzIGluIEludGVybmF0aW9uYWwgU3R1ZGllcyB3aXRoIGEgc3BlY2lhbGl6YXRpb24gaW4gZWNvbm9taWNzIGZyb20gVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLCBJcnZpbmUuIE91dHNpZGUgb2YgbXkgZWR1Y2F0aW9uIGF0IFVDSSwgSSBoYXZlIGFsc28gc3R1ZGllZCBhdCBFYXN0IENoaW5hIE5vcm1hbCBVbml2ZXJzaXR5ICjljY7luIjlpKcpIGluIFNoYW5naGFpLjwvcD47XG52YXIgYWJvdXREb3JlZW4yID0gPHA+QXMgdGhlIGdsb2JhbCBlY29ub215IGNvbnRpbnVlcyB0byBleHBhbmQsIHRoZSBuZWVkIHRvIGNvbm5lY3QgYnVzaW5lc3NlcyB0byBjbGllbnRzIHJpc2VzIG9uIGEgbXVsdGluYXRpb25hbCBzY2FsZS4gQXMgYSBmcm9udC1lbmQgZGV2ZWxvcGVyIGFuZCBhIHNwZWNpYWxpc3Qgd2hvIHVuZGVyc3RhbmRzIHRoZSBkaXZlcnNpdHkgb2YgdGhlIHdvcmxkd2lkZSBlY29ub215LCBJIGJyaWRnZSB0aGUgZ2FwIGJldHdlZW4gYnVzaW5lc3NlcyBhbmQgY2xpZW50cyBvbiBhbiBpbnRlcm5hdGlvbmFsIHNjYWxlIGJ5IGhlbHBpbmcgdGhlbSBjb21tdW5pY2F0ZSBkaWdpdGFsbHkgdGhyb3VnaCBjb2RlLjwvcD47XG52YXIgYWJvdXREb3JlZW4zID0gPHA+V2hlbiBJIGFtIG5vdCBjb2RpbmcgdGhlIGRheSBhd2F5LCB5b3UgY291bGQgbm9ybWFsbHkgZmluZCBtZSBoaWtpbmcgaW4gdGhlIHdvb2RzLCBkaXNjb3ZlcmluZyBuZXcgZWF0ZXJpZXMgaW4gdGhlIGNpdHkgb3IgdHJ5aW5nIG91dCAzIGNvZmZlZSBzaG9wcyBhIGRheS48L3A+O1xuXG52YXIgQWJvdXRTbGlkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+QWJvdXQ8L2gyPlxuICAgICAgICB7YWJvdXREb3JlZW4xfVxuICAgICAgICB7YWJvdXREb3JlZW4yfVxuICAgICAgICB7YWJvdXREb3JlZW4zfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBjb250YWN0TWUgPSA8cD5IYXZlIGEgY29vbCBwcm9qZWN0IGluIG1pbmQgYW5kIHRoaW5rIEkgY291bGQgaGVscCB5b3Ugd2l0aCBpdD8gRmVlbCBmcmVlIHRvIGVtYWlsIG1lIGF0IHtlbWFpbE1lfS4gT3IgdmlldyBteSByZXN1bWUgaGVyZS48L3A+O1xuXG52YXIgQ29udGFjdFNsaWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5Db250YWN0PC9oMj5cbiAgICAgICAgPHA+e2NvbnRhY3RNZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIENvbnRlbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuY3VycmVudFRhYiA9PT0gMCA/XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICAgICAgICAgICAgICA8SG9tZVNsaWRlciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXHQ6bnVsbH1cblxuICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5jdXJyZW50VGFiID09PSAxID9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9zLm1sa3Noay5jb20vci8xMDRUTlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcdDpudWxsfVxuXG4gICAgICAgICAgICBcdHt0aGlzLnByb3BzLmN1cnJlbnRUYWIgPT09IDIgP1xuICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImFib3V0XCI+XG4gICAgICAgICAgICBcdFx0PEFib3V0U2xpZGVyIC8+XG4gICAgICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgXHQ6bnVsbH1cblxuICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5jdXJyZW50VGFiID09PSAzID9cblx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICBcdFx0PENvbnRhY3RTbGlkZXIgLz5cbiAgICAgICAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgICBcdDpudWxsfVxuXG4gICAgICAgICAgICBcdHt0aGlzLnByb3BzLmN1cnJlbnRUYWIgPT09IDQgP1xuICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIndyaXRpbmdzXCI+XG4gICAgICAgICAgICBcdFx0PGltZyBzcmM9XCJodHRwOi8vcy5tbGtzaGsuY29tL3IvWkpQTFwiIC8+XG4gICAgICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgXHQ6bnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG52YXIgRm9vdGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwicG9ydGZvbGlvLWZvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1mb290ZXItaW50ZXJpb3JcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGZvb3Rlci1jb3B5cmlnaHRcIj5cbiAgICAgICAgICAgIERvcmVlbiBUcmluaFxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBmb290ZXItbGlua3NcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZm9vdGVyTGlzdC5tYXAoZnVuY3Rpb24gKGZvb3RuYW1lKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua1wiPntmb290bmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuXG52YXIgUG9ydGZvbGlvTmF2ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhYkxpc3Q6IHRhYkxpc3QsXG4gICAgICAgICAgICBjdXJyZW50VGFiOiAwXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNoYW5nZVRhYjogZnVuY3Rpb24odGFiKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VGFiOiB0YWIuaWQgfSk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgXHRcdGN1cnJlbnRUYWI9e3RoaXMuc3RhdGUuY3VycmVudFRhYn1cbiAgICAgICAgICAgIFx0XHR0YWJMaXN0PXt0aGlzLnN0YXRlLnRhYkxpc3R9XG4gICAgICAgICAgICBcdFx0Y2hhbmdlVGFiPXt0aGlzLmNoYW5nZVRhYn1cbiAgICAgICAgICAgIFx0Lz5cbiAgICAgICAgICAgIFx0PENvbnRlbnQgY3VycmVudFRhYj17dGhpcy5zdGF0ZS5jdXJyZW50VGFifSAvPlxuICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuUmVhY3QucmVuZGVyKFxuICAgIDxQb3J0Zm9saW9OYXYgLz4sXG4gICAgZG9jdW1lbnQuYm9keVxuKTtcbiJdfQ==
