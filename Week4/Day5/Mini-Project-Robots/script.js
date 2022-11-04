let robots = document.getElementById("robots");

let robotBox;

let robotDiv = () => {
    for(let i=0; i < 10; i++) {
        robotBox = document.createElement("div");
        robots.appendChild(robotBox);
        robotBox.style.background = "#1bd7c1";
        robotBox.setAttribute("class", "itemPara");
    }
}
robotDiv();


class Robot {
    constructor (id,name,username,email,image) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.image = image;
    }
}

const robot1 = new Robot ("1", "Leanne Graham","Bret","Sincere@april.biz","https://robohash.org/1?200x200");

console.log(robot1);

let itemPara = document.querySelector(".itemPara");

let header1 = document.createElement("h2");

let headerText = document.createTextNode(`${robot1.name}`);

let email1 = document.createElement("p");

let emailText = document.createTextNode(`${robot1.email}`);

let image1 = document.createElement("img");

image1.setAttribute("src",`${robot1.image}`)


header1.append(headerText);
email1.append(emailText);

itemPara.append(image1);

itemPara.append(header1);

itemPara.append(email1);


// const robots = [
//     {
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz',
//       image: 'https://robohash.org/1?200x200'
//     },
//     {
//       id: 2,
//       name: 'Ervin Howell',
//       username: 'Antonette',
//       email: 'Shanna@melissa.tv',
//       image: 'https://robohash.org/2?200x200'
//     },
//     {
//       id: 3,
//       name: 'Clementine Bauch',
//       username: 'Samantha',
//       email: 'Nathan@yesenia.net',
//       image: 'https://robohash.org/3?200x200'
//     },
//     {
//       id: 4,
//       name: 'Patricia Lebsack',
//       username: 'Karianne',
//       email: 'Julianne.OConner@kory.org',
//       image: 'https://robohash.org/4?200x200'
//     },
//     {
//       id: 5,
//       name: 'Chelsey Dietrich',
//       username: 'Kamren',
//       email: 'Lucio_Hettinger@annie.ca',
//       image: 'https://robohash.org/5?200x200'
//     },
//     {
//       id: 6,
//       name: 'Mrs. Dennis Schulist',
//       username: 'Leopoldo_Corkery',
//       email: 'Karley_Dach@jasper.info',
//       image: 'https://robohash.org/6?200x200'
//     },
//     {
//       id: 7,
//       name: 'Kurtis Weissnat',
//       username: 'Elwyn.Skiles',
//       email: 'Telly.Hoeger@billy.biz',
//       image: 'https://robohash.org/7?200x200'
//     },
//     {
//       id: 8,
//       name: 'Nicholas Runolfsdottir V',
//       username: 'Maxime_Nienow',
//       email: 'Sherwood@rosamond.me',
//       image: 'https://robohash.org/8?200x200'
//     },
//     {
//       id: 9,
//       name: 'Glenna Reichert',
//       username: 'Delphine',
//       email: 'Chaim_McDermott@dana.io',
//       image:'https://robohash.org/9?200x200'
//     },
//     {
//       id: 10,
//       name: 'Clementina DuBuque',
//       username: 'Moriah.Stanton',
//       email: 'Rey.Padberg@karina.biz',
//       image:'https://robohash.org/10?200x200'
//     }
//     ];