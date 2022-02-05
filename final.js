var arr = JSON.parse(array);

for (let value of array) {
  
  document.getElementById("result").innerHTML += `
  <div class="card cardDetails m-2" style="width: 18rem;">
  <img src="${value.img}" class="card-img-top" alt="${value.task}">
  <div class="card-body">
    <h5 class="card-title">${value.task} </h5>
    <p class="card-text">${value.description} <br>
      <p>Priority level: </p>
      <button id="colorbtn-${value.id}" onclick="myFunction('${value.id}')" >
      <p id="result-${value.id}"> ${value.Priority_level}</p>
  </button>
    
   <br> ${value.Deadline}</p>
  </div>
</div>
  `;
}
// const button = document.querySelector(".colorbtn-1");
// const res = document.querySelector(".result");
let index = 0; 

const colors = ['salmon', 'green', 'blue', 'purple'];

function myFunction(param){
var res = "result-"+param;
var id_val = "colorbtn-"+param;
var resulting = "result-"+param;
var result_c = resulting.split("-");
// var value = parseInt(result_c[1]) + 1;
 var value = document.getElementById(res).innerHTML
 value++;
console.log(`param : ${param}`);
console.log(`id_val : ${id_val}`);
console.log(`resulting : ${resulting}`);
console.log(`result_c : ${result_c}`);
console.log(`value : ${value}`);


document.getElementById(res).innerHTML = value;
if(value <= 1){
 document.getElementById(id_val).style.backgroundColor = "green";
} else if(value > 1 && value <= 3){
 document.getElementById(id_val).style.backgroundColor = "yellow";
} else if(value > 3 && value <= 5){
 document.getElementById(id_val).style.backgroundColor = "red";
} else {
 document.getElementById(id_val).style.backgroundColor = "white";
}

}
