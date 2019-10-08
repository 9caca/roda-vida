var botaoAdicionar = document.querySelector("#calcular");
botaoAdicionar.addEventListener("click", principal);

	
function principal(){{
	event.preventDefault();
}
	var todasAsMedias = [];

	console.log(todasAsMedias);


	

	var media = mostra(form = document.querySelector("#fisico"));
	todasAsMedias.push(media);
	media = mostra(form = document.querySelector("#carreira"));
	todasAsMedias.push(media);
	media = mostra(form = document.querySelector("#relacionamentos"));
	todasAsMedias.push(media);
	media = mostra(form = document.querySelector("#financeiro"));
	todasAsMedias.push(media);
	media = mostra(form = document.querySelector("#saude"));
	todasAsMedias.push(media);
	media = mostra(form = document.querySelector("#pessoal"));
	todasAsMedias.push(media);
	media = mostra(form = document.querySelector("#romance"));
	todasAsMedias.push(media);
	media = mostra(form = document.querySelector("#diversao"));
	todasAsMedias.push(media);
	media = mostra(form = document.querySelector("#social"));
	todasAsMedias.push(media);
	media = mostra(form = document.querySelector("#espiritualidade"));
	todasAsMedias.push(media);
	media = mostra(form = document.querySelector("#familia"));
	todasAsMedias.push(media);
	media = mostra(form = document.querySelector("#emocional"));
	todasAsMedias.push(media);
	media = mostra(form = document.querySelector("#felicidade"));
	todasAsMedias.push(media);
	media = mostra(form = document.querySelector("#proposito"));
	todasAsMedias.push(media);
}

function mostra(categoria){
	r1 = parseInt(form.n1.value);
	r2 = parseInt(form.n2.value);
	r3 = parseInt(form.n3.value);
	r4 = parseInt(form.n4.value);
	r5 = parseInt(form.n5.value);

	var media = (r1 + r2 + r3 + r4 + r5)/5;

	return media;

	
}

