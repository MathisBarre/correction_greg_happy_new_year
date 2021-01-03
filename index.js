function displayMessage(event) {
  event.preventDefault()
  
  var hasCovid = document.getElementById("covid").checked;
  var isInFamily = document.getElementById("family").checked;
  var hasProjectAtTime = document.getElementById("projects").checked;
  
  var messageComplement;
  var textNewYear = "Je te souhaite une bonne année";
  
  if (!hasCovid && isInFamily && hasProjectAtTime) {
    messageComplement = ". Tout est parfait !";
  } else if (hasCovid && isInFamily && hasProjectAtTime) {
    messageComplement = " et une bonne santé !";
  } else if ( !hasCovid && !isInFamily && hasProjectAtTime ) {
    messageComplement = ", même en solitaire !";
  } else if ( hasCovid && isInFamily && !hasProjectAtTime ) {
    messageComplement = " et plein de courage pour ton projet suivant !";
  } else {
    messageComplement = ". J'espère que les choses vont s'arranger pour toi !";
  }
  
  document.getElementById('message').textContent = textNewYear + messageComplement
}

document.getElementById('button').addEventListener('click', displayMessage)