
function changeColor(elmnt){
  // on stocke dans une variable la valeur de l'attribut class de l'élément sur lequel on vient de cliquer
  var classValue = elmnt.getAttribute('class');
  // on utilise la fonction split pour éclater la chaine de caractères contenue dans la variable classValue,
  // on stocke le résultat dans la variable classArray qui devient un tableau
  // attention ! tous les index de tableaux commencent à 0 => tableau[index]
  var classArray = classValue.split(' ')
  // on applique au texte la couleur correspondant au deuxième élément du tableau
  document.getElementById('text').style.color = classArray[1];
}
