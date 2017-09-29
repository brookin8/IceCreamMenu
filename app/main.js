var products = {
  
  "Regular Flavors": [

    {
      "name": "Chocolate", //[0][name]
      "description": "Loved by kids of all ages!", //[0][description]
      "price": "2.00" //[0][3]
    },
    {
      "name": "Vanilla",
      "description": "Elegant and understated",
      "price": "2.00"
    },
    {
      "name": "Strawberry",
      "description": "A taste of summer...anytime!",
      "price": "2.00"
    }
  ],
  "Seasonal Flavors": [
    {
      "name": "Salted Caramel",
      "description": "Sweet and salty",
      "price": "3.00"
    },
    {
      "name": "Pumpkin Spice",
      "description": "Delightful any time of year, but especially now",
      "price": "3.00"
    }
  ],
  "Serving Options": [
    {
      "name": "Waffle Cone",
      "description": "Made fresh by hand in our store each day",
      "price": "1.25"
    },
    {
      "name": "Cup",
      "description": "Plenty of room for toppings",
      "price": "0.00"
    }
  ],
  "Toppings": [
    {
      "name": "Hot Fudge",
      "description": "Rich and chocolatey and just sweet enough",
      "price": "1.00"
    },
    {
      "name": "Marshmallows",
      "description": "Hand-made the old-fashioned way",
      "price": "1.50"
    },
    {
      "name": "Rainbow Sprinkles",
      "description": "Like a million tiny little smiles",
      "price": "0.75"
    }
  ]
};
var menuButtons = document.getElementsByClassName('menuButton');
var regularClick = false;
var seasonalClick = false;
var toppingsClick = false;
var servingClick = false;

var printOutOptions = document.getElementsByClassName('printOutOptions');

var printOutOptions1 = document.getElementById('printOutOptions1');
var printOutOptions2 = document.getElementById('printOutOptions2');
var printOutOptions3 = document.getElementById('printOutOptions3');
var printOutOptions4 = document.getElementById('printOutOptions4');

var optionInfo = document.getElementsByClassName('optionInfo');

document.onreadystatechange = function() { //boilerplate
  if (document.readyState == "interactive") { //boilerplate
    reset(); //Resets everything to start fresh
    for (i = 0; i < menuButtons.length; i++) { //Grabbing each digit button in the numeric class
      menuButtons[i].addEventListener("click", ButtonLogic); //When a digit button is clicked, we run the ButtonLogic function
    }
  }
}

function reset() {

  printOutOptions1.style.display = 'none';
  printOutOptions2.style.display = 'none';
  printOutOptions3.style.display = 'none';
  printOutOptions4.style.display = 'none';
  optionInfo.innerHTML = '';
}

function ButtonLogic() {
  if(this.classList.contains('regular')) {
    regular(); 
  }else if(this.classList.contains('seasonal')) {
    seasonal(); 
  }else if(this.classList.contains('toppings')) {
    toppings();
  } else if (this.classList.contains('serving')) {
    serving();
  }
}

function regular() {

if(!regularClick) {   

    printOutOptions1.style.display = 'block';
   // optionName1.innerHTML = products["Regular Flavors"][0]["name"];
    var names = '';
    var descriptions = '';
    var prices = '';
    for(var i=0; i<products["Regular Flavors"].length;i++) {
      names += "<th>"  + products["Regular Flavors"][i]["name"] + "</th>"
      descriptions += "<td>"  + products["Regular Flavors"][i]["description"] + "</td>"
      prices += "<td>"  + "$" + products["Regular Flavors"][i]["price"] + "</td>"
    }

    document.getElementById('optionName1').innerHTML = names;
    document.getElementById('optionDescription1').innerHTML = descriptions;
    document.getElementById('optionPrice1').innerHTML = prices;

    regularClick = true;

  } else {

    printOutOptions1.style.display = 'none';
    regularClick = false;

  }

}

function seasonal() {

if(!seasonalClick) {   

    printOutOptions2.style.display = 'block';
   // optionName1.innerHTML = products["Regular Flavors"][0]["name"];
    var names = '';
    var descriptions = '';
    var prices = '';
    for(var i=0; i<products["Seasonal Flavors"].length;i++) {
      names += "<th>"  + products["Seasonal Flavors"][i]["name"] + "</th>"
      descriptions += "<td>"  + products["Seasonal Flavors"][i]["description"] + "</td>"
      prices += "<td>"  + "$" + products["Seasonal Flavors"][i]["price"] + "</td>"
    }

    document.getElementById('optionName2').innerHTML = names;
    document.getElementById('optionDescription2').innerHTML = descriptions;
    document.getElementById('optionPrice2').innerHTML = prices;

    seasonalClick = true;

  } else {

    printOutOptions2.style.display = 'none';
    seasonalClick = false;

  }

}

function toppings() {

if(!toppingsClick) {   

    printOutOptions3.style.display = 'block';
   // optionName1.innerHTML = products["Regular Flavors"][0]["name"];
    var names = '';
    var descriptions = '';
    var prices = '';
    for(var i=0; i<products["Toppings"].length;i++) {
      names += "<th>"  + products["Toppings"][i]["name"] + "</th>"
      descriptions += "<td>"  + products["Toppings"][i]["description"] + "</td>"
      prices += "<td>"  + "$" + products["Toppings"][i]["price"] + "</td>"
    }

    document.getElementById('optionName3').innerHTML = names;
    document.getElementById('optionDescription3').innerHTML = descriptions;
    document.getElementById('optionPrice3').innerHTML = prices;

    toppingsClick = true;

  } else {

    printOutOptions3.style.display = 'none';
    toppingsClick = false;

  }

}

    
function serving() {

if(!servingClick) {   

    printOutOptions4.style.display = 'block';
   // optionName1.innerHTML = products["Regular Flavors"][0]["name"];
    var names = '';
    var descriptions = '';
    var prices = '';
    for(var i=0; i<products["Serving Options"].length;i++) {
      names += "<th>"  + products["Serving Options"][i]["name"] + "</th>"
      descriptions += "<td>"  + products["Serving Options"][i]["description"] + "</td>"
      prices += "<td>"  + "$" + products["Serving Options"][i]["price"] + "</td>"
    }

    document.getElementById('optionName4').innerHTML = names;
    document.getElementById('optionDescription4').innerHTML = descriptions;
    document.getElementById('optionPrice4').innerHTML = prices;

    servingClick = true;

  } else {

    printOutOptions4.style.display = 'none';
    servingClick = false;

  }

}

      





