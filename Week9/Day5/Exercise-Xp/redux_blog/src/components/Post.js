import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
    
    render() {
        return (
            <div>
                {
                    this.props.post ?
                    <div>
                        <h1>{this.props.post.title}</h1>
                        <p>{this.props.post.body}</p> 
                    </div>
                    : <h1>loading</h1>
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps
    console.log(ownProps);
    return {
        post: state.posts[id]
    }
}

export default connect(mapStateToProps)(Post);