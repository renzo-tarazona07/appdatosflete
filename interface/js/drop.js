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
                    return data.id;
                }
            }, 
            { 
                "title": "Fecha",
                "data": null, 
                "className": "text-left",
                render: function ( data, type, row ) {
                    return data.fecha_drop;
                } 
            },
            { 
                "title": "# Clientes",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.clientes;
                } 
            },
            { 
                "title": "Soles S/IGV",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.soles_sigv;
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
            var res=this.callservice("logdrop.list",formData);
            if(res!=false){
                for (let i = 0; i < (res.datalist).length; i++) {
                    res.datalist[i].fecha_drop=(res.datalist[i].fecha_drop).split('/').reverse().join('/');
                }
                this.render(res.datalist);
            }
        }, 500);
    }

    this.add=function(){
        
        arr_campos=[];
        arr_campos.push({ campo: 'fecha_drop', mensaje: 'Ingrese Fecha Válida.',tipo:'fecha' });
        arr_campos.push({ campo: 'clientes', mensaje: 'Ingresar Clientes. (Número).',tipo:'numero' });
        arr_campos.push({ campo: 'soles_sigv', mensaje: 'Ingresar Soles Sin IGV. (Decimales).',tipo:'numero' });

        
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
            _fecha=obtenerValor("fecha_drop");
            var _fechasave = _fecha.split('/').reverse().join('/');
            formData.set("fecha_drop",_fechasave);

            var _res=callservice("logdrop.insert",formData);
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
                this.asignarValor("fecha_drop",_value.fecha_drop);
                this.asignarValor("clientes",_value.clientes);
                this.asignarValor("soles_sigv",_value.soles_sigv);
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
                    formData.append("id",id);
                    async=false;
                    var _res=callservice("logdrop.delete",formData);
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