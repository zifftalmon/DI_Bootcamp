import React, { Component } from 'react';
import { MoreData } from './MoreData';
import 'tachyons'

class Example3 extends Component {
    render() {
        return (
            <div>
              {MoreData.Experiences.map(item => {
                return(
                    <div class="tc">
                        <img alt="logo" src={item.logo}></img>
                        <a href={item.url}>{item.companyName}</a>
                        {item.roles.map(role => {
                            return(
                                <div>
                                    <h5>{role.title}</h5>
                                    <h5>{role.startDate}</h5>
                                    <h5>{role.description}</h5>
                                </div>
                            )
                        })}                    
                    </div>
                )
              })}  
            </div>
        );
    }
}


export default Example3;