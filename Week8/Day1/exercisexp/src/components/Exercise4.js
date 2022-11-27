import React from "react";

const Exercise4 = () => {
    return (
        <div>
            <h1 style={style_header}>hello</h1>
            <h2>goodbye</h2>
            <p className="para">this is our paragraph</p>
            <a href="https://www.quora.com/What-made-you-rage-when-coding">article about coding</a>
            <form>
                <input type="text" placeholder="write your most frustrating coding problem"></input>
                <input type="submit" value="submit"></input>
            </form>
            <img src="https://media.wnyc.org/i/800/0/l/85/1/dreamstime_l_6655284.jpg" alt="woman with hammer"></img>
            <ul>
                <li>sugar</li>
                <li>honey</li>
                <li>ice</li>
                <li>tea</li>
            </ul>
        </div>
    )
}
const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

export default Exercise4