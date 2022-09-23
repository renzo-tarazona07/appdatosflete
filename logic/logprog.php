<?php

    include '../class/ccprog.php';
    
    class logprog{
        function __construct(){}


        //logprog.insert
        public static function insert($params){
            
            $res['ok']='no';
            $res['mensaje']='No se procesó.';
            
            $get=ccprog::getbyid($params);

            if(!empty($get['data'])){
                //actualizar
                $insert=ccprog::update($params);
            }else{
                //registrar
                $insert=ccprog::insert($params);
            }
            
            if($insert=='ok'){
                $res['ok']=$insert;
                $res['mensaje']='Registro completo.';
            }
            echo json_encode($res);
        }

        //logprog.getbyid
        public static function getbyid($params){
            if(isset($params['param'])){
                //print_r($params);exit;
                $params['idgenerado']=$params['param'];
            }
            $get=ccprog::getbyid($params);
            //print_r($get);exit;
            $lista['datalist']=[];
            for ($i=0; $i < sizeof($get['data']); $i++) { 
                $lista['datalist'][$i]=$get['data'][$i];
            }

            echo json_encode($lista);

        }

        //logprog.list
        public static function list($params){
            $get=ccprog::list($params);
            $lista['datalist']=[];
            for ($i=0; $i < sizeof($get['data']); $i++) { 
                $lista['datalist'][$i]=$get['data'][$i];
            }

            echo json_encode($lista);

        }

        //logprog.delete
        public static function delete($params){
            $res['ok']='no';
            $res['mensaje']='No se procesó.';
            
            $get=ccprog::getbyid($params);
            //print_r($get);exit;

            if(!empty($get['data'])){
                $params['eliminado']=1;
                $update=ccprog::update($params);
            }
            
            if($update=='ok'){
                $res['ok']=$update;
                $res['mensaje']='Registro completo.';
            }
            echo json_encode($res);

        }

        //logprog.listbymesanio
        public static function listbymesanio($params){

            $get=ccprog::listbymesanio($params);
            //print_r($get);exit;
            $lista['datalist']=[];
            for ($i=0; $i < sizeof($get['data']); $i++) { 
                $lista['datalist'][$i]=$get['data'][$i];
            }
            //print_r($lista);
            echo json_encode($lista);
            
        }

    }

?>