var MySignal = angular.module('MySignal', []);

function mainController($scope, $http, $interval, $filter) {
	
	$interval(function () {
		$http.get("/api/heartbeats")
			.success(function(response) {$scope.heartbeats = response;});
	}, 1000); 
	
}


