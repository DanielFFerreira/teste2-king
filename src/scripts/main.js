/*================= JAVASCRIPT =================*/
document.addEventListener('DOMContentLoaded', function() {
  const btnAlterarText = document.getElementById('btnAlterarText');
  const oneParagrafo = document.getElementById('oneParagrafo');

  const textoOriginal = oneParagrafo.textContent;
  const novoTexto = "Este é um outro parágrafo";

  btnAlterarText.addEventListener('click', function() {
    if (oneParagrafo.textContent === textoOriginal) {
      alteraText(oneParagrafo, novoTexto);
      btnAlterarText.textContent = "Voltar texto original";
    } else {
      alteraText(oneParagrafo, textoOriginal);
      btnAlterarText.textContent = "Alterar texto";
    }
  });
});

function alteraText(el, newEl) {
  el.textContent = newEl;
}