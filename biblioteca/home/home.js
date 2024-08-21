const searchInput = document.getElementById('search')
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
)
