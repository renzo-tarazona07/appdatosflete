<?php

    include '../class/ccpagofle.php';
    
    class logpagofle{
        function __construct(){}

        //logpagofle.insert
        public static function insert($params){
            //print_r($params);
            
            $res['ok']='no';
            $res['mensaje']='No se procesó.';
            
            $get=ccpagofle::getbyid($params);
            //print_r($get);exit;

            if(!empty($get['data'])){
                //actualizar
                //echo "act";exit;
                $insert=ccpagofle::update($params);
                
            }else{
                //registrar
                //unset($params['idgenerado']);

                //print_r($params);exit;
                $insert=ccpagofle::insert($params);
                //print_r($insert);exit;
            }
            
            if($insert=='ok'){
                $res['ok']=$insert;
                $res['mensaje']='Registro completo.';
            }
            echo json_encode($res);
        }

        //logpagofle.getbyid
        public static function getbyid($params){
            if(isset($params['param'])){
                //print_r($params);exit;
                $params['idgenerado']=$params['param'];
            }
            $get=ccpagofle::getbyid($params);
            //print_r($get);exit;
            $lista['datalist']=[];
            for ($i=0; $i < sizeof($get['data']); $i++) { 
                $lista['datalist'][$i]=$get['data'][$i];
            }

            echo json_encode($lista);

        }

        //logpagofle.list
        public static function list($params){
            //echo "hol";exit;
            $get=ccpagofle::list($params);
            //print_r($get);exit;
            $lista['datalist']=[];
            for ($i=0; $i < sizeof($get['data']); $i++) { 
                $lista['datalist'][$i]=$get['data'][$i];
            }

            echo json_encode($lista);

        }

        //logpagofle.delete
        public static function delete($params){
            $res['ok']='no';
            $res['mensaje']='No se procesó.';
            $params['idgenerado']=$params['idprog'];
            $get=ccpagofle::getbyid($params);
            //print_r($get);exit;

            if(!empty($get['data'])){
                $params['eliminado']=1;

                $update=ccpagofle::update($params);
            }
            
            if($update=='ok'){
                $res['ok']=$update;
                $res['mensaje']='Registro completo.';
            }
            echo json_encode($res);

        }






        
    }

?>