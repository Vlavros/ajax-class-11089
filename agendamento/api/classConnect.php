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

    public function conectar() : object{
        $this->sDSN = "{$this->sDriver}:dbname={$this->sDatabase};host={$this->sHost};charset={$this->sCharset}";
        $this->oPDO = new PDO($this->sDSN,$this->sUser,$this->sPass);
        return $this->oPDO;
    }

    function mysql_escape_mimic($inp) {
        if(is_array($inp))
            return array_map(__METHOD__, $inp);
  
        if(!empty($inp) && is_string($inp)) {
            return str_replace(array('\\', "\0", "\n", "\r", "'", '"', "\x1a"), array('\\\\', '\\0', '\\n', '\\r', "\\'", '\\"', '\\Z'), $inp);
        }
  
        return $inp;
    }    

}

?>