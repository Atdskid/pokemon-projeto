document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo');
    passos.forEach((passo) => {
        passo.classList.remove('ativo');
    });
    passos[0].classList.add('ativo'); // Inicia com o primeiro passo

    document.querySelectorAll('.btn-proximo').forEach(button => {
        button.addEventListener('click', () => {
            const currentStep = button.closest('.passo');
            const nextStepId = button.getAttribute('data-proximo');
            currentStep.classList.remove('ativo');
            document.getElementById(`passo-${nextStepId}`).classList.add('ativo');
        });
    });
});
