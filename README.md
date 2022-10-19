![elo7](https://logospng.org/download/elo7/logo-elo7-256.png)

## Tecnologias :computer:

 - [React](https://pt-br.reactjs.org/)
 - [TypeScript](https://www.typescriptlang.org/)
 - [SASS](https://sass-lang.com/)
 - [Jest](https://jestjs.io/pt-BR/)
 - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
 - [Phosphor Icons](https://phosphoricons.com/)
 - [Motion](https://www.framer.com/motion/)


## Cores :black_joker:

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| white | #FFFFFF |
| White Smoke |  #F5F5F5 |
| Gray Light | #C8C8C8 |
| Gray Darkest | #606060 |
| Green Light | #008B8B |
| Yellow Base | #ffcc00 |

## Principais desafios :grimacing:

- Criar a aplicação Mobile First apesar de não especificado no design, depois tornar ela responsiva para web
- Tratar os dados retornados pela API, para exibir as vagas de acordo com as regras de negócio propostas

## Observações :x:

Como a api fornecida é http e não https, quando eu fiz o deploy na Vercel, ela deu o seguinte erro:

"Mixed Content: The page at 'https://elo7-landing-page.vercel.app/' was loaded over HTTPS,
but requested an insecure resource 'http://www.mocky.io/v2/5d6fb6b1310000f89166087b'.
This request has been blocked; the content must be served over HTTPS."

Basicamente ela me proibiu fazer request para esse endereço por não ser confiavel, para permitir:

Etapas para permitir conteúdo não seguro no Chrome

Para permitir conteúdo inseguro em sites individuais no Chrome, clique no ícone de cadeado na barra de URL e clique em 'Configurações do site'.

![App Screenshot](https://i.stack.imgur.com/iwBRO.png)

![App Screenshot](https://i.stack.imgur.com/VgkNP.png)

Lá você verá uma lista de várias permissões que a página possui. Escolha 'Permitir' ao lado de 'Conteúdo inseguro'.

Agora seu site HTTPS pode acessar o endpoint HTTP

(Lembrando que isso é só para visualizar o deply do site, em develop funciona normalmente)

## Testes :test_tube:

Para rodas os testes, rode o seguinte comando:

```bash
  yarn test
```


## Instalação :pushpin:

```bash
  # git clone https://github.com/DglsAlmeida/elo7-landing-page.git
  # cd elo7-landing-page
  # yarn
```
