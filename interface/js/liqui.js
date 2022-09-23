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
                    return data.fecha_liqui;
                } 
            },
            { 
                "title": "# Transporte",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.nu_transporte;
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
                "title": "Conductor",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.conductor;
                } 
            },
            { 
                "title": "Cobranza Programada C/IGV",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.cobranza_prog_cigv;
                } 
            },
            { 
                "title": "Cobranza Programada S/IGV",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.cobranza_prog_sigv;
                } 
            },
            { 
                "title": "Cantidad 1",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.cantidad_1;
                } 
            },
            { 
                "title": "Soles 1",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.soles_1;
                } 
            },
            { 
                "title": "Cantidad 2",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.cantidad_2;
                } 
            },
            { 
                "title": "Soles 2",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.soles_2;
                } 
            },
            { 
                "title": "Total",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.total;
                } 
            },
            { 
                "title": "Suma Soles",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.suma_soles;
                } 
            },
            { 
                "title": "Total Liq S/IGV",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.total_liq_sigv;
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
            var res=this.callservice("logliqui.list",formData);
            console.log(res);
            if(res!=false){
                for (let i = 0; i < (res.datalist).length; i++) {
                    res.datalist[i].fecha_liqui=(res.datalist[i].fecha_liqui).split('/').reverse().join('/');
                }
                this.render(res.datalist);
            }
        }, 1000);
    }

    this.add=function(){
        arr_campos=[];
        arr_campos.push({ campo: 'fecha_liqui', mensaje: 'Consulte ID Generado.',tipo:'fecha' });
        arr_campos.push({ campo: 'nu_transporte', mensaje: 'Consulte ID Generado.',tipo:'cadena' });
        arr_campos.push({ campo: 'placa', mensaje: 'Consulte ID Generado.',tipo:'cadena' });

        arr_campos.push({ campo: 'conductor', mensaje: 'Ingrese Conductor.',tipo:'cadena' });
        arr_campos.push({ campo: 'cobranza_prog_cigv', mensaje: 'Ingrese Cobranza Con IGV.',tipo:'cadena' });
        arr_campos.push({ campo: 'cobranza_prog_sigv', mensaje: 'Ingrese Cobranza Sin IGV.',tipo:'cadena' });
        arr_campos.push({ campo: 'total', mensaje: 'Ingrese Total.',tipo:'numero' });
        arr_campos.push({ campo: 'suma_soles', mensaje: 'Ingrese Suma Total.',tipo:'numero' });
        arr_campos.push({ campo: 'total_liq_sigv', mensaje: 'Ingrese Total Liq.',tipo:'numero' });
   
        
        continua_val_campos=this.validar_campos(arr_campos);
        if(continua_val_campos==false){
            return false;
        }
        /*
        _generado=obtenerValor("idgenerado");
        for (let i = 0; i < (that.dataprog).length; i++) {
            console.log(that.dataprog[i])
            if(that.dataprog[i].idprog==_generado){
                swal("Ya existe registro.","Buscar ID Generado.","warning");return;
            }
            
        }
        */

        setTimeout(() => {
        
            async=false
            var formData = new FormData($("#_form")[0]);

            _fecha=obtenerValor("fecha_liqui");
            var _fechasave = _fecha.split('/').reverse().join('/');
            //var _fechashow = _fechasave.split('/').reverse().join('/');
            formData.set("fecha_liqui",_fechasave);

            var _res=callservice("logliqui.insert",formData);
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
                this.asignarValor("fecha_liqui",_value.fecha_liqui);
                this.asignarValor("nu_transporte",_value.nu_transporte);
                this.asignarValor("placa",_value.placa);
                this.asignarValor("conductor",_value.conductor);
                this.asignarValor("cobranza_prog_cigv",_value.cobranza_prog_cigv);
                this.asignarValor("cobranza_prog_sigv",_value.cobranza_prog_sigv);
                this.asignarValor("cantidad_1",_value.cantidad_1);
                this.asignarValor("soles_1",_value.soles_1);
                this.asignarValor("cantidad_2",_value.cantidad_2);
                this.asignarValor("soles_2",_value.soles_2);
                this.asignarValor("total",_value.total);
                this.asignarValor("suma_soles",_value.suma_soles);
                this.asignarValor("total_liq_sigv",_value.total_liq_sigv);
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
                    var _res=callservice("logliqui.delete",formData);
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

        var formData = new FormData();
        formData.append("param",obj.value);
        _lres=_onchange("logprog.getbyid",formData);
        console.log(_lres)
        for (let i = 0; i < _lres.datalist.length; i++) {
            _lres.datalist[i].fecha_prog=(_lres.datalist[i].fecha_prog).split('/').reverse().join('/');
            asignarValor("fecha_liqui",_lres.datalist[i].fecha_prog);
            asignarValor("nu_transporte",_lres.datalist[i].nu_transporte);
            asignarValor("placa",_lres.datalist[i].placa);
            asignarValor("cobranza_prog_sigv",_lres.datalist[i].ventas);
            asignarValor("idgenerado",obj.value);
            sololeerElemento("idprog",true);
            return;
        }

        asignarValor("fecha_liqui","");
        asignarValor("nu_transporte","");
        asignarValor("placa","");
        asignarValor("cobranza_prog_sigv","");
        sololeerElemento("idprog",false);
    }

    this.onchangeinput=function(obj){
        //console.log(obj);
        //console.log(obj.value);
        //console.log(obj.attributes['nn'].value);

        

        arr_campos=[];
        let _nn=obj.attributes["nn"].value;
        switch (_nn) {

            case "cobranza_prog_cigv":
                arr_campos.push({ campo: 'cobranza_prog_cigv', mensaje: 'Ingresar Número.',tipo:'numero' });
                if(this.validar_campos(arr_campos)==false){
                    return false;
                }
                
                break;
            case "cantidad_1":
                arr_campos.push({ campo: 'cantidad_1', mensaje: 'Ingresar Número.',tipo:'numero' });
                if(this.validar_campos(arr_campos)==false){
                    return false;
                }
                
                break;
            case "cantidad_2":
                arr_campos.push({ campo: 'cantidad_2', mensaje: 'Ingresar Número.',tipo:'numero' });
                if(this.validar_campos(arr_campos)==false){
                    return false;
                }
                asignarValor("total",obj.value);
                break;
            case "soles_1":
                arr_campos.push({ campo: 'soles_1', mensaje: 'Ingresar Número.',tipo:'numero' });
                if(this.validar_campos(arr_campos)==false){
                    return false;
                }
                var _sumasoles=Number(obj.value)+Number(obtenerValor("soles_2"));
                asignarValor("suma_soles",_sumasoles.toFixed(2));
                setTimeout(() => {
                    var _sumaliqsigv=Number(obtenerValor("cobranza_prog_sigv"))-Number(obtenerValor("suma_soles"));
                    asignarValor("total_liq_sigv",_sumaliqsigv.toFixed(2));
                }, 200);
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
            sololeerElemento("fecha_liqui",true);
            sololeerElemento("nu_transporte",true);
            sololeerElemento("placa",true);
            sololeerElemento("total",true);
            sololeerElemento("suma_soles",true);
            sololeerElemento("total_liq_sigv",true);
            //_onchange_("idgenerado");
        }, 1000);
    }

}