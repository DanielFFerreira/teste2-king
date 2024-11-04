/*================= JAVASCRIPT =================*/
document.addEventListener('DOMContentLoaded', function() {
  const btnAlterarText = document.getElementById('btnAlterarText');
  const oneParagrafo = document.getElementById('oneParagrafo');

  const textoOriginal = oneParagrafo.textContent;
  const novoTexto = "Este é um outro parágrafo";

  btnAlterarText.addEventListener('click', function() {
    if (oneParagrafo.textContent === textoOriginal) {
      alteraText(oneParagrafo, novoTexto);
      alteraStateBtn("Voltar texto original");
    } else {
      alteraText(oneParagrafo, textoOriginal);
      alteraStateBtn("Alterar texto");
    }
  });
});

function alteraText(el, newEl) {
  el.textContent = newEl;
}

function alteraStateBtn(el) {
  btnAlterarText.textContent = el;
}