document.getElementById("gerar").addEventListener("click", function () {
  let comprimento = document.getElementById("comprimento").value;
  let maiusculas = document.getElementById("maiusculas").checked;
  let minusculas = document.getElementById("minusculas").checked;
  let numeros = document.getElementById("numeros").checked;
  let especiais = document.getElementById("especiais").checked;

  if (comprimento <= 0) {
    document.getElementById('feedback').textContent = 'Comprimento inválido!';
    return
  }

  if (!maiusculas && !minusculas && !numeros && !especiais) {
    document.getElementById('feedback').textContent = "Selecione pelo menos uma opção!"
    return
  }

  let senha = gerarSenha(comprimento, maiusculas, minusculas, numeros, especiais)
  document.getElementById('senha').textContent = senha
  document.getElementById('feedback').textContent = 'Sua nova senha segura foi gerada com sucesso! Está pronta para uso.'
})

document.getElementById('copiar').addEventListener('click', function () {
  let senha = document.getElementById('senha').textContent
  navigator.clipboard.writeText(senha).then(function () {
    document.getElementById('feedback').textContent = 'Senha copiada para a área de transferência!';
  })
})

function gerarSenha(comprimento, maiusculas, minusculas, numeros, especiais) {
  let caracteres = "";
  if (maiusculas) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (minusculas) caracteres += "abcdefghijklmnopqrstuvwxyz";
  if (numeros) caracteres += "0123456789";
  if (especiais) caracteres += "!@#$%^&*()-_=+[{]}|;:'\",<.>/?";

  let senha = "";

  for (let i = 0; i < comprimento; i++) {
    let indice = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indice];
  }
  return senha;
}
