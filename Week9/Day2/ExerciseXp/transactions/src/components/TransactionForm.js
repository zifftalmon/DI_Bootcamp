import React from 'react'
import { connect } from 'react-redux'
import { insert_trx } from '../redux/actions';
import { update_trx } from '../redux/actions'

class TransactionForm extends React.Component {
    constructor() {
        super();
        this.state = {
            accountNumber:'',
            fsc:'',
            name:'',
            amount:''
        }
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.props.currentIndex === -1) {
            this.props.handleInsert(this.state)
        }else {
            this.props.handleUpdate(this.state)
        }
        this.setState({
            accountNumber:'',
            fsc:'',
            name:'',
            amount:''
        })
    }

    componentDidUpdate = (prevProps,prevState) => {
        if(prevProps.currentIndex !== this.props.currentIndex && this.props.currentIndex !== -1) {
            const trx = this.props.list[this.props.currentIndex];
            this.setState({
            accountNumber:trx.accountNumber || '',
            fsc:trx.fsc || '',
            name:trx.name || '',
            amount:trx.amount ||''
            })
        }

    }
 
 render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.accountNumber} type='text' name='accountNumber' placeholder='Account Number' onChange={this.handleChange}/>
                <br/>
                <input value={this.state.fsc} type='text' name='fsc' placeholder='FSC' onChange={this.handleChange}/>
                <br/>
                <input value={this.state.name} type='text' name='name' placeholder='A/C Hlder Name' onChange={this.handleChange}/>
                <br/>
                <input value={this.state.amount} type='text' name='amount' placeholder='Amount' onChange={this.handleChange}/>
                <br/>
                <input type='submit' value={this.props.currentIndex===-1?'Submit':'Update'}></input>
            </form>
        </div>
    )
}
} 
const mapStateToProps = (state) => {
    return {
        currentIndex: state.currentIndex,
        list: state.account
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInsert:(trx) => dispatch(insert_trx(trx)),
        handleUpdate:(trx) => dispatch(update_trx(trx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)