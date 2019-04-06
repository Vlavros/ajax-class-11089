<?php

class Connect {

    private $sDriver = "mysql";
    private $sHost = "127.0.0.1";
    private $iPort = 3306;
    private $sUser = "root";
    private $sPass = "";
    private $sDatabase = "petshop";
    private $sCharset = "utf8";
    
    private $sDSN; //= "$sDriver:dbname=$sDatabase;host=$sHost;charset=utf8";
    
    private $oPDO;

    function conectar() : object {
        $sDSN = "$sDriver:dbname=$sDatabase;host=$sHost;charset=utf8";
        $oPDO = new PDO($sDSN,$sUser,$sPass);
        return $oPDO;
    }

}

?>