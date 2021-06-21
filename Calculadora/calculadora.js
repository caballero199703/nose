var  a
var  b
var  resultado

function  sumar ( )  {
    var  numero1  =  documento . getElementById ( "a" )
    var  numero2  =  documento . getElementById ( "b" )
    
    a  =   numero1 . valor ;
    b  =  numero2 . valor
    
    consola . registro ( a , b )
    resultado  =  parseInt ( a )  +  parseInt ( b )
    consola . log ( resultado )

    var  areaElement  =  documento . getElementById ( "resultado" ) ;
    areaElement . innerHTML  =  'Resultado ='  +  resultado
}

function  restar ( )  {
    var  numero1  =  documento . getElementById ( "a" )
    var  numero2  =  documento . getElementById ( "b" )
    
    a  =   numero1 . valor ;
    b  =  numero2 . valor
    
    consola . registro ( a , b )
    resultado  =  parseInt ( a )  -  parseInt ( b )
    consola . log ( resultado )

    var  areaElement  =  documento . getElementById ( "resultado" ) ;
    areaElement . innerHTML  =  'Resultado ='  +  resultado


}

función  multiplicar ( )  {
    var  numero1  =  documento . getElementById ( "a" )
    var  numero2  =  documento . getElementById ( "b" )
    
    a  =   numero1 . valor ;
    b  =  numero2 . valor
    
    consola . registro ( a , b )
    resultado  =  a  *  b
    consola . log ( resultado )

    var  areaElement  =  documento . getElementById ( "resultado" ) ;
    areaElement . innerHTML  =  'Resultado ='  +  resultado


}

function  dividir ( )  {
    var  numero1  =  documento . getElementById ( "a" )
    var  numero2  =  documento . getElementById ( "b" )
    
    a  =   numero1 . valor ;
    b  =  numero2 . valor
    
    consola . registro ( a , b )
    resultado  =  a  /  b
    consola . log ( resultado )

    var  areaElement  =  documento . getElementById ( "resultado" ) ;
    areaElement . innerHTML  =  'Resultado ='  +  resultado
}

function  elevar ( )  {
    var  numero1  =  documento . getElementById ( "a" )

    a  =   numero1 . valor ;
    
    consola . registro ( a )
    resultado  =  Matemáticas . pow ( a , 2 )
    consola . log ( resultado )

    var  areaElement  =  documento . getElementById ( "resultado" ) ;
    areaElement . innerHTML  =  'Resultado ='  +  resultado
}

function  raiz ( )  {
    var  numero1  =  documento . getElementById ( "a" )

    a  =   numero1 . valor ;
    
    consola . registro ( a )
    resultado  =  Matemáticas . sqrt ( a )
    consola . log ( resultado )

    var  areaElement  =  documento . getElementById ( "resultado" ) ;
    areaElement . innerHTML  =  'Resultado ='  +  resultado
}

function  elevarNumero ( )  {
    var  numero1  =  documento . getElementById ( "a" )
    var  numero2  =  documento . getElementById ( "b" )

    a  =  numero1 . valor
    b  =  numero2 . valor
    
    consola . registro ( a , b )
    resultado  =  Matemáticas . pow ( a , b )
    consola . log ( resultado )

    var  areaElement  =  documento . getElementById ( "resultado" ) ;
    areaElement . innerHTML  =  'Resultado ='  +  resultado
}
