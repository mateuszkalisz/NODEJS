const aLogout = document.querySelector('#logout');

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