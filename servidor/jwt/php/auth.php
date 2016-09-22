<?php
include_once '../vendor/autoload.php';
use \Firebase\JWT\JWT;

$DatosDelModelPorPost = file_get_contents('php://input');
$user = json_decode($DatosDelModelPorPost);
if ($user->correo =='usuario' && $user->clave == 'clave')
{
	$ClaveDeEncriptacion="estaeslaclave";
	$toke["usuario"] = "unUsuario";
	$token["perfil"] = "admin";
	$token["iat"] = time();
	$token["exp"] = time()+20;

	$jwt = JWT::encode($token, $ClaveDeEncriptacion);
}
else
{
	$jwt = false;
}

$ArrayConToken["MiTokenGeneradoEnPHP"] = $jwt; 
echo json_encode($ArrayConToken); 

?>