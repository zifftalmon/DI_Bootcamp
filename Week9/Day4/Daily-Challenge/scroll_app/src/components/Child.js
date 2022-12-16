const Child = (props) => {
    return(
    <div className='divContainer'>
        <div className='container'>
            <div className='iconDiv'>
                <h3>{props.icon}</h3>
                <h3>{props.label}</h3>
            </div>
                <h1>{props.number}</h1>
        </div>
    </div>
    )
}
export default Child