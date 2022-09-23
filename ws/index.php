<?php
//include_once '../logic/logprog.php';
//include_once '../logic/logliqui.php';
    //exit;
    $methods=[
        array('method'=>'logprog.insert'),
        array('method'=>'logprog.getbyid'),
        array('method'=>'logprog.list'),
        array('method'=>'logprog.delete'),
        array('method'=>'logprog.listbymesanio'),

        array('method'=>'logliqui.insert'),
        array('method'=>'logliqui.getbyid'),
        array('method'=>'logliqui.list'), 
        array('method'=>'logliqui.delete'),
        array('method'=>'logliqui.listbymesanio'),

        array('method'=>'logpagofle.insert'),
        array('method'=>'logpagofle.getbyid'),
        array('method'=>'logpagofle.list'),
        array('method'=>'logpagofle.delete'),

        array('method'=>'logtiempokm.insert'),
        array('method'=>'logtiempokm.getbyid'),
        array('method'=>'logtiempokm.list'),
        array('method'=>'logtiempokm.delete'),

        array('method'=>'lognoprog.insert'),
        array('method'=>'lognoprog.getbyid'),
        array('method'=>'lognoprog.list'),
        array('method'=>'lognoprog.delete'),

        array('method'=>'logpfr.insert'),
        array('method'=>'logpfr.getbyid'),
        array('method'=>'logpfr.list'),
        array('method'=>'logpfr.delete'),

        array('method'=>'logdrop.insert'),
        array('method'=>'logdrop.getbyid'),
        array('method'=>'logdrop.list'),
        array('method'=>'logdrop.delete'),

        array('method'=>'logflete.insert'),
        array('method'=>'logflete.getbyid'),
        array('method'=>'logflete.list'),
        array('method'=>'logflete.delete'),
        array('method'=>'logflete.getbyplaca'),

        array('method'=>'logdash.barras'),
        array('method'=>'logdash.report'),

        array('method'=>'logimport.insert')
    ];
    
    $datos=array('facebook'=>'@programandoelmono');

    if(isset($_REQUEST['method'])){
        for ($i=0; $i < sizeof($methods) ; $i++) {
            if($methods[$i]['method']==$_REQUEST['method']){
                //echo $methods[$i]['method'];exit;
                $funcion=explode('.',$methods[$i]['method']);

                include_once '../logic/'.$funcion[0].'.php';

                $mifuncion = $funcion[0].'::'.$funcion[1];
                print_r($mifuncion($_REQUEST));
                //exit;
            }
        }

        //echo json_encode($datos);
    }else{
        //echo json_encode($datos);
    }
 
 ?>