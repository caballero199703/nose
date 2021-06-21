var  base ;
var  altura ;
var  area ;

 Área de función ( )  {
    var  baseElement  =  documento . getElementById ( "base" ) ;
    var  alturaElement  =  document . getElementById ( "altura" ) ;
    base  =  elemento base . valor ;
    altura  =  alturaElemento . valor ;
    consola . log ( base ) ;
    consola . log ( altura ) ;
    área  =  ( base  *  altura ) / 2 ;
    consola . log ( área ) ;
    var  areaElement  =  documento . getElementById ( "resultado" ) ;
    areaElement . innerHTML  =  'Área ='  +  área ;
}
