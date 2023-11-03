function convertNumToWords(number){
    const ones = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
    const tens = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    const thousands = [' ', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion'];

    if (number === 0){
        return "zero";
    } 

    if (number < 0) return "minus" + convertNumToWords(Math.abs(number));

let words = "";

for (let i = 0; i < thousands.length; i++) {
    const x = number % 1000;

    if (x !== 0) {
        if (i === 0) {
            words = convertNumToWordsInHundreds(x) + " " + thousands[i] + " " + words
        } else {
            words = convertNumToWordsInHundreds(x) + " " + thousands[i] + " " + words
        }
    }

    number = Math.floor(number / 1000);
}

return words.trim();
}

function convertNumToWordsInHundreds(number){
    const ones = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
    const tens = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];

let words = "";

if (number % 1000 < 10 || number % 1000 >= 20) {
    words = ones[number % 10];
    number = Math.floor(number / 10);
    words = tens[number % 10] + " " + words;
    number = Math.floor(number / 10);
}
else {
    words = teens[number % 10];
    number = Math.floor(number / 100);
}

if (number === 0) {
    return words;
}

return ones[number] + "hundred and " + words;

}

const numberInput = document.querySelector("#numberInput");
const numberInWord = document.querySelector("#numberInWord");
numberInput.addEventListener('keyup', ()=>{
    numberInWord.innerHTML = `
    <br / > Numbers In words => <br /> <br />
    ${convertNumToWords(numberInput.value)}
    `
})
