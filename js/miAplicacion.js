var miApp = angular.module('angularABM', ['ui.router', 'angularFileUpload','satellizer']);

miApp.config(function($stateProvider, $urlRouterProvider, $authProvider){
	//proveedor de autentificacion.
	$authProvider.loginUrl = 'ABM_AngularJs_PHP_persona/servidor/jwt/php/auth.php';
	$authProvider.tokenName = 'MiTokenGeneradoEnPHP';
	$authProvider.tokenPrefix = 'Aplicacion';
	$authProvider.authReader = 'data';

	//aca se genera el ruteo atravez de estados

	$stateProvider
		.state(
			"inicio",
			{
				url:"/inicio",
				templateUrl:"vistas/inicio.html",
				controller:"controlInicio"
			}
		)

		.state(
			"persona",
			{
				url:"/persona",
				abstract:true, 
				templateUrl:"vistas/persona/abstractaPersona.html"
			}
		)

		.state(
			"persona.menu",
			{
				url:"/menu",
				views:{
					"contenido": {
					templateUrl:"vistas/persona/personaMenu.html",
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
					templateUrl:"vistas/persona/personaAlta.html",
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
					templateUrl:"vistas/persona/personaGrilla.html",
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
				templateUrl:"vistas/login/abstractaLogin.html"
			}
		)

		.state(
			"login.login",
			{
				url:"/login",
				views:{
					"contenido": {
					templateUrl:"vistas/login/login.html",
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
					templateUrl:"vistas/login/registro.html",
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
				templateUrl:"vistas/juego/abstractaJuegos.html"
			}
		)

		.state(
			"juegos.menu",
			{
				url:"/menu",
				views:{
					"contenido": {
					templateUrl:"vistas/juego/juegosMenu.html",
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
					templateUrl:"vistas/juego/adivinaUno.html",
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
					templateUrl:"vistas/juego/adivinaDos.html",
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
					templateUrl:"vistas/juego/agilidadUno.html",
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
					templateUrl:"vistas/juego/agilidadDos.html",
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
					templateUrl:"vistas/juego/piedraPapelTijeraUno.html",
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
					templateUrl:"vistas/juego/piedraPapelTijeraDos.html",
					controller:"controlPiedraPapelTijeraDos"
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

miApp.controller("controlPersonaAlta", function($scope, $http, $state, FileUploader) {
  $scope.DatoTest="**alta**";
  //inicio las variables
  //$scope.uploader=new FileUploader({url:'servidor/nexoPersona.php'});
  $scope.persona={};
  $scope.persona.nombre= "natalia" ;
  $scope.persona.dni= "12312312" ;
  $scope.persona.apellido= "natalia" ;
  $scope.persona.foto="pordefecto.png";

  $scope.Guardar=function(){
	console.log($scope.uploader.queue);
	if($scope.uploader.queue[0]!=undefined)
	{
		var nombreFoto = $scope.uploader.queue[0]._file.name;
		$scope.persona.foto=nombreFoto;
	}
	$scope.uploader.uploadAll();
  	console.log("persona a guardar:");
    console.log($scope.persona);
  }
  var uploader = $scope.uploader = new FileUploader({
            url: 'servidor/archivos.php'
        });
  
  uploader.filters.push({
      name: 'customFilter',
      fn: function(item /*{File|FileLikeObject}*/, options) {
          return this.queue.length < 10;
      }
  });

  // CALLBACKS

  uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
      console.info('onWhenAddingFileFailed', item, filter, options);
  };
  uploader.onAfterAddingFile = function(fileItem) {
      console.info('onAfterAddingFile', fileItem);
  };
  uploader.onAfterAddingAll = function(addedFileItems) {
      console.info('onAfterAddingAll', addedFileItems);
  };
  uploader.onBeforeUploadItem = function(item) {
      console.info('onBeforeUploadItem', item);
  };
  uploader.onProgressItem = function(fileItem, progress) {
      console.info('onProgressItem', fileItem, progress);
  };
  uploader.onProgressAll = function(progress) {
      console.info('onProgressAll', progress);
  };
  uploader.onSuccessItem = function(fileItem, response, status, headers) {
      console.info('onSuccessItem', fileItem, response, status, headers);
  };
  uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
  };
  uploader.onCancelItem = function(fileItem, response, status, headers) {
      console.info('onCancelItem', fileItem, response, status, headers);
  };
  uploader.onCompleteItem = function(fileItem, response, status, headers) {
      console.info('onCompleteItem', fileItem, response, status, headers);
  };
  uploader.onCompleteAll = function() {
      console.info('onCompleteAll');
  };
});

miApp.controller("controlPersonaGrilla", function($scope, $http, $state) {
	$scope.DatoTest="**grilla**";
 	
 	$http.get('servidor/nexoPersona.php', { params: {accion :"traer"}})
 	.then(function(respuesta) {     	

      	 $scope.ListadoPersonas = respuesta.data.listado;
      	 console.log(respuesta.data);

    },function errorCallback(response) {
     		 $scope.ListadoPersonas= [];
     		console.log( response);

 	 });
	/*$scope.Modificar=function(persona)
	{
		$state.go("modificacion", persona);
	};*/

 	$scope.Borrar=function(persona){
		console.log("borrar"+persona);

		$http.post("servidor/nexoPersona.php",{datos:{accion :"borrar",persona:persona}},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
		 .then(function(respuesta) {       
		         //aca se ejetuca si retorno sin errores        
		         console.log(respuesta.data);
				 $http.get('servidor/nexoPersona.php', { params: {accion :"traer"}})
				.then(function(respuesta) {     	

					 $scope.ListadoPersonas = respuesta.data.listado;
					 console.log(respuesta.data);

				},function errorCallback(response) {
						 $scope.ListadoPersonas= [];
						console.log( response);
				 });

		    },function errorCallback(response) {        
		        //aca se ejecuta cuando hay errores
		        console.log( response);           
		    });
 	}

 	$scope.Modificar=function(persona){
 		$http.post('servidor/nexoPersona.php', { datos: {accion :"modificar",persona:$scope.persona}})
		  .then(function(respuesta) {     	
				 //aca se ejetuca si retorno sin errores      	
			 console.log(respuesta.data);
			 location.href="formGrilla.html";

		},function errorCallback(response) {     		
				//aca se ejecuta cuando hay errores
				console.log( response);     			
		  });
 		/*console.log("Modificar"+id);
		$http.post("servidor/nexoPersona.php", {datos:{accion:"buscar", id:id}})
		.then(function(respuesta)
		{
			var persona=respuesta.data;
			$state.go("alta");//location.href="formAlta.html";
			$scope.DatoTest=persona.nombre;
			console.log(persona);
		} ,function errorCallback(response) {        
			//aca se ejecuta cuando hay errores
			console.log(response);           
		});*/
 	}
});

miApp.controller("controlLogin", function($scope, $state, $auth) {
	$scope.usuario = {};
	$scope.usuario.correo = "";
	$scope.usuario.clave = "";

	if ($auth.isAuthenticated())
		console.info("token", $auth.getPayload());
	else
		console.info("no token", $auth.getPayload());		

	$scope.Verificar = function(){
		//esto es una llamada igual que el http
		$auth.login($scope.usuario)
			.then(function(response){
				console.info("correcto", response);
				//solo sabemos que nos devolvio un token correcto con el isauthenticated
				if ($auth.isAuthenticated())
					console.info("token", $auth.getPayload());
				else
					console.info("no token", $auth.getPayload());		
				
			}).catch(function(response){
				console.info("NO volvio bien", response);
			});
	};

	$scope.Registrarse = function(){
		$state.go("login.registro");
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