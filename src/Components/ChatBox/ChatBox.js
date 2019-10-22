import React from 'react';
import './ChatBox.css';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Rest from '../../Services/Rest';

const ChatUser = (props) => {
    return (
        <div style={{width: 'inherit'}}>
            <div className="chat-user">
                {props.text}
            </div>
        </div>
    );
};

const ChatDofy = (props) => {
    return (
        <div style={{width: 'inherit'}}>
            <div className="chat-dofy">
                {props.text}
            </div>
        </div>
    );
};

export class ChatBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            chatUser: [],
            chatDofy: []
        };
        this.dofyKey = 0;
        this.userKey = 0;
    }

    askAi = (msg) => {
        Rest.askAi({askai: msg}).then(res => {
            console.log('res: ', res);
            this.setState((state, props) => {
                if (res.data.dofy) {
                    state.chatDofy.push(res.data.dofy);
                }
                console.log('state: ', this.state);
                return state;
            });
        });
    }

    sendText = () => {
        this.setState((state, props) => {
            state.chatUser.push(state.text);
            this.askAi(state.text);
            state.text = '';
            return state;
        });
    }

    inputChanging = (event) => {
        if (event.key === 'Enter') {
            this.setState((state, props) => {
                state.chatUser.push(state.text);
                this.askAi(state.text);
                return state;
            });
        }
    };

    render() {
        return (
            <div style={{height: '400px', padding: '10px'}}>
                <Card style={{height: 'inherit'}}>
                    <CardHeader 
                        title="Wanna talk to DOFY?"
                        subheader="Dofy is an AI made by Hemaal. You can ask anything about me to Dofy."
                    />
                    <CardContent>
                        <div className="chat-box">
                            <div className="chat-texting">
                                {
                                    this.state.chatUser.length
                                    ? this.state.chatUser.map(text => <ChatUser key={this.userKey++} text={text} />)
                                    : ''
                                }
                                {
                                    this.state.chatDofy.length
                                    ? this.state.chatDofy.map(text => <ChatDofy key={this.dofyKey++} text={text} />)
                                    : ''
                                }
                            </div>
                            <div className="chat-textbox">
                                <input
                                    className="textbox"
                                    placeholder="Ask me something..."
                                    onChange={(event) => this.setState({
                                        text: event.target.value
                                    })}
                                    onKeyUp={this.inputChanging} />
                                <button className="chat-send" onClick={this.sendText}>Send</button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}