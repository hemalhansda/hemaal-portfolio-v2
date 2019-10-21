import React from 'react';
import './ChatBox.css';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Rest from '../../Services/Rest';

export class ChatBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            chatUser: [],
            chatDofy: []
        };
    }

    askAi = (msg) => {
        Rest.askAi({askai: msg}).then(res => {
            console.log('res: ', res);
            this.setState((state, props) => {
                state.chatDofy.push(res);
            });
        });
    }

    sendText = () => {
        this.setState((state, props) => {
            state.chatUser.push(state.text);
        });
    }

    render() {
        return (
            <div style={{height: '400px', padding: '10px'}}>
                <Card style={{height: 'inherit'}}>
                    <CardHeader 
                        title="Wanna talk to DOFY?"
                        subheader="Dofy is an AI made by me. You can ask anything about me to Dofy."
                    />
                    <CardContent>
                        <div className="chat-box">
                            <div className="chat-texting">
                                <div className="chat-dofy">
                                    hey
                                </div>
                                <div className="chat-user">
                                    hi, how are you?
                                </div>
                            </div>
                            <div className="chat-textbox">
                                <input className="textbox" placeholder="Write something..." onChange={(event) => this.setState({
                                    text: event.value
                                })} />
                                <button className="chat-send" onClick={this.sendText}>Send</button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}