import React, { Component } from 'react';
import { connect } from 'react-redux';
import blog from './blog.png'
import {Routes, Route, Link} from 'react-router-dom'
import Post from './Post';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
        <>
            <div className='postContainer'>
                <h1>Home</h1>
                {
                    this.props.posts.length > 0 ?
                    this.props.posts.map(item => {
                        return(
                            <div className='post' key={item.id}>
                                <img alt='blog-img' src={blog}/>
                                <div style={{textAlign:'left'}}>
                                    <h2><Link to={`/post_${item.id}`}>{item.title}</Link></h2>
                                    <p>{item.body}</p>
                                </div>
                            </div>
                        )
                    })
                    :<h1>No post to show</h1>
                }
            </div>
        <Routes>
            <Route exact path='/post_*'/>
            <Route path='/post_1' element={<Post title={this.props.posts[0].title} body={this.props.posts[0].body} id={this.props.posts[0].id}/>}/>
            <Route path='/post_2' element={<Post title={this.props.posts[1].title} body={this.props.posts[1].body} id={this.props.posts[1].id}/>}/>
            <Route path='/post_3' element={<Post title={this.props.posts[2].title} body={this.props.posts[2].body} id={this.props.posts[2].id}/>}/>
        </Routes>
        </>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);