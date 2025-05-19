function limparInput() {
    document.getElementById('escrever-msg').value = ""
}

if (window !== window.parent) {
    document.querySelector('header')?.remove();
}