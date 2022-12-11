import { connect } from "react-redux"
import { input } from "../redux/actions"

const Search = (props) => {
    return(
        <div>
        <input type='text' onChange={props.handleSearch}/>
        </div>
    ) 
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleSearch: (e) => dispatch(input(e.target.value))
    }
  }
  
export default connect(null,mapDispatchToProps) (Search)