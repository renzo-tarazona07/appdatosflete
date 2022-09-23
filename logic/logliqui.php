<?php

include '../class/ccliqui.php';
    
    class logliqui{
        function __construct(){
        }

        //logliqui.insert
        public static function insert($params){
            //print_r($params);
            
            $res['ok']='no';
            $res['mensaje']='No se procesó.';
            
            $get=ccliqui::getbyid($params);
            //print_r($get);exit;

            if(!empty($get['data'])){
                //actualizar
                $insert=ccliqui::update($params);
                
            }else{
                //registrar
                //unset($params['idgenerado']);

                //print_r($params);exit;
                $insert=ccliqui::insert($params);
                //print_r($insert);exit;
            }
            
            if($insert=='ok'){
                $res['ok']=$insert;
                $res['mensaje']='Registro completo.';
            }
            echo json_encode($res);
        }

        //logliqui.getbyid
        public static function getbyid($params){
            if(isset($params['param'])){
                //print_r($params);exit;
                $params['idgenerado']=$params['param'];
            }
            $get=ccliqui::getbyid($params);
            //print_r($get);exit;
            $lista['datalist']=[];
            for ($i=0; $i < sizeof($get['data']); $i++) { 
                $lista['datalist'][$i]=$get['data'][$i];
            }

            echo json_encode($lista);

        }

        //logliqui.list
        public static function list($params){
            //echo "hol";exit;
            $get=ccliqui::list($params);
            //print_r($get);exit;
            $lista['datalist']=[];
            for ($i=0; $i < sizeof($get['data']); $i++) { 
                $lista['datalist'][$i]=$get['data'][$i];
            }

            echo json_encode($lista);

        }

        //logliqui.delete
        public static function delete($params){
            $res['ok']='no';
            $res['mensaje']='No se procesó.';
            $params['idgenerado']=$params['idprog'];
            $get=ccliqui::getbyid($params);
            //print_r($get);exit;

            if(!empty($get['data'])){
                $params['eliminado']=1;

                $update=ccliqui::update($params);
            }
            
            if($update=='ok'){
                $res['ok']=$update;
                $res['mensaje']='Registro completo.';
            }
            echo json_encode($res);

        }

        //logliqui.listbymesanio
        public static function listbymesanio($params){
            //$params['anio']='2022';
            //$params['mes']='03';
            //print_r($params);exit;
            $res=array('etiquetas_1'=>[],'datos_1'=>[],'etiquetas_2'=>[],'datos_2'=>[]);
            $getultimo=ccliqui::getultimo($params);

            if(sizeof($getultimo['data'])>0){
                $params['anio']=$getultimo['data'][0]['anio'];
                $params['mes']=$getultimo['data'][0]['mes'];

                /////////////////////////////////////////////////////////data tbl_liqui
                $get=ccliqui::listbymesanio($params);
                //print_r($get);exit;

                /////////////////////////////////////////////////////////data tbl_prog
                $params['method']='logprog.listbymesanio';
                $getprog=logliqui::_curl($params);//exit;
                $arr_getprog=json_decode($getprog,true);

                //print_r($arr_getprog);exit;
    
                $lista['datalist']=[];
                for ($i=0; $i < sizeof($get['data']); $i++) {
                    $value=$get['data'][$i];
                    //$get['data'][$i]['porcentaje_soles']= ( (($get['data'][$i]['total_liq_sigv'])*1) /  (($get['data'][$i]['cobranza_prog_sigv'])*1) );
                    $get['data'][$i]['porcentaje_soles']= ( ($get['data'][$i]['cobranza_prog_sigv']*1)-($get['data'][$i]['soles_2']*1)) /  ($get['data'][$i]['cobranza_prog_sigv']*1) ;

                    for ($j=0; $j < sizeof($arr_getprog['datalist']); $j++) { 
                        if($arr_getprog['datalist'][$j]['idgenerado']==$get['data'][$i]['idprog']){

                            $get['data'][$i]['porcentaje_contacto']= (($arr_getprog['datalist'][$j]['clientes']*1)-($get['data'][$i]['cantidad_2']*1)) / ($arr_getprog['datalist'][$j]['clientes']*1);
                        }
                    }

                    //print_r($get['data'][$i]['porcentaje_soles'].'            ');


                    $lista['datalist'][$i]=$get['data'][$i];
    
                }
                //exit;
                
                //soles
                $etiquetas=[];
                $datos=[];

                //clientes
                $etiquetas_2=[];
                $datos_2=[];
                for ($i=0; $i < sizeof($lista['datalist']) ; $i++) { 
                    $etiquetas[]=$lista['datalist'][$i]['fecha_liqui'];
                    $datos[]= round(((float)$lista['datalist'][$i]['porcentaje_soles'])*100,2);
                    $etiquetas_2[]=$lista['datalist'][$i]['fecha_liqui'];
                    $datos_2[]= round(((float)$lista['datalist'][$i]['porcentaje_contacto'])*100,2);
                }

                //$res=array('etiquetas'=>$etiquetas,'datos'=>$datos);
                $res['etiquetas_1']=$etiquetas;
                $res['datos_1']=$datos;
                $res['etiquetas_2']=$etiquetas_2;
                $res['datos_2']=$datos_2;
    
            }

            echo json_encode($res);
            

            /*
            {
                "etiquetas": [
                    "2022/12/06"
                ],
                "datos": [
                    109.80392156862744
                ]
            }
            */

        }

        public static function _curl($data){

            $url="http://localhost/appdatosflete/ws/index.php";

            $curl_handle = curl_init();
            curl_setopt($curl_handle, CURLOPT_URL, $url);
            curl_setopt($curl_handle, CURLOPT_CONNECTTIMEOUT, 20);
            curl_setopt($curl_handle, CURLOPT_CUSTOMREQUEST, "POST");  
            curl_setopt($curl_handle, CURLOPT_POST, true);    
            curl_setopt($curl_handle, CURLOPT_POSTFIELDS, http_build_query($data));
            curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl_handle, CURLOPT_HTTPHEADER, array());
                                                                                                        
            $errors = curl_error($curl_handle);                                                                                                            
            $result = curl_exec($curl_handle);
            $returnCode = (int)curl_getinfo($curl_handle, CURLINFO_HTTP_CODE);
            curl_close($curl_handle);

            return $result;
        }






        
    }

?>