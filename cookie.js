setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

getCookie = (cName) => {
    const name = cName + "+";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if(val.indexOf(name) === 0) value = val.substring(name.length);
    })
    return value;
}

document.getElementById('acceptCookie').addEventListener('click', () => {
    setTimeout(() => {
        document.querySelector('.cookieBox').style.animation = "fadeOut 0.5s ease";
    }, 100);

    setTimeout(() => {
        document.querySelector('.cookieBox').style.display = "none";
        setCookie('acceptedCookies', true, 30);
    }, 600);
})

cookieMessage = () => {
    if(!getCookie("acceptedCookies")){
    document.querySelector('.cookieBox').style.display = "flex";}
}

window.addEventListener("load", cookieMessage);

document.getElementById('leave').addEventListener('click', () => {
    window.location="http://google.com";
})