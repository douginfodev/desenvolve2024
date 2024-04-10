# desenvolve2024
Programa Desenvolve 2024 - O Boticário

1) Alternando visibilidade do formulário
Imagine que você está desenvolvendo uma aplicação web similar ao Fokus, chamada "TaskFlow", que também possui uma funcionalidade de lista de tarefas.

Sua tarefa é implementar a funcionalidade de alternar a visibilidade do formulário de adicionar tarefas. Quando o usuário clica no botão "Adicionar Tarefa", o formulário, que inicialmente está escondido, deve ser exibido. Se o usuário clicar novamente no botão enquanto o formulário estiver visível, este deve ser escondido.

Para isso, você precisará monitorar o evento de clique no botão "Adicionar Tarefa" e alternar a classe hidden no formulário de adição de tarefa. O botão "Adicionar Tarefa" tem a classe .btn-add-task e o formulário tem a classe .form-add-task. Utilize o JavaScript para adicionar a lógica necessária.

2) Criação de uma lista de tarefas interativa
Você está desenvolvendo uma aplicação web chamada "Task Flow" para gerenciamento de tarefas. Você deseja permitir que os usuários adicionem novas tarefas por meio de um formulário, utilizando um textarea para a descrição da tarefa. Sua tarefa é implementar a funcionalidade de adicionar tarefas à lista e garantir que essas tarefas sejam salvas no localStorage, de modo que elas persistam mesmo após o navegador ser recarregado.

Siga as instruções para completar este exercício:

Adicione um ouvinte de evento submit ao formulário de adição de tarefas. Quando o formulário for submetido, impeça o comportamento padrão de recarga da página;
Recupere o valor digitado no textarea e crie um objeto de tarefa com esse valor;
Adicione a nova tarefa a uma lista de tarefas e salve essa lista no localStorage;
Considere que já existe um textarea com a classe app__form-textarea e um formulário no seu HTML.
