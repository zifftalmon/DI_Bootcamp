import React from "react"
import { connect } from 'react-redux'
import { increment, decrement } from "../redux/actions"

const Counter = (props) => {

    const incrementIfOdd = () => {
        if(props.count % 2 === 1) {
            return props.increment
        }
    }

    // const asyncAdd = setTimeout(props.increment,1000)

        return(
            <>
            <p>clicked: {props.count} times</p>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
            <button onClick={() => incrementIfOdd}>increment if odd</button>
            <button>increment async</button>
            </>
        )
    }
    

const mapStateToProps = (state) => {
    return {
        count: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)