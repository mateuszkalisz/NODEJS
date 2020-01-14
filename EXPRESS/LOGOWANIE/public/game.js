const aLogout = document.querySelector('#logout');
const points = document.querySelector('#points');
const wins = document.querySelector('#wins');
const draws = document.querySelector('#draws');
const losses = document.querySelector('#losses');
const welcome = document.querySelector('#welcome');

function loadSummary(){

    fetch('/summary', {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        points.textContent = data.points;
        wins.textContent = data.wins;
        draws.textContent = data.draws;
        losses.textContent = data.losses;
        welcome.textContent = data.name;
    });
}

loadSummary();


aLogout.addEventListener('click', function(){

    fetch('/logout', {
        method: 'POST',
        body: JSON.stringify({
            logout: true,
        }),
        headers:
        {'Content-Type':'application/json'}
    })
})