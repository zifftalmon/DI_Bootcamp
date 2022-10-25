let allBooks = [];
    let book1 = {
        title: "Mr vertigo",
        author: "Paul Auster",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/MrVertigo.JPG/220px-MrVertigo.JPG",
        alreadyRead: true,
    };

    let book2 = {
        title: "His House in the desert",
        author: "Meir Shalev",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1383044474l/879246.jpg",
        alreadyRead: true,
    };

    allBooks.push(book1, book2);

    let table = document.createElement("table") 
    table.innerHTML =` 
    <thead>
        <tr>
            <th colspan="2">My Book List</th>
        </tr>
    </thead>
    <tbody>
    <tr class = "${book1.alreadyRead ? 'red' : ""}">
        <td>${book1.title} written by ${book1.author}</td>
        <td><img src="MrVertigo.JPG"></td>
        <td>${book1.alreadyRead}</td>
    </tr>

    <tr class = "${book1.alreadyRead ? 'red' : ""}">
        <td>${book2.title} written by ${book2.author}</td>
        <td><img src="his house in the desert.JPG"></td>
        <td>${book2.alreadyRead}</td>
    </tr>
    </tbody>
    `

    console.log(table);
    let bookDiv = document.querySelector(".listBooks");
    bookDiv.appendChild(table);


