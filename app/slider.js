var React = require('react');
var ReactDOM = require('react-dom');


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

var AboutSlider = React.createClass({
  render: function(){
    return(
      <div>
        <h2>About</h2>
          <p>
            My name is Doreen Trinh and my background lies in International Studies with a specialization in economics from University of California, Irvine. Outside of my education at UCI, I have also studied at East China Normal University (华师大) in Shanghai.
          </p>
          <p>
            As the global economy continues to expand, the need to connect businesses to clients rises on a multinational scale. As a front-end developer and a specialist who understands the diversity of the worldwide economy, I bridge the gap between businesses and clients on an international scale by helping them communicate digitally through code.
          </p>
          <p>
            When I am not coding the day away, you could normally find me hiking in the woods, discovering new eateries in the city or trying out 3 coffee shops a day.
          </p>
      </div>
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
            		<img src="http://s.mlkshk.com/r/ZJPL" />
            	</div>
            	:null}
            </div>
        );
    }
});

module.exports = Content;
