let searchBtn = document.querySelector('#search');

// fetch('https://api.kanye.rest')
// .then(res => res.json())
// .then(quote => {
//     quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
// })

// let catButton = document.getElementById('cat');
// catButton.addEventListener('click', evt => {
    
//     let catDiv = document.getElementById('cat-pic')
    
// })
searchBtn.addEventListener("click", ()=>{
   sendApiRequest()
})

async function sendApiRequest(){
    let APP_ID = 'e18dd958';
    let API_KEY = 'd8832cad1fdf28441f1d95e930ec35cf';
    // let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=chicken`);
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    useApiData(data);
}

function useApiData(data) {
    document.querySelector('#content').innerHTML = `
    <div class="card col-3 offset-1" style="width: 18rem;">
  <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[0].recipe.label}</h5>
    <p class="card-text">Colories: ${Math.round(data.hits[0].recipe.calories)}</p>
    

  
    <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go To Recipe</a>
  </div>
</div>
    `
}
