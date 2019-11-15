import React from 'react';
import './AssetFlasher.css';

import downloadIcon from '../../Assets/svgs/download.svg';

export class AssetFlasher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            asset: undefined,
            displayFlash: false
        };
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({displayFlash: false});
        // }, 10000);
    }

    render() {
        return (
            <div
                className={'flash-container ' + (this.state.displayFlash ? '' : 'hide-flash')}
                style={{
                    display: this.state.displayFlash ? 'flex' : 'none',
                    flexFlow: this.state.displayFlash ? 'column' : 'none'
                }}>
                <span className="flash-title">{this.state.title}</span>
                <a href={this.state.asset} className="flash-button">
                    DOWNLOAD
                    <img className="download-icon" src={downloadIcon} alt={'Download ' + (this.state.title)} />
                </a>
                {/* <form method="get" action={this.state.asset}>
                    <button className="flash-button" type="submit">DOWNLOAD {this.state.title}</button>
                </form> */}
            </div>
        );
    }
}