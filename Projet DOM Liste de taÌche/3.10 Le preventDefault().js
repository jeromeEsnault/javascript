const lienGoogle = document.getElementById('google')
const cg = document.getElementById('cg')

lienGoogle.addEventListener('click', function(e) {
    if (!cg.checked) {
        e.preventDefault()
    }

})