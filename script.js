const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closebutton = document.getElementById('close');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(closebutton){
    closebutton.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}