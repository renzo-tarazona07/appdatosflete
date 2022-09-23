
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js"></script>


<canvas id="myChart" width="400" height="200"></canvas>
<script>
    
    setTimeout(() => {


        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });


    }, 2000);




    /////////////////////////////////////////////////////////////




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

    $('#btn_reporte').on('click',function(){

        let cab=window.customobjects['padrones'].cabecera;
        let det=window.customobjects['detalle'].detalle;

        if(cab.length>0){
            window.customobjects["reporte"].render(cab);
            setTimeout(() => {
                window.customobjects["reportedetalle"].render(det);
            }, 500);

            fnExcelReport("tbl_reporte","Reporte_deudas_"+cab[0].no_padron);

            setTimeout(() => {
                fnExcelReport("tbl_reportedetalle","Detalle_deudas_"+cab[0].no_padron);
            }, 1000);
        }else{
            alert("No se encontraron datos para exportar.");
        }

    });



        
</script>

