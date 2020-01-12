const name = document.querySelector('#name');
const pass = document.querySelector('#pass');

const button = document.querySelector('a');

// const info = document.querySelector('.info');
// const infoLogout = document.querySelector('.infoLogout');

// info.style.display = "none";
// infoLogout.style.display = "none";

button.addEventListener('click', ()=>{
    fetch('/login', {
        method: 'POST',
        body: JSON.stringify({
            name: name.value,
            pass: pass.value,
        }),
        headers: 
        {'Content-Type': 'application/json'}
    })
})