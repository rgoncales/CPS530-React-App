import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
const API_URL = "http://koussolt.ca:8000/api/comments/";

export default class CommentList extends React.Component {
        constructor(props){
                super(props);
                this.state = {
                        data: [],
                        count: '',
                        numpages: '',
                        nextlink: '',
                        prevlink: '',
                };
        }

        componentDidMount() {
                axios.get(API_URL)
                .then(response => {
			this.setState({
				data: response["data"]["data"],
				count: response["data"]["count"],
				nextlink: response["data"]["nextlink"],
				prevlink: response["data"]["prevlink"],
                	});
		});
        }

	render() {
		var result = [];
		var i;
		result.push(React.createElement("h2", null, "Website Comments:"));
		for (i = 0; i < this.state.data.length; i++){
			const auth = this.state.data[i]["author"];
			const cont = this.state.data[i]["content"];
			console.log(auth, cont);
			result.push(React.createElement(Comment, {author: auth, content: cont}, null));
		}
		return result;
	}
}

class Comment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pk: '',
			author: '',
			content: '',
			avatar: '',
		};
	}
	render() {
		var author = React.createElement('h4', null, `${this.props.author} says...`);
		var content = React.createElement('p', null, `${this.props.content}`);
		var avatar = React.createElement('img', {src: `${this.props.avatar}`, alt: '', height: '64'}, null );
		var result = React.createElement('div', null, author, content, avatar);
		return result;
	}
}



var testList = React.createElement(CommentList, null);

var demo = React.createElement("div", null,  testList);
/*
ReactDOM.render(
	demo,
	document.getElementById("content"),
);
*/
