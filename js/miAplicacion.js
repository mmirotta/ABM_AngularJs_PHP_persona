var miApp = angular.module('angularABM', ['ui.router']);

miApp.config(function($stateProvider, $urlRouterProvider){
	//aca se genera el ruteo atravez de estados

	$stateProvider
		.state(
			"inicio",
			{
				url:"/inicio",
				templateUrl:"inicio.html",
				controller:"controlInicio"
			}
		)

		.state(
			"persona",
			{
				url:"/persona",
				abstract:true, 
				templateUrl:"abstractaPersona.html"
			}
		)

		.state(
			"persona.menu",
			{
				url:"/menu",
				views:{
					"contenido": {
					templateUrl:"personaMenu.html",
					controller:"controlPersonaMenu"
					}
				}
			}
		)

		.state(
			"persona.alta",
			{
				url:"/alta",
				views:{
					"contenido": {
					templateUrl:"personaAlta.html",
					controller:"controlPersonaAlta"
					}
				}
			}
		)

		.state(
			"persona.grilla",
			{
				url:"/grilla",
				views:{
					"contenido": {
					templateUrl:"personaGrilla.html",
					controller:"controlPersonaGrilla"
					}
				}
			}
		)

	$urlRouterProvider.otherwise("/inicio");
});

miApp.controller("controlInicio", function($scope) {

});

miApp.controller("controlPersonaMenu", function($scope, $state) {
	$scope.irAAlta = function(){
		$state.go("persona.alta");
	};
});

miApp.controller("controlPersonaAlta", function($scope) {

});

miApp.controller("controlPersonaGrilla", function($scope) {

});