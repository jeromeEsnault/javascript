// DOM - Document object model
/*


let li =document.querySelector('li')

let n = li
n = li.getAttribute('class')
n = li.setAttribute('style','font-style:  italic; color:red')
li.style.fontSize ="30px"

li.removeAttribute("style")
console.log(n);
*/


let img = document.querySelector('img');
img.onclick = function() {
    //let src = img.getAttribute("src")
    //alert(src)
    let src = img.setAttribute('src', "http://www.dragonball-ultimate.com/wp-content/uploads/2018/01/logo-yellow-600.png")
}




console.log(img);