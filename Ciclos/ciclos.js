var  numero ;
var  result ;

function  ciclofor ( )  {
 var  numberElement  =  documento . getElementById ( "n" ) ;
 número  =  númeroElemento . valor ;
 consola . log ( número ) ;
 resultado  =  1 ;
 para ( var  i = 1 ;  i < número ;  i ++ ) {
  resultado  + =  i ;
 }
 consola . log ( resultado ) ;
 documento . getElementById ( "ciclo para" ) . innerHTML  =  resultado ;
}

función  ciclowhile ( )  {
 var  numberElement  =  documento . getElementById ( "n" ) ;
 número  =  númeroElemento . valor ;
 consola . log ( número ) ;
 resultado  =  0 ;
 var  i  =  1 ;
 while ( i < número ) {
  consola . log ( i ) ;
  resultado  + =  i ;
  i ++ ;
 }
 consola . log ( resultado ) ;
 documento . getElementById ( "ciclo mientras" ) . innerHTML  =  resultado ;
}

función  ciclodowhile ( )  {
 var  numberElement  =  documento . getElementById ( "n" ) ;
 número  =  númeroElemento . valor ;
 consola . log ( número ) ;
 resultado  =  0 ;
 var  i  =  1 ;
 var  avg ;
 hacer  {
  consola . log ( i ) ;
  resultado  + =  i ;
  i ++ ;
 }  while ( i < número ) ;
 avg  =  resultado  /  número ;
 consola . log ( promedio ) ;
 documento . getElementById ( "ciclo do while" ) . innerHTML  =  avg ;
}
