Aprendendo React e Next.js 



**()Conceitos Gerais()**



**Next.js**

\-- Next.js é um **framework React** flexível que fornece ferramentas para aplicações web full-stack rápidas.



**React**

\-- Já o React é uma **biblioteca JavaScript declarativa**, usada para construir interfaces de usuários interativas.



**Renderização de interfaces de usuário (UI)**

\-- Quando um usuário acessa uma URL, o servidor retorna um arquivo HTML para o navegador, que lê o arquivo e constrói o DOM (Modelo de Objeto de Documento).



\-- O DOM é a **representação em objeto dos elementos HTML**, ele atua como uma ponte entre seu código e a interface de usuário, possuindo uma estrutura similar a uma árvore genealógica.



&#x20;                                     |----|

&#x20;                                     | H5 |

|------|      |------|	   |-----|   /|----|	|----|

| HTML |------| BODY |-----| DIV |---           | LI |

|------|      |------|     |-----|   \\|----|   /|----|

&#x09;			      | UL |---

&#x09;			      |----|   \\|----|

&#x09;				        | LI |

&#x09;					|----|









**()Aprendendo na Prática()**



\-- O React surge como uma solução em relação a programação imperativa, para utiliza-la você deve no arquivo html, adicionar: 



&#x20;   **<script src="https://unpkg.com/react@18/umd/react.development.js"></script>**

&#x20;   **<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>**



\-- Após isso, em vez de manipular o DOM com o JS puro, adicione:



° **ReactDOM.createRoot() -->** método para selecionar um elemento DOM específico e criar uma raiz para exibir seus componentes React.

° **root.render() -->** método para renderizar seu código React no DOM 



Exemplo: 



**<html>**

&#x20; **<body>**

&#x20;   **<div id="app"></div>**

&#x20;   **<script src="https://unpkg.com/react@18/umd/react.development.js"></script>**

&#x20;   **<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>**

&#x20;   **<script>**

&#x20;     **const app = document.getElementById('app');**

&#x20;     **const root = ReactDOM.createRoot(app);**

&#x20;     **root.render(<h1>Develop. Preview. Ship.</h1>);**

&#x20;   **</script>**

&#x20; **</body>**

**</html>**





\-- Entretanto é importante saber que, "<h1>...</h1>" não é um JS válido e o navegador não renderizará. Comumente chamado de **JSX**.

\-- Por padrão navegadores não entendem o JSX, por isso nós precisaremos de um compilador JS, como o **BABEL**.



\-- Ao adicionar a linha abaixo, o navegador entenderá o JSX e o código não dará erro:

&#x20;**<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>**

&#x20;   **<script type="text/jsx">**





Exemplo com o BABEL:



**<html>**

&#x20;   **<body>**

&#x20;       **<div id="app"></div>**



&#x20;       **<script src="https://unpkg.com/react@18/umd/react.development.js"></script>**

&#x20;       **<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>**



&#x20;       **<!-- Babel Script -->**

&#x20;       **<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>**



&#x20;       **<script type="text/jsx">**



&#x20;           **//Seleciona um elemento, com um id específico//**



&#x20;           **const app = document.getElementById('app');**

&#x20;           **const root = ReactDOM.createRoot(app);**



&#x20;           **root.render(<h1> Develop. Preview. Ship </h1>);**



&#x20;       **</script>**



&#x20;   **</body>**

**</html>**





**()CONCEITOS BÁSICOS DO REACT()**



\-- Existem 3 conceitos fundamentais do React, que são:



\-0 **Componentes**

\-0 **Adereços**

\-0 **Estado**





























































































































































































































