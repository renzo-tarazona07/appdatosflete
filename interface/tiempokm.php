
    <form role="form" action="#" method="post" id="_form" name="_form" onkeypress="return noenter(event)">
        <input type="hidden" id="idgenerado" name="idgenerado"/>
        <div class="row">
            <div class="form-group col-md-2">
                <label for="idprog" class="form-label mt-4">ID Generado</label>
                <input type="text" class="form-control" id="idprog" name="idprog" onchange="window._onchangegenerado(this);">
            </div>
            <div class="form-group col-md-2">
                <label for="fecha_tiempoliqui" class="form-label mt-4">Fecha</label>
                <input type="text" class="form-control" id="fecha_tiempoliqui" name="fecha_tiempoliqui">
            </div>
            <div class="form-group col-md-2">
                <label for="placa" class="form-label mt-4">Placa</label>
                <input type="text" class="form-control" id="placa" name="placa">
            </div>
            
            <div class="form-group col-md-2">
                <label for="kilometraje_inicial" class="form-label mt-4">Kilometraje Inicial</label>
                <input type="text" class="form-control" id="kilometraje_inicial" name="kilometraje_inicial" nn="kilometraje_inicial" onchange="window.onchangeinput(this)">
            </div>
            <div class="form-group col-md-2">
                <label for="kilometraje_final" class="form-label mt-4">Kilometraje Final</label>
                <input type="text" class="form-control" id="kilometraje_final" name="kilometraje_final" nn="kilometraje_final" onchange="window.onchangeinput(this)">
            </div>
            <div class="form-group col-md-2">
                <label for="kilometraje" class="form-label mt-4">Kilometraje</label>
                <input type="text" class="form-control" id="kilometraje" name="kilometraje">
            </div>

            <div class="form-group col-md-2">
                <label for="hora_inicio" class="form-label mt-4">Hora Inicio</label>
                <input type="text" class="form-control" id="hora_inicio" name="hora_inicio">
            </div>
            <div class="form-group col-md-2">
                <label for="hora_termino" class="form-label mt-4">Hora Termino</label>
                <input type="text" class="form-control" id="hora_termino" name="hora_termino">
            </div>
            <div class="form-group col-md-2">
                <label for="tiempo_mercado" class="form-label mt-4">Tiempo en Mercado</label>
                <input type="text" class="form-control" id="tiempo_mercado" name="tiempo_mercado">
            </div>
            <div class="form-group col-md-2">
                <label for="operador" class="form-label mt-4">Operador</label>
                <input type="text" class="form-control" id="operador" name="operador">
            </div>

            <div class="form-group col-md-2">
                <label for="mes" class="form-label mt-4">Mes</label>
                <select class="form-select" id="mes" name="mes">
                    <option value="ENERO">ENERO</option>
                    <option value="FEBRERO">FEBRERO</option>
                    <option value="MARZO">MARZO</option>
                    <option value="ABRIL">ABRIL</option>
                    <option value="MAYO">MAYO</option>
                    <option value="JUNIO">JUNIO</option>
                    <option value="JULIO">JULIO</option>
                    <option value="AGOSTO">AGOSTO</option>
                    <option value="SETIEMBRE">SETIEMBRE</option>
                    <option value="OCTUBRE">OCTUBRE</option>
                    <option value="NOVIEMBRE">NOVIEMBRE</option>
                    <option value="DICIEMBRE">DICIEMBRE</option>
                </select>
            </div>
            <div class="form-group col-md-2">
                <label for="anio" class="form-label mt-4">Año</label>
                <input type="text" class="form-control" id="anio" name="anio">
            </div>
            
        </div>
        
        <button type="button" id="btn_form" class="btn btn-primary btn-rounded mt-4" onclick="javascript:add();">Guardar</button>
        <button type="button" id="btn_clear" class="btn btn-danger btn-rounded mt-4" onclick="javascript:cancel();">Cancelar</button>

    </form>

