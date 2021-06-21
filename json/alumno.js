var  objAlumno  =  {
    matrícula : "" ,
    nombre : "" ,
    carrera : ""
} ;
   
   var  myAlumnoJson ;
   var  otherAlumno  =  { } ;
   
function  convertObjToJson ( )  {
    var  matriculaElement  =  documento . getElementById ( "matrícula" ) ;
    var  nombreElement  =  documento . getElementById ( "nombre" ) ;
    var  carreraElement  =  documento . getElementById ( "carrera" ) ;
   
    objAlumno . matricula  =  matriculaElement . valor ;
    objAlumno . nombre  =  nombreElement . valor ;
    objAlumno . carrera  =  carreraElement . valor ;
   
    consola . log ( objAlumno ) ;
    myAlumnoJson  =  JSON . stringify ( objAlumno ) ;
    consola . log ( myAlumnoJson ) ;
   
    var  jsonElement  =  documento . getElementById ( "myjson" ) ;
    jsonElement . innerHTML  =  myAlumnoJson ;
}
   
function  convertJsonToObj ( )  {
    var  jsonElement  =  documento . getElementById ( "myjson" ) ;
    var  otherAlumno  =  JSON . analizar ( jsonElement . innerHTML ) ;
   
    consola . log ( otherAlumno ) ;
    consola . registro (otro Alumno . matricula ) ;
    consola . log ( otherAlumno . nombre ) ;
    consola . log (otro Alumno . carrera ) ;
   
    documento . getElementById ( "nuevaMatricula" ) . innerHTML  =  otherAlumno . matrícula ;
    documento . getElementById ( "newNombre" ) . innerHTML  =  otherAlumno . nombre ;
    documento . getElementById ( "nuevaCarrera" ) . innerHTML  =  otherAlumno . carrera ;
}
