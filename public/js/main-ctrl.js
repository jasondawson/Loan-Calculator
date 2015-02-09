(function() {

angular
	.module('LoanCalculator')
	.controller('MainCtrl', MainCtrl);

function MainCtrl ($scope, bankService) {
	var vm = this;

	bankService.getRate().then(function(res) {
		console.log(res.data);
		$scope.interest_rate = res.data;
	})

 $scope.calculatePayment = function() {
 	$scope.monthly_payment = (Number($scope.principal) + (Number($scope.principal) * (Number($scope.interest_rate) / 100) * 48)) / 48;
 	console.log($scope.monthly_payment);
 }

}

})();