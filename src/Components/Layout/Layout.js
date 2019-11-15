import React from 'react';
import './Layout.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Contents from '../Contents/Contents';
import { AssetFlasher } from '../AssetFlasher/AssetFlasher';

export class Layout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false
      };
      this.sliderScrollerVal = 0;
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({open: true});
      }, 3000);
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

    handleClose = () => {
      this.setState({open: !this.state.open});
    }

    showNotification = (data) => {
      this.handleAssetFlasher.setState({
        title: data.title,
        asset: data.href
      }, () => {
        this.handleAssetFlasher.setState({displayFlash: true});
      });
    }

    render() {
      return (
        <React.Fragment>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="dev-modal"
            open={this.state.open}
            onClose={this.handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={this.state.open}>
              <div className="dev-sub-modal">
                <h2 id="transition-modal-title">Webapp is under maintainence!</h2>
                <p id="transition-modal-description">You can still explore this beta version! Thank You :)</p>
              </div>
            </Fade>
          </Modal>
          <AssetFlasher
            ref={ref => this.handleAssetFlasher = ref}
          />
          <Contents
            slideProjects={this.slideProjects}
            showNotification={this.showNotification}
          />
        </React.Fragment>
      );
    }
}