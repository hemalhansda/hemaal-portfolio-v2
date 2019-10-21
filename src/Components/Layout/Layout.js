import React from 'react';
import './Layout.css';

import Contents from '../Contents/Contents';

export class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Contents />
        );
    }
}