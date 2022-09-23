
    <form role="form" action="#" method="post" id="_form" name="_form" onkeypress="return noenter(event)">
        <input type="hidden" id="id" name="id"/>
        <div class="row">
            <div class="form-group col-md-3">
                <label for="fecha_drop" class="form-label mt-4">Fecha</label>
                <input type="text" class="form-control" id="fecha_drop" name="fecha_drop" placeholder="07/11/2022">
            </div>
            <div class="form-group col-md-3">
                <label for="clientes" class="form-label mt-4">Clientes</label>
                <input type="text" class="form-control" id="clientes" name="clientes">
            </div>
            
            <div class="form-group col-md-3">
                <label for="soles_sigv" class="form-label mt-4">Soles S/IGV</label>
                <input type="text" class="form-control" id="soles_sigv" name="soles_sigv">
            </div>

            <div class="form-group col-md-3">
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
            
            
        </div>
        
        <button type="button" id="btn_form" class="btn btn-primary btn-rounded mt-4" onclick="javascript:add();">Guardar</button>
        <button type="button" id="btn_clear" class="btn btn-danger btn-rounded mt-4" onclick="javascript:cancel();">Cancelar</button>

    </form>

