var myclass_prog=function(){

    var that=this;

    this.dataselectmarca_2=new Array();
    this.controlname="#tbl_content";
    this.config = {
        ordering: false,
        searching: true,
        select: true,
        paging: true,
        lengthChange: false,
        pageResize: false,
        bInfo: true,
        responsive:true,
        columns: 
        [
            {
                "title": "ID Generado",
                "data": null,
                "className": "text-left",
                render: function (data, type, row, meta) {
                    //return meta.row + meta.settings._iDisplayStart + 1;
                    return data.idprog;
                }
            }, 
            { 
                "title": "Fecha",
                "data": null, 
                "className": "text-left",
                render: function ( data, type, row ) {
                    return data.fecha_tiempoliqui;
                } 
            },
            { 
                "title": "Placa",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.placa;
                } 
            },
            { 
                "title": "Kilometraje Inicial",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.kilometraje_inicial;
                } 
            },
            { 
                "title": "Kilometraje Final",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.kilometraje_final;
                } 
            },
            { 
                "title": "Kilometraje",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.kilometraje;
                } 
            },
            { 
                "title": "Hora Inicio",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.hora_inicio;
                } 
            },
            { 
                "title": "Hora Termino",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.hora_termino;
                } 
            },
            { 
                "title": "Tiempo Mercado",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.tiempo_mercado;
                } 
            },
            { 
                "title": "Operador",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.operador;
                } 
            },
            { 
                "title": "Mes",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.mes;
                } 
            },
            { 
                "title": "Año",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.anio;
                } 
            },
            { "title": "Acción", 'data': null,"className": "text-center", /*"width": "10%",*/
                render: function ( data, type, row ) {
                    var botones="";
                    
                    botones+= "<span>       </span>";
                    botones+="<a onclick=window.edit('"+data.idprog+"'); class='btn  btn-primary btn-rounded btn-xs text-white'></a>";
                    botones+="<a onclick=window.delete('"+data.idprog+"'); class='btn  btn-danger btn-rounded btn-xs text-white'></a>";
                    //'<a onclick="javascript:edit('+data.idgenerado+')" class="btn  btn-success btn-rounded btn-xs text-white"></a>';                    
                    return botones;
                }
            }, 
        ],
        autoWidth:false,
        language: {
        "lengthMenu": "Mostrar _MENU_ registros por página",
        "zeroRecords": "No se encontraron resultados en su búsqueda",
        "searchPlaceholder": "Buscar registros",
        "info": "Mostrando registros de _START_ al _END_ de un total de  _TOTAL_ registros",
        "infoEmpty": "No existen registros",
        "infoFiltered": "(filtrado de un total de _MAX_ registros)",
        "search": "Buscar:",
        "paginate": {
                "first": "Primero",
                "last": "Último",
                "next": "Siguiente",
                "previous": "Anterior"
            },
        },
    }

    this.postload=function(params){
        //console.log(params);
        if ($.fn.dataTable.isDataTable(that.controlname)) {
            $(that.controlname).DataTable().destroy();
            $(that.controlname).empty();
        }
        that.lista_prog = $(that.controlname).DataTable(that.config);
    }

    this.render=function(data){
        that.dataprog = data;
        that.lista_prog.clear();
        that.lista_prog.rows.add(that.dataprog);
        that.lista_prog.draw();
    }
    
    this.loaddata=function(){

        var formData = new FormData();
        setTimeout(() => {

            async=false;
            var res=this.callservice("logtiempokm.list",formData);
            console.log(res);
            if(res!=false){
                for (let i = 0; i < (res.datalist).length; i++) {
                    res.datalist[i].fecha_tiempoliqui=(res.datalist[i].fecha_tiempoliqui).split('/').reverse().join('/');
                }
                this.render(res.datalist);
            }
        }, 1000);
    }

    this.add=function(){
        arr_campos=[];
        arr_campos.push({ campo: 'fecha_tiempoliqui', mensaje: 'Consulte ID Generado.',tipo:'fecha' });
        arr_campos.push({ campo: 'placa', mensaje: 'Consulte ID Generado.',tipo:'cadena' });

        arr_campos.push({ campo: 'kilometraje', mensaje: 'Ingrese Temperatura.',tipo:'numero' });
        arr_campos.push({ campo: 'hora_inicio', mensaje: 'Ingrese Flete Sin  IGV.',tipo:'cadena' });
        arr_campos.push({ campo: 'hora_termino', mensaje: 'Ingrese Flete Con IGV.',tipo:'cadena' });
        arr_campos.push({ campo: 'tiempo_mercado', mensaje: 'Ingrese Día Despacho.',tipo:'cadena' });
        arr_campos.push({ campo: 'operador', mensaje: 'Ingrese Día Despacho.',tipo:'cadena' });
        arr_campos.push({ campo: 'mes', mensaje: 'Ingrese Día Despacho.',tipo:'cadena' });
        arr_campos.push({ campo: 'anio', mensaje: 'Ingrese Día Despacho.',tipo:'cadena' });
   
        
        continua_val_campos=this.validar_campos(arr_campos);
        if(continua_val_campos==false){
            return false;
        }

        setTimeout(() => {
        
            async=false
            var formData = new FormData($("#_form")[0]);
            _fecha=obtenerValor("fecha_tiempoliqui");
            var _fechasave = _fecha.split('/').reverse().join('/');
            formData.set("fecha_tiempoliqui",_fechasave);

            var _res=callservice("logtiempokm.insert",formData);
            console.log(_res);
            if(_res.ok="ok"){
                limpiarFormulario("_form");
                asignarValor("idgenerado","");
                that.loaddata();
                anidarHtml("btn_form","Guardar");
                bloqueoElemento("btn_form",false);
            }

        }, 500);
        
    }

    this.edit=function(id){
        bloqueoElemento("btn_form",false);
        limpiarFormulario("_form");
        this.asignarValor("idgenerado",id);
        
        for (let i = 0; i < (that.dataprog).length; i++) {
            //console.log(that.dataprog[i]);
            _value=that.dataprog[i];
            if(_value.idprog==id){
                this.asignarValor("idprog",_value.idprog);
                this.asignarValor("fecha_tiempoliqui",_value.fecha_tiempoliqui);
                this.asignarValor("placa",_value.placa);

                this.asignarValor("kilometraje_inicial",_value.kilometraje_inicial);

                this.asignarValor("kilometraje_final",_value.kilometraje_final);
                this.asignarValor("kilometraje",_value.kilometraje);
                this.asignarValor("hora_inicio",_value.hora_inicio);
                this.asignarValor("hora_termino",_value.hora_termino);
                this.asignarValor("tiempo_mercado",_value.tiempo_mercado);
                this.asignarValor("operador",_value.operador);
                this.asignarValor("mes",_value.mes);
                this.asignarValor("anio",_value.anio);
            }
            
        }
        
        anidarHtml("btn_form","Editar");
    }

    this.delete=function(id){
        //$("#idgenerado").val(id);
        that.cancel();
        console.log("dele");
        swal({
            title: 'Está seguro de eliminar?',
            text: 'Esta acción se cancelará en 3 segundos.',
            timer: 3000
        }).then(
            function (accion) {
                console.log(accion)
                if (accion === true) {
                    var formData = new FormData();
                    formData.append("idprog",id);
                    async=false;
                    var _res=callservice("logtiempokm.delete",formData);
                    if(_res.ok="ok"){
                        limpiarFormulario("_form");
                        asignarValor("idgenerado","");
                        that.loaddata();
                    }
                }
            }
        ).catch(error => {
            swal("Ocurrió un error.(tryeliminar)","","info");
            console.log(error);
        })
        
        
    }

    this.cancel=function(){
        limpiarFormulario("_form");
        asignarValor("idgenerado","");
        anidarHtml("btn_form","Guardar");
        sololeerElemento("idprog",false);
    }

    this._onchangegenerado=function(obj){
        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        var formData = new FormData();
        formData.append("param",obj.value);
        _lres=_onchange("logprog.getbyid",formData);
        console.log(_lres)
        for (let i = 0; i < _lres.datalist.length; i++) {
            _lres.datalist[i].fecha_prog=(_lres.datalist[i].fecha_prog).split('/').reverse().join('/');

            _fecha_=_lres.datalist[i].fecha_prog;
            _fecha_=_fecha_.split('/');
            console.log(_fecha_);
            if(_fecha_.length!=3){
                swal("Revisar ID Generado en la tarea PROG.","Error Formato Fecha","error");
                return;
            }
            for (let j = 0; j < meses.length; j++) {
                if((j+1)==(_fecha_[1]*1)){
                    asignarValor("mes",meses[j].toUpperCase());
                    asignarValor("anio",_fecha_[2]);
                }
                
            }

            asignarValor("fecha_tiempoliqui",_lres.datalist[i].fecha_prog);
            asignarValor("placa",_lres.datalist[i].placa);
            asignarValor("idgenerado",obj.value);
            sololeerElemento("idprog",true);
            return;
        }

        asignarValor("fecha_tiempoliqui","");
        asignarValor("placa","");
        sololeerElemento("idprog",false);
    }


    this.onchangeinput=function(obj){
        
        arr_campos=[];
        let _nn=obj.attributes["nn"].value;
        switch (_nn) {

            case "kilometraje_inicial":
                arr_campos.push({ campo: 'kilometraje_inicial', mensaje: 'Ingresar Número.',tipo:'numero' });
                if(this.validar_campos(arr_campos)==false){
                    return false;
                }
                var _diferenciakilometros=Number(obtenerValor("kilometraje_final"))-Number(obj.value);
                asignarValor("kilometraje",_diferenciakilometros.toFixed(2));
                
                break;

            case "kilometraje_final":
                arr_campos.push({ campo: 'kilometraje_final', mensaje: 'Ingresar Número.',tipo:'numero' });
                if(this.validar_campos(arr_campos)==false){
                    return false;
                }
                var _diferenciakilometros=Number(obj.value)-Number(obtenerValor("kilometraje_inicial"));
                asignarValor("kilometraje",_diferenciakilometros.toFixed(2));
                
                break;

            case "soles_2":
                arr_campos.push({ campo: 'soles_2', mensaje: 'Ingresar Número.',tipo:'numero' });
                if(this.validar_campos(arr_campos)==false){
                    return false;
                }
                var _sumasoles=Number(obj.value)+Number(obtenerValor("soles_1"));
                asignarValor("suma_soles",_sumasoles.toFixed(2));
                setTimeout(() => {
                    var _sumaliqsigv=Number(obtenerValor("cobranza_prog_sigv"))-Number(obtenerValor("suma_soles"));
                    asignarValor("total_liq_sigv",_sumaliqsigv.toFixed(2));
                }, 200);
                break;
            case "cobranza_prog_sigv":
                arr_campos.push({ campo: 'cobranza_prog_sigv', mensaje: 'Ingresar Número.',tipo:'numero' });
                if(this.validar_campos(arr_campos)==false){
                    return false;
                }
                var _sumaliqsigv=Number(obj.value)-Number(obtenerValor("suma_soles"));
                asignarValor("total_liq_sigv",_sumaliqsigv.toFixed(2));
                break;
        
            default:
                break;
        }
    }    

    this.init=function(){
        that.postload();
        that.loaddata();

        setTimeout(() => {
            sololeerElemento("fecha_tiempoliqui",true);
            sololeerElemento("placa",true);
            sololeerElemento("kilometraje",true);
        }, 1000);
    }

}