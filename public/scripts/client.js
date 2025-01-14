
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  $('#post-tweet').submit(function(event) {
    event.preventDefault();
    if ($("#tweet-text").val().length > 140) {
      $(".errorLong").slideDown("slow");
      $(".errorShort").hide();
    } else if ($("#tweet-text").val() === "") {
      $(".errorShort").slideDown("slow");
      $(".errorLong").hide();
    }
    else {

      let data = $(this).serialize();
      console.log("submit:", data);
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: data,
      }).then(() => {
        $("#tweet-text").val("");
        $(".counter").val(140);
        $(".errorShort").hide();
        $(".errorLong").hide();
        $(".tweet-container").empty();
        loadTweets();
      });
    }
  });
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  const createTweetElement = function(tweet) {
    let $tweet = $(`<article class="tweet">
    <header>
      <div>
        <img src= ${tweet.user.avatars}>
        ${tweet.user.name}
      </div>
      ${tweet.user.handle}
    </header>
    <body
    <div class="line-border" id="tweet-text">${escape(tweet.content.text)}</div>
      </body>
      <footer>
      <span>${timeago.format(tweet.created_at)}</span>
          <div class="reaction">
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-flag"></i>
          <div>
       </footer>
    </article>`);


    // ...
    return $tweet;
  };

  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

    tweets.forEach(element => {
      const tweet = createTweetElement(element);
      $('.tweet-container').prepend(tweet);
    });

  };
  //function to load tweets
  const loadTweets = function() {
    $.ajax({
      type: "GET",
      url: "/tweets",
    }).then(renderTweets);
  };
  loadTweets();
});


