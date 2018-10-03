$(document).ready(function(){
    $("#myform").submit(function(){
        var search = $("#books").val(); //return the value entered by user
        var apikey = "AIzaSyCbhezaOOd-d7WRlyJEa971W-BRaUBDEFI"
        if (search == '')
        {
            alert("Please enter something in the field");
        }
        else{
            var img = '';
            var title = '';
            var author = '';

            $.ajax({
                type: "GET",
                url: "https://www.googleapis.com/books/v1/volumes?q=" +search+ "=epub&key=" +apikey ,
                dataType: "jsonp",
                success: function (response) { //as a parameter and not as a promise
                //success
                alert("Success");
                console.log("We made it");
                console.log(response);
                for(i=0; i<response.items.length; i++)
                {
                    title =$('<h5 class="black-text"><br>' +response.items[i].volumeInfo.title + '</h5>');
                    author = $('<h5 class="black-text"> By: ' + response.items[i].volumeInfo.authors + '</h5>');
                    publisher = $('<h5 class="black-text"> Published By: ' + response.items[i].volumeInfo.publisher + '</h5>');
                    img = $('<img><br>');
                    readmore = $('<a href=' + response.items[i].volumeInfo.infoLink + '><br><button class="btn btn-primary">Read More</button></a>')
                    
                    actualImg = response.items[i].volumeInfo.imageLinks.thumbnail;
                    img.attr('src',actualImg);//attaching image to page

                    title.appendTo("#results");
                    author.appendTo("#results");
                    publisher.appendTo("#results");
                    img.appendTo("#results");
                    readmore.appendTo("#results")
                   
                }
            },
                fail: function (textStatus, errorThrown) {
                alert("AJAX call failed: " + textStatus + ", " + errorThrown);
            }

        });
    }
    return false;
});
})
