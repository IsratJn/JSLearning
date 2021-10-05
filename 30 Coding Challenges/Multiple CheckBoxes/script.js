const allBox = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
function printEvent(e){
    let inBetween = false;
    
    if(e.shiftKey && this.checked)
    {
        allBox.forEach(box=>{
            console.log(box)
            if(box == this || box == lastChecked)
            {
                inBetween = !inBetween;
                console.log('Starting checking!')
            }
            if(inBetween)
            {
                box.checked = true;
            }
        })
    }
    lastChecked = this;
}
allBox.forEach((box)=>{
    box.addEventListener('click',printEvent);
})