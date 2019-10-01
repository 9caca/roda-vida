var botaoAdicionar = document.querySelector("#calcular");
botaoAdicionar.addEventListener("click", principal);

	
function principal(){{
	event.preventDefault();
}
	
	mostra(form = document.querySelector("#fisico"));
	mostra(form = document.querySelector("#carreira"));
	mostra(form = document.querySelector("#relacionamentos"));
	mostra(form = document.querySelector("#financeiro"));
	mostra(form = document.querySelector("#saude"));
	mostra(form = document.querySelector("#pessoal"));
	mostra(form = document.querySelector("#romance"));
	mostra(form = document.querySelector("#diversao"));
	mostra(form = document.querySelector("#social"));
	mostra(form = document.querySelector("#espiritualidade"));
	mostra(form = document.querySelector("#familia"));
	mostra(form = document.querySelector("#emocional"));
	mostra(form = document.querySelector("#felicidade"));
	mostra(form = document.querySelector("#proposito"));
		
}

function mostra(categoria){
	r1 = parseInt(form.n1.value);
	r2 = parseInt(form.n2.value);
	r3 = parseInt(form.n3.value);
	r4 = parseInt(form.n4.value);
	r5 = parseInt(form.n5.value);

	var media = (r1 + r2 + r3 + r4 + r5)/5;
	console.log(media);

	return media;
}

