// DÉFINIR l'interface 
/*
const form = document.querySelector('#course-form'),
    listeTache = document.querySelector('.collection'),
    supprimerListe = document.querySelector('.supprimer-course'),
    contenuTache = document.querySelector('#contenuTache');



//boutton


//APPLICATION
malistedeTache()

function malistedeTache() {
    // ajouter un evenement
    form.addEventListener('submit', ajouterUneTache);


    // suprimer un evenement
    listeTache.addEventListener('click', supprimerListe)
}

// ajouter une tache

function ajouterUneTache(e) {
    if (contenuTache.value === '') {
        alert('ajouter une tache')
    }

    // ajouter une balise
    const li = document.createElement('li');

    //ajouter une class dans <li>
    li.className = "collection-item";



    // relier le contenu du formulaire dans <li>
    li.appendChild(document.createTextNode(contenuTache.value));


    // créer le lien <a>
    const link = document.createElement('a');

    // ajouter une class a <a>
    link.className = 'delete-item secondary-content';
    // ajouter une icone
    link.innerHTML = '<icon name="close-circle"></icon>';



    // relier <a> dans le <li>
    li.appendChild(link);

    // relier <li> a <ul>
    listeTache.appendChild(li);

    contenuTache.value = ''



    e.preventDefault()
}
// supprimer ue tache

function supprimerUneTache(e) {
    if (e.target.parentElement.classlist.contains('delete-item')) {
        if (confirm('voulez-vous vraiment supprimer ?'))
            e.target.parentElement.parentElement.remove();
    }
} 
*/