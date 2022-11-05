let robots = document.getElementById("robots");

let robotBox;

let robotDiv = () => {
    for(let i=0; i < 10; i++) {
        robotBox = document.createElement("div");
        robotBox.setAttribute("class" ,"robotItem")
        robots.appendChild(robotBox);
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

const robotsArray = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

const result = [];

for (const robot of robotsArray) {
    const id = robot.id;
    const name = robot.name;
    const username = robot.username;
    const email = robot.email;
    const image = robot.image;
    const newRobot = new Robot (id,name,username,email,image);
    result.push(newRobot);
}

let allRobots = document.querySelectorAll(".robotItem")

function addRobots () {
    allRobots.forEach((element, i)  => {
        let header = document.createElement("h2");
        let headerText = document.createTextNode(`${result[i].name}`);
        header.append(headerText);
        let email = document.createElement("p");
        let emailText = document.createTextNode(`${result[i].email}`);
        email.appendChild(emailText);
        let image = document.createElement("img");
        image.setAttribute("src",`${result[i].image}`);
        element.appendChild(image)
        element.append(header)
        element.append(email)
        
    })
}

addRobots();
