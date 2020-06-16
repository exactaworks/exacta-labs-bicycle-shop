# Executando nossa aplicação em um servidor HTTP simples

Precisamos executar nossa aplicação em um servidor HTTP para podermos carregar nossos assets, para isso vamos utilizar um pacote do Node.js chamado `http-server`. Antes disso precisamos [instalar o NodeJS](https://nodejs.org/en/).

Após a instalação, vamos testar se o Node.js foi instalado corretamente, abra o terminal e entre com o seguinte comando:

```
node --version
```

Ok, agora vamos instalar o pacote `http-server` com o seguinte comando:

```
npm install -g http-server
```

Quase lá! Agora vamos levantar o nosso servidor, para isso temos o comando:

```
http-server src
```

Maravilha, agora é só acessar o localhost na porta 8080 pelo navegador `http://localhost:8080`.
