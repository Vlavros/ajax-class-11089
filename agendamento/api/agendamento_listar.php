<?php


$sDriver = "mysql";
$sHost = "127.0.0.1";
$iPort = 3306;
$sUser = "root";
$sPass = "";
$sDatabase = "petshop";

$sDSN = "$sDriver:dbname=$sDatabase;host=$sHost;charset=utf8"; //'mysql:dbname=testdb;host=127.0.0.1;charset=utf8';

$oPDO = new PDO($sDSN,$sUser,$sPass);

//var_dump($oPDO);

$sSelect = "SELECT * FROM `agendatemntos`";

$oRet = $oPDO->query($sSelect);
$oFetch = $oRet->fetchAll(PDO::FETCH_ASSOC);

/*
var_dump($oRet);

echo "<pre>";
var_dump($oFetch);
echo "</pre>";
*/

echo json_encode($oFetch);



?>