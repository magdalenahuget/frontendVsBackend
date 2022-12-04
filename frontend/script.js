// Write the Frontend tasks here

// displays the word Server

function consoler() {
    let word = "Client"
    console.log(word);
};
setTimeout(consoler, 3000);

// displays the word Server in reverse order

function reverser() {
    let word = "Client"
    word = word.split("").reverse().join("");
    console.log(word);
}
setTimeout(reverser, 4000);

// displays the number of letters in the word Server

function counter() {
    let count = 0;
    let word = "Client";
    for (let letter of word) {
        count += 1
    }
    console.log(count);
}
setTimeout(counter, 4000);

// displays the number of letters in the word Server

function lenghter() {
    let word = "Client";
    let count = 0;
    count = word.length;
    console.log(count);
}
setTimeout(lenghter, 4000);

// displays the number of letters in the word Server multiplied by 3.

function multipler() {
    let word = "Client";
    counter = word.length * 3;
    console.log(counter);
}
setTimeout(multipler, 3000);

// displays the number of letters in the word Server divided by 5.

function divider() {
    let word = "Client";
    counter = word.length / 5;
    console.log(counter);
}
setTimeout(divider, 5000);