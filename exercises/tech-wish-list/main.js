var app = angular.module('techApp', ['ngRoute'])

	.config(["$routeProvider", function ($routeProvider) {

		$routeProvider
			.when("/phone", {
				templateUrl: "phone/phone.html",
				controller: "PhoneController"
			})
			.when("/other", {
				templateUrl: "other/other.html",
				controller: "OtherController"
			})
			.otherwise({
				redirectTo: "/phone"
			})

}])
