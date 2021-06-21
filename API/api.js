function  getMyIpHttp ( )  {
    var  request  =  new  XMLHttpRequest ( ) ;
   
    solicitud . open ( 'OBTENER' ,  'https://api.ipify.org?format=json' ,  verdadero )
    solicitud . onload  =  function ( resp )  {
     consola . log ( resp ) ;
     consola . log ( resp . objetivo . respuesta ) ;
    }
   
    solicitud . enviar ( ) ;
   }
   
   function  getMyIpFetch ( )  {
    var  request  =  new  Request ( 'https://randomuser.me/api/?results=3' ,  { método : 'GET' ,  headers : new  Headers ( { 'Content-Type' : 'application / json' } ) } ) ;
   
    buscar ( solicitud )
    . entonces ( función ( respuesta )  {
         respuesta . json ( ) . entonces ( función ( respjson )  {
          consola . log ( respjson . resultados ) ;
         } ) ;
         } ) . catch ( err  =>  {
               consola . log ( err ) ;
     } ) ;
   }
   
   function  getMyIp ( )  {
    $ . getJSON ( "https://api.ipify.org?format=json" ,  función ( json ) {
     consola . log ( json ) ;
     $ ( '#resultado' ) . texto ( JSON . stringify ( json ) ) ;
     }
    ) ;
   }
   
   function  getMyData ( randomNumber )  {
    $ . getJSON ( "https://randomuser.me/api/?results="  +  randomNumber ,  function ( json ) {
      consola . log ( json ) ;
      $ ( '#resultado' ) . texto ( JSON . stringify ( json . resultados ) ) ; 
     }
    ) ;
   }
