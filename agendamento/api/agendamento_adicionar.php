<?php


require_once 'classConnect.php';

$oConnect = new Connect();
$oPDO = $oConnect->conectar();

$sSelect  = " INSERT INTO agendamentos (datahora,`status`,cliente,servico,preco,profissional) VALUES ( ";

if(isset($_POST["datahora"]) && !empty($_POST['datahora'])) {
    $sDatahora = $oConnect->mysql_escape_mimic($_POST["datahora"]);
    //$sDatahora2 = DateTime::createFromFormat("d/m/Y",$sDatahora ) 
    //$sDatahora2->format("Y-m-d");

}

$sStatus = "Agendado";

if(isset($_POST["cliente"]) && !empty($_POST['cliente'])) {
    $sCliente= $oConnect->mysql_escape_mimic($_POST["cliente"]);
}

if(isset($_POST["servico"]) && !empty($_POST['servico'])) {
    $sServico= $oConnect->mysql_escape_mimic($_POST["servico"]);
}

if(isset($_POST["preco"]) && !empty($_POST['preco'])) {
    $sPreco= str_replace(",",".",$oConnect->mysql_escape_mimic($_POST["preco"]));
}

if(isset($_POST["profissional"]) && !empty($_POST['profissional'])) {
    $sProfissional= $oConnect->mysql_escape_mimic($_POST["profissional"]);
}

$sSelect .= " STR_TO_DATE('$sDatahora','%d/%m/%Y'), '$sStatus', '$sCliente', '$sServico', '$sPreco',  '$sProfissional' )  ";

//print_r($sSelect );

//$oRet = $oPDO->query($sSelect);
//$oFetch = $oRet->fetchAll(PDO::FETCH_ASSOC);

//var_dump($oRet);
//var_dump($oFetch);

$oRet = $oPDO->exec($sSelect);
if($oRet != false) {
    echo "ok";
} else {
    echo "erro";
}


?>