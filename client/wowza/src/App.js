import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }
    componentDidMount() {
        this.fetchVideo();
    }

    fetchVideo = async () => {
        try {
            const response = await fetch("http://192.168.0.139:4000", {});
            const json = await response.json();
            console.log(json);
            this.setState({
                data: json
            });
        } catch (err) {
            console.log(err);
        }
    };
    render() {
        return (
            <div>
                {!this.state.data && <h1>loading</h1>}
                {this.state.data && (
                    <ReactPlayer url={this.state.data.link} controls={true} />
                )}
            </div>
        );
    }
}
