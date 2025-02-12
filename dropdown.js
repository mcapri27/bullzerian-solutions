//document.getElementById('industry').addEventListener('click', function() {
    //document.querySelector('industryOption').toggleAttribute(this.hidden);
//});

function show1() { 
    document.getElementById('industry').setAttribute('placeholder', 'E-Commerce');
    dropdown.classList.remove('active');
}

function show2() { 
    document.getElementById('industry').setAttribute('placeholder', 'Healthcare');
    dropdown.classList.remove('active');
}

function show3() { 
    document.getElementById('industry').setAttribute('placeholder', 'Real-Estate');
    dropdown.classList.remove('active');
}

function show4() { 
    document.getElementById('industry').setAttribute('placeholder', 'Entertainment');
    dropdown.classList.remove('active');
}

function show5() { 
    document.getElementById('industry').setAttribute('placeholder', 'Travel & Hospitality');
    dropdown.classList.remove('active');
}

function show6() { 
    document.getElementById('industry').setAttribute('placeholder', 'Food & Beverage');
    dropdown.classList.remove('active');
}

function show7() { 
    document.getElementById('industry').setAttribute('placeholder', 'Non-Profit Organizations');
    dropdown.classList.remove('active');
}

function show8() { 
    document.getElementById('industry').setAttribute('placeholder', 'Technology');
    dropdown.classList.remove('active');
}

function show9() { 
    document.getElementById('industry').setAttribute('placeholder', 'Manufacturing');
    dropdown.classList.remove('active');
}

function show10() { 
    document.getElementById('industry').setAttribute('placeholder', 'Construction');
    dropdown.classList.remove('active');
}

function show11() { 
    document.getElementById('industry').setAttribute('placeholder', 'Automotive');
    dropdown.classList.remove('active');
}

function show12() { 
    document.getElementById('industry').setAttribute('placeholder', 'Retail');
    dropdown.classList.remove('active');
}

function show13() { 
    document.getElementById('industry').setAttribute('placeholder', 'Beauty & Wellness');
    dropdown.classList.remove('active');
}

function show14() { 
    document.getElementById('industry').setAttribute('placeholder', 'Sports & Fitness');
    dropdown.classList.remove('active');
}

function show15() { 
    document.getElementById('industry').setAttribute('placeholder', 'Media & Publishing');
    dropdown.classList.remove('active');
}

function show16() { 
    document.getElementById('industry').setAttribute('placeholder', 'Arts & Culture');
    dropdown.classList.remove('active');
}

function show17() { 
    document.getElementById('industry').setAttribute('placeholder', 'Other');
    dropdown.classList.remove('active');
} 

let dropdown = document.querySelector('.industryDropdown');
dropdown.onclick = function(){
    dropdown.classList.toggle('active');
}
