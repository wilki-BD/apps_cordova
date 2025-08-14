let botones = document.getElementsByClassName('b');
let botones_s = document.getElementsByClassName('b_b_s');

let dentrada = document.getElementById('d');


for (let i = 0; i <= botones.length-1; i++) {
    
    
    
   
   botones[i].addEventListener('touchstart', () => {
   
   
   
   
      
       
    if (i!=12 && i!= 14 ) {
        
    
    dentrada.value += botones[i].innerText;
    
   } else if(i===12) {
    
       dentrada.value = eval(dentrada.value);
    
     }
  
     else if(i===14) {
       
       
       dentrada.value = dentrada.value.slice(0,-1)

       
       
   }
    
    });

 
    
}


//eventos para botones de barra superior


for (let i = 0; i <= botones_s.length-1 ; i++) {
    

botones_s[i].addEventListener('touchstart', () => {
    
    if (i!=3) {
        
      dentrada.value += botones_s[i].innerText;
      
    } else {
        
        dentrada.value = '';
        
    }
    
});


}


/* evento para el boton info */

let info = document.getElementById('info');
let cti = document.createElement('div');
cti.id = 'cti';

info.addEventListener('touchstart', () => {
    
    cti.innerText = 'info';
    document.body.appendChild(cti);
    
    
});



info.addEventListener('touchend', () => {
    
    cti.remove();
    
    location.href = './info/info.html';
    
    
});



