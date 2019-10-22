import React from 'react';
import './ChatBox.css';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Rest from '../../Services/Rest';

const ChatUser = (props) => {
    return (
        <div className="msg-dis">
            <div className="chat-user">
                {props.text}
            </div>
        </div>
    );
};

const ChatDofy = (props) => {
    return (
        <div className="msg-dis">
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
            chatDofy: [],
            convos: []
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
                    state.convos.push({by: 'dofy', msg: res.data.dofy});
                }
                console.log('state: ', this.state);
                return state;
            });
        });
    }

    sendText = () => {
        this.setState((state, props) => {
            state.chatUser.push(state.text);
            state.convos.push({by: 'user', msg: state.text});
            this.askAi(state.text);
            state.text = '';
            return state;
        }, () => {
            setTimeout(() => {
                let objDiv = document.getElementById("chatList");
                objDiv.scroll(0, 99999999999999);
            }, 200);
        });
    }

    inputChanging = (event) => {
        if (event.key === 'Enter') {
            this.setState((state, props) => {
                state.chatUser.push(state.text);
                state.convos.push({by: 'user', msg: state.text});
                this.askAi(state.text);
                state.text = '';
                return state;
            }, () => {
                setTimeout(() => {
                    let objDiv = document.getElementById("chatList");
                    objDiv.scroll(0, 99999999999999);
                }, 200);
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
                            <div id="chatList" className="chat-texting">
                                {/* {
                                    this.state.chatUser.length
                                    ? this.state.chatUser.map(text => <ChatUser key={this.userKey++} text={text} />)
                                    : ''
                                }
                                {
                                    this.state.chatDofy.length
                                    ? this.state.chatDofy.map(text => <ChatDofy key={this.dofyKey++} text={text} />)
                                    : ''
                                } */}
                                {
                                    this.state.convos.length
                                    ? this.state.convos.map(convo => {
                                       if (convo.by === 'dofy') {
                                           return (<ChatDofy key={this.dofyKey++} text={convo.msg} />);
                                       } else {
                                           return (<ChatUser key={this.userKey++} text={convo.msg} />);
                                       }
                                    })
                                    : ''
                                }
                            </div>
                            <div className="chat-textbox">
                                <input
                                    className="textbox"
                                    placeholder="Ask me something..."
                                    value={this.state.text}
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