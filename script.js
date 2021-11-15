console.log("welcome to spotify");
let audioElement=new Audio("assests/Cover-1.mp4");
let songIndex=1;
let songs=[
{songName:"Mehfil mein teri" ,filePath:"assests/Cover-1.mp4",coverPath:"assests/mehfil-song.jpg"},
{songName:"Aankhon mein teri" ,filePath:"assests/Cover-2.mp4",coverPath:"assests/Cover-2.jpg"},

{songName:"Khariyat pucho" ,filePath:"assests/Cover-3.mp4",coverPath:"assests/Cover-3.jpg"},
{songName:"Qaffirana sa hien" ,filePath:"assests/Cover-4.mp4",coverPath:"assests/Cover-4.jpg"},
{songName:"Phli dffaa" ,filePath:"assests/Cover-5.mp4",coverPath:"assests/Cover-5.webp"},
{songName:"Tera yaar hun mein" ,filePath:"assests/Cover-6.mp4",coverPath:"assests/Cover-6.jpg"},
{songName:"Sathiyaaa" ,filePath:"assests/Cover-7.mp4",coverPath:"assests/Cover-7.webp"},
{songName:"Aaj sham mastani " ,filePath:"assests/Cover-8.mp4",coverPath:"assests/Cover-8.jpg"},
];
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName('songName'));
let masterSongName=document.getElementsByClassName('masterSongName');
 masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
         audioElement.play();
    
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
         audioElement.pause();
    
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        makeAllPlays();
        gif.style.opacity=0;
    }
     
 })
 audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
 })
 myProgressBar.addEventListener('change',()=>{
     audioElement.currentTime=parseInt((myProgressBar.value*audioElement.duration)/100);
 })
 const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle'); 
        element.classList.add('fa-play-circle'); 
        gif.style.opacity=1;
     })
}
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=songs[songIndex-1].filePath;
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

        gif.style.opacity=1;
     })
 })
document.getElementById('next').addEventListener('click',()=>{
    ;
    if(songIndex>=8)
    {   
        
        songIndex=1;
        
    }
    else{
        songIndex+=1;
    }
   
    audioElement.src=songs[songIndex-1].filePath;
    
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1)
    {
        songIndex=9;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=songs[songIndex-1].filePath;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})

