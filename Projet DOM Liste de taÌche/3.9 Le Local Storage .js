//local storage
/*
localStorage.getItem(name, 'jeje')
localStorage.getItem(age, '31')
sessionStorage.getItem(name, 'jeje')
*/

//localStorage.removeItem()

/*
let names = localStorage.getItem('names')

localStorage.clear()
*/

//créer l'évenement save

function save() {
    let tache = document.getElementById('tache').value
    localStorage.getItem('namesTask', tache)
}

//créer l'evenement save

function remove() {
    let tache = document.getElementById('tache').value
    localStorage.getItem('namesTask', tache)
}