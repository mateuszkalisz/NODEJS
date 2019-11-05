const users = [
    {id: 1, name: 'Romek'},
    {id: 2, name: 'Ziutek'},
    {id: 3, name: 'Eustachy'}
];


module.exports = {
    showUsers(){
        const names = users.map(user => user.name);
        console.log(names);

        console.log("nasi uzytkownicy to (foreach):");
        names.forEach(name => console.log(name));
    },

    showUserObj(id){
        console.log("szukany uzytkownik to:");
        const foundUser = users.find(user => user.id == id);
        console.log(foundUser);
    },

    userListLength: users.length
}