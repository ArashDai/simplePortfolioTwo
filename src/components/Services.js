var React = require('react');


var Services = React.createClass({

  render:function(){
    return(
      
      <div className='container-fluid Card text-center row' id='contactpage'>

          <div className='container-fluid Card' >
        

        <p className='text-center'>
          Swiftly and economically furnish and accessorize a vacant property to appeal to potential buyers. CASA Home Staging preps a space by bringing in a professional home cleaning service to make the home sparkle.
        </p>  
       <hr/>
        <div className='row'>
          <img className='col-xs-12 col-sm-offset-1 col-sm-5' src='https://i.imgur.com/QL0ERzN.jpg' id='aboutpageimg'/>
          <img className='hidden-xs col-sm-5' src='https://i.imgur.com/5ahvuoz.png' id='aboutpageimg'/>
        </div> 
       <hr/>
        <p className='text-center'>
         Emphasize a fresh look or stylish space with a change of scenery. From organization and finished carpentry to paint selection and complete furniture repurposing, CASA Home Staging redefines spaces and adds innovative character.

          <br></br>
          Areas Served:  Greater Los Angeles


        </p>
      </div>
        <p>the image below is just a demo</p>
      <a data-flickr-embed="true"  href="https://www.flickr.com/photos/87482662@N05/8222566105/in/gallery-136511902@N04-72157661709086302/" title="Outdoor-Furniture-Tips"><img src="https://farm9.staticflickr.com/8201/8222566105_942ae28863_z.jpg" width="640" height="576" alt="Outdoor-Furniture-Tips"/></a><script async src="//embedr.flickr.com/assets/client-code.js"></script>

      </div>

      )
  }

});


module.exports = Services;