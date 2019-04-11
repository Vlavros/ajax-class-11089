<?php


require_once 'classConnect.php';

$oConnect = new Connect();
$oPDO = $oConnect->conectar();



$sSelect  = "SELECT a.id, a.datahora, a.cliente, a.status, a.preco, b.nome as profissional, c.nome as servico FROM agendamentos as a INNER JOIN profissionais as b ON (a.profissional = b.id) INNER JOIN servicos as c ON (a.servico = c.id) ";
$sSelect .= " WHERE 1=1 ";

if(isset($_GET["servico"]) && !empty($_GET['servico'])) {
    $sServico = $oConnect->mysql_escape_mimic($_GET["servico"]);
    $sSelect .= "   AND a.servico = $sServico ";
}

if(isset($_GET["profissional"]) && !empty($_GET['profissional'])) {
    $sProfisisonal = $oConnect->mysql_escape_mimic($_GET["profissional"]);
    $sSelect .= "   AND a.profissional = $sProfisisonal ";
}

$sSelect .= " ORDER BY a.datahora DESC ";

$oRet = $oPDO->query($sSelect);
$oFetch = $oRet->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($oFetch);

?>