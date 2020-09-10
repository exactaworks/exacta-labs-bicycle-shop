# Melhorando a arquitetura do CSS com BEM

O BEM é uma metodologia que estabelece uma convenção de nomes para classes no HTML e CSS. A sigla BEM vem de block, element, modifier, em português: bloco, elemento, modificador. Vamos notar que essas propriedades estão extremamente ligadas com as nomenclaturas das classes que utilizam essa metodologia.

## Estrutura do BEM

A estrutura da metodogia é bem simples, veja o exemplo:

```css
/* CSS */
/* Block */
.card {
  /* css styles */
}

/* Element */
.card__title {
  /* css styles */
}

/* Modifier */
.card__title--big {
  /* css styles */
}

<!-- HTML -->
<div class="card">
  <h3 class="card__title card__title--big">Título do card</h3>

  <p class="card__info">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sequi.
  </p>
</div>
```

## Block

Bloco é o elemento pai, seu nome dá significado ao componente, no exemplo acima utilizamos o nome `.card` para representar um card, ou poderia ser `.header` para representar o cabeçalho da aplicação.

## Element

Elemento é uma parte que compõe um bloco, no exemplo a classe `.card__title` fica claro que ela contém a estilização do título do card. Utilizamos `__` para separar o nome do bloco e do elemento.

## Modifier

Um modificador como o próprio nome já diz, modifica algum estilo de um bloco ou elemento em que está sendo aplicado. No exemplo temos o `.card__title--big`, pelo nome podemos supor que ele aumenta o tamanho do título do card, poderíamos também ter uma classe `.card--rounded` que aplicaria um arredondamento no nosso card. Separamos os nomes com `--` para distinguir um modificador de um bloco ou elemento.

## Boas práticas

O BEM não tem regras rígidas, mas algumas boas práticas podemos seguir:

- Os estilos de um bloco devem ser autocontidos e não devem depender de elementos externos.
- Um bloco pode ser composto tanto por elementos quanto por blocos, ou até mesmo não conter nenhum dos dois.
- Para utilizar nome composto utilizamos um `-` para separar as palavras, como `.progress-bar`, `.button--state-success`.
- Tente não especificar muitos níveis de profundidade, essa não é a função do BEM, prefira `.card__button` ao invés de `.card__info__button`.
- O BEM não especifica um padrão para modificadors globais, por conta disso devemos escolher bons nomes para não serem confundidos com blocos.
- Complementando o tópico acima, modificadores modificam alguma característica ou representam um estado `.button--large`, `.menu--active`.

## Benefícios

**Modularidade**: blocos bem escritos são como peças de lego, que vão se encaixando e compondo outros blocos e assim formam a página.

**Reusabilidade**: compor blocos independentes de maneiras diferentes e reutilizá-los de forma inteligente irá reduzir a quantidade de código CSS.

**Estrutura**: a metodologia BEM fornece ao nosso código CSS uma estrutura sólida que se mantém simples e fácil de entender.
