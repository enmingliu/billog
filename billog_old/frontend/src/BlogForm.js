import React from 'react';
import './BlogForm.css';
import * as api from './api';

// TODO: add BlogForm component
const initState = {
	title: '',
	content: ''
};

class BlogForm extends React.Component {
	constructor(props) {	//BlogForm constructor
		super(props);
		this.state = initState;	//BlogForm component's state set to initState, ie. empty
	}

	updateTitle = (e) => {	//listen for changes in input fields and update values of state object to reflect user changes
		this.setState({
			title: e.target.value
		});
	}

	updateContent = (e) => {
		this.setState({
			content: e.target.value
		});
	}

	newPost = () => {
		const { title, content } = this.state;
		if (title === '') {	//check if title/body of post is empty
			alert('Title is empty!');
			return;
		} else if (content === '') {
			alert('Content is empty!');
			return;
		}

		const newPost = {	//transform new post into obj
			title,
			body: content
		};
		try {
			api.addPost(newPost);	//executes update to db
			this.props.onSend();
			this.setState(initState);
		} catch (err) {
			alert(err);
		}
	}

	render() {
		const onFocusHidePH = (e) => { e.target.placeholder = ''; };
		const titlePH = 'Title';
		const contentPH = 'Content';
		const onBlurShowPH = (ph) => {
			return (e) => { e.target.placeholder = ph; };
		};
		return (
			<div>
				<div className="blog-form">
					<input
						className="title-in custom-in"
						placeholder={titlePH}
						onFocus={onFocusHidePH}
						onBlur={onBlurShowPH}
						onChange={this.updateTitle}
						value={this.state.title}
					/>
					<textarea
						className="content-in custom-in"
						placeholder={contentPH}
						onFocus={onFocusHidePH}
						onBlur={onBlurShowPH(contentPH)}
						rows="30"
						onChange={this.updateContent}
						value={this.state.content}
					/>
					<button
						className="send-btn"
						onClick={this.newPost}
					>
						Send!
					</button>
				</div>
			</div>
		)
	}
}

export default BlogForm;
