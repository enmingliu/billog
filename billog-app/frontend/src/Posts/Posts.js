import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Posts extends Component {
    constructor(props) {
        super(props);
        // Initialize posts property to null upon construction
        this.state = {
            posts: null,
        };
    }

    // async trigger after successful component mount
    async componentDidMount() {
        // issue GET request to express.js backend
        const posts = (await axios.get('http://localhost:8081/')).data;
        this.setState({
            posts,
        });
    }

    // renders 'loading posts ...' between construction and mounting
    // upon response from backend, put data into a const posts, which we update the HTML with
    // uses Link from react-router-dom to redirect users to the following path:'/post/${post.id}'
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.posts === null && <p>Loading posts...</p>}
                    {
                        this.state.posts && this.state.posts.map(post => (
                            <div key={post.id} className="col-sm-12 col-md-4 col-lg-3">
                                <Link to={`/post/${post.id}`}>
                                    <div className="card text-white bg-success mb-3">
                                        <div className="card-header">Comments: {post.comments}</div>
                                        <div className="card-body">
                                            <h4 className="card-title">{post.title}</h4>
                                            <p className="card-text">{post.content}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        ))
                    }
                </div>
            </div>
        )
    }

}

export default Posts;