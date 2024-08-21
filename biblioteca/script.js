document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('form-livro');
    
    const listaLivros = document.getElementById('lista-livros');
    form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const titulo = document.getElementById('titulo').value;
    
    const autor = document.getElementById('autor').value;
    
    const ano = document.getElementById('ano').value;
    
    const livroItem = document.createElement('li');
    
    livroItem.textContent = `${titulo}  -  ${autor} (${ano})`;
    listaLivros.appendChild(livroItem);
    form.reset(); 
    });
   });
   