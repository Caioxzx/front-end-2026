// script.js - Resolução Questão 04

function add() {
    // Seleciona o container que envolve os cartões
    const container = document.getElementById('Cards');

    // Cria um novo elemento div para o card do Lucas Paquetá
    const novoCard = document.createElement('div');
    // Adiciona as classes do bootstrap para o card e um espaçamento à esquerda (ms-4)
    novoCard.className = 'card ms-4'; 
    novoCard.style.width = '22rem';
    
    // Insere o conteúdo HTML interno do card utilizando template string
    novoCard.innerHTML = `
        <img src="img/Lucas_Paqueta.webp" class="card-img-top" alt="Lucas Paquetá" onerror="this.src='Lucas_Paqueta.webp';">
        <div class="card-body">
            <h5 class="card-title">
                <span class="card-title">Lucas Tolentino (Paquetá)</span>
                <span class="badge text-bg-secondary">8,8</span>
            </h5>
            <p class="card-text">
                <span><strong>Nascimento:</strong> 27/08/1997 (28 anos)</span><br>
                <span><strong>Altura:</strong> 1,80 m</span><br>
                <span><strong>Posição:</strong> Meio-campista</span><br>
            </p>
        </div>
    `;

    // Adiciona o novo card ao final do container
    container.appendChild(novoCard);
}
