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
                    return data.idnoprog;
                }
            }, 
            { 
                "title": "Fecha",
                "data": null, 
                "className": "text-left",
                render: function ( data, type, row ) {
                    return data.fecha_noprog;
                } 
            },
            { 
                "title": "# Placas",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.placa;
                } 
            },
            { 
                "title": "Unidades No Programadas",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.unidades_noprog;
                } 
            },
            { 
                "title": "Falso Flete S/IGV",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.falso_flete;
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
            { "title": "Acción", 'data': null,"className": "text-center", /*"width": "10%",*/
                render: function ( data, type, row ) {
                    var botones="";
                    
                    botones+= "<span>       </span>";
                    botones+="<a onclick=window.edit('"+data.idnoprog+"'); class='btn  btn-primary btn-rounded btn-xs text-white'></a>";
                    botones+="<a onclick=window.delete('"+data.idnoprog+"'); class='btn  btn-danger btn-rounded btn-xs text-white'></a>";
                    //'<a onclick="javascript:edit('+data.idnoprog+')" class="btn  btn-success btn-rounded btn-xs text-white"></a>';                    
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
            var res=this.callservice("lognoprog.list",formData);
            if(res!=false){
                for (let i = 0; i < (res.datalist).length; i++) {
                    res.datalist[i].fecha_noprog=(res.datalist[i].fecha_noprog).split('/').reverse().join('/');
                }
                this.render(res.datalist);
            }
        }, 500);
    }

    this.add=function(){
        
        arr_campos=[];
        arr_campos.push({ campo: 'fecha_noprog', mensaje: 'Ingrese Fecha Válida.',tipo:'fecha' });

        
        continua_val_campos=this.validar_campos(arr_campos);
        if(continua_val_campos==false){
            return false;
        }
        
        /*
        _tiempounix = Date.parse(obtenerValor("fecha_noprog"));
        _generado=_tiempounix+obtenerValor("placa");
        */
        _generado=Date.now();
        if(obtenerValor("idnoprog")==""){
            asignarValor("idnoprog",_generado);
        }
        

        /*
        for (let i = 0; i < (that.dataprog).length; i++) {
            console.log(that.dataprog[i])
            if(that.dataprog[i].idnoprog==_generado){
                swal("Ya existe registro.","Buscar por Fecha o Placa","warning");return;
            }
        }
        */

        setTimeout(() => {
        
            async=false
            var formData = new FormData($("#_form")[0]);
            _fecha=obtenerValor("fecha_noprog");
            var _fechasave = _fecha.split('/').reverse().join('/');
            formData.set("fecha_noprog",_fechasave);

            var _res=callservice("lognoprog.insert",formData);
            console.log(_res);
            if(_res.ok="ok"){
                limpiarFormulario("_form");
                asignarValor("idgenerado","");
                asignarValor("idnoprog","");
                that.loaddata();
                anidarHtml("btn_form","Guardar");
                bloqueoElemento("btn_form",false);
            }

        }, 500);
        
    }

    this.edit=function(id){
        bloqueoElemento("btn_form",false);
        limpiarFormulario("_form");
        asignarValor("idgenerado","");
        this.asignarValor("idnoprog",id);
        
        for (let i = 0; i < (that.dataprog).length; i++) {
            //console.log(that.dataprog[i]);
            _value=that.dataprog[i];
            if(_value.idnoprog==id){
                this.asignarValor("fecha_noprog",_value.fecha_noprog);
                this.asignarValor("placa",_value.placa);
                this.asignarValor("unidades_noprog",_value.unidades_noprog);
                this.asignarValor("falso_flete",_value.falso_flete);
                this.asignarValor("dia_despacho",_value.dia_despacho);
            }
            
        }
        
        anidarHtml("btn_form","Editar");
    }

    this.delete=function(id){
        //$("#idnoprog").val(id);
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
                    formData.append("idnoprog",id);
                    async=false;
                    var _res=callservice("lognoprog.delete",formData);
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
        asignarValor("idnoprog","");
        anidarHtml("btn_form","Guardar");
    }
    
    this.init=function(){
        that.postload();
        that.loaddata();
    }

}