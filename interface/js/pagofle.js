var myclass_prog=function(){

    var that=this;
    var dias=['NN','LUNES','MARTES','MIÉRCOLES','JUEVES','VIERNES','SÁBADO','DOMINGO'];
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
                "title": "Placa",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.placa;
                } 
            },
            { 
                "title": "Tipo Unidad",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.tipo_unidad;
                } 
            },
            { 
                "title": "Temperatura",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.temperatura;
                } 
            },
            { 
                "title": "Flete S/IGV",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.flete_sigv;
                } 
            },
            { 
                "title": "Flete C/IGV",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.flete_cigv;
                } 
            },
            { 
                "title": "Día Despacho",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.dia_despacho;
                } 
            },
            { 
                "title": "Obs",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.obs;
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
            var res=this.callservice("logpagofle.list",formData);
            //console.log(res);
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
        arr_campos.push({ campo: 'placa', mensaje: 'Consulte ID Generado.',tipo:'cadena' });

        arr_campos.push({ campo: 'temperatura', mensaje: 'Ingrese Temperatura.',tipo:'numero' });
        arr_campos.push({ campo: 'flete_sigv', mensaje: 'Ingrese Flete Sin  IGV.',tipo:'numero' });
        arr_campos.push({ campo: 'flete_cigv', mensaje: 'Ingrese Flete Con IGV.',tipo:'numero' });
        arr_campos.push({ campo: 'dia_despacho', mensaje: 'Ingrese Día Despacho.',tipo:'cadena' });
   
        
        continua_val_campos=this.validar_campos(arr_campos);
        if(continua_val_campos==false){
            return false;
        }

        setTimeout(() => {
        
            async=false
            var formData = new FormData($("#_form")[0]);
            _fecha=obtenerValor("fecha_liqui");
            var _fechasave = _fecha.split('/').reverse().join('/');
            //var _fechashow = _fechasave.split('/').reverse().join('/');
            formData.set("fecha_liqui",_fechasave);

            var _res=callservice("logpagofle.insert",formData);
            //console.log(_res);
            if(_res.ok="ok"){
                limpiarFormulario("_form");
                asignarValor("idgenerado","");
                that.loaddata();
                anidarHtml("btn_form","Guardar");
                sololeerElemento("idprog",false);
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
                this.asignarValor("placa",_value.placa);

                this.asignarValor("tipo_unidad",_value.tipo_unidad); //select

                this.asignarValor("temperatura",_value.temperatura);
                this.asignarValor("flete_sigv",_value.flete_sigv);
                this.asignarValor("flete_cigv",_value.flete_cigv);
                this.asignarValor("dia_despacho",_value.dia_despacho);
                this.asignarValor("obs",_value.obs);
            }
            
        }
        
        anidarHtml("btn_form","Editar");
    }

    this.delete=function(id){
        //$("#idgenerado").val(id);
        that.cancel();
        //console.log("dele");
        swal({
            title: 'Está seguro de eliminar?',
            text: 'Esta acción se cancelará en 3 segundos.',
            timer: 3000
        }).then(
            function (accion) {
                //console.log(accion)
                if (accion === true) {
                    var formData = new FormData();
                    formData.append("idprog",id);
                    async=false;
                    var _res=callservice("logpagofle.delete",formData);
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

        //console.log(_lres)
        for (let i = 0; i < _lres.datalist.length; i++) {
            fecha=_lres.datalist[i].fecha_prog;

            _lres.datalist[i].fecha_prog=(_lres.datalist[i].fecha_prog).split('/').reverse().join('/');
            asignarValor("fecha_liqui",_lres.datalist[i].fecha_prog);
            asignarValor("placa",_lres.datalist[i].placa);
            asignarValor("idgenerado",obj.value);
            sololeerElemento("idprog",true);
            _fecha=new Date(fecha);
            //console.log(_fecha.getDay());
            asignarValor("dia_despacho",dias[_fecha.getDay()]);

            setTimeout(() => {
                var formData = new FormData();
                formData.append("param",_lres.datalist[i].placa);
                _llres=_onchange("logflete.getbyplaca",formData);
                //console.log(_llres)
                //console.log(_llres.datalist.length)
                if( (_llres.datalist).length > 0 ){
                    asignarValor("flete_sigv",Number(_llres.datalist[0].flete).toFixed(2));
                    asignarValor("flete_cigv",(Number(_llres.datalist[0].flete)*1.18).toFixed(2));
                }else{
                    swal("Registrar Placa en Formulario 'Flete'.","","warning");
                    that.cancel();
                }
            }, 500);

            return;
        }

        asignarValor("fecha_liqui","");
        asignarValor("placa","");
        sololeerElemento("idprog",false);
    }
    

    this.init=function(){
        that.postload();
        that.loaddata();

        setTimeout(() => {
            sololeerElemento("fecha_liqui",true);
            sololeerElemento("placa",true);
        }, 1000);
    }

}