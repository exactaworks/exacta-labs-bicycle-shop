# Introdução ao Git

Git é um sistema distribuído de versionamento de arquivos criado pelo saudoso [Linus Torvalds](https://pt.wikipedia.org/wiki/Linus_Torvalds)

## Motivação

Um software é nada mais nada menos do que um conjunto de arquivos com intruções lógicas, onde várias pessoas podem estar atuando no desenvolvimento. Vamos imaginar que haverá momentos em que várias pessoas poderão trabalhar no mesmo arquivo e no mesmo período de tempo, então, o que ocorrerá com o código desse arquivo? Qual será a versão final do arquivo?

É aí que entram os sistemas de versionamento de arquivos, que nos auxiliam a mesclar as diferenças entre versões de um arquivo, possibilitando com que cada desenvolvedor possa trabalhar em sua própria versão, que no final será mesclada com o código do restante do time.

Sistemas de versionamento também possibilitam a visualização do histórico de alterações e a possibilidade de voltar num ponto específico do desenvolvimento, como se fosse uma linha do tempo.

O Git não é o sistema versionamento mais antigo, mas é o mais consolidado, amplamente utilizado e o preferido dos Devs ♥️.

## Primeiros passos

- criar uma conta no [Github](https://github.com/)
- criar um repositório
- instalar o [Git](https://git-scm.com/)

## Legal e agora?

Vamos verificar se o Git foi instalado corretamente. Agora em diante iremos utilizar bastante o terminal, abra-o e digite o seguinte comando:

```
git --version
```

Com o Git instalado corremente vamos precisar _baixar_ o repositório para a nossa máquina, chamamos isso de clonar. Temos o seguinte comando para clonar um repositório:

```
git clone <repository>
```

## Versionando o primeiro arquivo

Vamos criar um arquivo README.md que vai conter as informações sobre o nosso projeto.

### Status de alterações

Temos 4 possíveis status de alterações em um arquivo:

- untracked
- unmodified
- modified
- staged

Para ver o status de um arquivos utilizamos o seguinte comando:

```
git status
```

### Staging area

O próximo passo de criar ou alterar um arquivo é adicioná-lo na staging area, para isso temos o seguinte comando:

`git add <file>` ou `git add .` para adicionar todos os arquivos

A imagem abaixo ilustra bem o ciclo de vida de um arquivo da criação até a staging area:

![Ciclo de vida de um arquivo](https://git-scm.com/book/en/v2/images/lifecycle.png)

### Commits

Ao adicionar um arquivo na staging area, isso significa que ele está pronto para ser comitado. Um commit agrupa um conjuto de alterações que, quando realizado é criado um ponto na linha do tempo, ou melhor dizendo, cria uma versão do(s) arquivo(s). Esse commit ganha uma identificação que possibilitará voltarmos futuramente na linha do tempo de alterações do arquivo. Além disso um commit também contém as informações do autor, e outras informações como data e horário das alterações.

Outro ponto importante é a mensagem de descrição de um commit, o que basicamente irá descrever brevemente os pontos que foram alterados ou adicionados.

Temos o seguinte comando para realizar um commit:

```
git commit -m "mensagem sucinta sobre a alteração"
```

## Repositório local e remoto

Tudo que fizemos até agora foi no nosso repositório local, ainda precisamos levar essas alterações para o repositório remoto, é aí que notamos a ideia de sistema distribuído que o Git introduziu no versionamento de arquivos, onde cada desenvolvedor mantém uma cópia do projeto localmente, podendo realizar as alterações, separando-as em pequenos commits e posteriormente mesclar essas alterações com o repositório remoto.

Para enviar os commits para o repositório remoto utilizamos o seguite comando:

```
git push
```

Agora é só digitar o usuário e senha do remoto e pronto! Versionamos o nosso primeiro arquivo o/

### Log de alterações

Podemos ver o log de alterações com o comando `git log`.

## Desfazendo as coisas

Temos algumas formas de desfazermos alguma alteração indesejada.

### `git checkout <file>`

Para desfazer as alterações em um arquivo que ainda não está _trackeado_, ou seja, um arquivo que não foi adicionado com o comando `git add <file>`.

### `git reset HEAD <file>`

Para remover o arquivo da staging area, lembrando que este comando só removerá o arquivo da staging, para remover a alteração terá que digitar com o comando `git checkout <file>`.

### `git revert <commit-hash>`

O `revert` desfaz até um devido commit, apagando todos os commits posteriores ao commit informado localmente. Para que essas alterações surtam efeito no remoto é precisa forçar um push com comando `git push --force`. Mas tenha cuidado, pois é uma operação que pode envolver implementações importantes realizadas por outras pessoas, é necessário que a equipe tenha ciência e esteja de acordo com tal operação.

## Bonus

- [Entendendo GIT | (não é um tutorial!)](https://www.youtube.com/watch?v=6Czd1Yetaac)
