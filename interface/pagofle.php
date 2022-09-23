
    <form role="form" action="#" method="post" id="_form" name="_form" onkeypress="return noenter(event)">
        <input type="hidden" id="idgenerado" name="idgenerado"/>
        <div class="row">
            <div class="form-group col-md-2">
                <label for="idprog" class="form-label mt-4">ID Generado</label>
                <input type="text" class="form-control" id="idprog" name="idprog" onchange="window._onchangegenerado(this);">
            </div>
            <div class="form-group col-md-2">
                <label for="fecha_liqui" class="form-label mt-4">Fecha</label>
                <input type="text" class="form-control" id="fecha_liqui" name="fecha_liqui">
            </div>
            <div class="form-group col-md-2">
                <label for="placa" class="form-label mt-4">Placa</label>
                <input type="text" class="form-control" id="placa" name="placa">
            </div>
            <div class="form-group col-md-4">
                <label for="tipo_unidad" class="form-label mt-4">Tipo Unidad</label>
                <select class="form-select" id="tipo_unidad" name="tipo_unidad">
                    <option value="REFRIGERADO">REFRIGERADO</option>
                    <option value="BICAMARA">BICAMARA</option>
                    <option value="ABARROTERO">ABARROTERO</option>
                </select>
            </div>

            <div class="form-group col-md-2">
                <label for="temperatura" class="form-label mt-4">Temperatura</label>
                <input type="text" class="form-control" id="temperatura" name="temperatura">
            </div>
            <div class="form-group col-md-2">
                <label for="flete_sigv" class="form-label mt-4">Flete S/IGV</label>
                <input type="text" class="form-control" id="flete_sigv" name="flete_sigv">
            </div>
            <div class="form-group col-md-2">
                <label for="flete_cigv" class="form-label mt-4">Flete C/IGV</label>
                <input type="text" class="form-control" id="flete_cigv" name="flete_cigv">
            </div>

            <div class="form-group col-md-2">
                <label for="dia_despacho" class="form-label mt-4">Día Despacho</label>
                <select class="form-select" id="dia_despacho" name="dia_despacho">
                    <option value="DOMINGO">DOMINGO</option>
                    <option value="LUNES">LUNES</option>
                    <option value="MARTES">MARTES</option>
                    <option value="MIÉRCOLES">MIÉRCOLES</option>
                    <option value="JUEVES">JUEVES</option>
                    <option value="VIERNES">VIERNES</option>
                    <option value="SÁBADO">SÁBADO</option>
                </select>
            </div>

            <div class="form-group col-md-4">
                <label for="obs" class="form-label mt-4">Observaciones</label>
                <input type="text" class="form-control" id="obs" name="obs">
            </div>
            
        </div>
        
        <button type="button" id="btn_form" class="btn btn-primary btn-rounded mt-4" onclick="javascript:add();">Guardar</button>
        <button type="button" id="btn_clear" class="btn btn-danger btn-rounded mt-4" onclick="javascript:cancel();">Cancelar</button>

    </form>

