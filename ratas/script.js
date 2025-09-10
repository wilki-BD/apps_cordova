let canv = document.getElementsByClassName('can');
let fondom = document.getElementById('fondo')


let h_p = window.innerHeight;

let fon = canv[0];
let fond = canv[1];
let font = canv[2];
let fonc = canv[3];


fondom.style.height = `${h_p}px`;
fon.height = h_p;
fond.height = h_p;
font.height = h_p;
fonc.height = h_p;



let ctx = fon.getContext('2d');
let ctxd = fond.getContext('2d');
let ctxt = font.getContext('2d');
let ctxc = fonc.getContext('2d');


let fonY = fon.getBoundingClientRect().top;
let fonX = fon.getBoundingClientRect().left;




let color = [0,60,120,180];
let toqueAudio = new Audio('./trixxi - toque 2025-07-13 13_58.m4a');



// cuadros:

let cuadro = {
    
    index:0,
    x:60,
    y:1,
    h:40,
    w:40,
    v:2.2,
    c:`hsl(${color[0]},100%,50%)`,
    caer: function() {
        
        ctx.clearRect(0,0,400,h_p);
   
   ctx.fillStyle = this.c;
   ctx.fillRect(this.x,this.y,this.w,this.h);
   
   this.y+=this.v;
   
   
   if (this.y<h_p-this.h) {
       
   
   requestAnimationFrame(() => {
       
       this.caer();
   });
   } else {
       
       
       
       
       console.log('perdiste')
   }





        
        
    }
    
    
};


cuadro.caer();





let cuadrod = {
    
    index:1,
    x:140,
    y:1,
    h:40,
    w:40,
    v:2.3,
    c:`hsl(${color[1]},100%,50%)`,
    caer: function() {
        
        ctxd.clearRect(0,0,400,h_p);
   
   ctxd.fillStyle = this.c;
   ctxd.fillRect(this.x,this.y,this.w,this.h);
   
   this.y+=this.v;
   
   
   if (this.y<h_p-this.h) {
       
   
   requestAnimationFrame(() => {
       
       this.caer();
   });
   } else {
       
       
       
       
       console.log('perdiste')
   }





        
        
    }
    
    
};


cuadrod.caer();




let cuadrot = {
    
    index:2,
    x:220,
    y:1,
    h:40,
    w:40,
    v:2.2,
    c:`hsl(${color[2]},100%,50%)`,
    caer: function() {
        
        ctxt.clearRect(0,0,400,h_p);
   
   ctxt.fillStyle = this.c;
   ctxt.fillRect(this.x,this.y,this.w,this.h);
   
   this.y+=this.v;
   
   
   if (this.y<h_p-this.h) {
       
   
   requestAnimationFrame(() => {
       
       this.caer();
   });
   } else {
       
       
       
       
       console.log('perdiste')
   }





        
        
    }
    
    
};


cuadrot.caer();


let cuadroc = {

    index:3,
    x:300,
    y:1,
    h:40,
    w:40,
    v:2.3,
    c:`hsl(${color[3]},100%,50%)`,
    caer: function() {
        
      ctxc.clearRect(0,0,400,h_p);
   
   
   ctxc.fillStyle = this.c;
   
   ctxc.fillRect(this.x,this.y,this.w,this.h);
   
   this.y+=this.v;
   
   
   if (this.y<h_p-this.h) {
       
   
   requestAnimationFrame(() => {
       
       this.caer();
   });
   } else {
       
       
       
       
       console.log('perdiste')
   }





        
        
    }
    
    
};


cuadroc.caer();


grado = [0,60,120,180];

//------retrasos-de-comienzo---------------

let retraso =[-cuadro.h,-cuadro.h*5,-cuadro.h*9,-cuadro.h*3];




function tocar(c,e) {

   
    
    e.preventDefault();

    let toque = e.touches[0];
    let x = toque.clientX-fonX;
    let y = toque.clientY-fonY;

 
       let alea = Math.floor( Math.random() * retraso.length);
       
       
     
   
   if (
   y>=c.y-c.v-10*3 &&
   y<=c.y+c.v*3 + 
   c.h && 
   x>=c.x && 
   x<=c.x +
   c.w
   
   ) {
       
       //audio de animacion
       
        toqueAudio.currentTime = 0;
        toqueAudio.play();
      
       
       
        //animacion de borde
       fon.style.border = `solid 3px ${c.c}`;     
       fon.style.boxShadow = `inset 0px 0px 10px ${c.c}`;
       
       
       
       setTimeout(() => {


       fon.style.border = `solid 1px white`;
       fon.style.boxShadow = `inset 0px 0px 10px white`;

},200);

      //animacion de fondo
       
       document.body.style.background = `hsl(${color[c.index]},100%,10%)`;
       setTimeout(() => {

      document.body.style.background = `black`;


},500);
       
       
       //animacion de cuadro
       color[c.index] = (color[c.index]+grado[alea]) % 360;
       
       
       
       c.c = '#636363';
       
       setTimeout(() => {



       c.c = `hsl(${color[c.index]},100%,50%)`;
       c.y = retraso[alea];
       
       
       },50);
       c.v += 0.2;
       
      
              
   }
   

    
    
} 


function touch(e) {
    
    
   tocar(cuadro,e);
   tocar(cuadrod,e);
   tocar(cuadrot,e);
   tocar(cuadroc,e);
    
    
}

let eventos = ['touchstart','touchmove'];

for (let i = 0; i <= 1; i++) {
    

fon.addEventListener(eventos[i], (e) => {

   touch(e);


});

}



fon.ondblclick = (e) => {
   
   
   touch(e);  

    
    
};








