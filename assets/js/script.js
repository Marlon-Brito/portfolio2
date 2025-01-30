// Trocando de temas (dark e light)
const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement;

function changeTheme(){
    const currentTheme = rootHtml.getAttribute('data-theme');

    currentTheme === 'dark' ? rootHtml.setAttribute('data-theme', 'light') : rootHtml.setAttribute('data-theme', 'dark');

    toggleTheme.classList.toggle('bi-sun');
    toggleTheme.classList.toggle('bi-moon-stars');
}

toggleTheme.addEventListener('click', changeTheme);

// Seleciona todos os tooltips (pequena mensagem que aparece ao interagir)
let tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');

// Percorrendo cada tooltip
for (let i of tooltips){
    new bootstrap.Tooltip(i); // Ative-o
}

// IntersectionObserver é uma API do JavaScript que permite observar se um elemento está visível na tela
// Verificando cada elemento escondido para revelá-lo quando o scroll o alcançar
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Adiciona a classe ao entrar na tela
        } else {
            entry.target.classList.remove('show'); // Remove a classe ao sair da tela
        }
    });
}, { threshold: 0.1 }); // Define quando o elemento será considerado visível (10% visível)

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// Pegando os dados do formulário de contato e transformando numa mensagem de e-mail
function enviarEmail(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let assunto = document.getElementById("assunto").value;

    // Monta a URL do `mailto:`
    let destinatario = "marlonbrito1950@gmail.com";
    let assuntoEmail = encodeURIComponent("Contato de " + nome);
    let corpoEmail = encodeURIComponent(
        "Nome: " + nome + "\n" +
        "E-mail: " + email + "\n\n" +
        "Assunto: " + assunto
    );

    // Redireciona para o `mailto:` com os dados preenchidos
    window.location.href = `mailto:${destinatario}?subject=${assuntoEmail}&body=${corpoEmail}`;
}