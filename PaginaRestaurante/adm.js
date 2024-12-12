let mesas = [];
let pratos = [];
let usuarios = [];

function cadastrarMesa() {
    const mesa = document.getElementById("mesa").value;
    if (mesa) {
        mesas.push({ numero: mesa });
        alert(`Mesa ${mesa} cadastrada com sucesso!`);
        adicionarLinhaMesa(mesa);
        document.getElementById("mesa").value = "";
    } else {
        alert("Por favor, insira um número de mesa.");
    }
}

function adicionarLinhaMesa(mesa) {
    const table = document.getElementById("mesasTable").getElementsByTagName("tbody")[0];
    const row = table.insertRow();
    row.insertCell(0).textContent = mesa;
    const actionsCell = row.insertCell(1);
    actionsCell.innerHTML = `
                <a href="#" class="action-btn edit-btn" onclick="editarMesa('${mesa}')"><i class="fas fa-edit"></i> Editar</a>
                <a href="#" class="action-btn delete-btn" onclick="excluirMesa('${mesa}')"><i class="fas fa-trash-alt"></i> Excluir</a>
            `;
}

function editarMesa(mesa) {
    alert(`Editando a Mesa ${mesa}`);
}

function excluirMesa(mesa) {
    const confirmDelete = confirm(`Deseja realmente excluir a Mesa ${mesa}?`);
    if (confirmDelete) {
        mesas = mesas.filter(m => m.numero !== mesa);
        document.querySelector(`#mesasTable tbody tr td:contains("${mesa}")`).parentNode.remove();
        alert(`Mesa ${mesa} excluída com sucesso!`);
    }
}

function cadastrarPrato() {
    const prato = document.getElementById("prato").value;
    if (prato) {
        pratos.push({ nome: prato });
        alert(`Prato ${prato} cadastrado com sucesso!`);
        adicionarLinhaPrato(prato);
        document.getElementById("prato").value = "";
    } else {
        alert("Por favor, insira o nome do prato.");
    }
}

function adicionarLinhaPrato(prato) {
    const table = document.getElementById("pratosTable").getElementsByTagName("tbody")[0];
    const row = table.insertRow();
    row.insertCell(0).textContent = prato;
    const actionsCell = row.insertCell(1);
    actionsCell.innerHTML = `
                <a href="#" class="action-btn edit-btn" onclick="editarPrato('${prato}')"><i class="fas fa-edit"></i> Editar</a>
                <a href="#" class="action-btn delete-btn" onclick="excluirPrato('${prato}')"><i class="fas fa-trash-alt"></i> Excluir</a>
            `;
}

function editarPrato(prato) {
    alert(`Editando o Prato ${prato}`);
}

function excluirPrato(prato) {
    const confirmDelete = confirm(`Deseja realmente excluir o prato ${prato}?`);
    if (confirmDelete) {
        pratos = pratos.filter(p => p.nome !== prato);
        document.querySelector(`#pratosTable tbody tr td:contains("${prato}")`).parentNode.remove();
        alert(`Prato ${prato} excluído com sucesso!`);
    }
}

function cadastrarUsuario() {
    const usuario = document.getElementById("usuario").value;
    if (usuario) {
        usuarios.push({ nome: usuario });
        alert(`Usuário ${usuario} cadastrado com sucesso!`);
        adicionarLinhaUsuario(usuario);
        document.getElementById("usuario").value = "";
    } else {
        alert("Por favor, insira o nome do usuário.");
    }
}

function adicionarLinhaUsuario(usuario) {
    const table = document.getElementById("usuariosTable").getElementsByTagName("tbody")[0];
    const row = table.insertRow();
    row.insertCell(0).textContent = usuario;
    const actionsCell = row.insertCell(1);
    actionsCell.innerHTML = `
                <a href="#" class="action-btn edit-btn" onclick="editarUsuario('${usuario}')"><i class="fas fa-edit"></i> Editar</a>
                <a href="#" class="action-btn delete-btn" onclick="excluirUsuario('${usuario}')"><i class="fas fa-trash-alt"></i> Excluir</a>
            `;
}

function editarUsuario(usuario) {
    alert(`Editando o Usuário ${usuario}`);
}

function excluirUsuario(usuario) {
    const confirmDelete = confirm(`Deseja realmente excluir o usuário ${usuario}?`);
    if (confirmDelete) {
        usuarios = usuarios.filter(u => u.nome !== usuario);
        document.querySelector(`#usuariosTable tbody tr td:contains("${usuario}")`).parentNode.remove();
        alert(`Usuário ${usuario} excluído com sucesso!`);
    }
}
