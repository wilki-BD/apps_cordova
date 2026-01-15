/*  TAREAS:
      
  🔵1). hay que poner una pagina de inicio.
  
  🔵2). hay que poner un interruptor para selecionar la cuadricula. localstorage
  
  🔴3). hay que crear una accion que se ejecute cada que acerten, como de celebracion.
  
  🔴4). hay que poner un menu que salga de la parte izquierda.
  
  🔵5). hay que anuciar quien gana la final con un div.
  
  🔵6). hacer una pagina de info.
  
    

*/




//-----------------------------------------
let ht = document.getElementsByClassName('ht');
let indicadorDePunU1 = document.getElementById('puntosU1') ;
let indicadorDePunU2 = document.getElementById('puntosU2') ;
let cp1 = document.getElementById('conP1');
let cp2 = document.getElementById('conP2');
let tu = document.getElementById('tu');


//---



       

//-----------------


let sim_1 = [
'simbolo-1.png','simbolo-2.png','simbolo-3.png','simbolo-4.png',
'simbolo-5.png','simbolo-6.png','simbolo-7.png','simbolo-8.png',
'simbolo-1.png','simbolo-2.png','simbolo-3.png','simbolo-4.png',
'simbolo-5.png','simbolo-6.png','simbolo-7.png','simbolo-8.png'];

let sim_2 = [
'simbolo-1.png','simbolo-2.png','simbolo-3.png','simbolo-4.png',
'simbolo-5.png','simbolo-6.png','simbolo-7.png','simbolo-8.png',
'simbolo-9.png','simbolo-10.png','simbolo-11.png','simbolo-12.png',
'simbolo-1.png','simbolo-2.png','simbolo-3.png','simbolo-4.png',
'simbolo-5.png','simbolo-6.png','simbolo-7.png','simbolo-8.png',
'simbolo-9.png','simbolo-10.png','simbolo-11.png','simbolo-12.png'];

let sim_3 = [
'simbolo-1.png','simbolo-2.png','simbolo-3.png','simbolo-4.png',
'simbolo-5.png','simbolo-6.png','simbolo-7.png','simbolo-8.png',
'simbolo-9.png','simbolo-10.png','simbolo-11.png','simbolo-12.png',
'simbolo-13.png','simbolo-14.png','simbolo-15.png',
'simbolo-1.png','simbolo-2.png','simbolo-3.png','simbolo-4.png',
'simbolo-5.png','simbolo-6.png','simbolo-7.png','simbolo-8.png',
'simbolo-9.png','simbolo-10.png','simbolo-11.png','simbolo-12.png',
'simbolo-13.png','simbolo-14.png','simbolo-15.png'];


let sim_4 = [
'simbolo-1.png','simbolo-2.png','simbolo-3.png','simbolo-4.png',
'simbolo-5.png','simbolo-6.png','simbolo-7.png','simbolo-8.png',
'simbolo-9.png','simbolo-10.png','simbolo-11.png','simbolo-12.png',
'simbolo-13.png','simbolo-14.png','simbolo-15.png','simbolo-16.png',
'simbolo-17.png','simbolo-18.png','simbolo-19.png','simbolo-20.png',
'simbolo-21.png','simbolo-22.png','simbolo-23.png','simbolo-24.png',
'simbolo-25.png',
'simbolo-1.png','simbolo-2.png','simbolo-3.png','simbolo-4.png',
'simbolo-5.png','simbolo-6.png','simbolo-7.png','simbolo-8.png',
'simbolo-9.png','simbolo-10.png','simbolo-11.png','simbolo-12.png',
'simbolo-13.png','simbolo-14.png','simbolo-15.png','simbolo-16.png',
'simbolo-17.png','simbolo-18.png','simbolo-19.png','simbolo-20.png',
'simbolo-21.png','simbolo-22.png','simbolo-23.png','simbolo-24.png',
'simbolo-25.png'];


let mapa = [];
let volteada;
let estaVol = false;
let turno = 1;
let puntosU1 = 0;
let puntosU2 = 0;
let limite = ht.length/2 ;
let ganados = 0;
let indiceTic = 0;
let indiceAcer = 0;

let tablr = Number(localStorage.getItem('tabla'));
let cu = tablr;


//---------------------------------------
//cargando imagenes (div de espera), trabaja en conjunto con la linea 124 y 127.

let divEspera = document.createElement('div');


divEspera.id = 'divespera';
divEspera.innerHTML = '<h2>Cargando...</h2>' ;
document.body.appendChild(divEspera);
setTimeout(() => {
    
    document.body.removeChild(divEspera);
    
},2000);

//---------------------------------------

    

for (let i = 0 ; i < ht.length ; i++ ) {
   
   
   
//agregar IMAGEN a cada carta
 if(cu===1) {
     
 
 
      let nr = Math.floor(Math.random() * sim_1.length);
  
      mapa.push(sim_1.splice(nr,1)[0]);
    
        
  } else if(cu===2) {
     
      let nr = Math.floor(Math.random() * sim_2.length);
  
      mapa.push(sim_2.splice(nr,1)[0]);
  
  } else if(cu===3) {
      
      let nr = Math.floor(Math.random() * sim_3.length);
  
      mapa.push(sim_3.splice(nr,1)[0]);
  
  } else if(cu===4) {
      
      
      let nr = Math.floor(Math.random() * sim_4.length);
  
      mapa.push(sim_4.splice(nr,1)[0]);
  
  }
    
  //esto carga las imagenes mierntras se espera para empezar el juego.
 ht[i].style.backgroundImage = ` url('./imagenes/cuad${cu}/${mapa[i]}')`;
 
 // y esto las elimina a tiempo que no sean reveladas antes de que se quite el div de espera.
 setTimeout(() => {
      
        ht[i].style.backgroundImage = null; 
       
      },1800); 
      
//voltear

//------sonido de click
   
   ht[i].addEventListener('touchstart', () => {
     let tic = [
     new Audio('../sonidos/tic.m4a'),
     new Audio('../sonidos/tic.m4a'),
     new Audio('../sonidos/tic.m4a'),
     new Audio('../sonidos/tic.m4a'),];
     
     
     tic[indiceTic].play();
     indiceTic = (indiceTic + 1) % tic.length;
             
//-------------      
       
       ht[i].style.transform = 'rotateY(180deg)';
       ht[i].style.boxShadow = '-3px 3px 6px black';
     
   
   //a la mitad de la vuelta poner img  
      setTimeout(() => {
      
       ht[i].style.backgroundImage = ` url('./imagenes/cuad${cu}/${mapa[i]}')`; 
       
       },500);
       
      if(!estaVol) {
      
      estaVol = true;
      volteada = i;
      
   
   } else {
       
       //comparamos
       
       if(mapa[volteada] === mapa[i] && volteada !== i) {

//aqui lo que pasa si acertas
     ganados++;
     tabla.style.border = 'solid 5px #ff5e00';
     ht[volteada].style.boxShadow = '0px 0px 9px #ff5e00 ';
     ht[i].style.boxShadow = '0px 0px 9px #ff5e00 ';
     
     
     let acertadoAu = [
     new Audio('../sonidos/acertado.m4a'),
     new Audio('../sonidos/acertado.m4a'),
     new Audio('../sonidos/acertado.m4a'),
     new Audio('../sonidos/acertado.m4a'),];

     acertadoAu[indiceAcer].play();
     indiceAcer = (indiceAcer + 1) % acertadoAu.length;
     
     
     
     setTimeout(() => {
         
        tabla.style.border = 'solid 5px grey'; 
         
     },1000);

         if(turno === 1) {
             
           puntosU1++;
           cp1.style.background = '#00ff57';
           setTimeout(() => {
               
                cp1.style.background = 'grey';
               
           },1000);
           indicadorDePunU1.innerHTML= puntosU1 ;
           tu.innerHTML = turno;
           
          } else {
            
           puntosU2++;
           cp2.style.background = '#00ff57';
           setTimeout(() => {
               
                cp2.style.background = 'grey';
               
           },1000);
           
           indicadorDePunU2.innerHTML= puntosU2 ; 
           tu.innerHTML = turno; 
              
          }
           
       } else  {
           
//aqui lo que pasa si no acertas
       if(turno === 1) {
         
         setTimeout(() => {  
           turno = 2;
           tu.innerHTML = turno;
           document.getElementById('contu').style.background = '#ff4040';
          },2000);
           
       } else {
       setTimeout(() => {
           turno = 1;
           tu.innerHTML = turno;
           document.getElementById('contu').style.background = '#2b6dff';
           },2000);
       }


let tapon = document.createElement('div');
tapon.id = 'tapon' ;
document.body.appendChild(tapon);
       
volteadaCapturada = volteada;      
 
     
       
       setTimeout(() => {
       
            ht[volteadaCapturada].style.transform = 'rotateY(0deg)';
       
        ht[volteadaCapturada].style.boxShadow = '3px 3px 6px black';
       
        ht[i].style.transform = 'rotateY(0deg)';
        setTimeout( () => {
       ht[i].style.backgroundImage = null;
       
       
       ht[volteadaCapturada].style.backgroundImage = null;
       document.body.removeChild(tapon);
       },500);
      
      ht[i].style.boxShadow = '3px 3px 6px black';
      
       
      },2000);
           
       }


//reiniciamos
       
       estaVol = false;
       volteada = null;
       
       
   }
   



   
//cuando se acaba
     
if(ganados===limite) {
     
     
     let ganador;
     
     if(puntosU1!==puntosU2) {
         
     
     if(puntosU1>puntosU2) {
       
       ganador = '1';
     
     } else {
         ganador = '2';
     }
     
     
     
     
     setTimeout( () => {
     
         let div = document.createElement('div');
         
         div.id = 'conanun';
         div.innerHTML = `<div><h2>Termino!🔥</h2><p>Gana el jugador:</p> <div id="gj">${ganador}</div><div id="reini">Reiniciar</div><div id="salir">Salir</div></div>`;
         document.body.appendChild(div);
         
         
      let rei = document.getElementById('reini');
      let sal = document.getElementById('salir');
      
      sal.onclick = () => {
          
          location.href = '../index.html' ;
          
      };
      
      rei.onclick = () => {
          
       location.reload();
          
      };
      
         
         
     },600);    
         
         
         
         
      } else {
               
         let div = document.createElement('div');
         
         div.id = 'conanun';
         div.innerHTML = `<div><h2>Termino!🔥</h2><p>Hubo un:</p> <div id="gj">Empate!</div><div id="reini">Reiniciar</div><div id="salir">Salir</div></div>`;
         document.body.appendChild(div);
         
         
      let rei = document.getElementById('reini');
      let sal = document.getElementById('salir');
      
      sal.onclick = () => {
          
          location.href = '../index.html' ;
          
      };
      
      rei.onclick = () => {
          
     location.reload();
          
      };
         
      }
        
         
     }   
 
       
       
   });
   
  
   
   
   
    
}





