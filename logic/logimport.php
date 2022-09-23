<?php

    include '../class/ccprog.php';
    
    class logimport{
        function __construct(){}      

        //logimport.insert
        public static function insert($params){
            $res['ok']='no';

            $list=[];
            if (($gestor = fopen("http://localhost/app/src/docs/test_1.csv", "r")) !== FALSE) {
                $res['ok']='si';
                $ii=0;
                while (($datos = fgetcsv($gestor, 1000, ";")) !== FALSE) {
                    $ii++;
                    if($ii>1){
                        $numero = count($datos);
                        $valido=0;

                        $_list['estado']=0;
                        $_list['idgenerado']=$datos[0];

                        //inicio validar fecha
                        $cad=$datos[1];
                        $fechavalida="no";
                        $cadexp=explode("/",$cad);
                        if(sizeof($cadexp)==3){
                            $cadexp=$cadexp[2]."/".$cadexp[1]."/".$cadexp[0];
                            $fechavalida="si";
                        }

                        if($fechavalida=="no"){
                            $cadexp=explode("-",$cad);
                            if(sizeof($cadexp)==3){
                                $cadexp=$cadexp[2]."/".$cadexp[1]."/".$cadexp[0];
                            }
                        }
                        $_cadexp=explode("/",$cadexp);
                        $validartrans=strlen($_cadexp[0]);
                        if($validartrans==4){
                            $fechavalida="si";
                            //$_list['estado']=0;
                        }else{
                            $valido=4;
                            $_list['estado']=4;
                        }
                        if($fechavalida=="no"){
                            $cadexp=$cad;
                        }
                        //$_list['fecha_prog']=$datos[1];
                        //fin validar fecha                        
                        $_list['fecha_prog']=$cadexp;

                        $_list['nu_transporte']=$datos[2];
                        $_list['placa']=$datos[3];
                        $_list['hora_despacho']=$datos[4];
                        $_list['hora_termino']=$datos[5];
                        $_list['tiempo_delivery']=$datos[6];
                        $_list['jornada_laboral']=$datos[7];
                        $_list['paradas']=$datos[8];
                        $_list['clientes']=$datos[9];

                        //inicio valn10
                        if($datos[10]!=""){
                            $valn10=explode(",",$datos[10]);
                            if(sizeof($valn10)==2){
                                $valn10=$valn10[0].".".$valn10[1];
                            }else{
                                $valn10=$valn10[0];
                            }
                            //echo $valn10;
                        }
                        //$_list['distancia']=$datos[10];
                        $_list['distancia']=(float)$valn10;
                        //fin valn10

                        
                        //inicio valn11
                        if($datos[11]!=""){
                            $valn11=explode(",",$datos[11]);
                            if(sizeof($valn11)==2){
                                $valn11=$valn11[0].".".$valn11[1];
                            }else{
                                $valn11=$valn11[0];
                            }
                            //echo $valn11;
                        }
                        //$_list['peso']=$datos[11];
                        $_list['peso']=(float)$valn11;
                        //fin valn11

                        
                        //inicio valn12
                        if($datos[12]!=""){
                            $valn12=explode(",",$datos[12]);
                            if(sizeof($valn12)==2){
                                $valn12=$valn12[0].".".$valn12[1];
                            }else{
                                $valn12=$valn12[0];
                            }
                            //echo $valn12;
                        }
                        //$_list['volumen']=$datos[12];
                        $_list['volumen']=(float)$valn12;
                        //fin valn10

                        
                        //inicio valn13
                        if($datos[13]!=""){
                            $valn13=explode(",",$datos[13]);
                            if(sizeof($valn13)==2){
                                $valn13=$valn13[0].".".$valn13[1];
                            }else{
                                $valn13=$valn13[0];
                            }
                            //echo $valn13;
                        }
                        //$_list['ventas']=$datos[13];
                        $_list['ventas']=(float)$valn13;
                        //fin valn13

                        
                        //inicio valn14
                        if($datos[14]!=""){
                            $valn14=explode(",",$datos[14]);
                            if(sizeof($valn14)==2){
                                $valn14=$valn14[0].".".$valn14[1];
                            }else{
                                $valn14=$valn14[0];
                            }
                            //echo $valn14;
                        }
                        //$_list['flete_rsw']=$datos[14];
                        $_list['flete_rsw']=(float)$valn14;
                        //fin valn14


                        $_list['violaciones']=$datos[15];
                        $_list['tipo_camion']=$datos[16];
                        $_list['localidades_despacho']=$datos[17];

                        $list[]=$_list;
                        //$list[]=$datos;
                        //break;
                    }               
    
                }
                fclose($gestor);
                
            }

            $insertados=[];
            for ($i=0; $i < sizeof($list); $i++) {
                //idgenerado,fecha_prog,nu_transporte,placa,hora_despacho,hora_termino,tiempo_delivery,jornada_laboral,paradas,clientes,distancia,peso,volumen,ventas,flete_rsw,violaciones,tipo_camion,localidades_despacho
                $params['idgenerado']=$list[$i]['idgenerado'];
                $params['fecha_prog']=$list[$i]['fecha_prog'];
                $params['nu_transporte']=$list[$i]['nu_transporte'];
                $params['placa']=$list[$i]['placa'];
                $params['hora_despacho']=$list[$i]['hora_despacho'];
                $params['hora_termino']=$list[$i]['hora_termino'];
                $params['tiempo_delivery']=$list[$i]['tiempo_delivery'];
                $params['jornada_laboral']=$list[$i]['jornada_laboral'];
                $params['paradas']=$list[$i]['paradas'];
                $params['clientes']=$list[$i]['clientes'];
                $params['distancia']=$list[$i]['distancia'];
                $params['peso']=$list[$i]['peso'];
                $params['volumen']=$list[$i]['volumen'];
                $params['ventas']=$list[$i]['ventas'];
                $params['flete_rsw']=$list[$i]['flete_rsw'];
                $params['violaciones']=$list[$i]['violaciones'];
                $params['tipo_camion']=$list[$i]['tipo_camion'];
                $params['localidades_despacho']=$list[$i]['localidades_despacho'];
                $params['estado']=$list[$i]['estado'];

                if($params['estado']==4){
                    //error dato
                    $params['estado']=$list[$i]['estado'];
                    $insert=ccprog::insert($params);
                    $insertados[]=$params;
                    continue;
                }

                $get=ccprog::getbyid($params);
                if(!empty($get['data'])){
                    //repetido
                    $params['estado']=11;
                    $insert=ccprog::insertprogrepetidos($params);
                    $insertados[]=$params;
                    //continue;
                }else{
                    //registrar
                    $insert=ccprog::insert($params);
                    $insertados[]=$params;
                    //break;
                }
            }

            //print_r($insertados);
            echo json_encode($insertados);


        }
    }

?>