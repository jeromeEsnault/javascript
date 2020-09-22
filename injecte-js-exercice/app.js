const mynav = document.querySelector('nav'),
    myheader = document.querySelector('header'),
    myfooter = document.querySelector('footer'),
    mymain = document.querySelector('main');


const url = '/mg.json';
// appel des requete
const request = new XMLHttpRequest();

request.open('GET', url);

request.responseType = 'json';

request.send();

request.onload = function() {
    const mangaviest = request.response;
    populateNav(mangaviest);
    // populateheader(mangaviest);
    // populatemain(mangaviest);
    // populatefooter(mangaviest);
    console.log(mangaviest);
}

function populateNav(ObjNav) {

    let myH1 = document.createElement('h1');
    myH1.textContent = ObjNav['titleh1'];
    let myDivNav = document.createElement('div');
    let myDivNav2 = document.createElement('div');
    let myUlNav = document.createElement('ul');
    let myLiNav = document.createElement('li');

    console.log(myH1)

    //class des balise
    mynav.className = 'navbar navbar-expand-lg navbar-light bg-light';
    myDivNav.className = 'row';
    myDivNav2.className = 'col-md-12 text-center';
    myH1.className = 'h2';
    myUlNav.className = 'navbar-nav mr-auto';
    myLiNav.className = 'nav-item';

    //incrementation
    mynav.appendChild(myDivNav);
    myDivNav2.appendChild(myH1);
    mynav.appendChild(myUlNav);
    myDivNav.appendChild(myDivNav2);

    console.log(myH1);

}

//const mysection = document.createElement('section'),
//   mysection2 = document.createElement('section');