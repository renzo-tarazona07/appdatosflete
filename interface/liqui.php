
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
                <label for="nu_transporte" class="form-label mt-4">Nro. Transporte</label>
                <input type="text" class="form-control" id="nu_transporte" name="nu_transporte">
            </div>
            <div class="form-group col-md-2">
                <label for="placa" class="form-label mt-4">Placa</label>
                <input type="text" class="form-control" id="placa" name="placa">
            </div>
            <div class="form-group col-md-2">
                <label for="conductor" class="form-label mt-4">Conductor</label>
                <input type="text" class="form-control" id="conductor" name="conductor">
            </div>
            <div class="form-group col-md-2">
                <label for="cobranza_prog_cigv" class="form-label mt-4">Cobranza C/IGV</label>
                <input type="text" class="form-control" id="cobranza_prog_cigv" name="cobranza_prog_cigv" nn="cobranza_prog_cigv" onchange="window.onchangeinput(this)">
            </div>
            <div class="form-group col-md-2">
                <label for="cobranza_prog_sigv" class="form-label mt-4">Cobranza S/IGV</label>
                <input type="text" class="form-control" id="cobranza_prog_sigv" name="cobranza_prog_sigv" nn="cobranza_prog_sigv" onchange="window.onchangeinput(this)">
            </div>
            <div class="form-group col-md-2">
                <label for="cantidad_1" class="form-label mt-4">Cantidad 1</label>
                <input type="text" class="form-control" id="cantidad_1" name="cantidad_1" nn="cantidad_1" onchange="window.onchangeinput(this)">
            </div>
            <div class="form-group col-md-2">
                <label for="soles_1" class="form-label mt-4">Soles 1</label>
                <input type="text" class="form-control" id="soles_1" name="soles_1" nn="soles_1" onchange="window.onchangeinput(this)">
            </div>
            <div class="form-group col-md-2">
                <label for="cantidad_2" class="form-label mt-4">Cantidad 2</label>
                <input type="text" class="form-control" id="cantidad_2" name="cantidad_2" nn="cantidad_2" onchange="window.onchangeinput(this)">
            </div>
            <div class="form-group col-md-2">
                <label for="soles_2" class="form-label mt-4">Soles 2</label>
                <input type="text" class="form-control" id="soles_2" name="soles_2" nn="soles_2" onchange="window.onchangeinput(this)">
            </div>
            <div class="form-group col-md-2">
                <label for="total" class="form-label mt-4">Total</label>
                <input type="text" class="form-control" id="total" name="total">
            </div>
            <div class="form-group col-md-2">
                <label for="suma_soles" class="form-label mt-4">Suma Total</label>
                <input type="text" class="form-control" id="suma_soles" name="suma_soles" nn="suma_soles" onchange="window.onchangeinput(this)">
            </div>
            <div class="form-group col-md-2">
                <label for="total_liq_sigv" class="form-label mt-4">Total Liq S/IGV</label>
                <input type="text" class="form-control" id="total_liq_sigv" name="total_liq_sigv">
            </div>
            
        </div>
        
        <button type="button" id="btn_form" class="btn btn-primary btn-rounded mt-4" onclick="javascript:add();">Guardar</button>
        <button type="button" id="btn_clear" class="btn btn-danger btn-rounded mt-4" onclick="javascript:cancel();">Cancelar</button>

    </form>

