var aColor = function (color){
	this.color = ko.observable(color);
}


var Numb = function(numName, numColors){
	this.numName = ko.observable(numName);
	this.numColors = ko.observableArray(numColors);
	
	/*this.addColor = function(){
		this.numColors.push(new aColor("TestColor"));
	}.bind(this);*/
}


var numberModel = {
	Numbers: [
		new Numb('One', [new aColor("red"), new aColor("Green")]),
		new Numb('Two', [new aColor("purple"), new aColor("orange")]),
		new Numb('Three', [new aColor("blue"), new aColor("yellow")]),
		new Numb('Four', [new aColor(null), new aColor("Not A Color")])
	]
		
}
	
console.log(numberModel);
ko.applyBindings(numberModel);


