 <?php

require 'DB/Database.php';

class ccreporte
{
    function __construct()
    {
    }


    public static function list($params){
        $consulta = "select year(a.fecha_prog) anio, month(a.fecha_prog) mes, day(a.fecha_prog) dia,
        a.id id, a.fecha_prog, a.placa,a.distancia,d.kilometraje distancia_real, truncate(abs(((a.distancia-d.kilometraje)/(a.distancia))*100),0) desviacion,
        a.jornada_laboral tiempo_programado,d.tiempo_mercado,truncate(abs(((a.jornada_laboral-d.tiempo_mercado)/(a.jornada_laboral))*100),0) desviacion_tiempo,
        a.clientes clientes_programados,b.cantidad_2 clientes_rechazaron,truncate((a.peso/1000),2) productividad_camion, b.cobranza_prog_sigv soles_prog_sigv, b.soles_2 devoluciones_sigv,
        (b.cobranza_prog_cigv-b.soles_2) soles_cob_sigv, e.flete, 

        (b.cobranza_prog_sigv -b.soles_2)/ (b.cobranza_prog_sigv) efectividad_soles,

        ((a.clientes-b.cantidad_2) / a.clientes) efectividad_clientes
        from tbl_prog a
         left join tbl_liqui b on a.idgenerado = b.idprog
         left join tbl_pago_fle c on a.idgenerado = c.idprog
         left join tbl_tiempo_km d on a.idgenerado= d.idprog
         left join tbl_flete e on a.placa=e.placa
        ";
        try {
            // Preparar sentencia
            $comando = Database::getInstance()->getDb()->prepare($consulta);

            // Ejecutar sentencia preparada
            //$comando->execute(array($params['dato']));
            $comando->execute(array());

            return array('data'=>$comando->fetchAll(PDO::FETCH_ASSOC));

        } catch (PDOException $e) {
            /*
            echo 'Ocurrio un error con la conexion <br>';
            echo $e->getMessage();
            return false;
            */
            return array('data'=>'');
        }
    }



}