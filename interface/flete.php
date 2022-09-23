
    <form role="form" action="#" method="post" id="_form" name="_form" onkeypress="return noenter(event)">
        <input type="hidden" id="id" name="id"/>
        <div class="row">
            <div class="form-group col-md-3">
                <label for="placa" class="form-label mt-4">Placa</label>
                <input type="text" class="form-control" id="placa" name="placa">
            </div>

            <div class="form-group col-md-3">
                <label for="ruta" class="form-label mt-4">Ruta</label>
                <select class="form-select" id="ruta" name="ruta">
                    <option value="LOCAL">LOCAL</option>
                    <option value="BICAMARA">BICAMARA</option>
                    <option value="ABARROTERO">ABARROTERO</option>
                    <option value="VIAJERO">VIAJERO</option>
                </select>
            </div>
            <div class="form-group col-md-3">
                <label for="conductor" class="form-label mt-4">Conductor</label>
                <input type="text" class="form-control" id="conductor" name="conductor">
            </div>
            
            <div class="form-group col-md-3">
                <label for="socio_estrategico" class="form-label mt-4">Socio Estratégico</label>
                <input type="text" class="form-control" id="socio_estrategico" name="socio_estrategico">
            </div>
            <div class="form-group col-md-3">
                <label for="flete" class="form-label mt-4">Flete</label>
                <input type="text" class="form-control" id="flete" name="flete">
            </div>
            <div class="form-group col-md-3">
                <label for="falso_flete" class="form-label mt-4">Falso Flete</label>
                <input type="text" class="form-control" id="falso_flete" name="falso_flete">
            </div>

            
            
        </div>
        
        <button type="button" id="btn_form" class="btn btn-primary btn-rounded mt-4" onclick="javascript:add();">Guardar</button>
        <button type="button" id="btn_clear" class="btn btn-danger btn-rounded mt-4" onclick="javascript:cancel();">Cancelar</button>

    </form>

