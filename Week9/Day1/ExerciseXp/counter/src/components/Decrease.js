import {connect} from 'react-redux'
import { decrease } from '../actions/index.js'
const Decrease = (props) => {
    return(
        <button onClick={props.decrease}> - </button>
    ) 
}

const mapDispatchToProps = (dispatch) => {
    return {
        decrease: () => dispatch(decrease())
    }
}

export default connect(null,mapDispatchToProps)(Decrease)