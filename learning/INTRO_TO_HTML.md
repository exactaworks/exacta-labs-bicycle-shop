# Introdução ao HTML

[HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) (abreviação para HyperText Markup Laguange, Liguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada para estruturar páginas Web. Criada por [Tim Berners-Lee](https://pt.wikipedia.org/wiki/Tim_Berners-Lee), teve a sua primeira versão oficial publicada em 1991.

Podemos imaginar uma página web como um jornal, onde temos um cabeçalho com um título de destaque (a manchete) e um subtítulo, logo em seguida temos vários blocos de textos (parágrafos) e imagens divididos em seções.

O propósito do HTML é organizar o conteúdo de uma página web por meio de tags, sendo cada tag específica para dado conteúdo, por exemplo:

- `p` parágrafo
- `h1`, `h2`, `h3`... título
- `img` imagem
- `a` link
- `ul`, `ol`, `dl` listas

## Estrutura básica de uma página

Uma página HTML tem uma estrutura básica que consiste da seguinte forma:

```html
<html>
  <head>
    <meta charset="utf-8" />

    <title>
      Título que aparece na aba do navegador
    </title>
  </head>

  <body>
    <h1>Nossa primeira página HTML</h1>

    <p>Legal, as coisas estão começando a tomar forma.</p>
  </body>
</html>
```

Na tag `head` é onde inserimos as meta tags com informações extras da página. Informações que apareção nos resultados de buscas e em postagens, quando compartilhamos a página em redes sociais por exemplo, sendo um conteúdo mais resumido e descritivo.

A tag `body` é onde fica o conteúdo visível, os nossos títulos, parágrafos, links, imagens, listas, formulários e por assim vai.

### Atributos

Tags HTML também podem conter atributos. Os atributos fornecem informações extras como nos exemplos abaixo:

- `<html lang="pt-BR">` lang informa idioma da página
- `<meta charset="utf-8">` charset informa o charset da página
- `<a href="https://developer.mozilla.org/pt-BR/docs/Aprender/HTML">` href informa o endereço a ser redirecionado quando o link âncora for acionado

## Elementos inline e bloco

Os elementos HTML são classificados em duas categorias: inline e bloco.

Elementos em bloco formam um bloco visível na página, eles aparecerão em uma nova linha logo após qualquer elemento que venha antes dele, e qualquer conteúdo depois de um elemento em bloco também aparecerá em uma nova linha. Elementos em bloco são geralmente elementos estruturais na página, por exemplo: `div`, `h1`, `p`, `ul`, etc. Um elemento em bloco poder ser aninhado dentro de um outro elemento em bloco, porém não pode ser aninhado dentro de um elemento inline. Veja a lista completa de [elementos em bloco](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements).

Elementos inline são aqueles que estão contidos dentro de elementos em bloco, envolvem apenas pequenas partes de conteúdo e não servem como agrupadores de conteúdo. Um elemento inline não fará que uma nova linha apareça no documento. Geralmente elementos inline aparecem dentro de parágrafos, por exemplo: `span`, `a`, `em`, `strong`. Veja a lista completa de [elementos inline](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements).

### Elementos vazios

A maioria dos elementos seguem a estrutura de abertura de tag, conteúdo e fechamento de tag, como no exemplo:

```html
<p>Conteúdo do elemento parágrafo</p>
```

Alguns elementos consistem em apenas uma única tag, como a tag `img` que por meio do atributo `src` informamos a localização da imagem a ser carregada:

```html
<img src="image/path" />
```

Temos vários elementos vazios como `meta`, `input`, `br`, `embed`, e etc. Veja a lista completa de [elementos vazio](https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#syntax-elements).

## HTML5 e semântica

O [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) trouxe diversas novas tags, atributos, comportamentos e APIs JavaScript (que veremos mais a frente) que possibilitaram um salto no desenvolvimento e possibilidades com aplicações web e websites.

As tags do HTML5 trouxeram mais semântica, mais sentido as nossas páginas. Antes disso dividíamos o conteúdo da seguinte maneira:

```html
<html>
  <head>
    <meta charset="utf-8" />

    <title>
      Título que aparece na aba do navegador
    </title>
  </head>

  <body>
    <div>
      <h1>Cabeçalho da nossa página</h1>

      <p>
        Subtítulo descrevendo resumidamente o conteúdo
      </p>
    </div>

    <div>
      <p>
        Primeiro parágrafo introduzindo o assunto
      </p>
      <p>
        Segundo parágrafo continuando o assunto
      </p>

      <h2>
        Um título para o próximo tópico da notícia
      </h2>
      <p>
        Terceiro parágrafo e assim vai ...
      </p>

      <h3>Referências</h3>

      <ul>
        <li>
          <a href="url">Referência 1</a>
        </li>
        <li>
          <a href="url">Referência 2</a>
        </li>
      </ul>
    </div>

    <div>
      <h4>Informação do rodapé</h4>

      <p>Texto sobre o autor</p>
    </div>
  </body>
</html>
```

Agora vamos trocar os elementos `div` por elementos mais semânticos do HTML5, veja o mesmo exemplo:

```html
<html>
  <head>
    <meta charset="utf-8" />

    <title>
      Título que aparece na aba do navegador
    </title>
  </head>

  <body>
    <article>
      <header>
        <h1>Cabeçalho da nossa página</h1>

        <p>
          Subtítulo descrevendo resumidamente o conteúdo
        </p>
      </header>

      <section>
        <p>
          Primeiro parágrafo introduzindo o assunto
        </p>
        <p>
          Segundo parágrafo continuando o assunto
        </p>

        <h2>
          Um título para o próximo tópico da notícia
        </h2>
        <p>
          Terceiro parágrafo e assim vai ...
        </p>

        <h3>Referências</h3>

        <ul>
          <li>
            <a href="url">Referência 1</a>
          </li>
          <li>
            <a href="url">Referência 2</a>
          </li>
        </ul>
      </section>

      <footer>
        <h4>Informação do rodapé</h4>

        <p>Texto sobre o autor</p>
      </footer>
    </article>
  </body>
</html>
```

Agora tudo faz mais sentido a primeira vista, a notícia está envolvida com um elemento article, temos um cabeçalho, um rodapé e um elemento section onde separamos o corpo da notícia.

A semântica é algo que devemos aperfeiçoar a cada dia em nossa jornada como desenvolvedor, pois dar sentido as coisas irá facilitar na compreensão do código criado. Isso fará com que o seu eu do futuro agradeça o seu eu do passado, ou até mesmo o seu colega de equipe.

> _Criar código é como escrever um livro, se for bem escrito será compreendido por todos._

## Bonus

- [Semântica: uma jornada pelos componentes web por Bernard De Luna](https://www.youtube.com/watch?v=57ZtsK0Y4vo)
