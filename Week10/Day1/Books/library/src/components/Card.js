const Card = (props) => {
    return(
        <div className="book-card">
            <img className="book-img" alt='book-cover' src={props.img}/>
            <h4>{props.title}</h4>
            <h5>{props.author}</h5>
            <h6>published:{props.date}</h6>
        </div>
    )
}

export default Card