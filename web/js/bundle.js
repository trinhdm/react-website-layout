(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import SearchableTable from './SearchableTable';
// import {data} from './data';
// import slider from './slider';

// Filterable CheatSheet Component
// ReactDOM.render( <SearchableTable data={data}/>, document.getElementById('searchableTable') );

var heading = 'Hi, my name is Doreen Trinh';

var tabList = [{ 'id': 0, 'name': '', 'url': '/home' }, { 'id': 1, 'name': 'Portfolio', 'url': '/portfolio' }, { 'id': 2, 'name': 'About', 'url': '/about' }, { 'id': 3, 'name': 'Contact', 'url': '/contact' }, { 'id': 4, 'name': 'Writings', 'url': '/writings' }];

var footerList = ['Github', 'E-Mail'];

var Tab = _react2.default.createClass({
  displayName: 'Tab',

  handleClick: function handleClick(e) {
    e.preventDefault();
    this.props.handleClick();
  },

  render: function render() {
    return _react2.default.createElement(
      'li',
      { className: this.props.isCurrent ? 'current' : null },
      _react2.default.createElement(
        'a',
        { onClick: this.handleClick, href: this.props.url },
        this.props.name
      )
    );
  }
});

var HamburgerMenu = _react2.default.createElement('span', { className: 'icon-bar' });

var NavbarBrand = _react2.default.createClass({
  displayName: 'NavbarBrand',

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'navbar-header' },
      _react2.default.createElement(
        'button',
        { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-collapse' },
        _react2.default.createElement('span', { className: 'icon-bar' }),
        _react2.default.createElement('span', { className: 'icon-bar' }),
        _react2.default.createElement('span', { className: 'icon-bar' })
      ),
      _react2.default.createElement(
        'a',
        { className: 'navbar-name', href: '/home' },
        heading
      )
    );
  }
});

var Tabs = _react2.default.createClass({
  displayName: 'Tabs',

  handleClick: function handleClick(tab) {
    this.props.changeTab(tab);
  },

  render: function render() {
    return _react2.default.createElement(
      'nav',
      { id: 'portfolio-navbar', className: 'navbar', role: 'navigation' },
      _react2.default.createElement(
        'div',
        { id: 'navbar-interior' },
        _react2.default.createElement(NavbarBrand, null),
        _react2.default.createElement(
          'div',
          { className: 'navbar-collapse collapse' },
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav navbar-right' },
            this.props.tabList.map(function (tab) {
              return _react2.default.createElement(Tab, {
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

var HomeSlider = _react2.default.createClass({
  displayName: 'HomeSlider',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Selected Projects'
      ),
      'asfhkasl'
    );
  }
});

var aboutDoreen1 = 'My name is Doreen Trinh and my background lies in International Studies with a specialization in economics from University of California, Irvine. Outside of my education at UCI, I have also studied at East China Normal University (华师大) in Shanghai.';
var aboutDoreen2 = 'As the global economy continues to expand, the need to connect businesses to clients rises on a multinational scale. As a front-end developer and a specialist who understands the diversity of the worldwide economy, I bridge the gap between businesses and clients on an international scale by helping them communicate digitally through code.';
var aboutDoreen3 = ' When I\'m not coding the day away, you could normally find me hiking in the woods, discovering new eateries in the city or trying out 3 coffee shops a day.';

var AboutSlider = _react2.default.createClass({
  displayName: 'AboutSlider',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'About'
      ),
      _react2.default.createElement(
        'p',
        null,
        aboutDoreen1
      ),
      _react2.default.createElement(
        'p',
        null,
        aboutDoreen2
      ),
      _react2.default.createElement(
        'p',
        null,
        aboutDoreen3
      )
    );
  }
});

var Content = _react2.default.createClass({
  displayName: 'Content',

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'content' },
      this.props.currentTab === 0 ? _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(HomeSlider, null)
      ) : null,
      this.props.currentTab === 1 ? _react2.default.createElement(
        'div',
        { className: 'portfolio' },
        _react2.default.createElement('img', { src: 'http://s.mlkshk.com/r/104TN' })
      ) : null,
      this.props.currentTab === 2 ? _react2.default.createElement(
        'div',
        { className: 'about' },
        _react2.default.createElement(AboutSlider, null)
      ) : null,
      this.props.currentTab === 3 ? _react2.default.createElement(
        'div',
        { className: 'contact' },
        _react2.default.createElement('img', { src: 'http://s.mlkshk.com/r/JAUD' })
      ) : null,
      this.props.currentTab === 4 ? _react2.default.createElement(
        'div',
        { className: 'writings' },
        _react2.default.createElement('img', { src: 'http://s.mlkshk.com/r/ZJPL' })
      ) : null
    );
  }
});

var Footer = _react2.default.createClass({
  displayName: 'Footer',

  render: function render() {
    return _react2.default.createElement(
      'div',
      { id: 'portfolio-footer' },
      _react2.default.createElement(
        'div',
        { className: 'portfolio-footer-interior' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-6 footer-copyright' },
          'Doreen Trinh'
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-6 footer-links' },
          footerList.map(function (footname) {
            return _react2.default.createElement(
              'div',
              { className: 'footer-link' },
              footname
            );
          })
        ),
        _react2.default.createElement('div', { className: 'clear' })
      )
    );
  }
});

var PortfolioNav = _react2.default.createClass({
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
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(Tabs, {
        currentTab: this.state.currentTab,
        tabList: this.state.tabList,
        changeTab: this.changeTab
      }),
      _react2.default.createElement(Content, { currentTab: this.state.currentTab }),
      _react2.default.createElement(Footer, null)
    );
  }
});

_react2.default.render(_react2.default.createElement(PortfolioNav, null), document.body);

},{"react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxVQUFVLDZCQUFkOztBQUVBLElBQUksVUFBVSxDQUNWLEVBQUUsTUFBTSxDQUFSLEVBQVcsUUFBUSxFQUFuQixFQUF1QixPQUFPLE9BQTlCLEVBRFUsRUFFVixFQUFFLE1BQU0sQ0FBUixFQUFXLFFBQVEsV0FBbkIsRUFBZ0MsT0FBTyxZQUF2QyxFQUZVLEVBR1YsRUFBRSxNQUFNLENBQVIsRUFBVyxRQUFRLE9BQW5CLEVBQTRCLE9BQU8sUUFBbkMsRUFIVSxFQUlWLEVBQUUsTUFBTSxDQUFSLEVBQVcsUUFBUSxTQUFuQixFQUE4QixPQUFPLFVBQXJDLEVBSlUsRUFLVixFQUFFLE1BQU0sQ0FBUixFQUFXLFFBQVEsVUFBbkIsRUFBK0IsT0FBTyxXQUF0QyxFQUxVLENBQWQ7O0FBUUEsSUFBSSxhQUFhLENBQ2IsUUFEYSxFQUNILFFBREcsQ0FBakI7O0FBSUEsSUFBSSxNQUFNLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDeEIsZUFBYSxxQkFBUyxDQUFULEVBQVc7QUFDcEIsTUFBRSxjQUFGO0FBQ0gsU0FBSyxLQUFMLENBQVcsV0FBWDtBQUNBLEdBSnVCOztBQU14QixVQUFRLGtCQUFVO0FBQ2QsV0FDSTtBQUFBO0FBQUEsUUFBSSxXQUFXLEtBQUssS0FBTCxDQUFXLFNBQVgsR0FBdUIsU0FBdkIsR0FBbUMsSUFBbEQ7QUFDQztBQUFBO0FBQUEsVUFBRyxTQUFTLEtBQUssV0FBakIsRUFBOEIsTUFBTSxLQUFLLEtBQUwsQ0FBVyxHQUEvQztBQUNFLGFBQUssS0FBTCxDQUFXO0FBRGI7QUFERCxLQURKO0FBT0g7QUFkdUIsQ0FBbEIsQ0FBVjs7QUFpQkEsSUFBSSxnQkFBZ0IsZ0JBQU0sYUFBTixDQUFvQixN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QUFZLElBQUksRUFBbEIsRUFBZDtBQUNILEdBVmdDOztBQVlqQyxVQUFRLGtCQUFVO0FBQ2QsV0FDSTtBQUFBO0FBQUE7QUFDSSxvQ0FBQyxJQUFEO0FBQ0Ysb0JBQVksS0FBSyxLQUFMLENBQVcsVUFEckI7QUFFRixpQkFBUyxLQUFLLEtBQUwsQ0FBVyxPQUZsQjtBQUdGLG1CQUFXLEtBQUs7QUFIZCxRQURKO0FBTUMsb0NBQUMsT0FBRCxJQUFTLFlBQVksS0FBSyxLQUFMLENBQVcsVUFBaEMsR0FORDtBQU9FLG9DQUFDLE1BQUQ7QUFQRixLQURKO0FBV0g7QUF4QmdDLENBQWxCLENBQW5COztBQTJCQSxnQkFBTSxNQUFOLENBQ0ksOEJBQUMsWUFBRCxPQURKLEVBRUksU0FBUyxJQUZiIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbi8vIGltcG9ydCBTZWFyY2hhYmxlVGFibGUgZnJvbSAnLi9TZWFyY2hhYmxlVGFibGUnO1xuLy8gaW1wb3J0IHtkYXRhfSBmcm9tICcuL2RhdGEnO1xuLy8gaW1wb3J0IHNsaWRlciBmcm9tICcuL3NsaWRlcic7XG5cbi8vIEZpbHRlcmFibGUgQ2hlYXRTaGVldCBDb21wb25lbnRcbi8vIFJlYWN0RE9NLnJlbmRlciggPFNlYXJjaGFibGVUYWJsZSBkYXRhPXtkYXRhfS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoYWJsZVRhYmxlJykgKTtcblxudmFyIGhlYWRpbmcgPSAnSGksIG15IG5hbWUgaXMgRG9yZWVuIFRyaW5oJztcblxudmFyIHRhYkxpc3QgPSBbXG4gICAgeyAnaWQnOiAwLCAnbmFtZSc6ICcnLCAndXJsJzogJy9ob21lJyB9LFxuICAgIHsgJ2lkJzogMSwgJ25hbWUnOiAnUG9ydGZvbGlvJywgJ3VybCc6ICcvcG9ydGZvbGlvJyB9LFxuICAgIHsgJ2lkJzogMiwgJ25hbWUnOiAnQWJvdXQnLCAndXJsJzogJy9hYm91dCcgfSxcbiAgICB7ICdpZCc6IDMsICduYW1lJzogJ0NvbnRhY3QnLCAndXJsJzogJy9jb250YWN0JyB9LFxuICAgIHsgJ2lkJzogNCwgJ25hbWUnOiAnV3JpdGluZ3MnLCAndXJsJzogJy93cml0aW5ncycgfVxuXTtcblxudmFyIGZvb3Rlckxpc3QgPSBbXG4gICAgJ0dpdGh1YicsICdFLU1haWwnXG5dO1xuXG52YXIgVGFiID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGhhbmRsZUNsaWNrOiBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFx0dGhpcy5wcm9wcy5oYW5kbGVDbGljaygpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmlzQ3VycmVudCA/ICdjdXJyZW50JyA6IG51bGx9PlxuICAgICAgICAgICAgXHQ8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBocmVmPXt0aGlzLnByb3BzLnVybH0+XG4gICAgICAgICAgICBcdFx0e3RoaXMucHJvcHMubmFtZX1cblx0ICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxudmFyIEhhbWJ1cmdlck1lbnUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge2NsYXNzTmFtZTogJ2ljb24tYmFyJ30pO1xuXG52YXIgTmF2YmFyQnJhbmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1uYW1lXCIgaHJlZj1cIi9ob21lXCI+XG4gICAgICAgICAgICB7aGVhZGluZ31cbiAgICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIFRhYnMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKHRhYil7XG4gICAgXHR0aGlzLnByb3BzLmNoYW5nZVRhYih0YWIpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPG5hdiBpZD1cInBvcnRmb2xpby1uYXZiYXJcIiBjbGFzc05hbWU9XCJuYXZiYXJcIiByb2xlPVwibmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhci1pbnRlcmlvclwiPlxuICAgICAgICAgICAgICA8TmF2YmFyQnJhbmQgLz5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGFiTGlzdC5tYXAoZnVuY3Rpb24odGFiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzLCB0YWIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhYi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXt0YWIudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0YWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDdXJyZW50PXsodGhpcy5wcm9wcy5jdXJyZW50VGFiID09PSB0YWIuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG52YXIgSG9tZVNsaWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlNlbGVjdGVkIFByb2plY3RzPC9oMj5cbiAgICAgICAgYXNmaGthc2xcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgYWJvdXREb3JlZW4xID0gJ015IG5hbWUgaXMgRG9yZWVuIFRyaW5oIGFuZCBteSBiYWNrZ3JvdW5kIGxpZXMgaW4gSW50ZXJuYXRpb25hbCBTdHVkaWVzIHdpdGggYSBzcGVjaWFsaXphdGlvbiBpbiBlY29ub21pY3MgZnJvbSBVbml2ZXJzaXR5IG9mIENhbGlmb3JuaWEsIElydmluZS4gT3V0c2lkZSBvZiBteSBlZHVjYXRpb24gYXQgVUNJLCBJIGhhdmUgYWxzbyBzdHVkaWVkIGF0IEVhc3QgQ2hpbmEgTm9ybWFsIFVuaXZlcnNpdHkgKOWNjuW4iOWkpykgaW4gU2hhbmdoYWkuJztcbnZhciBhYm91dERvcmVlbjIgPSAnQXMgdGhlIGdsb2JhbCBlY29ub215IGNvbnRpbnVlcyB0byBleHBhbmQsIHRoZSBuZWVkIHRvIGNvbm5lY3QgYnVzaW5lc3NlcyB0byBjbGllbnRzIHJpc2VzIG9uIGEgbXVsdGluYXRpb25hbCBzY2FsZS4gQXMgYSBmcm9udC1lbmQgZGV2ZWxvcGVyIGFuZCBhIHNwZWNpYWxpc3Qgd2hvIHVuZGVyc3RhbmRzIHRoZSBkaXZlcnNpdHkgb2YgdGhlIHdvcmxkd2lkZSBlY29ub215LCBJIGJyaWRnZSB0aGUgZ2FwIGJldHdlZW4gYnVzaW5lc3NlcyBhbmQgY2xpZW50cyBvbiBhbiBpbnRlcm5hdGlvbmFsIHNjYWxlIGJ5IGhlbHBpbmcgdGhlbSBjb21tdW5pY2F0ZSBkaWdpdGFsbHkgdGhyb3VnaCBjb2RlLic7XG52YXIgYWJvdXREb3JlZW4zID0gJyBXaGVuIElcXCdtIG5vdCBjb2RpbmcgdGhlIGRheSBhd2F5LCB5b3UgY291bGQgbm9ybWFsbHkgZmluZCBtZSBoaWtpbmcgaW4gdGhlIHdvb2RzLCBkaXNjb3ZlcmluZyBuZXcgZWF0ZXJpZXMgaW4gdGhlIGNpdHkgb3IgdHJ5aW5nIG91dCAzIGNvZmZlZSBzaG9wcyBhIGRheS4nO1xuXG52YXIgQWJvdXRTbGlkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+QWJvdXQ8L2gyPlxuICAgICAgICA8cD57YWJvdXREb3JlZW4xfTwvcD5cbiAgICAgICAgPHA+e2Fib3V0RG9yZWVuMn08L3A+XG4gICAgICAgIDxwPnthYm91dERvcmVlbjN9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBDb250ZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmN1cnJlbnRUYWIgPT09IDAgP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgICAgICAgICAgICAgPEhvbWVTbGlkZXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFx0Om51bGx9XG5cbiAgICAgICAgICAgIFx0e3RoaXMucHJvcHMuY3VycmVudFRhYiA9PT0gMSA/XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcy5tbGtzaGsuY29tL3IvMTA0VE5cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXHQ6bnVsbH1cblxuICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5jdXJyZW50VGFiID09PSAyID9cbiAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPlxuICAgICAgICAgICAgXHRcdDxBYm91dFNsaWRlciAvPlxuICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgIFx0Om51bGx9XG5cbiAgICAgICAgICAgIFx0e3RoaXMucHJvcHMuY3VycmVudFRhYiA9PT0gMyA/XG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgXHRcdDxpbWcgc3JjPVwiaHR0cDovL3MubWxrc2hrLmNvbS9yL0pBVURcIiAvPlxuICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgIFx0Om51bGx9XG5cbiAgICAgICAgICAgIFx0e3RoaXMucHJvcHMuY3VycmVudFRhYiA9PT0gNCA/XG4gICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwid3JpdGluZ3NcIj5cbiAgICAgICAgICAgIFx0XHQ8aW1nIHNyYz1cImh0dHA6Ly9zLm1sa3Noay5jb20vci9aSlBMXCIgLz5cbiAgICAgICAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgICBcdDpudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbnZhciBGb290ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJwb3J0Zm9saW8tZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWZvb3Rlci1pbnRlcmlvclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZm9vdGVyLWNvcHlyaWdodFwiPlxuICAgICAgICAgICAgRG9yZWVuIFRyaW5oXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGZvb3Rlci1saW5rc1wiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmb290ZXJMaXN0Lm1hcChmdW5jdGlvbiAoZm9vdG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1saW5rXCI+e2Zvb3RuYW1lfTwvZGl2PlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhclwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cbnZhciBQb3J0Zm9saW9OYXYgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFiTGlzdDogdGFiTGlzdCxcbiAgICAgICAgICAgIGN1cnJlbnRUYWI6IDBcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY2hhbmdlVGFiOiBmdW5jdGlvbih0YWIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRUYWI6IHRhYi5pZCB9KTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICBcdFx0Y3VycmVudFRhYj17dGhpcy5zdGF0ZS5jdXJyZW50VGFifVxuICAgICAgICAgICAgXHRcdHRhYkxpc3Q9e3RoaXMuc3RhdGUudGFiTGlzdH1cbiAgICAgICAgICAgIFx0XHRjaGFuZ2VUYWI9e3RoaXMuY2hhbmdlVGFifVxuICAgICAgICAgICAgXHQvPlxuICAgICAgICAgICAgXHQ8Q29udGVudCBjdXJyZW50VGFiPXt0aGlzLnN0YXRlLmN1cnJlbnRUYWJ9IC8+XG4gICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5SZWFjdC5yZW5kZXIoXG4gICAgPFBvcnRmb2xpb05hdiAvPixcbiAgICBkb2N1bWVudC5ib2R5XG4pO1xuIl19
