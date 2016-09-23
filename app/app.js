import React from 'react';
import ReactDOM from 'react-dom';
// import SearchableTable from './SearchableTable';
// import {data} from './data';
// import slider from './slider';

// Filterable CheatSheet Component
// ReactDOM.render( <SearchableTable data={data}/>, document.getElementById('searchableTable') );

var heading = 'Hi, my name is Doreen Trinh';

var tabList = [
    { 'id': 0, 'name': '', 'url': '/home' },
    { 'id': 1, 'name': 'Portfolio', 'url': '/portfolio' },
    { 'id': 2, 'name': 'About', 'url': '/about' },
    { 'id': 3, 'name': 'Contact', 'url': '/contact' },
    { 'id': 4, 'name': 'Writings', 'url': '/writings' }
];

var footerList = [
    'Github', 'E-Mail'
];

var Tab = React.createClass({
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
          <a className="navbar-name" href="/home">
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

var HomeSlider = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Selected Projects</h2>
        asfhkasl
      </div>
    );
  }
});

var aboutDoreen1 = 'My name is Doreen Trinh and my background lies in International Studies with a specialization in economics from University of California, Irvine. Outside of my education at UCI, I have also studied at East China Normal University (华师大) in Shanghai.';
var aboutDoreen2 = 'As the global economy continues to expand, the need to connect businesses to clients rises on a multinational scale. As a front-end developer and a specialist who understands the diversity of the worldwide economy, I bridge the gap between businesses and clients on an international scale by helping them communicate digitally through code.';
var aboutDoreen3 = ' When I\'m not coding the day away, you could normally find me hiking in the woods, discovering new eateries in the city or trying out 3 coffee shops a day.';

var AboutSlider = React.createClass({
  render: function(){
    return(
      <div>
        <h2>About</h2>
        <p>{aboutDoreen1}</p>
        <p>{aboutDoreen2}</p>
        <p>{aboutDoreen3}</p>
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
            		<img src="http://s.mlkshk.com/r/JAUD" />
            	</div>
            	:null}

            	{this.props.currentTab === 4 ?
            	<div className="writings">
            		<img src="http://s.mlkshk.com/r/ZJPL" />
            	</div>
            	:null}
            </div>
        );
    }
});

var Footer = React.createClass({
  render: function() {
    return (
      <div id="portfolio-footer">
        <div className="portfolio-footer-interior">
          <div className="col-md-6 footer-copyright">
            Doreen Trinh
          </div>

          <div className="col-md-6 footer-links">
            {
              footerList.map(function (footname) {
                  return <div className="footer-link">{footname}</div>
              })
            }
          </div>

          <div className="clear"></div>
        </div>
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

React.render(
    <PortfolioNav />,
    document.body
);
