/**
*
* Grid
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Grid extends React.PureComponent 
{
  constructor () 
  {
    super();
    this.state = 
    {
      images: ['https://thehappypuppysite.com/wp-content/uploads/2017/06/gsd5.jpg','Hiking2.jpg','Hiking3.jpg','Hiking4.jpg','Hiking5.jpg','Hiking6.jpg','Hiking7.jpg','Hiking8.jpg']
    }
    
  }
  
  
  render() {
    return (
      <div>
        <div className="grid">
        {this.state.images.map((image, index) =>(
        <div className="gridItem" key={index}>
          <img src={image} className="gridImage"/>
        </div>  
        ))}
        </div>  
      </div>
    );
  }
}
