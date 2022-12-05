import {connect} from 'react-redux'
// import { increase, decrease } from '../actions/index.js'
import Increase from './Increase.js'
import Decrease from './Decrease.js'



const Counter = (props) => {
    return(
        <div>
            <Decrease />
            {props.count}
            <Increase />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increase: () => dispatch(increase()),
//         decrease: () => dispatch(decrease())
//     }
// }

export default connect(mapStateToProps)(Counter)