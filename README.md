## Descrição do Projeto
Este é um projeto em React que implementa um sistema de gerenciamento de cards para serem usados como agenda com funcionalidades de criação, edição e exclusão de itens. O projeto utiliza o localStorage para persistir os dados dos cards, permitindo que as informações sejam mantidas mesmo após a atualização da página. 

## Funcionalidades
* Criar cartão: Ao clicar no botão "CRIAR", o usuário pode adicionar um novo cartão com título e descrição.
* Editar cartão: O usuário pode editar os cartões existentes através de um modal, atualizando o título e a descrição.
* Excluir cartão: Os cartões podem ser excluídos, removendo-os da lista e do armazenamento local.
* Persistência de dados: Os dados dos cartões são armazenados no localStorage, garantindo que as alterações sejam mantidas entre as sessões do navegador. 

## Estrutura
* Componente App: Contém a lógica principal, incluindo a manipulação dos estados dos cartões, bem como a renderização da interface.
* Modal: Utilizado para criar e editar cartões, com a interface de entrada de título e descrição.
* Cards: Cada cartão exibido contém um título, uma descrição e botões para editar ou excluir.
* Componentes MyHeader e MyFooter: Componentes adicionais para o cabeçalho e rodapé da aplicação.

## Tecnologias Utilizadas
* ReactJS
* Bootstrap (para estilização e componentes como o modal)
* localStorage para persistência de dados
* Javascript
* HTML
* CSS
* Vite

## Como Usar
1. Clone o repositório.
2. Execute npm install para instalar as dependências.
3. Execute npm start para iniciar o servidor de desenvolvimento.
4. Acesse o aplicativo no seu navegador em http://localhost:3000.

