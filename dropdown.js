function show1() { 
    document.getElementById('industry').setAttribute('placeholder', 'E-Commerce');
}

function show2() { 
    document.getElementById('industry').setAttribute('placeholder', 'Healthcare');
}

function show3() { 
    document.getElementById('industry').setAttribute('placeholder', 'Real-Estate');
}

function show4() { 
    document.getElementById('industry').setAttribute('placeholder', 'Entertainment');
}

function show5() { 
    document.getElementById('industry').setAttribute('placeholder', 'Travel & Hospitality');
}

function show6() { 
    document.getElementById('industry').setAttribute('placeholder', 'Food & Beverage');
}

function show7() { 
    document.getElementById('industry').setAttribute('placeholder', 'Non-Profit Organizations');
}

function show8() { 
    document.getElementById('industry').setAttribute('placeholder', 'Technology');
}

function show9() { 
    document.getElementById('industry').setAttribute('placeholder', 'Manufacturing');
}

function show10() { 
    document.getElementById('industry').setAttribute('placeholder', 'Construction');
}

function show11() { 
    document.getElementById('industry').setAttribute('placeholder', 'Automotive');
}

function show12() { 
    document.getElementById('industry').setAttribute('placeholder', 'Retail');
}

function show13() { 
    document.getElementById('industry').setAttribute('placeholder', 'Beauty & Wellness');
}

function show14() { 
    document.getElementById('industry').setAttribute('placeholder', 'Sports & Fitness');
}

function show15() { 
    document.getElementById('industry').setAttribute('placeholder', 'Media & Publishing');
}

function show16() { 
    document.getElementById('industry').setAttribute('placeholder', 'Arts & Culture');
}

function show17() { 
    document.getElementById('industry').setAttribute('placeholder', 'Other');
}

let dropdown = document.querySelector('.industryDropdown');
dropdown.onclick = function(event) {
    // Prevent the event from bubbling up to the parent
    event.stopPropagation();
    dropdown.classList.toggle('active');
}

// Close the dropdown when clicking outside of it
document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});
