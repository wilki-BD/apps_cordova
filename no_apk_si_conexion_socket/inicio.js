let b = document.getElementById('b');
let d_n = document.getElementById('d_n');

b.addEventListener('click', () => {

      let nombre = d_n.value ;

      fetch('/registrar',{
          
          method: 'POST',
          headers: {'Content-Type':'text/pain'},
          body: nombre
          
      });
    
});