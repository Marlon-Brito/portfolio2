// Alterando modo de tela: light ou dark
const conteudo = document.getElementById('corpo');
const modoTelaLD = document.getElementById('modos--tela-ld');

modoTelaLD.addEventListener('change', function(){
    if (modoTelaLD.checked){
        conteudo.setAttribute('data-bs-theme', 'dark');
        modoTelaLD.style.backgroundImage = "url('./icones/lua.png')";
    }else{
        conteudo.setAttribute('data-bs-theme', 'light');
        modoTelaLD.style.backgroundImage = "url('./icones/sol.png')";
    }
})

// selecione todos os popovers
let popovers = document.querySelectorAll('[data-bs-toggle="popover"]');

// para cada popover
for (let i of popovers){
    new bootstrap.Popover(i); // ative-o
}

// seleciona todos os tooltips
let tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');

// para cada tooltip
for (let i of tooltips){
    new bootstrap.Tooltip(i); // ative-o
}