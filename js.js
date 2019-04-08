function countButton() {
    var solvent = document.getElementById("solvent").value;
    var concentration = document.getElementById("concentration").value;
    var glue = solvent*concentration/100;
    var water = solvent-glue;    
	var glueResult = document.getElementById("glueResult");
	glueResult.innerHTML = "Додай клею: " + glue + "л";
	var waterResult = document.getElementById("waterResult");
	waterResult.innerHTML = "Додай води: " + water + "л";
}

function countButtonNew() {
    var solventLeft = document.getElementById("solventLeft").value;
    var concentrationLeft = document.getElementById("concentrationLeft").value;
    var glueLeft = solventLeft*concentrationLeft/100;
    var waterLeft = solventLeft-glueLeft;    
    var solventNew = document.getElementById("solventNew").value;
    var concentrationNew = document.getElementById("concentrationNew").value;
    var glueNew = solventNew*concentrationNew/100;
    var waterNew = solventNew-glueNew; 
    var glueAdd = glueNew - glueLeft;
    var waterAdd = waterNew - waterLeft;
	var glueResultAdd = document.getElementById("glueResultAdd");
	glueResultAdd.innerHTML = "Додай клею: " + glueAdd + "л";
	var waterResultAdd = document.getElementById("waterResultAdd");
	waterResultAdd.innerHTML = "Додай води: " + waterAdd + "л";
}

    

