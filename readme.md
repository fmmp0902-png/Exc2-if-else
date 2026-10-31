# Exercicio 2 - if/else

Comecei por utilizar a function `setup ()`, para preparar a área de trabalho, e em seguida o `createCanvas(windowWidth, windowHeight)` para criar a área de trabalho com o tamanho da janela do navegador. Usei também o `noStroke()`para retirar o contorno das formas e o `rectMode(CENTER)` que permite com que o `rect()` desenhe o retângulo a partir do ser centro e não do canto superior esquerdo, fazendo com que o quadrado fique centrado no cursor quando este é pre, tal como o circulo.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);
}
````
