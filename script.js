const playBtn = document.getElementById("bigPlayBtn");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const seekBar = document.getElementById("seekbar");
const duration = Array.from(document.getElementsByClassName("duration"));
const songItems = Array.from(document.getElementsByClassName("songName"));  //converts object to array
const listTap = Array.from(document.getElementsByClassName("songContainer"));
const gif = Array.from(document.getElementsByClassName("gif"));
let audioElement = new Audio("Music/Clarx & Shiah Maisel - Pull Me In (feat. M.I.M.E) [NCS Release].mp3");
let songIndex = 0;

let songs = [
        {songName:"Clarx & Shiah Maisel - Pull Me In (feat. M.I.M.E) [NCS Release]", filepath:"Music/Clarx & Shiah Maisel - Pull Me In (feat. M.I.M.E) [NCS Release].mp3"},
        {songName:"Crushed Candy - Oh My Gawd [NCS Release]", filepath:"Music/Crushed Candy - Oh My Gawd [NCS Release].mp3"},
        {songName:"Itro - Never Let You Down [NCS Release]", filepath:"Music/Itro - Never Let You Down [NCS Release].mp3"},
        {songName:"Jonth - Bass Face [NCS Release]", filepath:"Music/Jonth - Bass Face [NCS Release].mp3"},
        {songName:"MANIA & Tom Wigley - Calling Out Your Name (ft. Lottie Jones) [NCS Release]", filepath:"Music/MANIA & Tom Wigley - Calling Out Your Name (ft. Lottie Jones) [NCS Release].mp3"},
        {songName:"Naeleck - Burning Wish (feat. Roniit) [NCS Release]", filepath:"Music/Naeleck - Burning Wish (feat. Roniit) [NCS Release].mp3"},
        {songName:"Rameses B - Keep You [NCS Release]", filepath:"Music/Rameses B - Keep You [NCS Release].mp3"},
        {songName:"ROY KNOX - Memory Box [NCS Release]", filepath:"Music/ROY KNOX - Memory Box [NCS Release].mp3"},
        {songName:"Siimi - Set You Free (VERCU Remix) [NCS Release]", filepath:"Music/Siimi - Set You Free (VERCU Remix) [NCS Release].mp3"},
        {songName:"TWISTED - BUSSIN' [NCS Release]", filepath:"Music/TWISTED - BUSSIN' [NCS Release].mp3"},
]
//audioElement.play();

songItems.forEach((element,i) => {
    element.innerText = songs[i].songName;
})


const playSong = (index)=> {

    audioElement.src = `Music/${index}.mp3`;
    audioElement.play();
}

const highLight = (index) => {
    document.getElementById(index).style.background = "rgb(80, 80, 80)";
}

const unselect = () => {
    listTap.forEach((element)=>{
        document.getElementById(element.id).style.background = "rgb(38, 38, 38)";
    })
}

playBtn.addEventListener("click", () => {
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        playBtn.classList.remove("fa-circle-play");
        playBtn.classList.add("fa-circle-pause")
    }else{
        audioElement.pause();
        playBtn.classList.remove("fa-circle-pause");
        playBtn.classList.add("fa-circle-play");
    }

})
backBtn.addEventListener("click", () => {
    if(songIndex <= 0){
        alert("You have reached at the start of playlist !")
        songIndex = 0;
        unselect();
        highLight(songIndex);
    }else{
        audioElement.src = `Music/${songIndex - 1}.mp3`;
        songIndex = songIndex -1;
        audioElement.play();
        unselect();
        highLight(songIndex);

    }
    
})
forwardBtn.addEventListener("click", () => {
    if(songIndex > 9){
        alert("You have reached at the end of playlist !")
        songIndex = 9;
        unselect();
        highLight(songIndex);
    }else{
        audioElement.src = `Music/${songIndex + 1}.mp3`;
        songIndex = songIndex + 1;
        audioElement.play();
        unselect();
        highLight(songIndex);
    }
    
})
audioElement.addEventListener("timeupdate", ()=> {
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    seekBar.value = progress;
    //console.log(progress)
})

seekBar.addEventListener('change', ()=>{
    audioElement.currentTime = (seekBar.value * audioElement.duration)/100;
})

listTap.forEach((element)=>{
    element.addEventListener("click", ()=>{
        songIndex = element.id;
        unselect();
        highLight(songIndex);
        playSong(songIndex);
        audioElement.currentTime =0;
        playBtn.classList.add("fa-circle-pause");
    })
})







