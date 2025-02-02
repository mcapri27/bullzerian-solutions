//document.getElementById('industry').addEventListener('click', function() {
    //document.querySelector('industryOption').toggleAttribute(this.hidden);
//});

function show1() { 
    document.getElementById('industry').setAttribute('placeholder', 'E-Commerce');
    dropdown.classList.toggle('active');
}

function show2() { 
    document.getElementById('industry').setAttribute('placeholder', 'Healthcare');
    dropdown.classList.toggle('active');
}

function show3() { 
    document.getElementById('industry').setAttribute('placeholder', 'Real-Estate');
    dropdown.classList.toggle('active');
}

function show4() { 
    document.getElementById('industry').setAttribute('placeholder', 'Entertainment');
    dropdown.classList.toggle('active');
}

function show5() { 
    document.getElementById('industry').setAttribute('placeholder', 'Travel & Hospitality');
    dropdown.classList.toggle('active');
}

function show6() { 
    document.getElementById('industry').setAttribute('placeholder', 'Food & Beverage');
    dropdown.classList.toggle('active');
}

function show7() { 
    document.getElementById('industry').setAttribute('placeholder', 'Non-Profit Organizations');
    dropdown.classList.toggle('active');
}

function show8() { 
    document.getElementById('industry').setAttribute('placeholder', 'Technology');
    dropdown.classList.toggle('active');
}

function show9() { 
    document.getElementById('industry').setAttribute('placeholder', 'Manufacturing');
    dropdown.classList.toggle('active');
}

function show10() { 
    document.getElementById('industry').setAttribute('placeholder', 'Construction');
    dropdown.classList.toggle('active');
}

function show11() { 
    document.getElementById('industry').setAttribute('placeholder', 'Automotive');
    dropdown.classList.toggle('active');
}

function show12() { 
    document.getElementById('industry').setAttribute('placeholder', 'Retail');
    dropdown.classList.toggle('active');
}

function show13() { 
    document.getElementById('industry').setAttribute('placeholder', 'Beauty & Wellness');
    dropdown.classList.toggle('active');
}

function show14() { 
    document.getElementById('industry').setAttribute('placeholder', 'Sports & Fitness');
    dropdown.classList.toggle('active');
}

function show15() { 
    document.getElementById('industry').setAttribute('placeholder', 'Media & Publishing');
    dropdown.classList.toggle('active');
}

function show16() { 
    document.getElementById('industry').setAttribute('placeholder', 'Arts & Culture');
    dropdown.classList.toggle('active');
}

function show17() { 
    document.getElementById('industry').setAttribute('placeholder', 'Other');
    dropdown.classList.toggle('active');
} 

let dropdown = document.querySelector('.industryDropdown');
dropdown.onclick = function(){
    dropdown.classList.toggle('active');
}