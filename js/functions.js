function demo() {
  let entier = 0;
  let chaine = "Bonjour";
  let valeurBooleenne = true || false;
  if (valeurBooleenne) {
    alert(entier);
    alert(chaine);
  } else if (valeurBooleenne) {
    // On ne devrait jamais arriver là
  } else {
    // Ici non plus
  }

  let message = "";
  for (let i = 0; i < 10; i++) {
    message += i;
  }
  alert(message);
}


function buttonClicked() {
  alert("Le bouton a été cliqué.");
}

function changeColor(element) {
  let color = "#";
  let hexCode = "0123456789ABCDEF";
  for (i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    color += hexCode[randomIndex];
  }
  element.style.color = color;
}

function modificationDOM() {
  let snippets = document.getElementsByClassName('code-prism');
  for (let i = 0; i < snippets.length; i++) {
    snippets.item(i).style.background = "yellow";
  }
}

function ajoutDOM() {
  let element = document.getElementById('ajout');
  element.innerHTML = "<p class=\"display-6\">Texte rajouté</p><div"
    + " class=\"row\"><p class=\"text-start\">Ceci est un exemple de texte"
    + " ajouté par Javascript.</p></div>";
}
