
var advices = [];
async function getAPI(){
    var response = await fetch('https://api.adviceslip.com/advice');
    advices = await response.json();
    console.log(advices);
    displayAdvice();
}

getAPI();

function displayAdvice(){
    let advice ="";
    advice = `<h6 class="mb-4">ADVICE <span class="ms-3">#</span> <span>${advices.slip.id}</span> </h6>
                <h3 class="mb-5">${advices.slip.advice}</h3>`;


    document.querySelector('.advice').innerHTML = advice;

}