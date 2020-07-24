function calculateprofit() {
  var action = document.getElementById("action").value;
  var rates = document.getElementById("rate").value;
  var production = document.getElementById("production").value;
  var slot1 = document.getElementById("slot1").value;
  var slot2 = document.getElementById("slot2").value;
  var fuel = document.getElementById("fuel").value;
  var unitprice = document.getElementById("unitprice").value;
  var minions = document.getElementById("minions").value;

  var slot1 = slot1.toLowerCase();
  var slot2 = slot2.toLowerCase();
  var fuel = fuel.toLowerCase();

  if (fuel == "block of coal") {
  	var bonus = 1.05
  } else if (fuel == "coal") {
	var bonus = 1.05
  } else if (fuel == "enchanted bread") {
	var bonus = 1.05
  } else if (fuel == "enchanted coal") {
	var bonus = 1.1
  } else if (fuel == "solar panel") {
	var bonus = 1.125
  } else if (fuel == "charcoal") {
	var bonus = 1.20
  } else if (fuel == "hamster wheel") {
	var bonus = 1.5
  } else if (fuel == "foul flesh") {
	var bonus = 1.9
  } else if (fuel == "catalyst") {
	var bonus = 3
  } else if (fuel == "enchanted lava bucket") {
	var bonus = 1.25
  } else {
  	var bonus = 1
  }

  if (slot1 == "minion expander") {
  	 var slot1bonus = 1.05;
  	 var diamond1 = 0
  } else if (slot1 == "flycatcher") {
  	 var slot1bonus = 1.3
  	 var diamond1 = 0 
  } else if (slot1 == "diamond spreading") {
  	 var diamond1 = 0.1
  	 var slot1bonus = 1
  } else {
  	 var slot1bonus = 1
  	 var diamond1 = 0
  }

  if (slot2 == "minion expander") {
  	 var slot2bonus = 1.05
  	 var diamond2 = 0
  } else if (slot2 == "flycatcher") {
  	 var slot2bonus = 1.3
  	 var diamond2 = 0 
  } else if (slot2 == "diamond spreading") {
  	 var diamond2 = 0.1
  	 var slot2bonus = 1
  } else {
  	 var slot2bonus = 1
  	 var diamond2 = 0
  }

  var time = action / (bonus * slot1bonus * slot2bonus)
  var productions = 1/time*production/rates*3600 * 24 * minions
  var diamond = diamond2 + diamond1
  var profit = (productions * unitprice) + (productions * unitprice * diamond * 8.1)

  var text = "production: "+productions +" profit: " + profit
  document.getElementById("calculated").innerHTML = text;

}












