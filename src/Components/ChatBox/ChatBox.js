import React from 'react';
import './ChatBox.css';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

import startUp from '../../Assets/svgs/start-up.svg';

import Rest from '../../Services/Rest';

import myResume from '../../Assets/docs/resume.pdf';

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
            convos: [],
            username: '',
            startUpPage: true
        };
        this.dofyKey = 0;
        this.userKey = 0;
        this.commands = {
            'download-resume': {
                title: 'Resume',
                asset: myResume,
            }
        };
    }

    askAi = (msg) => {
        Rest.askAi({askai: msg}).then(res => {
            console.log('res: ', res);
            this.setState((state, props) => {
                if (res.data.dofy) {
                    state.chatDofy.push(res.data.dofy);
                    state.convos.push({by: 'dofy', msg: res.data.dofy});
                }
                if (res.data.command && res.data.command.length) {
                    const data = {
                        title: this.commands[res.data.command].title,
                        asset: this.commands[res.data.command].asset
                    }
                    this.props.showNotification(data);
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

    handleChange = (event) => {
        this.setState({
            username: event.target.value
        });
    };

    hideStartupPage = () => {
        if (this.state.username.length) {
            this.setState({startUpPage: false});
        }
    }

    render() {
        return (
            <div style={{height: '400px', padding: '10px'}}>
                <Card style={{height: 'inherit'}}>
                    <CardHeader 
                        title="Wanna talk to DOFY?"
                        subheader="Dofy is an AI made by Hemaal. You can ask anything about me to Dofy."
                    />
                    <CardContent>
                        <div className="chat-box-overlay" style={{display: this.state.startUpPage ? '' : 'none'}}>
                        </div>
                        <div className="dofy-intro" style={{display: this.state.startUpPage ? 'flex' : 'none'}}>
                            <div className="dofy-start-wrapper">
                                <form className="" noValidate autoComplete="off">
                                    <TextField
                                        id="standard-name"
                                        label="Enter your Name"
                                        className=""
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                        margin="normal"
                                    />
                                </form>
                                <div style={{width: 'inherit', display: 'flex', justifyContent: 'center'}}>
                                    <button className="start-dofy" onClick={this.hideStartupPage}>
                                        <img src={startUp} alt="Start" className="start-up-icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
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