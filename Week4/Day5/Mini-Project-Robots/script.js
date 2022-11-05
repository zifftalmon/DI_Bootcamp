//VARIABLE FOR ROBOTS DIV
let robots = document.getElementById("robots");
//VARIABLE FOR DIVS INSIDE ROBOTS DIV
let robotBox;
//FUNCTION FOR CREATING THE ROBOTBOX DIVS
let robotDiv = () => {
    for(let i=0; i < 10; i++) {
        robotBox = document.createElement("div");
        robotBox.setAttribute("class" ,"robotItem")
        robots.appendChild(robotBox);
    }
}
robotDiv();

//CLASS FOR CREATING THE INSTANCES OF THE ROBOT
class Robot {
    constructor (id,name,username,email,image) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.image = image;
    }
}
//ARRAY OF ROBOT DETAILS
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
//VARIABLE FOR STORING THE NEWLY CREATED ROBOT INSTANCES
const result = [];
//LOOP FOR CREATING ROBOT INSTANCES
for (const robot of robotsArray) {
    const id = robot.id;
    const name = robot.name;
    const username = robot.username;
    const email = robot.email;
    const image = robot.image;
    const newRobot = new Robot (id,name,username,email,image);
    result.push(newRobot);
}
//VARIABLE FOR SELECTING THE ROBOTBOX DIVS
let allRobots = document.querySelectorAll(".robotItem")
//FUNCTION FOR ASSIGNING A NAME, AN EMAIL ADDRESS AND AN IMAGE FOR EACH ROBOTBOX DIV
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
        element.setAttribute("id", i);
        element.appendChild(image)
        element.append(header)
        element.append(email)
    })
}
addRobots();
//VARIABLE ASSIGNED WITH THE ARRAY OF THE ROBOXBOX DIVS DETAILS
let robotResult = Object.entries(allRobots);
//VARIABLE FOR RETRIEVING THE SEARCH INPUT
let input = document.getElementById("myInput");
//FUNCTION FOR FILTERING THE RESULT CORRESPONDING TO THE ENTERED INPUT FROM THE SEARCH
let filter = (e) => {
    allRobots.forEach((element) => {
        if(e.target.value.toLowerCase() == element.textContent[0].toLowerCase()) {
        element.style.visibility = "visible";
        } else {
          element.style.visibility = "hidden";
        }

        if (e.target.value == "") {
          element.style.visibility = "visible";
        }
    })
    console.log(e.target.value);
    }
//EVENT LISTENER FOR INPUT ADDED TO THE SEARCH INPUT
input.addEventListener("input", filter);


/*
THERE WERE TWO PARTS I STRUGGLED WITH IN THIS EXERCISE, 

THE FIRST
ONE WAS RETRIEVING EACH ROBOTITEM DIV AND ASSIGNING IT AN INDIVIDUAL
IMAGE, TITLE AND EMAIL, AT FIRST I TRIED DOING THIS WITH JUST ONE DIV HARD CODED TO THE HTML FILE, ONCE I SAW HOW
IT LOOKS AND IT SATISFIED ME I TRIED COMING UP WITH A FUNCTION
TO DO THIS, I USED THE SAME CODE I WROTE FOR INSERTING DETAILS TO THE SINGULAR
DIV, AT FIRST THIS DIDN'T WORK, ALL THE DETAILS GOT INSERTED TO A SINGLE DIV, MY SOLUTION FOR THIS WAS USING
A VARIABLE TO STORE ALL THE DIVS, AND ITERATING OVER THIS VARIABLE WITH FOREACH AND INSERTING THE DETAILS TO EACH ITEM OF THE MENTIONED VARIABLE

THE SECOND
FINDING A WAY TO FILTER OUT THE DESIRED RESULT WHEN ENTERING INPUT TO THE SEARCH INPUT,
THIS WAS DIFFICULT I WASN;T DURE IF I SHOULD USE FILTER OR ANOTHER METHOD, MOST
DOCUMENTATION I FOUND ON THIS MATTER ONLINE WAS RELEVANT TO LISTS AND LIST ITEMS RATHER
THAN DIVS OR "CARDS", I TRIED USING FILTER BUT THIS PROVED UNHELPFUL, AFTER A FEW TRIES WITH DIFFERENT
METHODS SUCH AS MAP AND FOREACH, COMPARING THE ELEMNTS I USED TO A CERTAIN TEXTCONTENT, AND THIS 
WASN'T DYNAMIC LIKE I THE INSTRUCTIONS REQUIRED, FINALLY, I USED AN EVENT LISTENER,
THIS EVENT LISTENER IS TRIGGERED BY INPUT, AND THE FUNCTION FOR IT TAKES THE VALUE OF THE INPUT EVENT TARGET AND 
COMPARES THE VALUE TO THE ELEMNTS' FIRST LETTER, THUS CREATING A SIMPLE & ROUGH FILTER, BECAUSE IT ONLY ACCEPTS
ONE CHARACTER, TWO CHARACTERS CAUSE IT TO DISPLAY NOTHING, WASN'T SURE HOW TO HANDLE THIS PROBLEM
*/