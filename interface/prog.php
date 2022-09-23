
    <form role="form" action="#" method="post" id="_form" name="_form" onkeypress="return noenter(event)">
        <input type="hidden" id="idgenerado" name="idgenerado"/>
        <div class="row">
            <div class="form-group col-md-2">
                <label for="fecha_prog" class="form-label mt-4">Fecha</label>
                <input type="text" class="form-control" id="fecha_prog" name="fecha_prog" placeholder="07/11/2022">
            </div>
            <div class="form-group col-md-2">
                <label for="nu_transporte" class="form-label mt-4">Nro. Transporte</label>
                <input type="text" class="form-control" id="nu_transporte" name="nu_transporte">
            </div>
            <div class="form-group col-md-2">
                <label for="placa" class="form-label mt-4">Placa</label>
                <input type="text" class="form-control" id="placa" name="placa" placeholder="ABC123">
            </div>
            <div class="form-group col-md-2">
                <label for="hora_despacho" class="form-label mt-4">Hora Despacho</label>
                <input type="text" class="form-control" id="hora_despacho" name="hora_despacho" placeholder="7:00">
            </div>
            <div class="form-group col-md-2">
                <label for="hora_termino" class="form-label mt-4">Hora Termino</label>
                <input type="text" class="form-control" id="hora_termino" name="hora_termino">
            </div>
            <div class="form-group col-md-2">
                <label for="tiempo_delivery" class="form-label mt-4">Delivery y tiempo</label>
                <input type="text" class="form-control" id="tiempo_delivery" name="tiempo_delivery">
            </div>
            <div class="form-group col-md-2">
                <label for="jornada_laboral" class="form-label mt-4">Jornada Laboral</label>
                <input type="text" class="form-control" id="jornada_laboral" name="jornada_laboral">
            </div>
            <div class="form-group col-md-2">
                <label for="paradas" class="form-label mt-4">Paradas</label>
                <input type="text" class="form-control" id="paradas" name="paradas">
            </div>
            <div class="form-group col-md-2">
                <label for="clientes" class="form-label mt-4">Clientes</label>
                <input type="text" class="form-control" id="clientes" name="clientes">
            </div>
            <div class="form-group col-md-2">
                <label for="distancia" class="form-label mt-4">Distancia</label>
                <input type="text" class="form-control" id="distancia" name="distancia">
            </div>
            <div class="form-group col-md-2">
                <label for="peso" class="form-label mt-4">Peso</label>
                <input type="text" class="form-control" id="peso" name="peso">
            </div>
            <div class="form-group col-md-2">
                <label for="volumen" class="form-label mt-4">Volumen</label>
                <input type="text" class="form-control" id="volumen" name="volumen">
            </div>
            <div class="form-group col-md-2">
                <label for="ventas" class="form-label mt-4">Ventas</label>
                <input type="text" class="form-control" id="ventas" name="ventas">
            </div>
            <div class="form-group col-md-2">
                <label for="flete_rsw" class="form-label mt-4">Flete RSW</label>
                <input type="text" class="form-control" id="flete_rsw" name="flete_rsw">
            </div>
            <div class="form-group col-md-2">
                <label for="violaciones" class="form-label mt-4">Violaciones</label>
                <input type="text" class="form-control" id="violaciones" name="violaciones">
            </div>
            <div class="form-group col-md-2">
                <label for="tipo_camion" class="form-label mt-4">Tipo Camión</label>
                <input type="text" class="form-control" id="tipo_camion" name="tipo_camion">
            </div>
            <div class="form-group col-md-2">
                <label for="localidades_despacho" class="form-label mt-4">Localidades Despacho</label>
                <input type="text" class="form-control" id="localidades_despacho" name="localidades_despacho">
            </div>
        </div>
        
        <button type="button" id="btn_form" class="btn btn-primary btn-rounded mt-4" onclick="javascript:add();">Guardar</button>
        <button type="button" id="btn_clear" class="btn btn-danger btn-rounded mt-4" onclick="javascript:cancel();">Cancelar</button>

    </form>

