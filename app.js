const boton= document.getElementById("btn"); //Llamamos al botón.
//Dato "onclick" solo va en HTML, se ejecuta solo en el HTML.
//Evento addEventListener escucha cuando se ejecuta el click y acciona.
boton.addEventListener("click", () => {
    //el lugar para alojar el mensaje
    let comments = document.getElementById("comment").value;//rescato el mensaje
    //limpiar la caja si hay algo escrito con el siguiente comando:
    document.getElementById("comment").value = "";
    //creando variable con el contenedor que rescatara el mensaje(guardara)
    const cont = document.getElementById("cont");
    //creando un div con creatElement y entre parentesis lo que queremos crear
    const newComments = document.createElement("div");
    const message = document.createElement("text");
    message.type = "text";
    const contenedorElemento = document.createElement("p");
    let textNewComment = document.createTextNode(comments)//le decimos que es un texto y lo alojamos en el comentario
    contenedorElemento.appendChild(textNewComment);//lo asignamos a su padre párrafo
    //le asignamos todos los padres a sus hijos
    newComments.appendChild(message);
    newComments.appendChild(contenedorElemento);
    cont.appendChild(newComments);
}) 
