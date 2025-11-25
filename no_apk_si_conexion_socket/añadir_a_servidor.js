
console.log(18.2212373908208/2)

//p 18.2212373908208
// m 9.1106186954104

//añadir globalmente

app.use(express.text());

let usuarios = [];
let identificador;

app.post('/registrar', (req,res) => {
    
    let nombre = req.body;
    
    usuarios.push({
    
        nombre:nombre,
        id: identificador
    
    });
    
});


//añadir a io.on
    
    identificador = socket.io;

        
  
   
