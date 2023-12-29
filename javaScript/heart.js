let number = 20;
let star = " ";
for (let i = number / 2; i < number; i += 2) {
    for (let j = 1; j < number - i; j += 2) {
        star += " ";
    }
    for (let j = 1; j < i + 1; j++) {
        star += "*";
    }
    for (let j = 1; j < number - i + 1; j++) {
        star += " ";
    }
    for (let j = 1; j < i + 1; j++) {
        star += "*";
    }
    star += "\n";
}
for (let i = number; i > 0; i--) {
    for (let j = 0; j < number - i; j++) {
        star += " ";
    }
    for (let j = 0; j < i * 2; j++) {
        star += "*";
    }
    star += "\n";
}
console.log(star);