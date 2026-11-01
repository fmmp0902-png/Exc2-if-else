# Exercicio 2 - if/else
## Processo

Comecei por utilizar a function `setup ()`, para preparar a área de trabalho, e em seguida o `createCanvas(windowWidth, windowHeight)` para criar a área de trabalho com o tamanho da janela do navegador. 
Usei também o `noStroke()` para retirar o contorno das formas e o `rectMode(CENTER)` que permite com que o `rect()` desenhe o retângulo a partir do ser centro e não do canto superior esquerdo, fazendo com que o quadrado fique centrado no cursor quando este é pressionado. O mesmo acontece ao circulo que se encontra centrado no cursor, no entanto este só aparece quando o cursor não é pressionado.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);
}
```

Para colocar as interações e os elementos, utilizei a function `draw()`. O `ìf (mouseX < width / 2)`, verifica se o rato está na metade esquerda da janela, o `mouseX` indica a posição horizontal do rato e o `width / 2` corresponde ao ponto que divide a largura da área de trabalho em duas partes iguais. Desta forma é possivel alterar a cor de fundo consoante a posição do rato.
Se a condição for verdadeira, ou seja se o cursor estiver do lado esquerdo do ecrã, o `background(255, 45, 200)` muda a cor do fundo para rosa e o `fill(220, 50, 50)` corresponde á cor vermelha da forma que se encontra no centro do cursor. Quando a condição é falsa, ou seja quando o cursor estiver do lado direito do ecrã, o `else` aplica com o `background(30, 40, 90)`, um azul escuro no fundo, e o `fill(120, 220, 255)` preenche a forma com a cor azul claro. Como o `background()` é chamado em cada repetição da `draw()`, o ecrã é apagado antes de a forma ser desenhada. Assim, só existe uma forma de cada vez e a forma acompanha o rato sem deixar rasto.


Ainda na function draw, usei outro `if`com a variável `mouseIsPressed` que é verdadeira quando o botão do rato é pressionado. Neste caso desenhei um quadrado `rect(mouseX, mouseY, 120, 120)`, em que as duas primeiras coordenadas fazem com que a forma siga o cursor e as duas últimas definem a largura e altura da forma que se encontraa no centro do cursor. 
Quando o botão é largado, o `else` desenha um circulo com o `circle(mouseX, mouseY, 60)`, onde as duas primeiras coordenadas servem para que a forma siga o cursor e a última é correspondente ao diâmetro da forma.

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

## Intencionalidade



## Referências
[setup()](https://p5js.org/reference/p5/setup/)
[createCanvas()](https://p5js.org/reference/p5/createCanvas/)
[windowWidth](https://p5js.org/reference/p5/windowWidth/)
[windowHeight](https://p5js.org/reference/p5/windowHeight/)
[noStroke()](https://p5js.org/reference/p5/noStroke/)
[rectMode()](https://p5js.org/reference/p5/rectMode/)
[draw()](https://p5js.org/reference/p5/draw/)
[if()](https://p5js.org/reference/p5/if/)
[mouseX](https://p5js.org/reference/p5/mouseX/)
[width](https://p5js.org/reference/p5/width/)
[background()](https://p5js.org/reference/p5/background/)
[fill()](https://p5js.org/reference/p5/fill/)
[mouseIsPressed](https://p5js.org/reference/p5/mouseIsPressed/)
[rect()](https://p5js.org/reference/p5/rect/)
[circle()](https://p5js.org/reference/p5/circle/)