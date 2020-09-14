//XHR

document.getElementById('button').addEventListener('click', message)

function message() {
    // objet XHR
    const xhr = new XMLHttpRequest();

    //OPEN

    xhr.open('GET', 'user.json', true)





    xhr.onload = function() {

        // console.log('READYSTATE', xhr.readyState);

        if (this.status === 200) {

            const user = JSON.parse(this.responseText);


            document.getElementById('reponseMessage').innerHTML = `
                <ul>
                  
                <li>id :${ user.id } </li>
                <li>Nom :${ user.Name } </li>
                <li>Married:${ user.Married } </li>
                
                </ul>`


        }
    }
    xhr.send()

}