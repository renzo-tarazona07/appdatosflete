<?php

    include '../class/ccreporte.php';
    
    class logdash{
        function __construct(){}

        //logdrop.insert
        public static function barras($params){
            //ccliqui::
        }

        //logdash.report
        public static function report($params){
            
            $get=ccreporte::list($params);

            $lista['datalist']=[];
            for ($i=0; $i < sizeof($get['data']); $i++) { 
                $lista['datalist'][$i]=$get['data'][$i];
            }

            echo json_encode($lista);

        }
        
    }

?>