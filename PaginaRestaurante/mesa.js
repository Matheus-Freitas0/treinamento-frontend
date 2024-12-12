document.getElementById('adicionar').addEventListener('click', () => {
    const mesa = document.getElementById('mesa').value;
    const prato = document.getElementById('prato').value;
    const tamanho = document.getElementById('tamanho').value;
    const quantidade = document.getElementById('quantidade').value;
    const observacao = document.getElementById('observacao').value;

    const adicionais = Array.from(document.querySelectorAll('.adicionais input:checked')).map(el => el.value);

    if (!mesa || !prato) {
        alert('Por favor, preencha os campos obrigatórios.');
        return;
    }

    const pedido = document.createElement('div');
    pedido.className = 'order-item';
    pedido.innerHTML = `
        <p><strong>Mesa:</strong> ${mesa}</p>
        <p><strong>Prato:</strong> ${prato} (${tamanho})</p>
        <p><strong>Quantidade:</strong> ${quantidade}</p>
        <p><strong>Adicionais:</strong> ${adicionais.join(', ') || 'Nenhum'}</p>
        <p><strong>Observações:</strong> ${observacao || 'Nenhuma'}</p>
        <button class="remover">Remover</button>
    `;

    document.getElementById('pedidos').appendChild(pedido);

    pedido.querySelector('.remover').addEventListener('click', () => {
        pedido.remove();
    });

    document.getElementById('mesa').value = '';
    document.getElementById('prato').value = '';
    document.getElementById('tamanho').value = 'pequeno';
    document.getElementById('quantidade').value = 1;
    document.getElementById('observacao').value = '';
    document.querySelectorAll('.adicionais input:checked').forEach(el => el.checked = false);
});