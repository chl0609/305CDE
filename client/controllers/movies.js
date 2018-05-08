var myApp = angular.module('myApp');

myApp.controller('MoviesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('MoviesController loaded...');
    
    console.log('routeParams:'+JSON.stringify($routeParams));

	$scope.getMovies = function(){
		$http.get('/api/movies')
            .then(function(response){
			$scope.movies = response.data;
		});
	}

	$scope.getMovie = function(){
		var id = $routeParams.id;
		$http.get('/api/movies/'+id)
            .then(function(response){
			$scope.movie = response.data;
		});
	}

	$scope.addMovie = function(){
		console.log($scope.movie);
		$http.post('/api/movies/', $scope.movie)
            .then(function(response){
			window.location.href='#!/movies';
            $scope.movie = response.data;
		});
	}

	$scope.updateMovie = function(){
		var id = $routeParams.id;
		$http.put('/api/movies/'+id, $scope.movie)
            .then(function(response){
			window.location.href='#!/movies';
            $scope.movie = response.data;
		});
	}

	$scope.removeMovie = function(id){
		$http.delete('/api/movies/'+id)
        .then(function(response){
			window.location.href='#!/movies';
		});
	}
}]);