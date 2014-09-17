'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'view1/view1.html',
		controller: 'View1Ctrl'
	});
}])

.controller('View1Ctrl', function($scope) {

	$scope.names = [
    {'name': '',
 	 'dayna': ''}
  ];
	// alert(name);

	// $scope.dat = function(){
	// 	 daaa:"10/10/1999";
	// 	// return dayOfBirth(document.getElementById('dob').innerHTML);

	// };
	// $scope.gend = dayOfBirth(document.getElementById('gender').innerHTML);

	$scope.dayOfBirth = function (date){

		var now = new Date(date);
		var day='no day';
		day = now.getDay();
		return day;
	};

	$scope.dayName = function (){
		var date = document.getElementById("dob").value;
		// var date = dae.options.taext;
// var strUser = e.options[e.selectedIndex].text;
		var gender = document.getElementById("gender").value;
		var num = new Date(date).getDay();
		
		var name1 = "No name";
		if(gender==="male"){
			if(num === 0){
				name1 = "Kwesi";
				
			}
			else if(num === 1){
				name1 = "Kwadwo";
			}
			else if(num === 2){
				name1 = "Kwabena";
			}
			else if(num === 3){
				name1 = "Kwaku";
			}
			else if(num === 4){
				name1 = "Yaw";
			}
			else if(num === 5){
				name1 = "Kofi";
			}
			else if(num === 6){
				name1 = "Kwame";
			}
		}
		else{
			if(num === 0){
				name1 = "Ama";
			}
			else if(num === 1){
				name1 = "Adwoa";
			}
			else if(num === 2){
				name1 = "Abena";
			}
			else if(num === 3){
				name1 = "Kukua";
			}
			else if(num === 4){
				name1 = "Yaa";
			}
			else if(num === 5){
				name1 = "Afua";
			}
			else if(num === 6){
				name1 = "Ama";
			}
		}
		$scope.names.push({name:name1});
	};

});