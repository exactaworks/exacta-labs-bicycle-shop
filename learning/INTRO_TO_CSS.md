# Introdução ao CSS

[CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) (abreviação para Cascading Style Sheets) é uma linguagem utilizada para descrever a apresentação de páginas Web. Digamos que o CSS cuida da parte visual: posicionamento, espaçamento, dimensões, animações, efeitos e colorização dos elementos HTML. Criada por [Bert Bos](https://en.wikipedia.org/wiki/Bert_Bos), teve sua primeira versão publicada em 1996.

## Formas de utilizar CSS

Existem 3 formas de utilizar o CSS, e cada uma delas influencia o nosso código, colocando pesos para as regras de estilização.

1. Inline (peso 3) - utilizando o atributo `style` em um elemento HTML:

```
<p style="color: #999; font-size: 16px">
  Um texto cinza com fonte tamanho 16
</p>
```

2. Internal (peso 2) - através da tag `<style>`:

```
<style>
  p {
    color: #999;
    font-size: 16px;
  }
</style>
```

3. External (peso 1) - através de um arquivo externo com a extensão `.css` que é importado na página através da tag `<link>`:

```
<link rel="stylesheet" href="file/path" />
```

Se houver regras conflitantes (regras repetidas para o mesmo elemento) que estão sendo aplicadas de formas diferentes, a regra com o peso maior irá sobrescrever a regra com peso menor, vamos ver o seguinte exemplo:

```
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

```
p {
  color: #999;
  font-size: 16px;
}
```

2. Seletor por classe:

```
.button {
  background-color: #827b7b;
  color: #fff;
}
```

3. Seletor por ID:

```
#logo {
  height: 50px;
  width: 50px;
}
```

4. Seletor universal:

```
* {
  margin: 0;
}
```

5. Seletor por atributo:

```
[type="text"] {
  border: none;
  border-bottom: 1px solid #CCC;
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

```
.logo img {
  display: block;
  width: 5rem
}
```

O exemplo acima está dizendo que o elemento `img` que estiver dentro de um elemento com a classe `.logo` receberá tais regras.

## Box Model

Todo os elementos de bloco no HTML se comportam como uma caixa, com lados, bordas, espaçamento externo (margin), espaçamento interno (padding) e conteúdo. Basicamente o Box Model descreve como as propriedades citada acima se relacionam para compor as dimensões de um elemento:

![Box Model no inspecionador de elementos do Browser](https://s3.amazonaws.com/viking_education/web_development/web_app_eng/css_box_model_chrome.png)

## Tipos de `display`

A propriedade `display` permite que você defina a maneira como seu elemeno HTML irá ser renderizado. Existem vários tipos de `display`, mas inicialmente só é relevante conhecer estes: `block`, `inline`, `inline-block`, `flex` e `grid`. Veja todas os possíveis valores da propriedade `display` neste [link](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display).

### Flex Box

Flex Box é um modelo de layout unidimensional projetado para facilitar a criação de layouts mais arrojados por meio de linhas (eixo x) e colunas (eixo y), além de possuir capacidades avançadas de alinhamento. As propriedades que compõem o Flex Box estão disponíveis neste [guia](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

## Pseudo-elementos

Os pseudo-elementos nos permitem selecionar algumas areas internas de um elemento HTML e aplicar estilos em tais. Pseudo-elementos nos permitem selecionar a primeira letra de um elemento ou primeira linha por exemplo. Eles não são aplicáveis em elementos vazios, como `<img>`,`<input>` e `<br>`. Inicialmente vamos nos focar mais no `::before` e `::after`.

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

- [Bernard De Luna: Performance em CSS - BrazilJS 2012](https://www.youtube.com/watch?v=m1iV2C44Duc)
