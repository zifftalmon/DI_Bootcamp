import {connect} from 'react-redux'
import { increase } from '../actions/index.js'
const Increase = (props) => {
    return(
        <button onClick={props.increase}> + </button>
    ) 
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch(increase())
    }
}

export default connect(null,mapDispatchToProps)(Increase)