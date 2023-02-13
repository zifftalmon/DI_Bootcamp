const Search = () => {
    const search = async () => {
        const call = await fetch('https://www.googleapis.com/books/v1/volumes?q=harry')
        const req = await call.json()
        console.log(req);
    }
    search()
    return(
        <div style={{margin:'1em',display:'flex',justifyContent:'center'}}>
            <input style={{padding:'0.5em'}} type='search' placeholder='searh for a book'/>
            <button style={{padding:'0.3em',width:'50px'}}>🔍</button>
        </div>
    )
}

export default Search