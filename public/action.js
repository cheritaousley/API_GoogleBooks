$(document).ready(function(){
    $("#myform").submit(function(){
        var search = $("#books").val(); //return the value entered by user
        var apikey = "AIzaSyCbhezaOOd-d7WRlyJEa971W-BRaUBDEFI"
        if (search == '')
        {
            alert("Please enter something in the field");
        }
        else{
            
            $.ajax({
                type: "GET",
                url: "https://www.googleapis.com/books/v1/volumes?q=" +search+ "=epub&key=" +apikey ,
                dataType: "jsonp",
                success: function (response) { //as a parameter and not as a promise
                //success
                alert("Success");
                console.log("We made it");
                console.log(response);
                for(index=0; index<response.items.length; index++)
                {
                    setTitle(response, index);
                    setAuthor(response, index);
                    setPublisher(response, index);
                    setImg(response, index);
                    setReadmore(response, index);
                }
            },
                fail: function (textStatus, errorThrown) {
                alert("AJAX call failed: " + textStatus + ", " + errorThrown);
            }
        });
        reset();
    }
    return false;
});
})

function setTitle(response, index){
    console.log("setting Title");
    title = $('<h5 class="black-text"><br>' + response.items[index].volumeInfo.title + '</h5>');
    title.appendTo("#results");

}
function setAuthor(response, index){
    console.log("setting Author");
    author = $('<h5 class="black-text"> By: ' + response.items[index].volumeInfo.authors + '</h5>');
    author.appendTo("#results");
}
function setPublisher(response, index){
    console.log("setting Publisher");
    publisher = $('<h5 class="black-text"> Published By: ' + response.items[index].volumeInfo.publisher + '</h5>');
    publisher.appendTo("#results");
}
function setImg(response, index){
    console.log("setting Image");
    img = $('<img><br>');
    img.appendTo("#results");

    actualImg = response.items[index].volumeInfo.imageLinks.thumbnail;
    img.attr('src', actualImg);//attaching image to page
}
function setReadmore(response, index){
    console.log("setting reading more");
    readmore = $('<a href=' + response.items[index].volumeInfo.infoLink + '><br><button class="btn btn-primary">Read More</button></a>');
    readmore.appendTo("#results");
}
function reset(){
    $("#results").html("");
}
