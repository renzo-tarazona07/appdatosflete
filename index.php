<?php
  /*
  session_start();
  if( is_null($_SESSION['login']) || $_SESSION['login']=='' ){
      $_SESSION['login']=md5('programandoelmono_appcontrolflete');
      print_r($_SESSION['login']);
      sleep(1);
  }
  */
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
    <link href="https://bootswatch.com/5/superhero/bootstrap.min.css" rel="stylesheet">
    <link href="https://bootswatch.com/5/superhero/_variables.scss" rel="stylesheet">
    <link href="https://bootswatch.com/5/superhero/_bootswatch.scss" rel="stylesheet">
    <link href="https://bootswatch.com/5/superhero/bootstrap.css" rel="stylesheet">
  
    <title>App</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="javascript:task('ini');">Inicio
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:task('prog');">Prog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:task('liqui');">Liqui</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:task('pagofle');">Pago Fle</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:task('tiempokm');">Tiempo KM</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:task('noprog');">No Prog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:task('pfr');">Pfr</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:task('drop');">Drop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:task('flete');">Flete</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container">
      <div class="d-flex align-items-center p-3 my-3 text-white bg-secondary rounded shadow-sm">
        <img class="me-3" src="src/icon.png" alt="" width="48" height="38">
        <div class="lh-1">
          <h1 class="h6 mb-0 text-white lh-1">Control Flete</h1>
          <small>2022</small>
        </div>
      </div>

      <div id="content_init"></div>

      <div id="content_formtable"></div>
    </main>






    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <script src="interface/js/index.js"></script>



    <script>
      $(document).ready(function(){
        //$("#content_formtable").hide();
        $("#content_init").load("interface/_dash.php");
      })   
    </script>
    
  </body>
</html>