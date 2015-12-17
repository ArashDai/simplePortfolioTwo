var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;

var Route = Router.Route;

var Header = React.createClass({

  render:function(){

    return(
    <div className='container-fluid'>  


      <nav className="navbar navbar-default navbar-fixed-top container-fluid" role="navigation"  id="navbarHeader">
        
        <div className="navbar-header">
          <button type="button" className="navbar-toggle " data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          
          <Link className="navbar-brand" to="/" id="navbarHeader">
            <img id='logo' src='../assets/button logo.png'/>
          </Link>
          
          <Link  to="/" className="navbar-brand" id="pageSubTitle">
            <span id='pageTitle' >Casa</span> Home Staging 
          </Link>
        
        </div>
      
        
        <div className="collapse navbar-collapse navbar-ex1-collapse  ">
          <ul className="nav navbar-nav text-center visible-xs" id="navbarHeader">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            
          </ul>

          <ul className="nav navbar-nav hidden-xs pull-right" id="navbarHeader">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            
          </ul>
        </div>

          

      </nav>
    </div>  
    )}

})


module.exports = Header;