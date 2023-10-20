const botao = document.querySelector('#botao-cadastro');
const botaoModal = document.querySelector('.botao-modal');
const modal = document.querySelector('#modal');

botao.addEventListener('click', () => {
    modal.classList.toggle('ativo');
});

botaoModal.addEventListener('click', () => {
    modal.classList.toggle('ativo');
});