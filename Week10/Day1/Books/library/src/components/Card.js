const Card = (props) => {
    return(
        <div>
            <img alt='book-cover' src={props.img}/>
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
        </div>
    )
}

export default Card