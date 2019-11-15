import React from 'react';
import './AssetFlasher.css';

export class AssetFlasher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            asset: '',
            displayFlash: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({displayFlash: false});
        }, 10000);
    }

    render() {
        return (
            <div
                className={'flash-container ' + (this.state.displayFlash ? '' : 'hide-flash')}
                style={{
                    display: this.state.displayFlash ? 'flex' : 'none'
                }}>
                <span className="flash-title">{this.state.title}</span>
                <a href={this.state.asset} className="flash-button">DOWNLOAD {this.state.title}</a>
            </div>
        );
    }
}