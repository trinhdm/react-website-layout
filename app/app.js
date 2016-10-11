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

var tabList = [
    { 'id': 0, 'name': '', 'url': '/home' },
    { 'id': 1, 'name': 'Portfolio', 'url': '/portfolio' },
    { 'id': 2, 'name': 'About', 'url': '/about' },
    { 'id': 3, 'name': 'Contact', 'url': '/contact' },
    { 'id': 4, 'name': 'Writings', 'url': '/writings' }
];



// without JSX
// var emailMe = React.createElement('a', {href: 'mailto:doreenmtrinh@gmail.com'}, 'doreenmtrinh@gmail.com');
// with JSX
var emailMe = <a href="mailto:doreenmtrinh@gmail.com">doreenmtrinh@gmail.com</a>;

var Tab = React.createClass({
  // handleClick is an event listener in a render function
    handleClick: function(e){
        e.preventDefault();
    	this.props.handleClick();
    },

    render: function(){
        return (
            <li className={this.props.isCurrent ? 'current' : null}>
            	<a onClick={this.handleClick} href={this.props.url}>
            		{this.props.name}
	            </a>
            </li>
        );
    }
});

var HamburgerMenu = React.createElement('span', {className: 'icon-bar'});

var NavbarBrand = React.createClass({
  render: function() {
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          </button>
          <a className="navbar-name" href="./index.html">
            {heading}
          </a>
      </div>
    );
  }
});

var Tabs = React.createClass({
    handleClick: function(tab){
    	this.props.changeTab(tab);
    },

    render: function(){
        return (
          <nav id="portfolio-navbar" className="navbar" role="navigation">
            <div id="navbar-interior">
              <NavbarBrand />

              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                    {this.props.tabList.map(function(tab) {
                        return (
                            <Tab
                                handleClick={this.handleClick.bind(this, tab)}
                                key={tab.id}
                                url={tab.url}
                                name={tab.name}
                                isCurrent={(this.props.currentTab === tab.id)}
                             />
                        );
                    }.bind(this))}
                </ul>
              </div>
            </div>
          </nav>
        );
    }
});



var contactMe = <p>Have a cool project in mind and think I could help you with it? Feel free to email me at {emailMe}. Or view my resume here.</p>;

var ContactSlider = React.createClass({
  render: function(){
    return(
      <div>
        <h2>Contact</h2>
        <p>{contactMe}</p>
      </div>
    );
  }
});

var Content = React.createClass({
    render: function(){
        return(
            <div className="content">
              {this.props.currentTab === 0 ?
                <div className="home">
                  <HomeSlider />
                </div>
            	:null}

            	{this.props.currentTab === 1 ?
                <div className="portfolio">
                    <img src="http://s.mlkshk.com/r/104TN" />
                </div>
            	:null}

            	{this.props.currentTab === 2 ?
            	<div className="about">
            		<AboutSlider />
            	</div>
            	:null}

            	{this.props.currentTab === 3 ?
	            <div className="contact">
            		<ContactSlider />
            	</div>
            	:null}

            	{this.props.currentTab === 4 ?
            	<div className="writings">
            		<WritingsSlider />
            	</div>
            	:null}
            </div>
        );
    }
});


var PortfolioNav = React.createClass({
	getInitialState: function () {
        return {
            tabList: tabList,
            currentTab: 0
        };
    },

    changeTab: function(tab) {
        this.setState({ currentTab: tab.id });
    },

    fadeOut: function () {
      return {

      };
    },

    render: function(){
        return(
            <div>
                <Tabs
            		currentTab={this.state.currentTab}
            		tabList={this.state.tabList}
            		changeTab={this.changeTab}
            	/>
            	<Content currentTab={this.state.currentTab} />
              <Footer />
            </div>
        );
    }
});

ReactDOM.render(
    <PortfolioNav />,
    document.getElementById('container')
);
