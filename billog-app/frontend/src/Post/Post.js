import React, {Component} from 'react';
import axios from 'axios';

//Stateful component that uses Axios to issue a GET request to the endpoint that retrieves the whole details of a post
// and that updates the page whenever it gets a response back.

class Question extends Component {
    constructor(props) {
        super(props);
        this.state ={
            post: null,
        };
    }

    // issues get request upon mount to retreive all details of a post
    async componentWillMount() {
        const { match: { params } } = this.props;
        const post = (await axios.get(`http://localhost:8081/${params.postId}`)).data;
        this.setState({
            post,
        });
    }

    // renders post details and all comments attached to post 
    render() {
        const {post} = this.state;
        if (post === null) return <p>Loading ...</p>;
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron col-12">
                        <h1 className="display-3">{post.title}</h1>
                        <p className="lead">{post.content}</p>
                        <hr className="my-4"/>
                        <p>Comments:</p>
                        {
                            post.comments.map((comment, idx) => (
                                <p className="lead" key={idx}>{comment.comment}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;