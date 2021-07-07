let searchBtn = document.querySelector('#searchBtn');
let API_ID = '1291ff7f';
let API_KEY = '1bc4a5c9191b710b1c5e48cded52dba8';

searchBtn.addEventListener("click", ()=>{
   sendApiRequest()
})
const enter = document.querySelector('#text-field');
enter.addEventListener("keyup", function(e){
    if(e.keyCode === 13){;
      sendApiRequest();
    }});

async function sendApiRequest(){
    let inputVal = document.querySelector('#text-field').value;
    let response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&nutrition-type=logging&ingr=${inputVal}`);
    let data = await response.json();
    console.log(data);
    // const cal = data.calories;
    // const nutri = data.totalNutrients;
    useApiData(data);

}


function useApiData(data) {
  let html = '';
      console.log(data);
      html += `
      <div id="kortele" class="card col-3 offset-1">
      <div class="card-body">
      <h5 class="card-title">NUTRITIONS FACTS</h5>
      <div class="border"></div>
      <p class="card-cal"><b>Calories:</b> ${data.calories}</p>
      <p class="card-cal"><b>Total Weight:</b> ${Math.round(data.totalWeight)} g</p>
      <p class="card-text-small">% Daily value*</p>
      <div class="border-smaller"></div>
      <div class="proc">
        <p class="card-text"><b>Total Fat:</b> ${(Math.round((data.totalNutrients.FAT.quantity) * 100)/100).toFixed(1)} ${data.totalNutrients.FAT.unit}</p>
        <p class="card-text" id="percent">${(Math.round((data.totalDaily.FAT.quantity) * 100)/100).toFixed(0)} ${data.totalDaily.FAT.unit}</p>
      </div>
      <div class="proc">
        <p class="card-text" id="tab">Saturated Fat: ${(Math.round((data.totalNutrients.FASAT.quantity) * 100)/100).toFixed(1)} ${data.totalNutrients.FASAT.unit}</p>
        <p class="card-text" id="percent">${(Math.round((data.totalDaily.FASAT.quantity) * 100)/100).toFixed(0)} ${data.totalDaily.FASAT.unit}</p>
      </div>`
     
      const arr = data.totalNutrients;
      if (arr.hasOwnProperty("FATRN")){
        html+= `<p class="card-text" id="tab">Trans Fat: ${(Math.round((data.totalNutrients.FATRN.quantity) * 100)/100).toFixed(2)} ${data.totalNutrients.FATRN.unit}</p>`
      } else{
        html+= `<p class="card-text" id="tab">Trans Fat: -</p>`
      }
    html+=
      `
      <div class="proc">
         <p class="card-text"><b>Cholesterol:</b> ${(Math.round((data.totalNutrients.CHOLE.quantity) * 100)/100).toFixed(0)}  ${data.totalNutrients.CHOLE.unit}</p>
         <p class="card-text" id="percent">${(Math.round((data.totalDaily.CHOLE.quantity) * 100)/100).toFixed(0)} ${data.totalDaily.CHOLE.unit}</p>
      </div>
      <div class="proc">
        <p class="card-text"><b>Sodium:</b> ${(Math.round((data.totalNutrients.NA.quantity) * 100)/100).toFixed(0)}  ${data.totalNutrients.NA.unit}</p>
        <p class="card-text" id="percent">${(Math.round((data.totalDaily.NA.quantity) * 100)/100).toFixed(0)} ${data.totalDaily.NA.unit}</p>
      </div>
      <div class="proc">
         <p class="card-text"><b>Total Carbohydrate: </b>${(Math.round((data.totalNutrients.CHOCDF.quantity) * 100)/100).toFixed(1)}  ${data.totalNutrients.CHOCDF.unit}</p>
         <p class="card-text" id="percent">${(Math.round((data.totalDaily.CHOCDF.quantity) * 100)/100).toFixed(0)} ${data.totalDaily.CHOCDF.unit}</p>
      </div>
      <div class="proc">
          <p class="card-text" id="tab">Dietary Fiber: ${(Math.round((data.totalNutrients.FIBTG.quantity) * 100)/100).toFixed(2)}  ${data.totalNutrients.FIBTG.unit}</p>
          <p class="card-text" id="percent">${(Math.round((data.totalDaily.FIBTG.quantity) * 100)/100).toFixed(0)} ${data.totalDaily.FIBTG.unit}</p>
      </div>
      <p class="card-text" id="tab">Total Sugars: ${(Math.round((data.totalNutrients.SUGAR.quantity) * 100)/100).toFixed(2)}  ${data.totalNutrients.SUGAR.unit}</p>
      `
      const arrHealth = data.healthLabels;
      if (arrHealth.hasOwnProperty("NO_SUGAR_ADDED")){
        html+= `<p class="card-text" id="tab">No Sugar Added</p>`
      } else{
        html+= `<p class="card-text" id="tab">Includes - Added Sugars</p>`
      }
    html+=
      `
      <div class="proc">
          <p class="card-text"><b>Protein:</b> ${(Math.round((data.totalNutrients.PROCNT.quantity) * 100)/100).toFixed(1)}  ${data.totalNutrients.PROCNT.unit}</p>
          <p class="card-text" id="percent">${(Math.round((data.totalDaily.PROCNT.quantity) * 100)/100).toFixed(0)} ${data.totalDaily.PROCNT.unit}</p>
      </div>
      <div class="proc">
          <p class="card-text">Vitamin D: ${(Math.round((data.totalNutrients.VITD.quantity) * 100)/100).toFixed(2)}  ${data.totalNutrients.VITD.unit}</p>
          <p class="card-text" id="percent">${(Math.round((data.totalDaily.VITD.quantity) * 100)/100).toFixed(0)} ${data.totalDaily.VITD.unit}</p>
      </div>
      <div class="proc">
       <p class="card-text">Calcium: ${(Math.round((data.totalNutrients.CA.quantity) * 100)/100).toFixed(0)}  ${data.totalNutrients.CA.unit}</p>
       <p class="card-text" id="percent">${(Math.round((data.totalDaily.CA.quantity) * 100)/100).toFixed(0)} ${data.totalDaily.CA.unit}</p>
      </div>
      <div class="proc">
       <p class="card-text">Iron: ${(Math.round((data.totalNutrients.FE.quantity) * 100)/100).toFixed(1)}  ${data.totalNutrients.FE.unit}</p>
       <p class="card-text" id="percent">${(Math.round((data.totalDaily.FE.quantity) * 100)/100).toFixed(0)} ${data.totalDaily.FE.unit}</p>
      </div>
      <div class="proc"
       <p class="card-text">Potassium: ${(Math.round((data.totalNutrients.K.quantity) * 100)/100).toFixed(0)}  ${data.totalNutrients.K.unit}</p>
       <p class="card-text" id="percent">${(Math.round((data.totalDaily.K.quantity) * 100)/100).toFixed(0)} ${data.totalDaily.K.unit}</p>
      </div>
      <div class="border-smaller"></div>
       <p class="card-text-small">*Percent Daily Values are based on a 2000 calorie diet</p>`
   
      

  document.getElementById("content").innerHTML = html;
}
function myFunctionMy() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
   
  }
}
