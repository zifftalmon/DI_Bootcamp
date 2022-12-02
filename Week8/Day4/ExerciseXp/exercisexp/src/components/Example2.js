import React, { Component } from 'react';
import { MoreData } from './MoreData';

class Example2 extends Component {
    render() {
        return (
            <div>
                {MoreData.Skills.map(item => {
                    return (
                        <div>
                        <h1>{item.Area}</h1>
                        {item.SkillSet.map(name => {
                            return(
                                    <li>{name.Name}</li>
                            )
                        })}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Example2;