<?php

    include '../class/ccnoprog.php';
    
    class lognoprog{
        function __construct(){}


        //lognoprog.insert
        public static function insert($params){
            
            $res['ok']='no';
            $res['mensaje']='No se procesó.';
            
            $get=ccnoprog::getbyid($params);

            if(!empty($get['data'])){
                //actualizar
                $insert=ccnoprog::update($params);
            }else{
                //registrar
                $insert=ccnoprog::insert($params);
            }
            
            if($insert=='ok'){
                $res['ok']=$insert;
                $res['mensaje']='Registro completo.';
            }
            echo json_encode($res);
        }

        //lognoprog.getbyid
        public static function getbyid($params){
            if(isset($params['param'])){
                //print_r($params);exit;
                $params['idnoprog']=$params['param'];
            }
            $get=ccnoprog::getbyid($params);
            //print_r($get);exit;
            $lista['datalist']=[];
            for ($i=0; $i < sizeof($get['data']); $i++) { 
                $lista['datalist'][$i]=$get['data'][$i];
            }

            echo json_encode($lista);

        }

        //lognoprog.list
        public static function list($params){
            $get=ccnoprog::list($params);
            $lista['datalist']=[];
            for ($i=0; $i < sizeof($get['data']); $i++) { 
                $lista['datalist'][$i]=$get['data'][$i];
            }

            echo json_encode($lista);

        }

        //lognoprog.delete
        public static function delete($params){
            $res['ok']='no';
            $res['mensaje']='No se procesó.';
            
            $get=ccnoprog::getbyid($params);
            //print_r($get);exit;

            if(!empty($get['data'])){
                $params['eliminado']=1;
                $update=ccnoprog::update($params);
            }
            
            if($update=='ok'){
                $res['ok']=$update;
                $res['mensaje']='Registro completo.';
            }
            echo json_encode($res);

        }






        
    }

?>