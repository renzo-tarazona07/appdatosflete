<?php

    include '../class/ccdrop.php';
    
    class logdrop{
        function __construct(){}


        //logdrop.insert
        public static function insert($params){
            //print_r($params);exit;
            $res['ok']='no';
            $res['mensaje']='No se procesó.';
            
            $get=ccdrop::getbyid($params);
            //print_r($get);exit;
            if(!empty($get['data'])){
                //actualizar
                $insert=ccdrop::update($params);
            }else{
                //registrar
                unset($params['id']);
                $insert=ccdrop::insert($params);
                //print_r($insert);exit;
            }
            
            if($insert=='ok'){
                $res['ok']=$insert;
                $res['mensaje']='Registro completo.';
            }
            echo json_encode($res);
        }

        //logdrop.getbyid
        public static function getbyid($params){
            if(isset($params['param'])){
                //print_r($params);exit;
                $params['id']=$params['param'];
            }
            $get=ccdrop::getbyid($params);
            //print_r($get);exit;
            $lista['datalist']=[];
            for ($i=0; $i < sizeof($get['data']); $i++) { 
                $lista['datalist'][$i]=$get['data'][$i];
            }

            echo json_encode($lista);

        }

        //logdrop.list
        public static function list($params){
            $get=ccdrop::list($params);
            $lista['datalist']=[];
            for ($i=0; $i < sizeof($get['data']); $i++) { 
                $lista['datalist'][$i]=$get['data'][$i];
            }

            echo json_encode($lista);

        }

        //logdrop.delete
        public static function delete($params){
            $res['ok']='no';
            $res['mensaje']='No se procesó.';
            
            $get=ccdrop::getbyid($params);
            //print_r($get);exit;

            if(!empty($get['data'])){
                $params['eliminado']=1;
                $update=ccdrop::update($params);
            }
            
            if($update=='ok'){
                $res['ok']=$update;
                $res['mensaje']='Registro completo.';
            }
            echo json_encode($res);

        }






        
    }

?>