var MyModule = angular.module("PizzaApp", []);

MyModule.controller("PizzaAppController1", [ '$scope', 'MathService', 'ToppingService',
	function($scope, MathService, ToppingService){
		
		var lac1 = this;
		
		//whatever this controller does
		lac1.message = "I am from Pizza Controller 1";
		lac1.product = MathService.leftVariable * MathService.rightVariable;
		lac1.topping = ToppingService.getFortune();		
		lac1.timestamp = ToppingService.getDate();
		
		mc.toppingList = [];
	}
]);

MyModule.controller("PizzaAppController2", [ '$scope', 'MathService', 'ToppingService',
	function($scope, MathService, ToppingService){
	
		var lac2 = this;
		
		//whatever this controller does
		lac2.message = "I am from Pizza Controller 2";		
		lac2.product = MathService.leftVariable * MathService.rightVariable;
		lac2.topping = ToppingService.getTopping();
	}
]);

MyModule.factory("MathService", function(){
	
	return{
		leftVariable: 50,		
		rightVariable: Math.random() * 100
	}
});

MyModule.factory("ToppingService", function(){
	
	var toppings = ["Anchovie", 
	                "Pepperoni", 
					"Sausage",
					"Bacon",
					"Onions",
					"Canadian Bacon",
					"Olives",
					"Jalapenos",
					"Beef"];
					
	var topping1 = "";
	var topping2 = "";
	var timestamp = null;
	
	return{
		getTopping: function(){
			return toppings[Math.floor(Math.random() * toppings.length)];
		},
		getDate: function(){
			return new Date();
		},
		setTopping1: function(toppingString){
			topping1 = toppingString;
		},
		setTopping2: function(toppingString){
			topping2 = toppingString;
		},
		setTimestamp = function(timestampVal){
			timestamp = timestampVal;
		}
	}
});





























