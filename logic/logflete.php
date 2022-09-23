<?php

    include '../class/ccflete.php';
    
    class logflete{
        function __construct(){}


        //logflete.insert
        public static function insert($params){
            //print_r($params);exit;
            $res['ok']='no';
            $res['mensaje']='No se procesó.';
            
            $get=ccflete::getbyid($params);
            //print_r($get);exit;
            if(!empty($get['data'])){
                //actualizar
                $insert=ccflete::update($params);
            }else{
                //registrar
                unset($params['id']);
                $insert=ccflete::insert($params);
                //print_r($insert);exit;
            }
            
            if($insert=='ok'){
                $res['ok']=$insert;
                $res['mensaje']='Registro completo.';
            }
            echo json_encode($res);
        }

        //logflete.getbyid
        public static function getbyid($params){
            if(isset($params['param'])){
                //print_r($params);exit;
                $params['id']=$params['param'];
            }
            $get=ccflete::getbyid($params);
            //print_r($get);exit;
            $lista['datalist']=[];
            for ($i=0; $i < sizeof($get['data']); $i++) { 
                $lista['datalist'][$i]=$get['data'][$i];
            }

            echo json_encode($lista);

        }

        //logflete.getbyplaca
        public static function getbyplaca($params){
            if(isset($params['param'])){
                //print_r($params);exit;
                $params['placa']=$params['param'];
            }
            $get=ccflete::getbyplaca($params);
            //print_r($get);exit;
            $lista['datalist']=[];
            for ($i=0; $i < sizeof($get['data']); $i++) { 
                $lista['datalist'][$i]=$get['data'][$i];
            }

            echo json_encode($lista);

        }

        //logflete.list
        public static function list($params){
            $get=ccflete::list($params);
            $lista['datalist']=[];
            for ($i=0; $i < sizeof($get['data']); $i++) { 
                $lista['datalist'][$i]=$get['data'][$i];
            }

            echo json_encode($lista);

        }

        //logflete.delete
        public static function delete($params){
            $res['ok']='no';
            $res['mensaje']='No se procesó.';
            
            $get=ccflete::getbyid($params);
            //print_r($get);exit;

            if(!empty($get['data'])){
                $params['eliminado']=1;
                $update=ccflete::update($params);
            }
            
            if($update=='ok'){
                $res['ok']=$update;
                $res['mensaje']='Registro completo.';
            }
            echo json_encode($res);

        }






        
    }

?>