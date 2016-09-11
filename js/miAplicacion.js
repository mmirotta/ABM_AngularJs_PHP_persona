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

		.state(
			"login",
			{
				url:"/login",
				abstract:true, 
				templateUrl:"abstractaLogin.html"
			}
		)

		.state(
			"login.login",
			{
				url:"/login",
				views:{
					"contenido": {
					templateUrl:"login.html",
					controller:"controlLogin"
					}
				}
			}
		)

		.state(
			"login.registro",
			{
				url:"/registro",
				views:{
					"contenido": {
					templateUrl:"registro.html",
					controller:"controlRegistro"
					}
				}
			}
		)

		.state(
			"juegos",
			{
				url:"/juegos",
				abstract:true, 
				templateUrl:"abstractaJuegos.html"
			}
		)

		.state(
			"juegos.menu",
			{
				url:"/menu",
				views:{
					"contenido": {
					templateUrl:"juegosMenu.html",
					controller:"controlJuegosMenu"
					}
				}
			}
		)

		.state(
			"juegos.adivinaUno",
			{
				url:"/adivinaUno",
				views:{
					"contenido": {
					templateUrl:"adivinaUno.html",
					controller:"controlAdivinaUno"
					}
				}
			}
		)

		.state(
			"juegos.adivinaDos",
			{
				url:"/adivinaDos",
				views:{
					"contenido": {
					templateUrl:"adivinaDos.html",
					controller:"controlAdivinaDos"
					}
				}
			}
		)

		.state(
			"juegos.agilidadUno",
			{
				url:"/agilidadUno",
				views:{
					"contenido": {
					templateUrl:"agilidadUno.html",
					controller:"controlAgilidadUno"
					}
				}
			}
		)

		.state(
			"juegos.agilidadDos",
			{
				url:"/agilidadDos",
				views:{
					"contenido": {
					templateUrl:"agilidadDos.html",
					controller:"controlAgilidadDos"
					}
				}
			}
		)

		.state(
			"juegos.piedraPapelTijeraUno",
			{
				url:"/piedraPapelTijeraUno",
				views:{
					"contenido": {
					templateUrl:"piedraPapelTijeraUno.html",
					controller:"controlPiedraPapelTijeraUno"
					}
				}
			}
		)

		.state(
			"juegos.piedraPapelTijeraDos",
			{
				url:"/piedraPapelTijeraDos",
				views:{
					"contenido": {
					templateUrl:"piedraPapelTijeraDos.html",
					controller:"controlPiedraPapelTijeraDos"
					}
				}
			}
		)

		.state(
			"juegos.reflejosUno",
			{
				url:"/reflejosUno",
				views:{
					"contenido": {
					templateUrl:"reflejosUno.html",
					controller:"controlReflejosUno"
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
	$scope.irAGrilla = function(){
		$state.go("persona.grilla");
	};
});

miApp.controller("controlPersonaAlta", function($scope) {

});

miApp.controller("controlPersonaGrilla", function($scope) {

});

miApp.controller("controlLogin", function($scope, $state) {
	$scope.Registrarse = function(){
		$state.go("login.registro");
	};

	$scope.Verificar = function(){
		controle.log("verifica el login");
	};
});

miApp.controller("controlRegistro", function($scope) {
	$scope.Guardar = function(){
		controle.log("guarda la cuenta");
	};
});	

miApp.controller("controlJuegosMenu", function($scope) {

});	

miApp.controller("controlAdivinaUno", function($scope) {
	$scope.comenzar = function(){
		controle.log("comienza el juego");
	};

	$scope.verificar = function(){
		controle.log("comienza el juego");
	};
});	

miApp.controller("controlAdivinaDos", function($scope) {
	$scope.comenzar = function(){
		controle.log("comienza el juego");
	};

	$scope.verificar = function(){
		controle.log("comienza el juego");
	};
});

miApp.controller("controlAgilidadUno", function($scope) {
	$scope.comenzar = function(){
		controle.log("comienza el juego");
	};

	$scope.responder = function(){
		controle.log("comienza el juego");
	};
});	

miApp.controller("controlAgilidadDos", function($scope) {
	$scope.comenzar = function(){
		controle.log("comienza el juego");
	};

	$scope.responder = function(){
		controle.log("comienza el juego");
	};
});

miApp.controller("controlPiedraPapelTijeraUno", function($scope) {

});

miApp.controller("controlPiedraPapelTijeraDos", function($scope) {

});