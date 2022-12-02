import { data } from "./Data";
import React, { Component } from 'react';

const dataArr = data

class PostList extends Component {
    render() {
        return (
            <div>
                <h1>hi this is the title</h1>
                {dataArr.map(item => {
                    return (
                        <>
                        <h1>{item.title}</h1>
                        <p>{item.content}</p>
                        </>
                    )
                })}
            </div>
        );
    }
}

export default PostList;
