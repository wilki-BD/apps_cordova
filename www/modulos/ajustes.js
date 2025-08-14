//centrar, agregar area y evento de toque
let b_c_d = [];




for (let i = 0; i <= 15; i++) {
    
let botones = document.getElementsByClassName('b');

    

botones[i].style.marginLeft = `${(document.body.getBoundingClientRect().width/4-botones[i].getBoundingClientRect().width)/2}px`;

if (i===0 || i === 1) {
    
    b_c_d.push(botones[i]);
    
    
}




botones[i].style.gridArea = `b${i}`;



//presionar boton


if (i != 3 && i != 7 && i != 11 && i != 12 && i != 15 && i != 14 ) {
    

botones[i].addEventListener('touchstart', () => {
    
    
    

botones[i].style.boxShadow=' 0px 0px 10px #6076a5';
botones[i].style.background= '#15203e' ;
    
    
    
});




botones[i].addEventListener('touchend', () => {
    
    
    

botones[i].style.boxShadow=' 4px 5px 5px #020205';
botones[i].style.background= '#2d2788' ;
    
    
    
});

} else if (i === 12) {
    
    
    
      

botones[i].addEventListener('touchstart', () => {
    
    
    

botones[i].style.boxShadow=' 0px 0px 10px #6076a5';
botones[i].style.background= '#1e2249' ;
    
    
    
});




botones[i].addEventListener('touchend', () => {
    
    
    

botones[i].style.boxShadow=' 4px 5px 5px #020205';
botones[i].style.background= '#394088' ;
    
    
    
});
    
    
} else {
    
     

botones[i].addEventListener('touchstart', () => {
    
    
    

botones[i].style.boxShadow=' 0px 0px 10px #6076a5';
botones[i].style.background= '#193e4a' ;
    
    
    
});




botones[i].addEventListener('touchend', () => {
    
    
    

botones[i].style.boxShadow=' 4px 5px 5px #020205';
botones[i].style.background= '#2d7288' ;
    
    
    
});
    
} 




}







