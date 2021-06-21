var  mytext ;
var  result ;
var  número = 10 ;

function  creap ( )  {
    var  textElement  =  documento . getElementById ( "mitexto" ) ;
    mytext  =  textElement . valor ;
    consola . log ( mytext ) ;
    resultado  =  "" ;
    para ( var  i = 0 ;  i < número ;  i ++ ) {
        resultado  + =  '<p>'  +  mytext  +  '</p>' ;
    }
    consola . log ( resultado ) ;
    documento . getElementById ( "parrafos" ) . innertHTML  =  resultado ;
}

función  crealist ( )  { 
    var  textElement  =  documento . getElementById ( "mitexto" ) ;
    mytext  =  textElement . valor ;
    consola . log ( mytext ) ;
    resultado  =  "<ol>" ;
    para ( var  i = 0 ;  i < número ;  i ++ ) {
        resultado  + =  '<li>'  +  mytext  +  '</li>' ;
    }
    resultado  + =  '</ol>' ;
    consola . log ( resultado ) ;
    documento . getElementById ( "listas" ) . innertHTML  =  resultado ;
}

function  creatable ( )  { 
    var  textElement  =  documento . getElementById ( "mitexto" ) ;
    mytext  =  textElement . valor ;
    consola . log ( mytext ) ;
    resultado  =  "<borde de la tabla = 1" ;
    resultado  + =  '<tr> <th> texto </th> </tr>' ;
    para ( var  i = 0 ;  i < número ;  i ++ ) {
        resultado  + =  '<tr>'  +  '<td>'  +  mytext  +  '</td>'  +  '</tr>' ;
    }
    resultado  + =  '</table>'
    consola . log ( resultado ) ;
    documento . getElementById ( "tabla" ) . innertHTML  =  resultado ;
}
