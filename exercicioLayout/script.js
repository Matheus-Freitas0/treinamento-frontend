function toggleVisibility() {
    const box = document.getElementById('toggle-box');
    if (box.classList.contains('hidden')) {
        box.classList.remove('hidden');
        box.classList.add('visible');
    } else {
        box.classList.remove('visible');
        box.classList.add('hidden');
    }
}