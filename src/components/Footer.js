var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;

var Route = Router.Route;

var Footer = React.createClass({

  render:function(){

    return(
      <nav className="navbar navbar-default navbar-fixed-bottom" role="navigation"  id="footer">
        
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex2-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
      
        
        <div className="collapse navbar-collapse navbar-ex2-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/about">Facebook</Link></li>
            <li><Link to="/contactus">Twitter</Link></li>   
          </ul>

        </div>
      </nav>
    )}

})


module.exports = Footer;