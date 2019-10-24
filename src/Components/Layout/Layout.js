import React from 'react';
import './Layout.css';

import Contents from '../Contents/Contents';

export class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.sliderScrollerVal = 0;
    }

    slideProjects = (direction) => {
        if (direction === 'right') {
          this.sliderScrollerVal += 970;
        } else if (direction === 'left') {
          this.sliderScrollerVal = this.sliderScrollerVal < 970 ? 0 : this.sliderScrollerVal - 970;
        }
        if (document.getElementById('corsoSlider')) {
          document.getElementById('corsoSlider').scroll(this.sliderScrollerVal, 0);
        }
    };

    render() {
        return (
            <Contents slideProjects={this.slideProjects}/>
        );
    }
}