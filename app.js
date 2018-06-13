const boton= document.getElementById("btn"); //Llamamos al botón.
//Si no escriben en el id comment (donde va el mensaje), entonces que no se ejecute la acción event listener

boton.addEventListener("click", (e) => {
    //compruebo si el campo esta vacio 
    //si está vacio prevenir que suceda el evento
    if (comment.value === '') {
        e.preventDefault();
      }else{
        //el lugar para alojar el mensaje
        let comments = document.getElementById("comment").value;//llamo al mensaje
        //limpiar la caja si hay algo escrito con el siguiente comando:
        document.getElementById("comment").value = "";
        //creando variable con el contenedor que rescatara el mensaje(guardara)
        const cont = document.getElementById("cont");
        //creando un div con creatElement y entre parentesis lo que queremos crear
        const newComments = document.createElement("div");
        //LMS: Crea un nodo de tipo Element que representa al elemento XHTML cuya etiqueta se pasa como parámetro
        const message = document.createElement("text");
        message.type = "text";
        const contenedorElemento = document.createElement("p");
        //LMS: Crea un nodo de tipo Text que almacena el contenido textual de los elementos XHTML
        let textNewComment = document.createTextNode(comments)
        //añadimos el nodo textNewComment como hijo del nodo Element
        contenedorElemento.appendChild(textNewComment);//lo asignamos a su padre párrafo
        //le asignamos el padre a sus hijos
        newComments.appendChild(message);
        newComments.appendChild(contenedorElemento);
        cont.appendChild(newComments);
    }
}) 
