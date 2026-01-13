let tabla = document.getElementById('tabla');

function crearCartas(cantidad) {
    
    for (let i = 0; i < cantidad; i++) {
     
       let carta = document.createElement('div');
       
       carta.className = 'ht' ;
       carta.id = `c${i}` ; 
//-----------------------------------------       


    if(cantidad === 16) {
  //nivel 1        
       tabla.style.gridTemplate = `repeat(${Math.sqrt(cantidad)},1fr) / repeat(${Math.sqrt(cantidad)},1fr)` ;
       
       } else if(cantidad === 24) {
           
  //nivel 2
  tabla.style.gridTemplate = `repeat(6,1fr) / repeat(4,1fr)` ;
 
  tabla.style.height = '120dvw' ;      
           
       } else if(cantidad > 25 && cantidad===30) {
  
  //nivel 3      
       tabla.style.gridTemplate = `repeat(5,1fr) / repeat(6,1fr)` ; 
        
       tabla.style.height = '370px' ;   
       
       
       } else if(cantidad === 50) {
  //nivel 4   
       tabla.style.gridTemplate = `repeat(10,1fr) / repeat(5,1fr)` ; 
        
       tabla.style.height = '80dvh' ;
           
       }
       
//-----------------------------------------       
       
       tabla.appendChild(carta);
        
        
    }
    
}

let niveles = [16,24,30,50];

function cuad(niv) {
  
  crearCartas(niveles[niv-1]);
  
 }
let tabl = localStorage.getItem('tabla') ;
 
cuad(Number(tabl));
