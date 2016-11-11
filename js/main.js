function agregaMensaje(){
	var comentario = document.getElementById("mensajes").value;
	// aqui creo mi div ontenedor grande
	var comentarioChat = document.getElementById("conversacion");
	// aqui creo mi div que captura mi comentario del input
	var atrapaOut= document.createElement("div");
	var atrapaComentario = document.createElement("div");
	var atrapaTiempo = document.createElement("div");
	// creo los elementos de mi chat out
	var elementMensaje = document.createElement("p");
	//creo mis nodos 
	var nodoComentario= document.createTextNode(comentario);
	var nodoTiempo= document.createTextNode("0:00pm");
	//Meto los elementos a mis nodos
	elementMensaje.appendChild(nodoComentario);
	atrapaTiempo.appendChild(nodoTiempo);
	// asigno a mis padres e hijos
	atrapaComentario.appendChild(elementMensaje);
	atrapaComentario.appendChild(atrapaTiempo);
	//creo mis atributos a cada uno de mis DIV
	atrapaComentario.setAttribute("class","w-message-text");
	atrapaTiempo.setAttribute("class","time");
	atrapaOut.setAttribute("class", "w-message w-message-out");
	// todo lo agrego a mi div general del html
	comentarioChat.appendChild(atrapaOut);
}

