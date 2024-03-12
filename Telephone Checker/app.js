const input = document.querySelector('#user-input');
const result = document.querySelector('#result-div');
const check = document.querySelector('#check-btn');
const clear = document.querySelector('#clear-btn');


check.addEventListener('click', () => {
    if (input.value === '') {
        alert('Please provide a phone number');
    } else {
        logic();
    }
});

clear.addEventListener('click', () => {
    result.innerText = '';
});

function logic() {
    const first = input.value.replace(/ /g, '');   
    const second = first.replace(/-/g, '');        
    const third = second.replace(/\(/g, '');       
    const fourth = third.replace(/\)/g, '');       
    const finalnumber = fourth.replace(/^1/g, ''); 
    if(finalnumber.length > 10 ){
        result.innerText = 'Invalid US number: ' + input.value;
    }else if (telephoneCheck(input.value) === true) {
        result.innerText = 'Valid US number: ' + input.value;
    }else {
        result.innerText = 'Invalid US number: ' + input.value;
    }
}

function telephoneCheck(str) {
    var result = false;
    var formats = [
        /^\d\d\d\d\d\d\d\d\d\d$/,			// 5555555555
        /^\d\d\d-\d\d\d-\d\d\d\d/,			// 555-555-5555
        /^\(\d\d\d\)\d\d\d-\d\d\d\d/,		// (555)555-5555
        /^1\s\d\d\d\s\d\d\d\s\d\d\d\d/,		// 1 555 555 5555
        /^1\s\d\d\d-\d\d\d-\d\d\d\d/,		// 1 555-555-5555
        /^1\(\d\d\d\)\d\d\d-\d\d\d\d/,		// 1(555)555-5555
        /^1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d/	// 1 (555) 555-5555
    ];

    result = formats.some(reg => reg.test(str));

    return result;
}
