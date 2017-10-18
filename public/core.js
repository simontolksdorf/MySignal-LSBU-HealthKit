var MySignal = angular.module('MySignal', []);

function mainController($scope, $http, $interval) {
	
	$interval(function () {
		$http.get("/api/heartbeats")
			.success(function(response) {$scope.heartbeats = response;});			
			//console.log("every sec refesh ");	
	}, 1000); 
}


