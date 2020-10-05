// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

function info() {
  let age = prompt("Quel est votre age ?");
  let sexe = prompt("Quel est votre sexe ?");
  let city = prompt("Dans quel ville vis tu ?");

  while (true) {
    if (
      confirm(
        `Vous avez bien ${age}, vous etes bien de sexe ${sexe} et vous vivez bien a ${city}`
      )
    ) {
      alert("Vous etes enregistré(e)");
      break;
    } else {
      alert("Veuillez recommencer");
      info();
    }
  }
}

info();
