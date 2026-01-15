

history.replaceState(null, '', window.location.href);
history.back();


//--------------
let jug = document.getElementById('jug');


jug.addEventListener('touchstart', () => {
    
    let div = document.createElement('div');
    div.id = 'conlista';
    document.body.appendChild(div);
    
    let condivsal = document.createElement('div');
    condivsal.id = 'condivsal';
    div.appendChild(condivsal);
    
    let divsal = document.createElement('div');
    divsal.id = 'divsal';
    divsal.onclick = () => {
        
        document.body.removeChild(div);
        
    };
    divsal.innerHTML = '❌';
    condivsal.appendChild(divsal);
    
    
//-------------------------------
   let hdiv = document.createElement('div');
   hdiv.id = 'hdiv';
   div.appendChild(hdiv);
   
//-----------
   let ndiv1 = document.createElement('div');
   ndiv1.className = 'ndiv' ; 
   ndiv1.innerHTML = '<p>Tabla 1</p><h4>X16</h4>';
   hdiv.appendChild(ndiv1);
   ndiv1.addEventListener('touchstart', () => {
      
      location.href = './jugar/jugar.html';
      localStorage.setItem('tabla', 1 );
      
   });
   
   let ndiv2 = document.createElement('div');
   ndiv2.className = 'ndiv' ; 
   ndiv2.innerHTML = '<p>Tabla 2</p><h4>X24</h4>';
   hdiv.appendChild(ndiv2);
   ndiv2.addEventListener('touchstart', () => {
      
      location.href = './jugar/jugar.html';
      localStorage.setItem('tabla', 2 );
      
   });
   
   let ndiv3 = document.createElement('div');
   ndiv3.className = 'ndiv' ; 
   ndiv3.innerHTML = '<p>Tabla 3</p><h4>X30</h4>';
   hdiv.appendChild(ndiv3);
   ndiv3.addEventListener('touchstart', () => {
      
      location.href = './jugar/jugar.html';
      localStorage.setItem('tabla', 3 );
      
   });
   
   let ndiv4 = document.createElement('div');
   ndiv4.className = 'ndiv' ; 
   ndiv4.innerHTML = '<p>Tabla 4</p><h4>X50</h4>';
   hdiv.appendChild(ndiv4);
   ndiv4.addEventListener('touchstart', () => {
      
      location.href = './jugar/jugar.html';
      localStorage.setItem('tabla', 4 );
      
   });
    
});