const playBtn = document.getElementById("bigPlayBtn");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const seekBar = document.getElementById("seekbar");


let audioElement = new Audio("1.mp3")
audioElement.play();


const changePlayBtns = () => {
    if(playBtn.classList.contains("fa-circle-play")){
        playBtn.classList.remove("fa-circle-play");
        playBtn.classList.add("fa-circle-pause")
    }else{
        playBtn.classList.remove("fa-circle-pause");
        playBtn.classList.add("fa-circle-play")
    }

}

playBtn.addEventListener("click", () => {
    changePlayBtns();
})
backBtn.addEventListener("click", () => {
    
})
forwardBtn.addEventListener("click", () => {
    
})





