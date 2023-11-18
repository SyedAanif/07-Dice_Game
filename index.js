// Generate a random number upto 6
function img_path_by_random_num(){
    var randomNumber = Math.floor(Math.random()*6) + 1;
    // console.log(randomNumber)

    var img_path = "./images/dice"+randomNumber+".png";

    return [randomNumber, img_path];
}

var [randomNumber1, img1_path] = img_path_by_random_num();
document.querySelector(".img1").setAttribute("src",img1_path);

var [randomNumber2, img2_path] = img_path_by_random_num();
document.querySelector(".img2").setAttribute("src",img2_path);

document.querySelector("h1").textContent = "Refresh Me";

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
} 
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
    document.querySelector("h1").textContent = "Draw!!";
}
