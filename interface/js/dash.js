var myclass_report=function(){

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
                "title": "Año",
                "data": null,
                "className": "text-left",
                render: function (data, type, row, meta) {
                    //return meta.row + meta.settings._iDisplayStart + 1;
                    return data.anio;
                }
            }, 
            { 
                "title": "Mes",
                "data": null, 
                "className": "text-left",
                render: function ( data, type, row ) {
                    return data.mes;
                } 
            },
            { 
                "title": "dia",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.dia;
                } 
            },
            { 
                "title": "Fecha Prog",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.fecha_prog;
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
                "title": "Distancia",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.distancia;
                } 
            },
            { 
                "title": "Distancia Real",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.distancia_real;
                } 
            },
            { 
                "title": "Desviación",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.desviacion;
                } 
            },
            { 
                "title": "Tiempo Programado",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.tiempo_programado;
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
                "title": "Clientes Programados",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.clientes_programados;
                } 
            },
            { 
                "title": "Clientes Rechazaron",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.clientes_rechazaron;
                } 
            },
            { 
                "title": "Productividad Camión",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.productividad_camion;
                } 
            },
            { 
                "title": "Soles Prog S/IGV",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.soles_prog_sigv;
                } 
            },
            { 
                "title": "Devoluciones S/IGV",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.devoluciones_sigv;
                } 
            },
            { 
                "title": "Soles Cob S/IGV",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.soles_cob_sigv;
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
                "title": "Efectividad Soles",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.efectividad_soles;
                } 
            },
            { 
                "title": "Efectividad Clientes",
                "data": null, 
                "className": "text-center",
                render: function ( data, type, row ) {
                    return data.efectividad_clientes;
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
        that.lista_report = $(that.controlname).DataTable(that.config);
    }

    this.render=function(data){
        that.datareport = data;
        that.lista_report.clear();
        that.lista_report.rows.add(that.datareport);
        that.lista_report.draw();
    }
    
    this.loaddata=function(){

        var formData = new FormData();
        setTimeout(() => {

            async=false;
            var res=this.callservice("logdash.report",formData);
            //console.log(res);
            if(res!=false){
                for (let i = 0; i < (res.datalist).length; i++) {
                    res.datalist[i].fecha_prog=(res.datalist[i].fecha_prog).split('/').reverse().join('/');
                    res.datalist[i].efectividad_soles=(Number(res.datalist[i].efectividad_soles)*100).toFixed(2)+"%";
                    res.datalist[i].efectividad_clientes=(Number(res.datalist[i].efectividad_clientes)*100).toFixed(2)+"%";
                }

                this.render(res.datalist);
            }
        }, 1000);
    }

    this.init=function(){
        that.postload();
        that.loaddata();

    }

    function fnExcelReport(tabla,nombreArchivo) {
        var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
        var textRange;
        var j = 0;
        let linkDescarga;//nuevo
        // Crear el link de descarga
        nombreArchivo = nombreArchivo ? nombreArchivo + '.xls' : 'Reporte.xls';//neuvo
        linkDescarga = document.createElement("a");//nuevo
        document.body.appendChild(linkDescarga);


        tab = document.getElementById(tabla); // id of table

        for (j = 0; j < tab.rows.length; j++) {
            tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
        }

        tab_text = tab_text + "</table>";
        tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //elimina links si tiene en la tabla
        tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // elimina imagenes si tiene en la tabla
        tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); //elimina inputs

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) //Internet Explorer
        {
            txtArea1.document.open("txt/html", "replace");
            txtArea1.document.write(tab_text);
            txtArea1.document.close();
            txtArea1.focus();
            sa = txtArea1.document.execCommand("SaveAs", true, "rrtg.xls");
        } else //otro browser que no sea IE 11
        //console.log(encodeURIComponent(tab_text));
            linkDescarga.href ='data:application/vnd.ms-Excel; charset=ISO-8859-1,' + encodeURIComponent(tab_text);

            // Setear el nombre de archivo
            linkDescarga.download = nombreArchivo;

            //Ejecutar la función
            linkDescarga.click();

    }

    $('#btn_exp').on('click',function(){

        fnExcelReport("tbl_content","Reporte_"+ Date.now());

    });

}