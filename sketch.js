function setup() {
  createCanvas(600, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  if(mouseX < width / 2) { //fundo muda com o rato na esquerda ou direita
  background(255, 45, 200); //amarelo
  fill(220, 50, 50); //vermelho
  } else {
  background(30, 40, 90); //azul escuro
  fill(120, 220, 255); //azul claro
  } 

  if (mouseIsPressed) { //quando precionado é um quadrado
  rect(mouseX, mouseY, 120, 120);
  } else { //quando solta é um circulo
  circle(mouseX, mouseY, 60);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
