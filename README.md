# FriendFinder

![title](./app/img/logo_header.png)

*Friend Finder* is a full-stack application utilizing Express routing to capture and compare user data, and match you to a new (virtual) friend. The app is hosted online through Heroku.

## Function

```javascript
$.get("/api/friends", function (data) {
            uScore = 5;
            compareScore = 0;
            for (var i = 0; i < data.length; i++) {
                for (var o = 0; o < data[i].scores.length; o++) {
                    fScore = data[i].scores[o];
                    // console.log(fScore)
                    function diff(a, b) {
                        return Math.abs(a - b);
                    }
                    total = diff(fScore, uScore);
                    compareScore += total;
                }
                console.log(compareScore)
                compareScore = 0;
            }
        });                      
```

*FF* saves an array via API based on a survey. This array is compared using the function above to match you with a preset user.

## Home Page

![home](./app/img/home.png)

The landing page offers you three choices:

* **Survey** - Here you can take a short multiple choice test.
* **Friends** - This is an overview of the virtual friends you might match with.
* **Match!** - This will run the matchmaker, to pair you up with a potential new friend!

## Survey

![survey](./app/img/survey.png)

This page presents you with 10 simple questions that will capture your personality type. It is a basic form made using HTML and jQuery.

## Friends

![friends](./app/img/friends.png)

Here we can see the virtual friends that were programmed into the application. They are displayed using API data and jQuery to make a simple entry for each.

## Match!

![match](./app/img/match.png)

The match page runs the matchmaking function and displays the closest friend.
