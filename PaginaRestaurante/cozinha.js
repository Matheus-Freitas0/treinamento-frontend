const pedidosPendentes = [
    { id: 1, prato: 'Pizza', tamanho: 'Médio', quantidade: 2 },
    { id: 2, prato: 'Hambúrguer', tamanho: 'Grande', quantidade: 1 },
    { id: 3, prato: 'Sushi', tamanho: 'Pequeno', quantidade: 3 }
];

const orderList = document.getElementById('order-list');

function renderPedidos() {
    orderList.innerHTML = '<h2>Pedidos Pendentes</h2>';
    pedidosPendentes.forEach(item => {
        const pedidoElement = document.createElement('div');
        pedidoElement.classList.add('order-item');
        pedidoElement.innerHTML = `
            <span>${item.prato} (${item.tamanho}) - ${item.quantidade}x</span>
            <div>
                <button class="confirm" onclick="confirmarPreparo(${item.id})">Confirmar Preparo</button>
                <button class="cancel" onclick="cancelarPedido(${item.id})">Cancelar Prato</button>
            </div>
        `;
        orderList.appendChild(pedidoElement);
    });
}

function confirmarPreparo(id) {
    alert(`Prato com ID ${id} confirmado para preparo.`);
}

function cancelarPedido(id) {
    alert(`Prato com ID ${id} cancelado.`);
}

renderPedidos();