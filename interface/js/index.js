  console.log("Desarrollado por Renzo Tarazona");
  console.log("@programandoelmono");
  console.log("12/03/2022");

  var that=this;    
  var async=true;
  var contentType=true;
  var processData=true;
  var listFields=new Array();

  var obj=new Array();
  obj=window.document;
  var formulario=new Array(obj.forms);

  if (typeof (window.customobjects) == "undefined") {
      window.customobjects = [];
  }

  function noenter(e) {
      tecla = (document.all) ? e.keyCode : e.which;
      return (tecla != 13);
  }

  function bloqueoElemento(id,status){
    document.getElementById(id).disabled= status;
  }

  function sololeerElemento(id,status){
    elemento_=document.getElementById(id).tagName;
    if(elemento_=='SELECT'){
      $("select[name="+id+"]").attr("readonly", status);
      //$("#"+id).select2("readonly", true);
    }else{
      document.getElementById(id).readOnly= status;
    }
  }

  function limpiarFormulario (formulario) {
    if (typeof(url_imagen)!='undefined'){
      obj.getElementById('imagepreview').src=url_imagen;
    }
    //this.asignarValor("idgenerado","");
    return obj.getElementById(formulario).reset();
  }

  function obtenerValor (elemento) {
    console.log(elemento)
      return obj.getElementById(elemento).value;
  }

  function asignarValor (elemento,valor) {
    
    if (valor==null)valor="";
      //return obj.getElementById(elemento).value=valor;
      if(typeof(obj.getElementById(elemento)) != 'undefined' || obj.getElementById(elemento) != null ){
        return obj.getElementById(elemento).value=valor;
      }
      return false;
  }

  function callservice(_method,_params){
      var response=[];
      var _host=window.location.host;
      $.ajax({
          type: "POST",
          //contentType: "application/json; charset=utf-8",
          //url: "http://"+_host+"/appcontrolflete/ws/index.php?method="+_method,
          //url: "http://localhost/appcoflete/ws/index.php?method="+_method,
          url: "http://localhost/appdatosflete/ws/index.php?method="+_method,
          data: _params,//JSON.stringify(parametros),//<PARÁMETROS>
          dataType: "json",
          async:async,
          contentType: false,
          processData: false,
          
          success: function (json){ //<RESPUESTA WEB SERVICE>
              console.log("callservice: ",json);
              
              if(Array.isArray(json.datalist)){
                response=json;
              }else{
                if(json.ok == "ok"){
                  response=json;
                  swal(json.mensaje,"","success");
                }else if(json.ok == "no"){
                  swal(json.mensaje,"","warning");
                }
              }
              
          },
          error: function (error){ //<ERROR WEB SERVICE>
              console.log(error);
              //swal("",error);
              swal("Server","Error de servicio.","error");
              response.ok='no';
          }
      });
      return response;     
      
  }

  function task (_task){

    switch (_task) {
      case 'prog':
        $("#content_init").load("interface/_contentform.php");
        $.getScript( "interface/js/prog.js" );
        setTimeout(() => {
          $("#form_content").load("interface/prog.php");
          anidarHtml("_task","Prog")
          myclass_prog.call(this);
          init();
        }, 500);
        break;

      case 'liqui':
        $("#content_init").load("interface/_contentform.php");
        $.getScript( "interface/js/liqui.js" );
        setTimeout(() => {
          $("#form_content").load("interface/liqui.php");
          anidarHtml("_task","Liqui")
          myclass_prog.call(this);
          init();
        }, 500);
        break;

      case 'pagofle':
        $("#content_init").load("interface/_contentform.php");
        $.getScript( "interface/js/pagofle.js" );
        setTimeout(() => {
          $("#form_content").load("interface/pagofle.php");
          anidarHtml("_task","PagoFle")
          myclass_prog.call(this);
          init();
        }, 500);
        break;

      case 'tiempokm':
        $("#content_init").load("interface/_contentform.php");
        $.getScript( "interface/js/tiempokm.js" );
        setTimeout(() => {
          $("#form_content").load("interface/tiempokm.php");
          anidarHtml("_task","TiempoKm")
          myclass_prog.call(this);
          init();
        }, 500);
        break;

      case 'noprog':
        $("#content_init").load("interface/_contentform.php");
        $.getScript( "interface/js/noprog.js" );
        setTimeout(() => {
          $("#form_content").load("interface/noprog.php");
          anidarHtml("_task","NoProg")
          myclass_prog.call(this);
          init();
        }, 500);
        break;

      case 'pfr':
        $("#content_init").load("interface/_contentform.php");
        $.getScript( "interface/js/pfr.js" );
        setTimeout(() => {
          $("#form_content").load("interface/pfr.php");
          anidarHtml("_task","Pfr")
          myclass_prog.call(this);
          init();
        }, 500);
        break;

      case 'drop':
        $("#content_init").load("interface/_contentform.php");
        $.getScript( "interface/js/drop.js" );
        setTimeout(() => {
          $("#form_content").load("interface/drop.php");
          anidarHtml("_task","Drop")
          myclass_prog.call(this);
          init();
        }, 500);
        break;

      case 'flete':
        $("#content_init").load("interface/_contentform.php");
        $.getScript( "interface/js/flete.js" );
        setTimeout(() => {
          $("#form_content").load("interface/flete.php");
          anidarHtml("_task","Flete")
          myclass_prog.call(this);
          init();
        }, 500);
        break;

      case 'ini':
        $("#content_init").load("interface/_dash.php");
        /*
        $.getScript( "interface/js/dash.js" );
        setTimeout(() => {
          myclass_report.call(this);
          init();
        }, 500);
        */
        break;
    
      default:

        //$("#content_init").load("interface/_dash.php");
        break;
    }
  }

  function valida_fecha(_fecha){
    //07/11/1991
    return true;
    /*
    const DATE_REGEX = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/
    const CURRENT_YEAR = new Date().getFullYear()
    // Comprobar formato dd/mm/yyyy, que el no sea mayor de 12 y los días mayores de 31         
        
    if (!_fecha.match(DATE_REGEX)) {
        return false
    }
    
    // Comprobar los días del mes 
    const day = parseInt(_fecha.split('/')[0])
    const month = parseInt(_fecha.split('/')[1])
    const year = parseInt(_fecha.split('/')[2])
    const monthDays = new Date(year, month, 0).getDate()
    if (day > monthDays) {
        return false
    }
    
    // Comprobar que el año no sea superior al actual
    if (year > CURRENT_YEAR) {
        return false
    }
    return true
    */
  }

  function validar_campos(campos){
    let continua_val_campos=true;
    let mensaje_val_campos="";
    for (let i = 0; i < campos.length; i++) {
        if(campos[i].tipo=='numero'){
            if(isNaN(Number(obtenerValor(campos[i].campo)))){
                asignarValor(campos[i].campo,"");
                mensaje_val_campos=campos[i].mensaje;
                continua_val_campos=false;
                break;
            }
            if( Number(obtenerValor(campos[i].campo))==0 ){
              if(campos[i].valecero=="no"){
                asignarValor(campos[i].campo,"");
                mensaje_val_campos=campos[i].mensaje;
                continua_val_campos=false;                        
                break;
              }
            }
        }

        if(campos[i].tipo=='cadena'){
            _campo=obtenerValor(campos[i].campo);
            _campo=(_campo).replace(" ","");
            if(_campo==""){
                mensaje_val_campos=campos[i].mensaje;
                continua_val_campos=false;                        
                break;
            }
        }

        if(campos[i].tipo=='fecha'){
            _campo=obtenerValor(campos[i].campo);
            _campo=(_campo).replace(" ","");
            
            if(this.valida_fecha(_campo)==false){
                mensaje_val_campos=campos[i].mensaje;
                continua_val_campos=false;                        
                break;
            }
        }

        if(campos[i].tipo=='json'){
            _campo=obtenerValor(campos[i].campo);
            json_valido=that.valida_json(_campo);
            if(json_valido==false){
                mensaje_val_campos=campos[i].mensaje;
                continua_val_campos=false;                        
                break;
            }
            if(json_valido==true && campos[i].contar=='si'){
                _jsonobtenido=JSON.parse(_campo);
                if(_jsonobtenido.length==0){
                    mensaje_val_campos=campos[i].mensaje;
                    continua_val_campos=false; 
                    break;
                }
            }
        }
        
    }
    if(mensaje_val_campos!=""){
        swal(mensaje_val_campos,"","warning");
    }
    return continua_val_campos;
  }

  function _onchange(metodo,formData){

    if(metodo!=null){
        async=false;
        data=that.callservice(metodo,formData);
        console.log("servicios: ",data);
        _resdata=data;
    }
    return _resdata;
  }

  


  //no usados
  function anidarHtml (elemento,html) {
    return obj.getElementById(elemento).innerHTML=html;
  }

  function obtenerdatosformulario(form) {
      let data = {};
      $(form).find('input, textarea, select').each(function(x, field) {
  
        //var fi = field.name.split(form.attr("id").replace( "_frm","")+"_")[1]; 
        var fi = field.name.split($(form).attr("id"))[0]; 
  
        //console.log (field.name,form.attr("id"),fi)   
        
        if (field.name) {
  
          if (field.name.indexOf('[]') > 0) {
            if (!$.isArray(data[fi])) {
              data[fi] = new Array();
            }
            for (let i = 0; i < field.selectedOptions.length; i++) {
              data[fi].push(field.selectedOptions[i].value);
            }
    
          } else {
            if ($(this).hasClass("chosen-select")){
                if ($(this).chosen().val()!=null)
                if ($(this).attr("multiple")!=null)
                  data[fi] = (","+$(this).chosen().val().join()+",");
                else  
                  data[fi] = $(this).chosen().val();  
            }else{  
                if($(this).attr("type")=="checkbox"){
                    data[fi] = ($(this).is(":checked")?1:0);
                }else{
                    data[fi] = field.value;
                    //console.log (field.name,field.value,fi,data[fi])
                }    
            } 
  
          }
        }
      });
      //console.log (data)
      return data
  }


  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
  };