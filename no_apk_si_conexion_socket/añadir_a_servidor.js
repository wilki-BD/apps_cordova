

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

        
  
   
