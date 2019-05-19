
function random_character() {
    chars = "abcdefghijklmnopqurstuvwxyz";
    return chars.substr( Math.floor(Math.random() * 26), 1);
}

var rchar = random_character();


