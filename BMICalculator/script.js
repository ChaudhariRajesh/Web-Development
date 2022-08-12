var button = document.getElementById("calculate-button");

var heightInput = document.getElementById("height-input");
var weightInput = document.getElementById("weight-input");

var outputDisplay = document.getElementById("result-display")
outputDisplay.firstElementChild.readOnly = true;

var heightUnitItem = document.getElementById("height-unit-item")
var heightUnitButton = document.getElementById("height-unit-button")

var copyButton = document.getElementById("copy-button")

var heightInMeters = Number.parseInt(0);
var weightInKilograms = Number.parseInt(0);
var bmi = Number.parseInt(0);

var heightUnit = "feet";
var weightUnit = "kilograms";


heightUnitItem.addEventListener("click",function(){
  if(heightUnitButton.innerHTML == "Feet")
  {
    heightUnitButton.innerHTML = "Meters";
    heightUnitItem.innerHTML = "Feet";
    heightUnit = "meters";
  }
  else
  {
    heightUnitButton.innerHTML = "Feet";
    heightUnitItem.innerHTML = "Meters";
    heightUnit = "feet";
  }
});


var weightUnitItem = document.getElementById("weight-unit-item")
var weightUnitButton = document.getElementById("weight-unit-button")
weightUnitItem.addEventListener("click",function(){
  if(weightUnitButton.innerHTML == "Kilograms")
  {
    weightUnitButton.innerHTML = "Pounds";
    weightUnitItem.innerHTML = "Kilograms";
    weightUnit = "pounds";
  }
  else
  {
    weightUnitButton.innerHTML = "Kilograms";
    weightUnitItem.innerHTML = "Pounds";
    weightUnit = "kilograms";
  }
});


button.addEventListener("click",function(event){

    var check = parseInt(0);

    if(heightInput.value == "" || heightInput.value == null)
    {
      heightInput.placeholder = "Please enter the height";
    }
    else
    {
      check += 1;
      if(heightUnit == "feet")
      {
        heightInMeters = Number.parseFloat(Number.parseInt(heightInput.value) / 3.2808);
      }
      else
      {
        heightInMeters = Number.parseFloat(heightInput.value);
      }
      heightInput.placeholder = "Height";
    }

    if(weightInput.value == "" || weightInput.value == null)
    {
      weightInput.placeholder = "Please enter the weight";
    }
    else
    {
      check += 1;
      if(weightUnit == "pounds")
      {
        weightInKilograms = Number.parseFloat(Number.parseInt(weightInput.value) * 0.45359237);
      }
      else
      {
        weightInKilograms = Number.parseFloat(weightInput.value);
      }
      console.log("Second: " + check);
      weightInput.placeholder = "Weight";
    }

    if(check == 2)
    {
      bmi = Number.parseFloat(weightInKilograms / (heightInMeters*heightInMeters)).toFixed(2);
      outputDisplay.firstElementChild.value = bmi.valueOf();

      outputDisplay.style.visibility = "visible";

      check = 0;

    }

});


copyButton.addEventListener("click",function(){

  navigator.clipboard.writeText(outputDisplay.firstElementChild.value);

});
