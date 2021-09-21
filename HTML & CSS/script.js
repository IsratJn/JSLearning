let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
for (let i = 0; i < styles.length; i++) {
    console.log(styles[i]);
}
let mid = (styles.length - 1) / 2;
console.log(mid);
styles[mid] = "Classics";
for (let i = 0; i < styles.length; i++) {
    console.log(styles[i]);
}
styles.shift();
for (let i = 0; i < styles.length; i++) {
    console.log(styles[i]);
}
styles.unshift("Rap", "Reggae");
for (let i = 0; i < styles.length; i++) {
    console.log(styles[i]);
}
