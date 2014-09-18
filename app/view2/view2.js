'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view2', {
		templateUrl: 'view2/view2.html',
		controller: 'View2Ctrl'
	});
}])

.controller('View2Ctrl', function($scope) {


	
	// $scope.dayOfBirth = function (){

	// 	var now = new Date($scope.omg).getDay();
	// 	// var day='no day';
	// 	$scope.day = now.getDay();
	// 	// return day;
	// 	alert(now);
	// };

	$scope.dayName = function (){
		// var date = document.getElementById("dob").value;
		// var date = dae.options.taext;
// var strUser = e.options[e.selectedIndex].text;
// var gender = document.getElementById("gender").value;
// $scope.sth = new Date($scope.omg);
var num = new Date($scope.omg).getDay();
// alert(num.getDay());


var gender = $scope.lol;

var name1 = "No name";
if(gender==="male"){


	if(num === 0){
		// alert(gender);
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
$scope.hmm = name1;
// $scope.names.push({name:name1});
};





(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&appId=537252726374791&version=v2.0";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));




  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
  	console.log('statusChangeCallback');
  	console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
  } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
  }
}

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
  	FB.getLoginStatus(function(response) {
  		statusChangeCallback(response);
  	});
  }

  window.fbAsyncInit = function() {
  	FB.init({
  		appId      : '{your-app-id}',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
});

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
  	statusChangeCallback(response);
  });

};

  // Load the SDK asynchronously
  (function(d, s, id) {
  	var js, fjs = d.getElementsByTagName(s)[0];
  	if (d.getElementById(id)) return;
  	js = d.createElement(s); js.id = id;
  	js.src = "//connect.facebook.net/en_US/sdk.js";
  	fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
  	console.log('Welcome!  Fetching your information.... ');
  	FB.api('/me?fields=id,gender,birthday,name', function(response) {
  		console.log('Successful login for: ' + response.name);
  		document.getElementById('status').innerHTML =
  		'Thanks for logging in, ' + response.birthday + '!';
  		$scope.omg = response.birthday;
  		$scope.lol = response.gender;
  	});
  }






});









//-----------------------------------------------------------------------


// (function(d, s, id) {
// 		var js, fjs = d.getElementsByTagName(s)[0];
// 		if (d.getElementById(id))
// 			return;
// 		js = d.createElement(s);
// 		js.id = id;
// 		js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&appId=537252726374791&version=v2.0";
// 		fjs.parentNode.insertBefore(js, fjs);
// 	}(document, 'script', 'facebook-jssdk'));

// 	function statusChangeCallback(response) {
// 		console.log('statusChangeCallback');
// 		console.log(response);
//                 // The response object is returned with a status field that lets the
//                 // app know the current login status of the person.
//                 // Full docs on the response object can be found in the documentation
//                 // for FB.getLoginStatus().
//                 if (response.status === 'connected') {
//                     // Logged into your app and Facebook.
//                     testAPI();
//                     displayDetails();
//                 } else if (response.status === 'not_authorized') {
//                     // The person is logged into Facebook, but not your app.
//                     document.getElementById('status').innerHTML = 'Please log ' +
//                     'into this app.';
//                 } else {
//                     // The person is not logged into Facebook, so we're not sure if
//                     // they are logged into this app or not.
//                     document.getElementById('status').innerHTML = 'Please log ' +
//                     'into Facebook.';
//                 }
//             }

//             // This function is called when someone finishes with the Login
//             // Button.  See the onlogin handler attached to it in the sample
//             // code below.
//             function checkLoginState() {
//             	FB.getLoginStatus(function(response) {
//             		statusChangeCallback(response);
//             	});
//             }

//             window.fbAsyncInit = function() {
//             	FB.init({
//             		appId: '537252726374791',
//                     cookie: true, // enable cookies to allow the server to access 
//                     // the session
//                     xfbml: true, // parse social plugins on this page
//                     version: 'v2.1' // use version 2.1
//                 });

//                 // Now that we've initialized the JavaScript SDK, we call 
//                 // FB.getLoginStatus().  This function gets the state of the
//                 // person visiting this page and can return one of three states to
//                 // the callback you provide.  They can be:
//                 //
//                 // 1. Logged into your app ('connected')
//                 // 2. Logged into Facebook, but not your app ('not_authorized')
//                 // 3. Not logged into Facebook and can't tell if they are logged into
//                 //    your app or not.
//                 //
//                 // These three cases are handled in the callback function.

//                 FB.getLoginStatus(function(response) {
//                 	statusChangeCallback(response);
//                 });

//             };

//             // Load the SDK asynchronously
//             (function(d, s, id) {
//             	var js, fjs = d.getElementsByTagName(s)[0];
//             	if (d.getElementById(id))
//             		return;
//             	js = d.createElement(s);
//             	js.id = id;
//             	js.src = "//connect.facebook.net/en_US/sdk.js";
//             	fjs.parentNode.insertBefore(js, fjs);
//             }(document, 'script', 'facebook-jssdk'));

//             // Here we run a very simple test of the Graph API after login is
//             // successful.  See statusChangeCallback() for when this call is made.
//             function testAPI() {
//             	console.log('Welcome!  Fetching your information.... ');
//             	FB.api('/me', function(response) {
//             		console.log('Successful login for: ' + response.name);
//             		document.getElementById('status').innerHTML =
//             		'Thanks for logging in, ' + response.name + '!';
//             	});
//             }

//             function displayDetails(){
//             	FB.api('/me?fields=id,name,birthday,gender', function(response) {
//             		document.getElementById('name').innerHTML = 'Name: ' + response.name;
//             		document.getElementById('birthdate').innerHTML = 'Date of Birth: ' + response.birthday;
//             		document.getElementById('birthday').innerHTML = 'Day Name (js): ' + dayName(dayOfBirth(response.birthday),response.gender);
//             		document.getElementById('gender').innerHTML = 'Gender: ' + response.gender;

//             	});
//             }

//             function dayOfBirth(date){

//             	var now = new Date(date);
//             	var day='no day';
//             	day = now.getDay();
//             	return day;
//             }

//             function dayName(num, gender){
//             	var name = "No name";
//             	if(gender==="male"){
//                 // sunday
//                 if(num === 0){
//                 	name = "Kwesi";
//                 }
//                 else if(num === 1){
//                 	name = "Kwadwo";
//                 }
//                 else if(num === 2){
//                 	name = "Kwabena";
//                 }
//                 else if(num === 3){
//                 	name = "Kwaku";
//                 }
//                 else if(num === 4){
//                 	name = "Yaw";
//                 }
//                 else if(num === 5){
//                 	name = "Kofi";
//                 }
//                 else if(num === 6){
//                 	name = "Kwame";
//                 }
//             }
//             else{
//             	if(num === 0){
//             		name = "Ama";
//             	}
//             	else if(num === 1){
//             		name = "Adwoa";
//             	}
//             	else if(num === 2){
//             		name = "Abena";
//             	}
//             	else if(num === 3){
//             		name = "Kukua";
//             	}
//             	else if(num === 4){
//             		name = "Yaa";
//             	}
//             	else if(num === 5){
//             		name = "Afua";
//             	}
//             	else if(num === 6){
//             		name = "Ama";
//             	}
//             }





//             return name;
//         }