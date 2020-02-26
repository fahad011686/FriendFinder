$("#submit").on("click", function (e) {
    e.preventDefault();

    getInfo();

    window.location = "./friends.html";




});

function getInfo() {
    var userInfo = {
        name: $("#name").val().trim(),
        age: $("#age").val().trim(),
        scores: [
            $('input[id=q1]:checked').val(),
            $('input[id=q2]:checked').val(),
            $('input[id=q3]:checked').val(),
            $('input[id=q4]:checked').val(),
            $('input[id=q5]:checked').val(),
            $('input[id=q6]:checked').val(),
            $('input[id=q7]:checked').val(),
            $('input[id=q8]:checked').val(),
            $('input[id=q9]:checked').val(),
            $('input[id=q10]:checked').val()
        ]
    }
    console.log("User input saved.")
    $.post("/api/friends", userInfo, function (data) { });


    uScore = userInfo.scores;

    matchMake();

}

function matchMake() {
    $.get("/api/friends", function (data) {

        compareScore = 0;
        for (var i = 0; i < data.length; i++) {
            for (var o = 0; o < data[i].scores.length; o++) {
                fScore = data[i].scores[o];
                function diff(a, b) {
                    return Math.abs(a - b);
                }
                total = diff(fScore, uScore[o]);
                compareScore += total;
            }
            console.log(compareScore)
            if (compareScore <= 20) {
                console.log("You have a match!")
            }
            compareScore = 0;
        }
    })
}