import React, { Component } from 'react';
import { MoreData } from './MoreData';

class Example1 extends Component {
    render() {
        return (
            <div>
                {MoreData.SocialMedias.map(item => {
                    return(
                        <div key={item}>
                            <h3>{item}</h3>
                        </div>   
                    )
                })}
            </div>
        );
    }
}

export default Example1;