
var userNum = 0;
var randomNum = 0;
var wins = 0;
var losses = 0;

var picIds = ["#elephant", "#hippo", "#monkey", "#lion"];
var nums = [];

var gameActive = false;


var reset = function () {
    for (var i = 0; i < picIds.length; i++) {
        nums[i] = Math.floor(Math.random() * 10) + 1;
        $(picIds[i]).attr("value", nums[i]);
        console.log(nums[i]);
    }
    console.log(nums);
    randomNum = Math.floor(Math.random() * 70) + 30;
    userNum = 0;
    gameActive = true;
    $("#random-number").html(randomNum);
    $("#user-number").html(userNum);
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("button").hide();
    $("#win-lose").html("");
}

var btnClick = function () {
    if (gameActive) {
        var num = parseInt($(this).attr("value"));
        userNum += num;
        console.log("user " + userNum);
        console.log("random " + randomNum);
        $("#user-number").html(userNum);
        if (userNum === randomNum) {
            console.log("you win!")
            wins++;
            gameActive = false;
            $("#wins").html(wins);
            $("#win-lose").html("<h3>Awesome! You are King of the Jungle!</h3>");
            $("#play-again").show();
        }
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

$("#elephant").click(btnClick);
$("#hippo").click(btnClick);
$("#monkey").click(btnClick);
$("#lion").click(btnClick);
$("#play-again").click(reset);



















