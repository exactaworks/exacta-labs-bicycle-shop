# Introdução ao CSS

[CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) (abreviação para Cascading Style Sheets) é uma linguagem utilizada para descrever a apresentação de páginas Web. Digamos que o CSS cuida da parte visual: posicionamento, espaçamento, dimensões, animações, efeitos, colorização dos elementos HTML e layout. Criada por [Bert Bos](https://en.wikipedia.org/wiki/Bert_Bos), teve sua primeira versão publicada em 1996.

## Formas de utilizar CSS

Existem 3 formas de utilizar o CSS, e cada uma delas influencia o nosso código, colocando pesos para as regras de estilização.

1. Inline (peso 3) - utilizando o atributo `style` em um elemento HTML:

```html
<p style="color: #999; font-size: 16px">Um texto cinza com fonte tamanho 16</p>
```

2. Internal (peso 2) - através da tag `<style>`:

```html
<style>
  p {
    color: #999;
    font-size: 16px;
  }
</style>
```

3. External (peso 1) - através de um arquivo externo com a extensão `.css` que é importado na página através da tag `<link>`:

```html
<link rel="stylesheet" href="file/path" />
```

Se houver regras conflitantes (regras repetidas para o mesmo elemento) que estão sendo aplicadas de formas diferentes, a regra com o peso maior irá sobrescrever a regra com peso menor, vamos ver o seguinte exemplo:

```html
<style>
  p {
    color: #999;
    font-size: 16px;
  }
</style>

<p style="color: #000; font-size: 20px">
  Um texto preto com fonte tamanho de 20 pixels
</p>
```

No exemplo acima o estilo Inline prevalece por ter o peso maior.

## Seletores

Seletores definem em quais elementos um conjunto de regras CSS se aplica. Temos 5 tipos de seletores CSS.

1. Seletor por tag:

```css
p {
  color: #999;
  font-size: 16px;
}
```

2. Seletor por classe:

```css
.button {
  background-color: #827b7b;
  color: #fff;
}
```

3. Seletor por ID:

```css
#logo {
  height: 50px;
  width: 50px;
}
```

4. Seletor universal:

```css
* {
  margin: 0;
}
```

5. Seletor por atributo:

```css
[type='text'] {
  border: none;
  border-bottom: 1px solid #ccc;
}
```

### Combinadores

Além dos seletores temos os combinadores que são 4:

1. Adjacent sibling selector
2. General sibling selector
3. Child selector
4. Descendent selector

Segue a documentação mais detalhada sobre [seletores CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Seletores_CSS).

Inicialmente precisamos entender somente o _Descendent Selector_. O seletor descendente é representando por um espaço, como no exemplo a seguir:

```css
.logo img {
  display: block;
  width: 5rem;
}
```

O exemplo acima está dizendo que o elemento `img` que estiver dentro de um elemento com a classe `.logo` receberá tais regras.

### Especificidade de seletores

Quando temos regras CSS para o mesmo elemento, o que determina qual regra será aplicada é sua especificidade. Há quatro categorias que definem o nível de especificidade de um seletor:

- estilos Inline -> peso 1000
- IDs -> 100
- classes, atributos e pseudo-classes -> 10
- elementos e pseudo-elementos -> 1
- estilos herdados do elemento pai -> 0

Vamos para o seguinte exemplo:

```css
h1 {
  font-size: 32px;
}

#article-content h1 {
  font-size: 48px;
}
```

Temos uma regra conflitante, como sabemos qual será aplicada? Vamos lá, o CSS é interpretado da direita para a esquerda, então no primeiro seletor temos o valor 1, no segundo temos o valor 101, valor 1 do elemento `h1` e 100 do ID `#article-content`, sendo assim a segunda regra é mais especifica e portanto será aplicada.

Próximo exemplo:

```css
p {
  line-height: 1.5;
}

p {
  line-height: 1.25;
}
```

Novamente regras conflitantes, porém seletores com o mesmo peso, neste caso a última regra será aplicada, pois o CSS é interpretado de cima para baixo.

> **Lembre-se**: CSS é interpretado de cima para baixo, da direita para a esquerda.

## Box Model

Todos os elementos de bloco no HTML se comportam como uma caixa, com lados, bordas, espaçamento externo (margin), espaçamento interno (padding) e conteúdo. Basicamente o Box Model descreve como as propriedades citadas acima se relacionam para compor as dimensões de um elemento:

![Box Model no inspecionador de elementos do Browser](https://s3.amazonaws.com/viking_education/web_development/web_app_eng/css_box_model_chrome.png)

## Tipos de `display`

A propriedade `display` permite que você defina a maneira como seu elemeno HTML irá ser renderizado. Existem vários tipos de `display`, mas inicialmente só é relevante conhecermos estes: `block`, `inline`, `inline-block`, `flex` e `grid`. Veja todos os possíveis valores da propriedade `display` neste [link](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display).

### Flex Box

Flex Box é um sistema de layout unidimensional projetado para facilitar a criação de layouts mais arrojados por meio de linhas (eixo x) e colunas (eixo y), além de possuir capacidades avançadas de alinhamento. As propriedades que compõem o Flex Box estão disponíveis neste [guia](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

## Pseudo-classes

As pseudo-classes nos permitem aplicar um estilo a um elemento sobre um estado especial. Veja algumas pseudo-classes e seus estados especias:

- `:first-child` primeiro elemento dentro de um nó da árvore de elementos
- `:last-child` último elemento dentro de um nó da árvore de elementos
- `:visited` para links visitados)
- `:checked` quando um checkbox ou radio é marcado
- `:hover` quando passamos o mouse por cima do elemento
- `:focus` quando o elemento recebe o foco

```css
.button:hover {
  background-color: #f89b4d;
}
```

Veja a lista completa de pseudo-classes neste [link](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes).

## Pseudo-elementos

Os pseudo-elementos nos permitem aplicar um estilo em um conteúdo interno de um elemento. Veja abaixo alguns pseudo-elementos e o respectivo conteúdo interno que representa:

- `::first-letter` primeira letra do elemento
- `::first-line` primeira linha do elemento
- `::before` inseri conteúdo extra antes do conteúdo do elemento
- `::after` inseri conteúdo extra depois do conteúdo do elemento
- `::selection` quando o conteúdo é selecionado pelo cursor

Pseudo-elementos não são aplicáveis em elementos vazios, como `<img>`, `<input>` e `<br>`, pois esses elementos não possibilitam a inserção conteúdo interno.

Veja a lista completa de pseudo-elementos neste [link](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-elementos).

## Propriedades CSS vistas nesse capítulo

- `align-items`
- `background` properties
- `border` properties
- `box-sizing`
- `color`
- `content`
- `cursor`
- `display`
- `font` properties
- `height` e `width`
- `justify-content`
- `line-height`
- `letter-spacing`
- `margin` e `padding`
- `opacity`
- `outline`
- `overflow`
- `position`, `top` e `right`
- `text` properties
- `transition`

## Bonus

- [CSS Vocabulary](http://apps.workflower.fi/vocabs/css/en)
- [Bernard De Luna: Performance em CSS - BrazilJS 2012](https://www.youtube.com/watch?v=m1iV2C44Duc)
