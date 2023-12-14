const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e){
    e.preventDefault()

    const results = [];
    
    const radioButtons = document.querySelectorAll("input[type='radio']:checked")
    
    radioButtons.forEach((radioButton, index) => {
        if (radioButton.value === responses[index]){
            results.push(true)
    
        }
    })

    
    
    console.log(radioButtons);
    console.log
}    

