var getData = function(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    
    console.log(nombre+ "\n"+apellido+ "\n"+ email);
    

}

/*if (nombre==""){
        document.getElementById('nombre').focus();
    }else{
        if (apellido==""){
            document.getElementById('apellido').focus();
        }else{
            if (email==""){
                document.getElementById('email').focus();
            }else{
                console.log(nombre+ "\n"+apellido+ "\n"+ email);  
            }
        }
    }*/