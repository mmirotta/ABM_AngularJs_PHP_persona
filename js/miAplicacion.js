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
	$scope.random = "";
	$scope.intentos = "0";
	$scope.resultado = "";

	$scope.comenzar = function(){
		$scope.random = Math.floor((Math.random() * 100) + 1);
	};

	$scope.verificar = function(){
		$scope.intentos = parseInt($scope.intentos) + 1;
		if (parseInt($scope.numero) > parseInt($scope.random))
		{
			$scope.resultado = "Fallaste. Te pasaste del numero secreto.";
		}
		else
		{
			if (parseInt($scope.numero) < parseInt($scope.random))
			{
				$scope.resultado = "Fallaste. Te falta para el numero secreto.";
				
			}
			else
			{
				$scope.resultado = "Usted es un ganador!! y en solo " + $scope.intentos +" intentos.";
				$scope.random = "";
			}
		}
		$scope.colorResultado = getRandomColor();
	};

	function getRandomColor() {
	    var letters = '0123456789ABCDEF';
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
    	return color;
	}
});	

miApp.controller("controlAdivinaDos", function($scope) {
	$scope.random = "";
	$scope.intentos = "0";
	$scope.resultado = "";

	$scope.comenzar = function(){
		$scope.random = Math.floor((Math.random() * 100) + 1);
	};

	$scope.verificar = function(){
		$scope.intentos = parseInt($scope.intentos) + 1;
		if (parseInt($scope.numero) > parseInt($scope.random))
		{
			$scope.resultado = "Fallaste. Te pasaste del numero secreto.";
		}
		else
		{
			if (parseInt($scope.numero) < parseInt($scope.random))
			{
				$scope.resultado = "Fallaste. Te falta para el numero secreto.";
				
			}
			else
			{
				switch(parseInt($scope.intentos))
				{
					case 1:
							$scope.resultado = "Usted es un Psiquico.";
						break;
					case 2:
							$scope.resultado = "Excelente percepcion.";
						break;
					case 3:
							$scope.resultado = "Esto es suerte.";
						break;
					case 4:
							$scope.resultado = "Excelente tecnica.";
						break;
					case 5:
							$scope.resultado = "Usted esta en la media.";
						break;
					case 6:
					case 7:
					case 8:
					case 9:
							$scope.resultado = "Falta tecnica.";
						break;
					default:
							$scope.resultado = "Afortunado en el amor!!";
						break;
				}
			}
		}
		$scope.colorResultado = getRandomColor();
	};

	function getRandomColor() {
	    var letters = '0123456789ABCDEF';
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
    	return color;
	}
});

miApp.controller("controlAgilidadUno", function($scope) {

	$scope.primerNumero = Math.floor((Math.random() * 10) + 1);
	$scope.segundoNumero = Math.floor((Math.random() * 10) + 1);
	$scope.imagen = "signo.png";
	var random = Math.floor((Math.random() * 100) + 1);

	if (random < 15)
	{
		$scope.operador = "-";
	}
	else if ((random > 15) && (random <= 45))
	{
		$scope.operador = "+";
	}
	else if ((random > 45) && (random <= 75))
	{
		$scope.operador = "/";
	}
	else if ((random > 75) && (random <= 100))
	{
		$scope.operador = "*";
	}


	$scope.responder = function(){
		var resultado = "";
		switch ($scope.operador)
		{
			case "-":
				resultado = parseInt($scope.primerNumero) - parseInt($scope.segundoNumero);
				break;
			case "+":
				resultado = parseInt($scope.primerNumero) + parseInt($scope.segundoNumero);
				break;
			case "/":
				resultado = parseInt($scope.primerNumero) / parseInt($scope.segundoNumero);
				break;
			case "*":
				resultado = parseInt($scope.primerNumero) * parseInt($scope.segundoNumero);
				break;
		}

		if (parseInt($scope.respuesta) == parseInt(resultado))
		{
			console.log("correcto");
			$scope.imagen = "check.png";
		}
		else
		{
			console.log("error");
			$scope.imagen = "error.png";
		}
	};
});	

miApp.controller("controlAgilidadDos", function($scope) {
	$scope.primerNumero = Math.floor((Math.random() * 10) + 1);
	$scope.segundoNumero = Math.floor((Math.random() * 10) + 1);
	$scope.imagen = "signo.png";
	var random = Math.floor((Math.random() * 100) + 1);

	if (random < 15)
	{
		$scope.operador = "-";
	}
	else if ((random > 15) && (random <= 45))
	{
		$scope.operador = "+";
	}
	else if ((random > 45) && (random <= 75))
	{
		$scope.operador = "/";
	}
	else if ((random > 75) && (random <= 100))
	{
		$scope.operador = "*";
	}
	timeout();
	$scope.responder = function(){
		verificar();
	};

	function timeout(){
	    setTimeout(function(){
	        verificar();
	    },4000,"JavaScript");
	}

    function verificar()
    {
    	var resultado = "";
		switch ($scope.operador)
		{
			case "-":
				resultado = parseInt($scope.primerNumero) - parseInt($scope.segundoNumero);
				break;
			case "+":
				resultado = parseInt($scope.primerNumero) + parseInt($scope.segundoNumero);
				break;
			case "/":
				resultado = parseInt($scope.primerNumero) / parseInt($scope.segundoNumero);
				break;
			case "*":
				resultado = parseInt($scope.primerNumero) * parseInt($scope.segundoNumero);
				break;
		}

		if (parseInt($scope.respuesta) == parseInt(resultado))
		{
			console.log("correcto");
			$scope.imagen = "check.png";
		}
		else
		{
			console.log("error");
			$scope.imagen = "error.png";
		}
    }
});

miApp.controller("controlPiedraPapelTijeraUno", function($scope) {
	comenzar();

	$scope.piedra = function(){
		verificar("piedra");
	};
	$scope.papel = function(){
		verificar("papel");
	};
	$scope.tijera = function(){
		verificar("tijera");
	};

	function verificar(eleccion){
		switch (eleccion)
		{
			case "piedra":
					if (parseInt($scope.maquina) == 1)
					{
						$scope.resultado = "Empate";
					} 
					else if (parseInt($scope.maquina) == 2)
					{
						$scope.resultado = "Usted Pierde";
					} 
					else if (parseInt($scope.maquina) == 3)
					{
						$scope.resultado = "Usted Gana";
					} 
				break;
			case "papel":
					if (parseInt($scope.maquina) == 1)
					{
						$scope.resultado = "Usted Gana";
					} 
					else if (parseInt($scope.maquina) == 2)
					{
						$scope.resultado = "Empate";
					} 
					else if (parseInt($scope.maquina) == 3)
					{
						$scope.resultado = "Usted Pierde";
					} 
				break;
			case "tijera":
					if (parseInt($scope.maquina) == 1)
					{
						$scope.resultado = "Usted Pierde";
					} 
					else if (parseInt($scope.maquina) == 2)
					{
						$scope.resultado = "Usted Gana";
					} 
					else if (parseInt($scope.maquina) == 3)
					{
						$scope.resultado = "Empate";
					} 
				break;
		}
		comenzar();
	}

	function comenzar(){
		$scope.maquina = Math.floor((Math.random() * 3) + 1);
	}
});

miApp.controller("controlPiedraPapelTijeraDos", function($scope) {
	comenzar();

	$scope.ganadas = "0";
	$scope.empatadas = "0";
	$scope.perdidas = "0";

	$scope.piedra = function(){
		verificar("piedra");
	};
	$scope.papel = function(){
		verificar("papel");
	};
	$scope.tijera = function(){
		verificar("tijera");
	};

	function verificar(eleccion){
		switch (eleccion)
		{
			case "piedra":
					if (parseInt($scope.maquina) == 1)
					{
						$scope.resultado = "Empate";
						$scope.empatadas = parseInt($scope.empatadas) + 1;
					} 
					else if (parseInt($scope.maquina) == 2)
					{
						$scope.resultado = "Usted Pierde";
						$scope.perdidas = parseInt($scope.perdidas) + 1;
					} 
					else if (parseInt($scope.maquina) == 3)
					{
						$scope.resultado = "Usted Gana";
						$scope.ganadas = parseInt($scope.ganadas) + 1;
					} 
				break;
			case "papel":
					if (parseInt($scope.maquina) == 1)
					{
						$scope.resultado = "Usted Gana";
						$scope.ganadas = parseInt($scope.ganadas) + 1;
					} 
					else if (parseInt($scope.maquina) == 2)
					{
						$scope.resultado = "Empate";
						$scope.empatadas = parseInt($scope.empatadas) + 1;
					} 
					else if (parseInt($scope.maquina) == 3)
					{
						$scope.resultado = "Usted Pierde";
						$scope.perdidas = parseInt($scope.perdidas) + 1;
					} 
				break;
			case "tijera":
					if (parseInt($scope.maquina) == 1)
					{
						$scope.resultado = "Usted Pierde";
						$scope.perdidas = parseInt($scope.perdidas) + 1;
					} 
					else if (parseInt($scope.maquina) == 2)
					{
						$scope.resultado = "Usted Gana";
						$scope.ganadas = parseInt($scope.ganadas) + 1;
					} 
					else if (parseInt($scope.maquina) == 3)
					{
						$scope.resultado = "Empate";
						$scope.empatadas = parseInt($scope.empatadas) + 1;
					} 
				break;
		}
		comenzar();
	}

	function comenzar(){
		$scope.maquina = Math.floor((Math.random() * 3) + 1);
	}
});