import {useState} from 'react'
import Card from './Card'
const Search = () => {
    const [books,setBooks] = useState([])
    
    const newSearch = (e) => {
        e.preventDefault()
        console.log(e.target[0].value);
        const search = async () => {
            const call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${e.target[0].value}`)
            const req = await call.json()
            setBooks(req.items)
        }
        search()
    }
    
    console.log(books);
    
    return(
        <>
        <div style={{margin:'1em',display:'flex',justifyContent:'center'}}>
            <form onSubmit={newSearch}>
                <input style={{padding:'0.5em'}} type='search' placeholder='searh for a book'/>
                <button style={{padding:'0.3em',width:'50px'}}>🔍</button>
            </form>
        </div>
        <div className='book-container'>
            
            {
                books.map((item,i) => {
                    return(
                        <div key={i}>
                            <Card title={item.volumeInfo.title} author={item.volumeInfo.authors} img={!item.volumeInfo.imageLinks ? 'No-Image-Placeholder.svg.png' : item.volumeInfo.imageLinks.smallThumbnail} date={item.volumeInfo.publishedDate}/>                                                                 
                        </div>
                    )                  
                })
            }
        </div>
        </>
    )
}

export default Search