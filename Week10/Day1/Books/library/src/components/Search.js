import {useState,useEffect} from 'react'
import Card from './Card'

const Search = () => {
    const [books,setBooks] = useState([])


    useEffect(() => {
        const search = async () => {
            const call = await fetch('https://www.googleapis.com/books/v1/volumes?q=harry')
            const req = await call.json()
            setBooks(req.items)
        }
        search()
    },[])
    console.log(books);
        

    return(
        <>
        <div style={{margin:'1em',display:'flex',justifyContent:'center'}}>
            <input style={{padding:'0.5em'}} type='search' placeholder='searh for a book'/>
            <button style={{padding:'0.3em',width:'50px'}}>🔍</button>
        </div>
        <div>
            {
                books.map((item,i) => {
                    return(
                        <div key={i}>
                            <Card title={item.volumeInfo.title} author={item.volumeInfo.authors} img={item.volumeInfo.imageLinks.smallThumbnail}/>   
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Search