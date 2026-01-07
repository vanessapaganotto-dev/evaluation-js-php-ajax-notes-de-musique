document.addEventListener("DOMContentLoaded", () => {
  const btnNotation = document.getElementById("btn-notation");
  const btnFermer = document.getElementById("btn-fermer");
  const conteneur = document.getElementById("conteneur-formulaire");
  const resultat = document.getElementById("resultat");
    
    btnFermer.style.display = "none";

  btnNotation.addEventListener("click", () => {
    if (document.getElementById("note-form")) {
      conteneur.style.display = "block";
    } else {
      fetch("generer_formulaire.php")
        .then(res => res.text())
        .then(html => {
          conteneur.innerHTML = html;
          ajouterListenerFormulaire();
        });
    }
    btnNotation.style.display = "none";
    btnFermer.style.display = "inline-block";
  });

  btnFermer.addEventListener("click", () => {
    conteneur.style.display = "none";
    btnNotation.style.display = "inline-block";
    btnFermer.style.display = "none";
    resultat.textContent = "";
  });

  function ajouterListenerFormulaire() {
    const select = document.getElementById("note-select");
    const form = document.getElementById("note-form");

    select.addEventListener("change", () => {
      const note = select.value;
      const url = form.action;

      fetch(url + "?note=" + encodeURIComponent(note))
        .then(response => response.text())
        .then(texte => {
          resultat.textContent = texte;
        })
        .catch(err => {
          resultat.textContent = "Erreur";
          console.error(err);
        });
    });
  }
});