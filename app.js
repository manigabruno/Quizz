
// les bonnes réponses
const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handleSubmit);

// fonction qui permet de récupérer les reponses de l'utilisateur et qui renvoie la bonne reponse
function handleSubmit(e){
    e.preventDefault()

    const results = [];
    
// constante qui permet de récuperé l'input de l'utilisateur
const radioButtons = document.querySelectorAll("input[type='radio']:checked")

// Compare la valeur du tableau à la celle de l'utilisateur
radioButtons.forEach((radioButton, index) => {

    // Si la reponse de l'utilisateur est identique a la variable response
    if (radioButton.value === responses[index]){

        //Je renvoie true
        results.push(true)
        
    }else {
        // Sinon je renvoi false
        results.push(false)
    }
})
    // console.log(radioButtons);
    // console.log(results);
    showResults(results)
}
    // Je recupère les élément qui ont la classe results 
    const titleResult = document.querySelector(".results h2")
    const markResult = document.querySelector(".mark")
    const helpResult = document.querySelector(".help")

    // Fonction qui affiche les resultats 
    function showResults(results){

    // Je retourne le nombre d'erreur dans un tableau 
    const errorsNumber = results.filter(el => el === false).length;
    console.log(errorsNumber);
      
    // J'utilise un switch qui affiche des réponses en fonction des résultats
    switch (errorsNumber){
      case 0:
        case 0:
            titleResult.textContent = `✔️ Bravo, c'est un sans faute ! ✔️`;
            helpResult.textContent = "Quelle culture ...";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>5 / 5</span>";
            markResult.style.display = "block";
            break;
          case 1:
            titleResult.textContent = `✨ Vous y êtes presque ! ✨`;
            helpResult.textContent =
              "Retentez une autre réponse dans la case rouge, puis re-validez !";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>4 / 5</span>";
            markResult.style.display = "block";
            break;
          case 2:
            titleResult.textContent = `✨ Encore un effort ... 👀`;
            helpResult.textContent =
              "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>3 / 5</span>";
            markResult.style.display = "block";
            break;
          case 3:
            titleResult.textContent = `👀 Il reste quelques erreurs. 😭`;
            helpResult.textContent =
              "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>2 / 5</span>";
            markResult.style.display = "block";
            break;
          case 4:
            titleResult.textContent = `😭 Peut mieux faire ! 😭`;
            helpResult.textContent =
              "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>1 / 5</span>";
            markResult.style.display = "block";
            break;
          case 5:
            titleResult.textContent = `👎 Peut mieux faire ! 👎`;
            helpResult.style.display = "block";
            helpResult.textContent =
              "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span>0 / 5</span>";
            break;
            //  Default si le nombre n'est pas compris entre 0 et 5 ce qui est impossible mais on sécurise on prevoit quand meme 
          default:
            titleResult.textContent = "Wops, cas innatendu.";
    }
}   
    

