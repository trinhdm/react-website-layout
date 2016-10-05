var React = require('react');
var ReactDOM = require('react-dom');

var github = {
  title: 'GitHub',
  src: 'https://github.com/trinhdm'
};

var footerList = [
    'Github', 'E-Mail'
];

// var footerList = {
//   github: 'trinhdm.github.io',
//   email: 'doreenmtrinh@gmail.com'
// };

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

module.exports = Footer;
