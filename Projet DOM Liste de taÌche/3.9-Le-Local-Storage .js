//local storage
/*
localStorage.getItem(name, 'jeje')
localStorage.getItem(age, '31')
sessionStorage.setItem(name, 'jeje')
*/

//localStorage.removeItem()

/*
let names = localStorage.getItem('names')

localStorage.clear()
*/

//créer l'évenement save

function save() {
    console.log('fonction save')
    let tache = document.getElementById('contenuTache').value;
    console.log(tache)
    localStorage.setItem('namesTask', tache)
}

//créer l'evenement remove

function remove() {
    document.getElementById('contenuTache').value = 'coucou';
    localStorage.removeItem('namesTask', tache)
}