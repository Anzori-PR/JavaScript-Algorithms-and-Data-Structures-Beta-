const number = document.getElementById('number');
const convert_btn = document.getElementById('convert-btn');
const output = document.getElementById('output');


convert_btn.addEventListener('click', () => {
    convert();
});

function toRoman3(num) {
    if(num >= 1000) {return 'M'  + toRoman3(num - 1000);}
    if(num >=  900) {return 'CM' + toRoman3(num -  900);}
    if(num >=  500) {return 'D'  + toRoman3(num -  500);}
    if(num >=  400) {return 'CD' + toRoman3(num -  400);}
    if(num >=  100) {return 'C'  + toRoman3(num -  100);}
    if(num >=   90) {return 'XC' + toRoman3(num -   90);}
    if(num >=   50) {return 'L'  + toRoman3(num -   50);}
    if(num >=   40) {return 'XL' + toRoman3(num -   40);}
    if(num >=   10) {return 'X'  + toRoman3(num -   10);}
    if(num >=    9) {return 'IX' + toRoman3(num -    9);}
    if(num >=    5) {return 'V'  + toRoman3(num -    5);}
    if(num >=    4) {return 'IV' + toRoman3(num -    4);}
    if(num >=    1) {return 'I'  + toRoman3(num -    1);}
    return '';
}

function convert() {
    if(number.value === ''){
        output.innerText = "Please enter a valid number";
    }else if(number.value > 3999){
        output.innerText = "Please enter a number less than or equal to 3999";
    }else {
        output.innerText = toRoman3(number.value);
    }
}
