
var userNum = 0;
var randomNum = 0;
var wins = 0;
var losses = 0;

var picIds = ["#elephant", "#hippo", "#monkey", "#lion"];
var nums = [];

var gameActive = false;


var reset = function () {
    //set picture values to random numbers 1-10
    //I am having trouble making it so each picture has a different value
    for (var i = 0; i < picIds.length; i++) {
        nums[i] = Math.floor(Math.random() * 10) + 1;
        $(picIds[i]).attr("value", nums[i]);
        console.log(nums[i]);
    }
    console.log(nums);
    //get random number for use to get to 30-100
    randomNum = Math.floor(Math.random() * 70) + 30;
    //reset user number
    userNum = 0;
    gameActive = true;
    //print numbers to screen and hide win/lose statement and play again button
    $("#random-number").html(randomNum);
    $("#user-number").html(userNum);
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("button").hide();
    $("#win-lose").html("");
}

var btnClick = function () {
    if (gameActive) {
        //get value of pic and add to user number
        var num = parseInt($(this).attr("value"));
        userNum += num;
        console.log("user " + userNum);
        console.log("random " + randomNum);
        //wins
        $("#user-number").html(userNum);
        if (userNum === randomNum) {
            console.log("you win!")
            wins++;
            gameActive = false;
            $("#wins").html(wins);
            $("#win-lose").html("<h3>Awesome! You are King of the Jungle!</h3>");
            $("#play-again").show();
        }
        //losses
        if (userNum > randomNum) {
            console.log("you lose!")
            losses++;
            gameActive = false;
            $("#losses").html(losses);
            $("#win-lose").html("<h3>Oh no! You are not King of the Jungle!</h3>");
            $("#play-again").show();
        }
    }
}

reset();

//run btnClick fuction when each button is clicked
$(".button").click(btnClick);

//run reset function when play again button is called
$("#play-again").click(reset);



















