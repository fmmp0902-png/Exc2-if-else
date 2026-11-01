# Exercicio 2 - if/else

Comecei por utilizar a function `setup ()`, para preparar a área de trabalho, e em seguida o `createCanvas(windowWidth, windowHeight)` para criar a área de trabalho com o tamanho da janela do navegador. 
Usei também o `noStroke()`para retirar o contorno das formas e o `rectMode(CENTER)` que permite com que o `rect()` desenhe o retângulo a partir do ser centro e não do canto superior esquerdo, fazendo com que o quadrado fique centrado no cursor quando este é pressionado. O mesmo acontece ao circulo que se encontra centrado no cursor, no entanto este só aparece quando o cursor não é pressionado.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);
}
```

Para colocar as interações e os elementos, utilizei a function `draw()`. O `ìf (mouseX < width / 2)`, verifica se o rato está na metade esquerda da janela, o `mouseX` indica a posição horizontal do rato e o `width / 2` corresponde ao ponto que divide a largura da área de trabalho em duas partes iguais. Desta forma é possivel alterar a cor de fundo consoante a posição do rato.
Se a condição for verdadeira, ou seja se efetivamente o fundo mudar de cor, o `background(255, 45, 200)` muda a cor do fundo para rosa e o `fill(220, 50, 50)` corresponde á cor vermelha da forma que se encontra no centro do cursor. Q




```javascript
function draw() {
  if(mouseX < width / 2) { //fundo muda com o rato na esquerda ou direita
  background(255, 45, 200); //rosa
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
```
