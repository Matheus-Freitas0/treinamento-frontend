document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-livro');
    const listaLivros = document.getElementById('lista-livros');
    const searchInput = document.getElementById('search');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const ano = document.getElementById('ano').value;
        const url = document.getElementById('imagem').value;
        const rating = document.getElementById('rating').value;

        const livroItem = document.createElement('li');
        livroItem.style.display = 'flex';
        livroItem.style.alignItems = 'center';
        livroItem.style.justifyContent = 'space-between';
        livroItem.style.marginBottom = '10px';
        livroItem.style.padding = '10px';
        livroItem.style.backgroundColor = '#fff';
        livroItem.style.border = '1px solid #ddd';
        livroItem.style.borderRadius = '8px';
        livroItem.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

        const imagem = document.createElement('img');
        imagem.src = url;
        imagem.alt = titulo;
        imagem.style.width = '50px';
        imagem.style.height = 'auto';
        imagem.style.borderRadius = '5px';
        imagem.style.marginRight = '15px';

        const info = document.createElement('div');
        info.className = 'info';
        
        const texto = document.createElement('span');
        texto.textContent = `${titulo} - ${autor} (${ano})`;
        
        const ratingSpan = document.createElement('span');
        ratingSpan.className = 'rating';
        ratingSpan.textContent = `⭐ ${rating}`;

        info.appendChild(texto);
        info.appendChild(ratingSpan);

        const removeButton = document.createElement('button');
        removeButton.textContent = '🗑';
        removeButton.addEventListener('click', function() {
            listaLivros.removeChild(livroItem);
        });

        livroItem.appendChild(imagem);
        livroItem.appendChild(info);
        livroItem.appendChild(removeButton);
        listaLivros.appendChild(livroItem);

        form.reset();
    });
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const livroItems = listaLivros.getElementsByTagName('li');

        Array.from(livroItems).forEach(item => {
            const titulo = item.querySelector('.info span').textContent.toLowerCase();
            const autor = item.querySelector('.info span').textContent.toLowerCase();

            if (titulo.includes(searchTerm) || autor.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }}
        )}
    )}
)