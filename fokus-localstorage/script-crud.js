const btnAdicionarTarefa  = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textarea = document.querySelector('.app__form-add-task');

const tarefas = [];

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.toggle('hidden');
});

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarefa = {
        descricao: textarea.value
    }

    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
});