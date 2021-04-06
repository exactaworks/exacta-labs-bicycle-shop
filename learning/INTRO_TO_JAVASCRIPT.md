# Introdução ao JavaScript

O JavaScript é uma linguagem de alto nível com tipagem dinâmica e fraca, e multiparadigma, com aspectos funcionais, orientação à objeto (baseada em protótipos) e imperativo. A primeira implementação do JavaScript foi criada por [Brendan Eich](https://pt.wikipedia.org/wiki/Brendan_Eich) para o navegador [Netscape](https://pt.wikipedia.org/wiki/Netscape) em 1995.

JavaScript foi inspirada na [linguagem HyperTalk](https://en.wikipedia.org/wiki/HyperTalk) que foi desenvolvida pela Apple para a sua plataforma HyperCard, que possibilitava programar orientado à eventos, deixando as aplicações mais dinâmicas, e era uma linguagem super amigável.

A Netscape queria embarcar em seu browser algo similar e chamou Brendan Eich, que na época era conhecido por ter desenvolvido alguns interpretadores de linguagem baseados em Scheme.

Inicialmente Brendan Eich propôs o uso da linguagem Scheme, mas logo notaram que a linguagem não era muito amigável, o que iria dificultar o desenvolvimento de aplicações e a aderência dos desenvolvedores. Por conta disso Brendan Eich teve que se basear em linguagens mais populares como Java ou Visual Basic.

O JavaScript então teve por base 4 linguagens: [Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>), [Scheme](https://pt.wikipedia.org/wiki/Scheme), [Self](<https://en.wikipedia.org/wiki/Self_(programming_language)>) e algumas influências de [Perl](https://pt.wikipedia.org/wiki/Perl). Veja os aspectos trazidos de cada linguagem:

- Java - sintaxe e algumas convenções
- Scheme - closure, lambda e tipagem fraca
- Self - herança baseada em protótipos e objetos dinâmicos
- Perl - expressões regulares

## Tipagem dinâmica e fraca

No JavaScript a tipagem é dinâmica, portanto nós não informamos o tipo de uma variável em sua declaração, diferentemente de linguagens com tipagem estática como Java e C# que te obrigam a declarar o tipo. Sendo assim, o tipo da variável só será determinado quando for realizado uma atribuição, pois o interpretador só consegue determinar o tipo através do valor que está sendo atribuído, isso é o que chamamos de **inferência de tipos**.

```javascript
var value = 1;

console.log(typeof value); // number

value = '1';

console.log(typeof value); // string

value = true;

console.log(typeof value); // boolean
```

Outra característica é que a tipagem é fraca, ou seja, o interpretador não vai te impedir de realizar alguns tipos de operações com variáveis de tipos diferentes, como somar uma string com um number ou comparar um boolean com um number. Vejamos os exemplos:

```javascript
var number1 = 1;
var number2 = '1';

console.log(number1 + number2); // 11

var yes = 1;
var truth = true;

console.log(yes == truth); // true
```

### Igualdade estrita

Para comparar dois valores normalmente em outras linguagens utilizamos o operador `==` (também conhecido como igualdade ampla), mas como no JavaScript a tipagem é fraca, isso acaba gerando alguns resultados indesejados como no exemplo abaixo:

```javascript
var number1 = 1;
var number2 = '1';

console.log(number1 == number2); // true
```

Para resolver esse tipo de problema foi inserida a comparação de igualdade estrita `===`, que compara o valor e também o tipo das variáveis:

```javascript
var number1 = 1;
var number2 = '1';

console.log(number1 === number2); // false
```

## Escopos

Para falar sobre escopos, primeiramente precisamos ter em mente que existem 3 tipos de escopos:

- global - nível de escopo mais alto, escopo raiz
- local - cada função cria um escopo local
- bloco - if else, for, while, switch, função e tudo que contém {} (menos objetos) criam blocos

Escopos definem o alcance ou acessibilidade de uma variável, e isso dependerá da forma e do local onde a variável foi declarada. Veremos isso com mais detalhes no próximo tópico sobre variáveis.

## Variáveis

No JavaScript temos 4 formas de declarar uma variável:

```javascript
// Escopo global
planet = 'Terra';

// Escopo local (também conhecido como escopo de função)
var soccerPlayer = 'Pelé';

// Escopo do bloco
let team = 'Santos';

// Escopo do bloco
const bestSoccerPlayer = 'Pelé';
```

### Global

Se declararmos uma variável sem nenhuma das palavras chaves `var`, `let` ou `const`, essa varíavel terá seu escopo global, ou seja será acessível em qualquer escopo, vamos ver o exemplo:

```javascript
function greetingsForSomeone(someone) {
  preffix = 'Hello ';

  return preffix + someone;
}

greetingsForSomeone('Tom'); // Hello Tom

// A variável preffix é acessível de qualquer lugar
consolo.log(preffix);
```

### `var`

Uma variável declarada com a palavra chave `var` terá seu escopo local (function scope), ou seja será acessível no seu escopo e em qualquer escopo interno ao seu:

```javascript
function greetingsForSomeone(someone) {
  var preffix = 'Hello ';

  return preffix + someone;
}

greetingsForSomeone('Jerry'); // Hello Jerry

// A variável preffix não é acessível em escopos externos
console.log(preffix); // Uncaught ReferenceError: preffix is not defined
```

### `let` e `const`

Variáveis declaradas com `let` ou `const` são block scoped, ou seja, acessíveis somente no bloco em que foram declarados ou em blocos internos ao seu:

```javascript
const nationality = 'argentine';

// Maradona será o melhor só na cabeça dos argentinos
if (nationality == 'argentine') {
  const bestSoccerPlayer = 'Maradona';
}

console.log(bestSoccerPlayer); // Uncaught ReferenceError: bestSoccerPlayer is not defined
```

Variáveis declaradas com `let` ou `const` também não podem ser redeclaradas no mesmo bloco:

```javascript
let bestSoccerPlayer = 'Pelé';
let bestSoccerPlayer = 'Maradona'; // Uncaught SyntaxError: Identifier 'bestSoccerPlayer' has already been declared
```

Uma característica peculiar de uma variável declarada com a palavra chave `const` é que ela não pode ser reatribuída e obrigatoriamente precisa ser inicializada:

```javascript
const bestSoccerPlayer = 'Pelé';

bestSoccerPlayer = 'Maradona'; // Uncaught TypeError: Assignment to constant variable.

const bestSoccerPlayerForArgentines; // Uncaught SyntaxError: Missing initializer in const declaration
```

## Hoisting

Hoisting significa o ato de utilizar equipamentos para levantar, elevar ou içar objetos, logo lembramos de um guindaste. Mas o que isso tem a ver com JavaScript? Para entender melhor vamos ver o seguinte código:

```javascript
console.log(whoIsTheBestSoccerPlayer());

function whoIsTheBestSoccerPlayer() {
  return 'Pelé';
}
```

Notamos que estranhamente mesmo chamando a função `whoIsTheBestSoccerPlayer()` antes de sua declaração o código foi executado com sucesso, e isso se dá porque antes de executar o código, o interpretador da linguagem eleva todas as variáveis e funções presentes no código para o topo de seus escopos. É como se o código originalmente fosse escrito assim:

```javascript
function whoIsTheBestSoccerPlayer() {
  return 'Pelé';
}

console.log(whoIsTheBestSoccerPlayer()); // Pelé
```

### Hoisting de `var`

Uma característica do hoisting de `var` é que a declaração vai para o topo do escopo, mas a atribuição é mantida no lugar em que foi realizada, vamos ver o exemplo:

```javascript
console.log(bestSoccerPlayer); // undefined

var bestSoccerPlayer = 'Pelé';

console.log(bestSoccerPlayer); // Pelé
```

No primeiro `console.log` temos o valor da variável como `undefined`, isso acontece porque quando uma variável declarada com `var` sofre hoisting, ela é inicializada com o valor `undefined`.

### Hoisting de `let` e `const`

Vamos relembrar que `let` e `const` são block scoped, ou seja acessíveis no bloco em que foram declaradas, logo então são içadas para o topo do bloco em que foram declaradas, mas não são inicializadas com o valor `undefined`, o que nos força a inicializá-las antes de usá-las. Vejamos o exemplo:

```javascript
const nationality = 'argentine';

// Maradona será o melhor se você for argentino
if (nationality == 'argentine') {
  console.log(bestSoccerPlayer); // Uncaught ReferenceError: Cannot access 'bestSoccerPlayer' before initialization

  let bestSoccerPlayer = 'Maradona';

  console.log('El mejor jugador es ' + bestSoccerPlayer);
}
```

Para concluir devemos ter em mente que todos os tipos de declaração sofrem hoisting (`var`, `let`, `const`, `function`, `function*`, `class`), a diferença é que uma variável declarada com `let` ou `const` não pode ser acessada antes de ser inicializada.

## Scope chain

O scope chain define como o acesso a uma variável é propagado, em resumo diz que uma variável é acessível por todos os escopos internos do escopo em que a mesma foi declarada, vamos ver o exemplo a seguir:

```javascript
const currentDate = new Date();

function getCurrentDate() {
  return currentDate;
}

getCurrentDate(); // Data e hora atual
```

A função `getCurrentDate` retorna o valor da variável `currentDate` que foi declarada no escopo de cima, o escopo global nesse caso. Vamos entender o que aconteceu:

1. a função `getCurrentDate` procura pela variável `currentDate` em seu escopo
2. a função `getCurrentDate` não encontra a variável `currentDate` em seu escopo
3. a função `getCurrentDate` procura pela variável `currentDate` no escopo de cima
4. a função `getCurrentDate` encontra a variável `currentDate` no escopo de cima
5. a função `getCurrentDate` retorna o valor da variável `currentDate`

Uma forma fácil de visualizarmos o scope chain agindo é o escopo interno fazendo a seguinte pergunta:

> _"Ei, essa variável existe no meu escopo?"_

Se sim, então eu vou usá-la, se não, eu vou perguntar para os escopos acima, até encontrá-la.

A busca só termina quando o escopo global é atingido, e aí se a variável não for encontrada será lançada uma exceção.

## Tipos primitivos

No JavaScript temos 6 tipos primitivos de dados:

- `String`
- `Number`
- `Boolean`
- `Null`
- `undefined`
- `Symbol`

A principal característica de um tipo primitivo é de ser imutável, ou seja, só conseguimos definir seu valor em sua criação, após isso não conseguimos mais alterá-lo, para ficar mais claro vamos ver o seguinte exemplo:

```javascript
const text = 'This is a string.';

// Alterando a segunda letra da string
text[1] = 'H';

console.log(text); // This is a string.
```

### Comparação e atribuição por valor

Tipos primitivos armazenam valores, portanto quando é feita uma comparação ou atribuição entre variáveis, essa comparação ou atribuição é feita por valor, vamos ver o exemplo:

```javascript
let bananaBR = 'Banana';
const bananaUSA = 'Banana';

// Comparando valores
console.log(bananaBR === bananaUSA); // true

console.log(bananaBR); // Banana

// Na atribuição é feita uma cópia do valor
bananaBR = bananaBR.toLowerCase();

console.log(bananaBR); // banana
```

## Tipos não primitivos

Ao contrário dos tipos primitivos, os não primitivos são mutáveis, portanto o valor de um objeto pode ser alterado após a sua criação. Segue os não primitivos:

- `Object`
- `Array`
- `Function`

`Array`, `Function` e todos os outros são envolvidos (wrapped) por `Object`. Os tipos primitivos com exceção de `Null` e `undefined` também tem um objeto wrapper equivalente:

- `String` para string
- `Number` para number
- `Boolean` para boolean
- `Symbol` para symbol

### Comparação e atribuição por referência

Tipos não primitivos armazenam referências (endereço de memória), portanto uma comparação ou atribuição é feita por referência.

No exemplo abaixo 2 objetos com a mesma estrutura e valores são diferentes quando comparados, pois a comparação é feita a partir das referências e não dos valores:

```javascript
const user = {
  name: 'Eric dos Reis',
  email: 'eric@exactaworks.com.br',
};

const customer = {
  name: 'Eric dos Reis',
  email: 'eric@exactaworks.com.br',
};

console.log(user === customer); // false
```

Quando um objeto é alterado, essa alteração se refletirá em todos os lugares que estão apontando para sua referência, vamos ver o exemplo com um array (arrays são objetos especiais no JavaScript):

```javascript
const plansPrices = [30, 180, 360];
const promotionalPlansPrices = plansPrices;

for (let i = 0; i < promotionalPlansPrices.length; i++) {
  promotionalPlansPrices[i] =
    promotionalPlansPrices[i] - promotionalPlansPrices[i] * 0.2;
}

// A alteração refletiu nos dois arrays
console.log(plansPrices); // [24, 144, 288]
console.log(promotionalPlansPrices); // [24, 144, 288]
```

## Objetos

Um objeto é um coleção dinâmica de chaves e valores de qualquer tipo de dado. No JavaScript é possível adicionar ou remover propriedades em um objeto a qualquer momento. Veja o exemplo de como declarar um objeto:

```javascript
// Objeto literal
const customer = {
  name: 'Eric',
  email: 'eric@exactaworks.com.br',
  phone: null,
  addresses: [
    {
      address: 'Av. João Barbosa',
      number: '111',
      complement: '',
      district: 'Centro',
      zipCode: '14801000',
      city: 'Araraquara',
      state: 'SP',
      country: 'Brasil',
      isMain: true,
    },
  ],
  ['documentNumber']: '481277775',
};

// Acessamos uma propriedade do objeto no formato dot notation -> objeto.propriedade
console.log(customer.name); // Eric

// Também podemos acessar uma propriedade no formato bracket notation -> objeto['propriedade']
console.log(customer['email']); // eric@exactaworks.com.br

// Utilizamos a palavra reservada delete para apagar uma propriedade de um objeto
delete customer.documentNumber;

// Adicionando uma nova propriedade ao objeto
customer.gender = 'male';

console.log(customer);
```

Temos 4 formas de declarar um objeto em JavaScript:

1. Objeto literal

```javascript
const car = {
  model: 'Model S',
  brand: 'Tesla',
};
```

2. Function constructor

```javascript
function Car(model, brand) {
  this.model = model;
  this.brand = brand;
}

const myCar = new Car('Model S', 'Tesla');

console.log(myCar.model); // Model S
```

3. Método `Object.create`

```javascript
const myCar = Object.create({
  model: 'Model S',
  brand: 'Tesla',
});

console.log(myCar.brand); // Tesla
```

4. Construtor de classe

```javascript
class Car {
  constructor(model, brand) {
    this.model = model;
    this.brand = brand;
  }

  getInfo() {
    return `${this.brand} ${this.model}`;
  }
}

const myCar = new Car('Model S', 'Tesla');

myCar.getInfo(); // Tesla Model S
```

Na linguagem JavaScript temos objeto global `Object`, que conta com várias funcionalidades úteis para o nosso dia a dia. Veja a documentação completa neste [link](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object).

## Arrays

Em JavaScript como já citado não existem arrays de forma concreta, o que na verdade temos são objetos especiais que oferecem meios de acessar e manipular suas propriedades por meio de índices. Outra característica que difere os arrays no JavaScript, é que um array não possui tamanho fixo, dando mais flexibilidade na remoção e adição de itens.

Temos 2 formas para criar uma array em JavaScript:

1. Forma básica

```javascript
const teslaCars = ['Model S', 'Model X', 'Model 3', 'Model Y'];

console.log(teslaCars); // ['Model S', 'Model X', 'Model 3', 'Model Y']
```

2. Array constructor

```javascript
const teslaCars = new Array('Model S', 'Model X', 'Model 3', 'Model Y');

console.log(teslaCars); // ['Model S', 'Model X', 'Model 3', 'Model Y']
```

Um array pode ou não ser inicializado, e acessamos um índice informando a sua posição:

```javascript
const teslaCars = [];

teslaCars[0] = 'Model S';
teslaCars[2] = 'Model X';

// Pulamos a posição 1 do array, sim isso é possível
console.log(teslaCars); // ['Model S', empty, 'Model X']

// A posição 1 foi inicializada com o valor undefined
console.log(teslaCars[1]); // undefined
```

Também conseguimos criar um array passando a quantidade de posições iniciais:

```javascript
const teslaCars = new Array(4);

console.log(teslaCars); // [empty x 4]

// A propriedade length informa a quantidade de posições do array
console.log(teslaCars.length); // 4
```

Um array também pode conter vários tipos de dados:

```javascript
const importExtensionsConfig = [
  'error',
  'ignorePackages',
  {
    ts: 'never',
    tsx: 'never',
  },
  500,
];

console.log(importExtensionsConfig); // ['error', 'ignorePackages', {…}, 500]
```

A linguagem JavaScript conta com uma vasta API de array, com várias funcionalidades úteis para o nosso dia a dia. Veja a documentação completa neste [link](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array).

## Funções

Uma função nada mais é do que um objeto que contém um bloco executável com retorno ou sem retorno, e cada declaração de função cria o seu próprio escopo. Temos várias formas de declarar uma função, por hora vamos focar nessas 3 formas:

1. Function declaration

```Javascript
function sum(a, b) {
  return a + b;
}
```

2. Function expression

```Javascript
const multiply = function(a, b) {
  return a * b;
}
```

3. Named function expression

```Javascript
const subtract = function subtract(a, b) {
  return a - b;
}
```

Mas qual é a diferença entre essas 3 formas de declarar uma função? A diferença é que a _function declaration_ sofre hoisting, ou seja, ela é elevada para o topo do escopo, possibilitando que você use a função antes de declará-la em seu código, veja o exemplo:

```Javascript
sum(4, 4); // 8

function sum(a, b) {
  return a + b;
}

multiply(2, 4) // Uncaught TypeError: multiply is not a function

var multiply = function(a, b) {
  return a * b;
}

subtract(10, 2) // Uncaught TypeError: subtract is not a function

var subtract = function subtract(a, b) {
  return a - b;
}
```

No outros 2 formatos o que sofre hoisting são as variáveis, já que a função está no lado da atribuição.

### First class functions (funções de primeira classe)

No JavaScript as funções são de primeira classe (first class functions), isso quer dizer que podemos atribuir uma função a uma variável, podemos passar uma função como parâmetro ou até mesmo retornar uma função de outra função, isso demonstra que funções são tratadas como qualquer outra variável.

#### Passando função via parâmetro (lambda)

Passar funções via parâmetro possibilita um alto grau de dinamismo e reaproveitamento de código, vamos ver o seguinte exemplo de cálculo de imposto sobre um produto:

```javascript
const product = {
  name: 'Xiaomi A2 lite',
  price: 800,
};

function taxFormula(price) {
  return price * 0.1;
}

function calculatePrice(price = 0, taxFormula) {
  return price + taxFormula(price);
}

console.log(calculatePrice(product.price, taxFormula)); // 880
```

#### Retornando uma função

Agora vamos ver o mesmo exemplo acima, mas agora retornando uma função com a fórmula do imposto pré-configurada, veja o exemplo:

```javascript
const product = {
  name: 'Xiaomi A2 lite',
  price: 800,
};

function taxFormulaConfig(tax) {
  return function (price) {
    return price + price * tax;
  };
}

const calculatePriceForBrazil = taxFormulaConfig(0.4);
const calculatePriceForEUA = taxFormulaConfig(0.2);

console.log(calculatePriceForBrazil(product.price)); // 1120
console.log(calculatePriceForEUA(product.price)); // 960
```

Assim como objetos e arrays, funções também tem uma API com vários utilitários, segue a [documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function).

## Closures

Para entender closures vamos primeiro recordar o exemplo onde retornamos uma função no tópico sobre funções:

```javascript
const product = {
  name: 'Xiaomi A2 lite',
  price: 800,
};

function taxFormulaConfig(tax) {
  return function (price) {
    return price + price * tax;
  };
}

const calculatePriceForBrazil = taxFormulaConfig(0.4);

console.log(calculatePriceForBrazil(product.price)); // 1120
```

No exemplo notamos que o valor do parâmetro `tax` passado na função `taxFormulaConfig` é utilizado dentro da função interna que é retornada, possibilitando que, quando a função interna for executada se lembre do valor do parâmetro `tax` que foi passado em sua criação. Esse mecanismo é o closure, que resumindo é um objeto especial que combina duas coisas: a função e o ambiente onde a função foi criada. Este ambiente consiste de quaisquer variáveis que estavam no escopo no momento em que a função foi criada.

Para mais detalhes segue a documentação com vários outros exemplos de utilização de [closures](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures).

## Bonus

- [Desvendando a linguagem JavaScript](https://www.youtube.com/watch?v=093dIOCNeIc&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc)
- [Eu quero saber se você consegue responder essas 3 perguntas de JavaScript!](https://www.youtube.com/watch?v=QVrrqgDhhu4)
