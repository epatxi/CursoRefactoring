function Complexion(){	
	var currentComplexions = getComplexions();

	function getComplexions(){
		var complexions = [];
		complexions[Complexion.FATTY] = new Fatty();
		complexions[Complexion.SKINNY] =  new Skinny();
		complexions[Complexion.ATHLETIC] =  new Athletic();
		complexions[Complexion.MORBID] =  new Morbid();
		return complexions;
	};

	function getComplexionByType(complexionType){
		return currentComplexions[complexionType];
	}

	function isNotDefinedComplexionType(complexionType){
		return !getComplexionByType(complexionType);
	}

	this.create = function(complexionType){
		if(isNotDefinedComplexionType(complexionType)){
			throw new Error("Complexion Type is not defined");
		}
		return getComplexionByType(complexionType);
	};
};

Complexion.FATTY = 0;
Complexion.SKINNY = 1;	
Complexion.ATHLETIC = 2;
Complexion.MORBID = 3;
Complexion.prototype.getType = function(){};
Complexion.prototype.getDailyCalories = function() {};

Fatty.prototype = new Complexion();
Fatty.constructor = Fatty;
function Fatty(){
};
Fatty.prototype.getType = function(){
	return Complexion.FATTY;
};
Fatty.prototype.getDailyCalories = function() {
	return 1000;
};

Skinny.prototype = new Complexion();
Skinny.constructor = Skinny;
function Skinny(){
};
Skinny.prototype.getType = function(){
	return Complexion.SKINNY;
};
Skinny.prototype.getDailyCalories = function() {
	return 3000;
};

Athletic.prototype = new Complexion();
Athletic.constructor = Athletic;
function Athletic(){
};
Athletic.prototype.getType = function(){
	return Complexion.ATHLETIC;
};
Athletic.prototype.getDailyCalories = function() {
	return 2000;
};

Morbid.prototype = new Complexion();
Morbid.constructor = Morbid;
function Morbid(){
};
Morbid.prototype.getType = function(){
	return Complexion.MORBID;
};
Morbid.prototype.getDailyCalories = function() {
	return 500;
};

function HumanMetabolism() {

	this.complexion;
		
	this.getDailyCalories = function() {
		return this.complexion.getDailyCalories();
	};

	this.setComplexion = function(aComplexion) {
		var complexion = new Complexion(); 
		this.complexion = complexion.create(aComplexion);
	};
	this.moreMagic = function() {};
	this.needsMoreFood = function() {};
};

