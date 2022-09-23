<?php

require 'DB/Database.php';

class cctiempokm
{
    function __construct()
    {
    }


    public static function list($params){
        $consulta = "SELECT * FROM tbl_tiempo_km where estado=0 and eliminado=0 order by 1 desc";
        try {
            // Preparar sentencia
            $comando = Database::getInstance()->getDb()->prepare($consulta);

            // Ejecutar sentencia preparada
            $comando->execute(array($params['dato']));

            return array('data'=>$comando->fetchAll(PDO::FETCH_ASSOC));

        } catch (PDOException $e) {
            return array('data'=>'');
        }
    }

    public static function getbyid($params){
        $consulta = "SELECT * FROM tbl_tiempo_km where estado=0 and eliminado=0 and idprog=?";
        try {
            // Preparar sentencia
            $comando = Database::getInstance()->getDb()->prepare($consulta);

            // Ejecutar sentencia preparada
            $comando->execute(array($params['idgenerado']));
            
            return array('data'=>$comando->fetchAll(PDO::FETCH_ASSOC));

        } catch (PDOException $e) {
            return array('data'=>'');
        }
    }

    public static function getcolumns(){
        $consulta="DESCRIBE tbl_tiempo_km";
		
        $comando = Database::getInstance()->getDb()->prepare($consulta);

        // Ejecutar sentencia preparada
        $comando->execute();

        return $comando->fetchAll(PDO::FETCH_ASSOC);
	}

    public static function insert($params){
        //print_r($params);exit;
        $columnasdata = cctiempokm::getcolumns();
        //print_r($columnasdata);exit;
		$columnasdata = $columnasdata;
		$columnas = array_map(function ($k){
		return $k["Field"];
		},$columnasdata);

		$campos="";
		$bind="";
		$data=[];

		foreach ($params as $x => $val){
			if(in_array($x,$columnas)){
				if($campos==""){
					$campos="$x";
					$bind="?";
				}else{
					$campos.=",$x";
					$bind.=",?";
				}
				
				array_push($data,$val);    
			}
		// echo $x." => ".$val."\r\n";
		}
        
		$consulta="insert into tbl_tiempo_km ($campos) values ($bind)";

        try {
            // Preparar sentencia
            $comando = Database::getInstance()->getDb()->prepare($consulta);
            // Ejecutar sentencia preparada
            $comando->execute($data);
            //$comando->execute(array($imei,$coordenadas,$latitud,$longitud));
            //echo $comando;
            return 'ok';//$comando;

        } catch (PDOException $error) {
            //echo $error->getMessage();
            return 'error'; //false;
        }
    }

    public static function update($params){
	
        $columnasdata = cctiempokm::getcolumns();
		$columnasdata = $columnasdata;
		$columnas = array_map(function ($k){
		  return $k["Field"];
		},$columnasdata);
	
		//$params["user_email"]= $userinfo["data"][0]["user_email"];
	
		$campos="";
		$data=[];
	
		foreach ($params as $x => $val){
			if(in_array($x,$columnas)){
				if($campos==""){
					$campos="$x = ?";
				}else{
					$campos.=",$x =? ";            
				}
				
				array_push($data,$val);
			   // echo $x." => ".$val."\r\n";    
			}
		}
	
		array_push($data,$params["idgenerado"]);
	
		$consulta="update tbl_tiempo_km set $campos  where eliminado=0 and  idprog=?";
	   
        try {
            // Preparar sentencia
            $comando = Database::getInstance()->getDb()->prepare($consulta);
            // Ejecutar sentencia preparada
            $comando->execute($data);
            //$comando->execute(array($imei,$coordenadas,$latitud,$longitud));
            
            return 'ok';//$comando;

        } catch (PDOException $error) {
            //echo $error->getMessage();
            return 'error'; //false;
        }	
	
	}




}