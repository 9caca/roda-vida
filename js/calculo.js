var botaoAdicionar = document.querySelector("#calcular");
botaoAdicionar.addEventListener("click", somaGrupo);

var categorias = ["#fisico", "#carreira", "#relacionamentos", "#financeiro", "#saude", "#pessoal", "#romance", "#diversao", "#social", "#espiritualidade", "#familia", "#emocional", "#felicidade", "#proposito"];
categorias.forEach(function(categorias){
})


function somaGrupo(){
	var form = document.querySelector(categorias[0]);{
	event.preventDefault();
}

	var r1 = parseInt(form.n1.value);
	var r2 = parseInt(form.n2.value);
	var r3 = parseInt(form.n3.value);
	var r4 = parseInt(form.n4.value);
	var r5 = parseInt(form.n5.value);

	var media = (r1 + r2 + r3 + r4 + r5)/5;

	console.log(media);
}

function calculaMedia(media){

}




