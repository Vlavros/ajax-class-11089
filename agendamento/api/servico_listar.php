<?php

require_once 'classConnect.php';

$oPDO = new Connect();
$oPDO = $oPDO->conectar();

$sSelect = "SELECT * FROM `servicos`";

$oRet = $oPDO->query($sSelect);
$oFetch = $oRet->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($oFetch);



?>