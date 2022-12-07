import TransactionForm from "./TransactionForm";
import { connect } from "react-redux";
import { update_index } from "../redux/actions";
import { delete_trx } from "../redux/actions";

const TransactionList = (props) => {
        return (
            <div>
              <TransactionForm/>
              <hr/>
              <div>
                {
                    props.list.map((item,i) => {
                        return (
                        <div key={i}>
                            <div>{item.account}</div>
                            <div>{item.fsc}</div>
                            <div>{item.name}</div>
                            <div>{item.amount}</div>
                            <div><button onClick={() => props.HandleEdit(i)}>edit</button></div>
                            <div><button onClick={() => props.handleDelete(i)}>delete</button></div>
                        </div>
                        )
                    })
                }
              </div>  
            </div>
        );
}

const mapStateToProps = (state) => {
    return {
        currentIndex: state.currentIndex,
        list: state.account
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleEdit: (index) => dispatch(update_index(index)),
        handleDelete: (index) => dispatch(delete_trx(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);