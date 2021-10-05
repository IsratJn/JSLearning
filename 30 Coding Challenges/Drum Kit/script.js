function playingSound(event){
   
    const sound = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
    if(sound == null) return;
    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');
}

function removeTransition(event){
    if(event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


window.addEventListener('keydown',playingSound);


const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('transitionend',removeTransition);
})

