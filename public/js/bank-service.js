(function() {

angular
	.module('LoanCalculator')
	.service('bankService', bankService);

function bankService($http) {

	this.getRate = function() {
		return $http.get('http://localhost:8080/interest_rate');
	}

}


})();