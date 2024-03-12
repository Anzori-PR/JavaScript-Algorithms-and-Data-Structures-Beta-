const text_input = document.getElementById('text-input');
const check_btn = document.getElementById('check-btn');
const result = document.getElementById('result');


check_btn.addEventListener('click', () => {
    if(text_input.value === ''){
        alert("Please input a value");
    }else {
        checkPalindrome(text_input.value);
    }
});

function checkPalindrome(string) {
    var remove = /[\W_]/g;
    var word = string.replace(remove, '');
    console.log(word)

    const arrayValues = word.split('');
    const except = string.split(' ');
    console.log(except);

    const reverseArrayValues = arrayValues.reverse();

    const reverseString = reverseArrayValues.join('');

    if(word.toLowerCase() == reverseString.toLowerCase()) {
        result.innerText = word + " is a palindrome";
    }
    else {
        result.innerText = string + " is not a palindrome";
    }
}

