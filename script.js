function mostrar()
{
    const aside = document.querySelectorAll("aside")[0]
    const section = document.querySelectorAll("section")[0]

    if(aside.style.display== "block"){
        aside.style.display = "none"
    }else{
        aside.style.display= "block"

    }
    }

function mostrar2()
{
    const header = document.querySelectorAll("header")[0]
    
    
    if(header.style.display== "block"){
        header.style.display = "none"
        
    }else{
        header.style.display= "block"
        
    }
    }