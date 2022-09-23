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
                    return meta.row + meta.settings._iDisplayStart + 1;
                    //return data.id;
                }
            }, 
            { 
                "title": "Placa",
                "data": null, 
                "className": "text-left",
                render: function ( data, type, row ) {
                    return data.placa;
                } 
            },
            { 
                "title": "Ruta",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.ruta;
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
                "title": "Socio Estratégico",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.socio_estrategico;
                } 
            },   
            { 
                "title": "Flete",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.flete;
                } 
            },          
            { 
                "title": "Falso Flete",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.falso_flete;
                } 
            },          
            { "title": "Acción", 'data': null,"className": "text-center", /*"width": "10%",*/
                render: function ( data, type, row ) {
                    var botones="";
                    
                    botones+= "<span>       </span>";
                    botones+="<a onclick=window.edit('"+data.id+"'); class='btn  btn-primary btn-rounded btn-xs text-white'></a>";
                    botones+="<a onclick=window.delete('"+data.id+"'); class='btn  btn-danger btn-rounded btn-xs text-white'></a>";
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
            var res=this.callservice("logflete.list",formData);
            if(res!=false){
                this.render(res.datalist);
            }
        }, 500);
    }

    this.add=function(){
        
        arr_campos=[];
        arr_campos.push({ campo: 'placa', mensaje: 'Ingresar Placa.',tipo:'cadena' });
        arr_campos.push({ campo: 'ruta', mensaje: 'Ingrese Ruta.',tipo:'cadena' });
        arr_campos.push({ campo: 'conductor', mensaje: 'Ingrese Conductor.',tipo:'cadena' });

        arr_campos.push({ campo: 'socio_estrategico', mensaje: 'Ingresar Socio Estratégico.',tipo:'cadena' });
        arr_campos.push({ campo: 'flete', mensaje: 'Ingresar Flete. (Decimales).',tipo:'numero' });
        arr_campos.push({ campo: 'falso_flete', mensaje: 'Ingresar Falso Flete. (Decimales).',tipo:'numero' });

        
        continua_val_campos=this.validar_campos(arr_campos);
        if(continua_val_campos==false){
            return false;
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

            var _res=callservice("logflete.insert",formData);
            console.log(_res);
            if(_res.ok="ok"){
                limpiarFormulario("_form");
                asignarValor("id","");
                that.loaddata();
                anidarHtml("btn_form","Guardar");
                bloqueoElemento("btn_form",false);
            }

        }, 500);
        
    }

    this.edit=function(id){
        bloqueoElemento("btn_form",false);
        limpiarFormulario("_form");
        this.asignarValor("id",id);
        
        for (let i = 0; i < (that.dataprog).length; i++) {
            //console.log(that.dataprog[i]);
            _value=that.dataprog[i];
            if(_value.id==id){
                this.asignarValor("placa",_value.placa);
                this.asignarValor("ruta",_value.ruta);
                this.asignarValor("conductor",_value.conductor);
                this.asignarValor("socio_estrategico",_value.socio_estrategico);
                this.asignarValor("flete",_value.flete);
                this.asignarValor("falso_flete",_value.falso_flete);
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
                    formData.append("id",id);
                    async=false;
                    var _res=callservice("logflete.delete",formData);
                    if(_res.ok="ok"){
                        limpiarFormulario("_form");
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
        asignarValor("id","");
        anidarHtml("btn_form","Guardar");
    }
    
    this.init=function(){
        that.postload();
        that.loaddata();
    }

}