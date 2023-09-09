const URL = 'https://api.thedogapi.com/v1/images/search'

const btn = document.getElementById('buscar')



btn.addEventListener('click',()=>{

    fetch(URL)
    .then(response => response.json())
    .then(data =>{
        const imagen = document.getElementById('fotito')
        imagen.src = data[0].url
        
    } )

})
