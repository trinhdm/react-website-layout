var React = require('react');
var ReactDOM = require('react-dom');

var AboutSlider = React.createClass({
  render: function(){
    return(
      <div className="about-slider">
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


module.exports = AboutSlider;
