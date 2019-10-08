let angles = [50, 20, 45, 35, 60, 38, 45, 67];

function setup() {
  createCanvas(600, 400);
  noStroke();
  noLoop(); // Run once and stop
}

function draw() {
  background(255);
  pieChart(300, angles);
  criaFatias();
}

function pieChart(diameter, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(
      width / 2,
      height / 2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    lastAngle += radians(angles[i]);
  }
}

function criaFatias(){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'blue';
	pincel.beginPath();
	pincel.arc(100, 100, 50, 0, 2 * 3.14);
	pincel.fill();
    // pincel.fillStyle = 'yellow';
    //pincel.beginPath();
	//pincel.arc(300, 200, 170, 0, 1 * 3.14);//dois primeiros são o centro(300x200), 170 é o tamanho(raio), zero é o angulo onde inicia.
	// 1*3.14 é o tamanho da fatia de pizza.
	// pincel.fill();
    //são 14 pontos, então preciso dividir o círculo por 14.
    //360/14 = 25,71
	}

