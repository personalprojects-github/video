const url = document.querySelector('input');
const video = document.querySelector('#my-video');
const playBtn = document.querySelector('.play-btn');
const stopBtn = document.querySelector('.stop-btn');
const fullscreenBtn = document.querySelector('.fullscreen-btn');
const deleteBtn = document.querySelector('.delete-btn');

playBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(url.value !== ''){
        if(video.src === ''){
            video.src = url.value;
            video.play();
            video.controls = true;
        }else{
            video.play();
            video.controls = true;
        }
    }else{
        return -1;
    }
});
stopBtn.addEventListener('click', function(){
    video.pause();
});
fullscreenBtn.addEventListener('click', function(){
    video.requestFullscreen();
});
deleteBtn.addEventListener('click', function(e){
    e.preventDefault();
    url.value = '';
    video.src = '';
    video.removeAttribute('src');
});







