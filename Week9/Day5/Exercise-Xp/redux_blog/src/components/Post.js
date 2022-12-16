import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
    constructor (props) {
        super(props)
        this.state={

        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                {
                    this.props.post ?
                    <div>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.body}</p> 
                    </div>
                    : <h1>loading</h1>
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        // post: state.posts.find(ownProps === this.props.posts.id)
    }
}

export default (mapStateToProps) (Post);