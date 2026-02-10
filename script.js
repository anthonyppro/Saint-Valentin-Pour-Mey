/* ===== RÉCUPÉRER LES ÉLÉMENTS HTML ===== */
// On récupère le bouton OUI
const btnOui = document.querySelector(".yes");

// On récupère le bouton NON
const btnNon = document.querySelector(".no");

// On récupère le message d'amour
const msgAmour = document.getElementById("message");

// On récupère le message d'erreur
const msgErreur = document.getElementById("error");

/* ===== FONCTION POUR AFFICHER LE MESSAGE D'AMOUR ===== */
function afficherOui() {
  // Crée les confettis
  creerConfettis();
  
  // On ajoute la classe "show" au message (le rend visible)
  msgAmour.classList.add("show");
  
  // Après 6 secondes, on le cache
  setTimeout(function() {
    msgAmour.classList.remove("show");
  }, 6000);
}

/* ===== FONCTION POUR AFFICHER LE MESSAGE D'ERREUR ===== */
function afficherNon() {
  // On ajoute la classe "show" au message d'erreur (le rend visible)
  msgErreur.classList.add("show");
  
  // Après 2000 millisecondes (2 secondes), on le cache
  setTimeout(function() {
    msgErreur.classList.remove("show");
  }, 2000);
}

/* ===== FONCTION POUR CRÉER LES CONFETTIS ===== */
function creerConfettis() {
  // Récupère le conteneur des confettis
  const conteneurConfettis = document.getElementById("confettis");
  
  // Crée 30 confettis
  for (let i = 0; i < 30; i++) {
    // Crée un élément confetti
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    
    // Couleur aléatoire (rouge, rose, or, blanc)
    const couleurs = ["#FF6B9D", "#FFC75F", "#FF6347", "#FFFFFF"];
    const couleur = couleurs[Math.floor(Math.random() * couleurs.length)];
    confetti.style.background = couleur;
    
    // Position aléatoire en largeur
    const x = Math.random() * 100;
    confetti.style.left = x + "%";
    
    // Rotation aléatoire
    const rotation = Math.random() * 360;
    confetti.style.transform = "rotate(" + rotation + "deg)";
    
    // Durée d'animation aléatoire entre 2 et 4 secondes
    const duree = 2 + Math.random() * 2;
    confetti.style.animation = "chute " + duree + "s ease-in forwards";
    
    // Ajoute le confetti à la page
    conteneurConfettis.appendChild(confetti);
    
    // Supprime le confetti après l'animation
    setTimeout(function() {
      confetti.remove();
    }, duree * 1000);
  }
}
// Quand on clique sur OUI, on appelle afficherOui()
btnOui.addEventListener("click", afficherOui);

// Quand on clique sur NON, on appelle afficherNon()
btnNon.addEventListener("click", afficherNon);
