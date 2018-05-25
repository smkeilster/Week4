/**
*
* Grid
*
*/

import React from 'react';



import './style.css';
import './styleM.css';

export default class Grid extends React.PureComponent {
  constructor() {
    super();
    this.state =
      {
        indexOfImageClicked: null,
        fullSizeImages: ['http://localhost:8000/storage/totem.jpg', 'http://localhost:8000/storage/Jellyfish.jpg', 'http://localhost:8000/storage/glass.jpg', 'http://localhost:8000/storage/lake.jpg', 'http://localhost:8000/storage/Asheville.jpg', 'http://localhost:8000/storage/washington.jpg', 'http://localhost:8000/storage/blueridge.jpg', 'http://localhost:8000/storage/road.jpg', 'http://localhost:8000/storage/crab.jpg'],
        images: ['http://localhost:8000/storage/totemc.jpg', 'http://localhost:8000/storage/Jellyfishc.jpg', 'http://localhost:8000/storage/glassc.jpg', 'http://localhost:8000/storage/lakec.jpg', 'http://localhost:8000/storage/Ashevillec.jpg', 'http://localhost:8000/storage/washingtonc.jpg', 'http://localhost:8000/storage/blueridgec.jpg', 'http://localhost:8000/storage/roadc.jpg', 'http://localhost:8000/storage/crabc.jpg'],
      }

  }

  renderFullSizeImage = (index) => {
    this.setState({
      indexOfImageClicked: index
    })
  }



  render() {
    const { isOpen } = this.state;
    return (
      <div className="grid">
        {
          this.state.images.map((image, index) => (
            <div
              className={"gridItem"}
              key={`images${index}`}
            >
              <img
                src={(this.state.indexOfImageClicked === index) ? this.state.fullSizeImages[index] : image}
                className="gridImage"
                onClick={() => { this.renderFullSizeImage(index) }}
              />
            </div>
          ))
        }
      </div>
    );
  }
}

