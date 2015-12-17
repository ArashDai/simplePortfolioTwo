var React = require('react');


var About = React.createClass({
  render:function(){
    return(
      
      <div className='container-fluid' id='aboutpage'>

        <div className='container-fluid Card' >
        

        <p className='text-center'>
        
          Silvia Martignago Bettio, a native of Treviso, Italy,  brings Italian flair and influence to home styling. With a background in interior design and a passion for chic design, Silvia strives to compile rooms with sophistication and functionality.

        </p>  
       <hr/>
        <div className='row'>
          <img className='col-xs-12 col-sm-offset-1 col-sm-5' src='https://i.imgur.com/QL0ERzN.jpg' id='aboutpageimg'/>
          <img className='hidden-xs col-sm-5' src='https://i.imgur.com/5ahvuoz.png' id='aboutpageimg'/>
        </div> 
       <hr/>
        <p className='text-center'>
         
              Lita Luhrsen is an MBA graduate and licensed realtor at Sotheby's International Realty with 20 years of extensive expertise in home remodeling and complete property makeovers. Lita is a true professional and savvy business woman who has first hand knowledge of what it takes to successfully sell a property for top value. 
        </p>
      
      </div>
     
    </div>
  )}

});


module.exports = About;

