const inputs = document.querySelectorAll('.controls input');

function updateImageProperty(event){
    const suffix = this.dataset.sizing || ' ';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);

}

inputs.forEach((element)=>{
    element.addEventListener('change',updateImageProperty);
    element.addEventListener('mousemove',updateImageProperty);
})