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
                "title": "#",
                "data": null,
                "className": "text-left",
                render: function (data, type, row, meta) {
                    //return meta.row + meta.settings._iDisplayStart + 1;
                    return data.idgenerado;
                }
            }, 
            { 
                "title": "Fecha",
                "data": null, 
                "className": "text-left",
                render: function ( data, type, row ) {
                    return data.fecha_prog;
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
                "title": "Hora Despacho",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.hora_despacho;
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
                "title": "Delivery y Tiempo",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.tiempo_delivery;
                } 
            },
            { 
                "title": "Jornada Laboral",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.jornada_laboral;
                } 
            },
            { 
                "title": "Paradas",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.paradas;
                } 
            },
            { 
                "title": "Clientes",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.clientes;
                } 
            },
            { 
                "title": "Distancia",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.distancia;
                } 
            },
            { 
                "title": "Peso",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.peso;
                } 
            },
            { 
                "title": "Volumen",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.volumen;
                } 
            },
            { 
                "title": "Ventas",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.ventas;
                } 
            },
            { 
                "title": "Flete RSW",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.flete_rsw;
                } 
            },
            { 
                "title": "Tipo Camión",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.tipo_camion;
                } 
            },
            { "title": "Acción", 'data': null,"className": "text-center", /*"width": "10%",*/
                render: function ( data, type, row ) {
                    var botones="";
                    
                    botones+= "<span>       </span>";
                    botones+="<a onclick=window.edit('"+data.idgenerado+"'); class='btn  btn-primary btn-rounded btn-xs text-white'></a>";
                    botones+="<a onclick=window.delete('"+data.idgenerado+"'); class='btn  btn-danger btn-rounded btn-xs text-white'></a>";
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
            var res=this.callservice("logprog.list",formData);
            if(res!=false){
                for (let i = 0; i < (res.datalist).length; i++) {
                    res.datalist[i].fecha_prog=(res.datalist[i].fecha_prog).split('/').reverse().join('/');
                }
                this.render(res.datalist);
            }
        }, 500);
    }

    this.add=function(){
        arr_campos=[];
        arr_campos.push({ campo: 'fecha_prog', mensaje: 'Ingrese Fecha Válida.',tipo:'fecha' });
        arr_campos.push({ campo: 'nu_transporte', mensaje: 'Ingrese Número de Transporte.',tipo:'cadena' });
        arr_campos.push({ campo: 'placa', mensaje: 'Ingrese Placa.',tipo:'cadena' });
        arr_campos.push({ campo: 'hora_despacho', mensaje: 'Ingrese Hora Despacho.',tipo:'cadena' });
        arr_campos.push({ campo: 'hora_termino', mensaje: 'Ingrese Hora Termino',tipo:'cadena' });
        arr_campos.push({ campo: 'tiempo_delivery', mensaje: 'Ingrese Tiempo Delivery.',tipo:'cadena' });
        arr_campos.push({ campo: 'jornada_laboral', mensaje: 'Ingrese Jornada Laboral.',tipo:'cadena' });
        arr_campos.push({ campo: 'paradas', mensaje: 'Ingrese Paradas (Número).',tipo:'numero' });
        arr_campos.push({ campo: 'clientes', mensaje: 'Ingrese Clientes (Número).',tipo:'numero' });
        arr_campos.push({ campo: 'distancia', mensaje: 'Ingresar Distancia. (Decimales).',tipo:'numero' });
        arr_campos.push({ campo: 'peso', mensaje: 'Ingresar Peso. (Decimales).',tipo:'numero' });
        arr_campos.push({ campo: 'volumen', mensaje: 'Ingresar Volumen. (Decimales).',tipo:'numero' });
        arr_campos.push({ campo: 'ventas', mensaje: 'Ingresar Ventas. (Decimales).',tipo:'numero' });
        arr_campos.push({ campo: 'flete_rsw', mensaje: 'Ingresar Flete Rsw. (Decimales).',tipo:'numero' });
        arr_campos.push({ campo: 'tipo_camion', mensaje: 'Ingrese Tipo de Camión.',tipo:'cadena' });

        
        continua_val_campos=this.validar_campos(arr_campos);
        if(continua_val_campos==false){
            return false;
        }


        /*
        _tiempounix = Date.parse(obtenerValor("fecha_prog"));
        _generado=(_tiempounix)+obtenerValor("placa");
        if( isNaN(_tiempounix)){
            swal("Actualice la página.","No se generó el código.","warning");
            return false;
        }
        */
       _generado=Date.now()+""+obtenerValor("placa");
        if(obtenerValor("idgenerado")==""){
            asignarValor("idgenerado",_generado);
        }

        for (let i = 0; i < (that.dataprog).length; i++) {
            console.log(that.dataprog[i])
            if(that.dataprog[i].idgenerado==_generado){
                swal("Ya existe registro.","Buscar por Fecha o Placa","warning");return;
            }
            
        }

        setTimeout(() => {
        
            async=false
            var formData = new FormData($("#_form")[0]);

            _fecha=obtenerValor("fecha_prog");
            var _fechasave = _fecha.split('/').reverse().join('/');
            //var _fechashow = _fechasave.split('/').reverse().join('/');
            formData.set("fecha_prog",_fechasave);

            var _res=callservice("logprog.insert",formData);
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
            if(_value.idgenerado==id){
                //var _fechashow=(_value.fecha_prog).split('/').reverse().join('/');
                //this.asignarValor("fecha_prog",_fechashow);
                this.asignarValor("fecha_prog",_value.fecha_prog);
                this.asignarValor("nu_transporte",_value.nu_transporte);
                this.asignarValor("placa",_value.placa);
                this.asignarValor("hora_despacho",_value.hora_despacho);
                this.asignarValor("hora_termino",_value.hora_termino);
                this.asignarValor("tiempo_delivery",_value.tiempo_delivery);
                this.asignarValor("jornada_laboral",_value.jornada_laboral);
                this.asignarValor("paradas",_value.paradas);
                this.asignarValor("clientes",_value.clientes);
                this.asignarValor("distancia",_value.distancia);
                this.asignarValor("peso",_value.peso);
                this.asignarValor("volumen",_value.volumen);
                this.asignarValor("ventas",_value.ventas);
                this.asignarValor("flete_rsw",_value.flete_rsw);
                this.asignarValor("violaciones",_value.violaciones);
                this.asignarValor("tipo_camion",_value.tipo_camion);
                this.asignarValor("localidades_despacho",_value.localidades_despacho);
            }
            
        }
        
        anidarHtml("btn_form","Editar");
    }

    this.delete=function(id){
        //$("#idgenerado").val(id);
        that.cancel();
        swal({
            title: 'Está seguro de eliminar?',
            text: 'Esta acción se cancelará en 3 segundos.',
            timer: 3000
        }).then(
            function (accion) {
                console.log(accion)
                if (accion === true) {
                    var formData = new FormData();
                    formData.append("idgenerado",id);
                    async=false;
                    var _res=callservice("logprog.delete",formData);
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
    }
    
    this.init=function(){
        that.postload();
        that.loaddata();
    }

}