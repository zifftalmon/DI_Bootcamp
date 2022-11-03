class Video {
    constructor (title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch () {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`)
    }
}

let elephant = new Video ("elephants in the zoo", "james", 3000);
elephant.watch();

let motocycle = new Video ("fastest motorcycle", "lenny123", 45000)
motocycle.watch();

let videoArray = [
    {
    title:"banana",
    uploader:"jerry",
    time:300
    },
    {
    title:"fencing",
    uploader:"jennifer",
    time:2000
    },
    {title:"sharks",
    uploader:"dan",
    time:2300
    },
    {
    title:"dark sky",
    uploader:"ben",
    time:10000
    },
    {
    title:"santa",
    uploader:"ron",
    time:4000}
]
const videos =[];
for (const video of videoArray) {
    const uploader = video.uploader;
    const title = video.title;
    const time = video.time;
    const newVideo = new Video (uploader,time,title);
    videos.push(newVideo);
}
console.log(videos);


/*
i wasn't sure how to reach the of this challenge since i knew what to implement
execpt for the loopinf of the videoArray, when i tried for each it was hard to find 
a way to instatsise for each element, finally i resorted to a for of since what i wanted
is just elements and a way to loop in instatsise at the end of the loop
*/