
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js"></script>

    <div id="_task"></div>
     
    <div class="row">
        <div class="col-md-6">
            <canvas id="myChart" width="400" height="200" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>            
        </div>
        <div class="col-md-6">
            <canvas id="myChart_2" width="400" height="200" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>           
        </div>
    </div>

    <div class="my-3 p-3 bg-dark rounded shadow-sm text-white">
        <legend class="border-bottom pb-2 mb-0">Consolidado <button id="btn_exp" class="btn btn-primary">Exportar</button> </legend>
        <div class="d-flex text-muted pt-3">
        <div class="table table-responsive">
            <table id="tbl_content" class="table table-striped table-hover nowrap"></table>
        </div>
        </div>
    </div>


    
    
<script>

    var etiquetas_1 ="";
    var etiquetas_2 ="";
    var datosVentas ="";
    var datosVentas_2 ="";
    var _host=window.location.host;

    formData=new FormData();
    formData.set("anio","2022");
    formData.set("mes","03");

    var init = {
            // el método de envío de la información será POST
            method: "POST",
            body: formData // convertimos el objeto a texto
        };

    (async () => {
        // Llamar a nuestra API. Puedes usar cualquier librería para la llamada, yo uso fetch, que viene nativamente en JS
        //const respuestaRaw = await fetch("http://"+_host+"/appcoflete/ws/index.php?method=logliqui.listbymesanio");//,init);
        const respuestaRaw = await fetch("http://"+_host+"/appdatosflete/ws/index.php?method=logliqui.listbymesanio");//,init);
        // Decodificar como JSON
        const respuesta = await respuestaRaw.json();
        console.log(respuesta);
        
        etiquetas_1 = respuesta.etiquetas_1; 
        etiquetas_2 = respuesta.etiquetas_2; 

        datosVentas = {
            label: "Efectividad Reparto en Soles.",
            // Pasar los datos igualmente desde PHP
            data: respuesta.datos_1, 
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
            borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
            borderWidth: 1, // Ancho del borde
        };

        datosVentas_2 = {
            label: "Efectividad Reparto en Clientes.",
            // Pasar los datos igualmente desde PHP
            data: respuesta.datos_2, // <- Aquí estamos pasando el valor traído usando AJAX
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
            borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
            borderWidth: 1, // Ancho del borde
        };

        
    })();

    setTimeout(() => {

        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: etiquetas_1,
                datasets: [datosVentas]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const ctx_2 = document.getElementById('myChart_2').getContext('2d');
        const myChart_2 = new Chart(ctx_2, {
            type: 'line',
            data: {
                labels: etiquetas_2,
                datasets: [datosVentas_2]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, 1000);

    $.getScript( "interface/js/dash.js" );
    setTimeout(() => {
        myclass_report.call(this);
        init();
    }, 500);



</script>

