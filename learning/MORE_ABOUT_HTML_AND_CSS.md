# Mais sobre HTML e CSS

## O elemento main

O elemento `<main>` define o contéudo principal dentro da tag `<body>`. Seu conteúdo se refere ao conteúdo central da página em questão, por conta disso o elemento `<main>` deve ser único no corpo da página.

## Formulários HTML

O HTML contém vários elementos para a implementação de formulários. A principal tag para campos HTML é a tag `<input>`, que é uma tag vazia. Através do atributo `type` podemos informar qual o tipo de input irá ser utilizado, e para cada tipo de input temos uma interação diferente. Vamos ver alguns exemplos:

- `type="radio"` - define um radio button, elemento HTML de seleção única
- `type="checkbox"` - define um checkbox, elemento HTML de seleção múltipla
- `type="tel"` - abre um teclado numérico com caracteres para ligações telefônicas
- `type="number"` - abre um teclado numérico e controles para incrementar ou decrementar o valor
- `type="email"` - abre um teclado alfanumérico com caracteres para email como o @
- `type="date"` - abre um calendário para seleção de data

Confira a lista completa dos tipos de inputs HTML neste [link](https://www.w3schools.com/html/html_form_input_types.asp)

### O elemento `<select>`

O elemento `<select>` é utilizado na criação de lista dropdown, sendo cada item da lista envolvido por um elemento `<option>`. Veja no exemplo:

```html
<select name="product-sort">
  <option value="lowest-price" selected>Todas as categorias</option>
  <option value="biggest-price">Bicicletas</option>
</select>
```

Veja mais sobre o elemento `<select>` aqui neste [link](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select).

### O elemento `<textarea>`

O elemento `<textarea>` é utilizado para inserção de textos longos. Veja o exemplo:

```html
<textarea id="story">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus consectetur rem explicabo, culpa excepturi blanditiis reprehenderit omnis possimus repellendus.
</textarea>
```

### O elemento `<label>`

O elemento `<label>` é utilizada para inserção de uma legenda para um campo de formulário. Associamos um `<label>` com outro elemento através do atributo `for` ou inserindo o elemento dentro do elemento `<label>`. Veja o exemplo:

```html
<label>
  Nome
  <input type="text" id="name" />
</label>

<label for="sobrenome">Sobrenome</label>
<input type="text" id="sobrenome" />
```

## CSS Grid Layout

CSS Grid Layout é um sistema de layout bidimensional, projetado especificamente para resolver problemas de layout como posicionamento e distribuição dos elementos, dividindo-os em linhas e colunas. Diferente do Flex Box o Grid é bidimensional, isso quer dizer que podemos especificar em qual linha e coluna um elemento irá ser posicionado dentro uma grid (grade). O Grid também possui várias propriedades para alinhamentos e espaçamentos, e pode ser utilizado em conjunto com o Flex Box.

Uma das coisas mais legais que ganhamos com o CSS Grid Layout é que conseguimos criar layouts complexos sem depender das estrutura dos elementos HTML. As propriedades que compõem o CSS Grid Layout com vários exemplos práticos estão disponíveis neste [guia](https://css-tricks.com/snippets/css/complete-guide-grid/).

## Bonus

- [CSS Grid Layout e Flexbox - Quando Utilizar](https://www.youtube.com/watch?v=x-4z_u8LcGc)
