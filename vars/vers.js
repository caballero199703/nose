var  nombre = "jahaziel"
var  email = "jahaziel.hernandez.jbh@gmail.com"
var  edad  =  21

function  getNombre ( )  {
    consola . log ( nombre ) ;
    var  myNameElement  =  documento . getElementById ( "nombre" ) ;
    myNameElement . innerHTML  =  nombre ;
}

function  getEmail ( )  {
    consola . log ( correo electrónico ) ;
    var  myEmailElement  =  documento . getElementById ( "correo electrónico" ) ;
    myEmailElement . innerHTML  =  '<b>'  +  correo electrónico  +  '</b>' ;
}

function  getEdad ( )  {
    consola . log ( edad ) ;
    var  myEdadElement  =  documento . getElementById ( "edad" ) ;
    myEdadElement . innerHTML  =  '<h3>'   +  edad  +  '</h3>' ;
    myEdadElement . estilo . color  =  "# 00000FF" ;
}
