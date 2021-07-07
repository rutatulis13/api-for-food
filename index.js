let searchBtn = document.querySelector('#searchBtn');
let APP_ID = 'e18dd958';
let API_KEY = 'd8832cad1fdf28441f1d95e930ec35cf';

searchBtn.addEventListener("click", ()=>{
   sendApiRequest()
   sendApiRequestVeg()
})

const enter = document.querySelector('#text-field');
enter.addEventListener("keyup", function(e){
    if(e.keyCode === 13){;
      sendApiRequest();
    }});

async function sendApiRequest(){
    let inputVal = document.querySelector('#text-field').value;
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${inputVal}&from=0&to=40`);
    // let response = await fetch(`https://api.edamam.com/search?q=vegan&app_id=${APP_ID}&app_key=${API_KEY}&health=vegan`);
    let data = await response.json();
    console.log(data);
    const recipes = data.hits;
    useApiData(recipes);
}

function useApiData(recipes) {
  let html = '';

    
  recipes.forEach((recipe) => { //prieinamas tik masyvas, jei is serverio pareina masyvas, tada for each, o jei objektas, tai ereikia loopint
      console.log(recipe);
      html += `
      <div id="kortele" class="card col-3 offset-1">
      <div class="image-holder">
      <span class="card-label">${recipe.recipe.dietLabels.toString()}</span>
      <img src="${recipe.recipe.image}" class="card-img-top" alt="..." onerror="this.onerror=null;this.src='https://image.freepik.com/free-vector/plate-with-cutlery_1284-42854.jpg';">

      </div>
      <div class="card-body">
        <h5 class="card-title">${recipe.recipe.label}</h5>
        <p class="card-text"><b>Colories:</b> ${Math.round(recipe.recipe.calories)}</p>
        <p class="card-text"><b>Portions:</b> ${recipe.recipe.yield}</p>
        <a href="${recipe.recipe.url}" class="btn btn-primary">Go To Recipe</a>
      </div>
    </div>
      `                
  });
  document.getElementById("content").innerHTML = html;
}



const vegan = document.querySelector('#vegan');
const vegetarian = document.querySelector('#vegetarian');
const gluten = document.querySelector('#gluten');
const wheat = document.querySelector('#wheat');
const kidney = document.querySelector('#kidney');
const pescatarian = document.querySelector('#pescatarian');
const soy = document.querySelector('#soy');
const fish = document.querySelector('#fish');
const dairy = document.querySelector('#dairy');
const egg = document.querySelector('#egg');
const pork = document.querySelector('#pork');
const oil = document.querySelector('#oil');
const immune = document.querySelector('#immune');
const sugar = document.querySelector('#sugar');
const fodmap = document.querySelector('#fodmap');
const meat = document.querySelector('#meat');

vegan.addEventListener("click", ()=>{
    sendApiRequestVegan()
})
vegetarian.addEventListener("click", ()=>{
    sendApiRequestVegetarian()   
})
gluten.addEventListener("click", ()=>{
    sendApiRequestGluten()   
})
wheat.addEventListener("click", ()=>{
    sendApiRequestWheat()   
})
kidney.addEventListener("click", ()=>{
    sendApiRequestKidney()   
})
pescatarian.addEventListener("click", ()=>{
    sendApiRequestPescatarian()   
})
soy.addEventListener("click", ()=>{
    sendApiRequestSoy()   
})
fish.addEventListener("click", ()=>{
  sendApiRequestFish()   
})
dairy.addEventListener("click", ()=>{
  sendApiRequestDairy()   
})
egg.addEventListener("click", ()=>{
  sendApiRequestEgg()   
})
pork.addEventListener("click", ()=>{
  sendApiRequestPork()   
})
oil.addEventListener("click", ()=>{
sendApiRequestOil()   
})
sugar.addEventListener("click", ()=>{
sendApiRequestSugar()   
})
immune.addEventListener("click", ()=>{
  sendApiRequestImmune()   
  })
fodmap.addEventListener("click", ()=>{
  sendApiRequestFodmap()   
})
meat.addEventListener("click", ()=>{
  sendApiRequestMeat()   
  })

  

async function sendApiRequestVegan(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=vegan&app_id=${APP_ID}&app_key=${API_KEY}&health=vegan&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}
async function sendApiRequestVegetarian(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=vegetarian&app_id=${APP_ID}&app_key=${API_KEY}&health=vegetarian&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}
async function sendApiRequestGluten(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=gluten-free&app_id=${APP_ID}&app_key=${API_KEY}&health=gluten-free&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}
async function sendApiRequestWheat(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=wheat-free&app_id=${APP_ID}&app_key=${API_KEY}&health=wheat-free&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}

async function sendApiRequestKidney(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=?&app_id=${APP_ID}&app_key=${API_KEY}&health=kidney-friendly&health=alcohol-free&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}
async function sendApiRequestPescatarian(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=fish&app_id=${APP_ID}&app_key=${API_KEY}&health=pescatarian&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}
async function sendApiRequestSoy(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=vegan&app_id=${APP_ID}&app_key=${API_KEY}&health=soy-free&health=alcohol-free&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}
async function sendApiRequestFish(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=meat&app_id=${APP_ID}&app_key=${API_KEY}&health=fish-free&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}
async function sendApiRequestDairy(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=?&app_id=${APP_ID}&app_key=${API_KEY}&health=dairy-free&health=alcohol-free&dishType=cookies&dishType=&pancake&dishType=biskuits&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}
async function sendApiRequestEgg(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=egg-free&app_id=${APP_ID}&app_key=${API_KEY}&health=egg-free&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}
async function sendApiRequestPork(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=meat&app_id=${APP_ID}&app_key=${API_KEY}&health=pork-free&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}
async function sendApiRequestOil(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=vegan&app_id=${APP_ID}&app_key=${API_KEY}&health=no-oil-added&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}
async function sendApiRequestSugar(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=?&app_id=${APP_ID}&app_key=${API_KEY}&health=low-sugar&health=alcohol-free&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}
async function sendApiRequestImmune(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=?&app_id=${APP_ID}&app_key=${API_KEY}&health=immuno-supportive&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}
async function sendApiRequestFodmap(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=?&app_id=${APP_ID}&app_key=${API_KEY}&health=fodmap-free&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}
async function sendApiRequestMeat(){
  let responseVegan = await fetch(`https://api.edamam.com/search?q=salad&app_id=${APP_ID}&app_key=${API_KEY}&health=red-meat-free&from=0&to=100`);
  let dataVeg = await responseVegan.json();
  const recipesVegan = dataVeg.hits;
  useApiDataCat(recipesVegan);
}
function useApiDataCat(categories) {

  console.log(categories);
  let html = '';

    
  categories.forEach((category) => { //prieinamas tik masyvas, jei is serverio pareina masyvas, tada for each, o jei objektas, tai ereikia loopint
      console.log(category);
      html += `
    <div id="kortele" class="card col-3 offset-1">
    <div class="image-holder">
    <span class="card-label">${category.recipe.dietLabels.toString()}</span>
    <img src="${category.recipe.image}" class="card-img-top" alt="..." onerror="this.onerror=null;this.src='https://image.freepik.com/free-vector/plate-with-cutlery_1284-42854.jpg';">

    </div>
    <div class="card-body">
      <h5 class="card-title">${category.recipe.label}</h5>
      <p class="card-text"><b>Colories:</b> ${Math.round(category.recipe.calories)}</p>
      <p class="card-text"><b>Portions:</b> ${category.recipe.yield}</p>
      <a href="${category.recipe.url}" class="btn btn-primary">Go To Recipe</a>
    </div>
  </div>
      `                
  });
  document.getElementById("contentCateg").innerHTML = html;
}

function myFunctionMy() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
     
    }
  }
