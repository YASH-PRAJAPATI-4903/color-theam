toggle.addEventListener('click', (e) => {  
    var chars ="1234567890f";
    var passwordlen = 7;
    var password="#";
    for (var i =1; i < passwordlen ;i++) {
        var random = Math.floor(Math.random()*chars.length)
        password+=chars.substring(random,random+1);

    }
    document.body.style.background= password
}) 