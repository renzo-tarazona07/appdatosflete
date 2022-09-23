
    <form role="form" action="#" method="post" id="_form" name="_form" onkeypress="return noenter(event)">
        <input type="hidden" id="idgenerado" name="idgenerado"/>
        <input type="hidden" id="idnoprog" name="idnoprog"/>
        <div class="row">
            <div class="form-group col-md-2">
                <label for="fecha_noprog" class="form-label mt-4">Fecha</label>
                <input type="text" class="form-control" id="fecha_noprog" name="fecha_noprog">
            </div>
            <div class="form-group col-md-2">
                <label for="placa" class="form-label mt-4">Placas</label>
                <input type="text" class="form-control" id="placa" name="placa">
            </div>
            
            <div class="form-group col-md-4">
                <label for="unidades_noprog" class="form-label mt-4">Unidades No Programados</label>
                <input type="text" class="form-control" id="unidades_noprog" name="unidades_noprog">
            </div>
            <div class="form-group col-md-2">
                <label for="falso_flete" class="form-label mt-4">Falso Flete S/IGV</label>
                <input type="text" class="form-control" id="falso_flete" name="falso_flete">
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
            
            
        </div>
        
        <button type="button" id="btn_form" class="btn btn-primary btn-rounded mt-4" onclick="javascript:add();">Guardar</button>
        <button type="button" id="btn_clear" class="btn btn-danger btn-rounded mt-4" onclick="javascript:cancel();">Cancelar</button>

    </form>

