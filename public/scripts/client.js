
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const createTweetElement = function(tweet) {
  // <article class="tweet">
  //     <header>
  //       <div>
  //         <img src="https://i.imgur.com/73hZDYK.png">
  //         Newton
  //       </div>
  //       @SirIsaac
  //     </header>

  //     <body>
  //       <div name="text" class="line-border" id="tweet-text">If I have seen further it is by standing on the shoulders
  //         of giants</div>
  //     </body>
  //     <footer>
  //       10 days ago
  //       <i class="fa-solid fa-retweet">
  //         <i class="fa-solid fa-heart"></i>
  //         <i class="fa-solid fa-flag"></i>
  //       </i>
  //     </footer>
  //   </article>

  let $tweet = $(`<article class="tweet"></article>`);
  let $header = $(
    `<header>
      <div>
        <img src= ${tweet.user.avatars}>
        ${tweet.user.name}
      </div>
      ${tweet.user.handle}
    </header>`
  );

  let $body = $(
    `<body
        <div class="line-border" id="tweet-text">${tweet.content.text}</div>
      </body>`
  );


  let $footer = $(
    `<footer>
        ${tweet.created_at}
        <div class="reaction">
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-flag"></i>
        <div>
     </footer>`
  );

  $tweet.append($header);
  $tweet.append($body);
  $tweet.append($footer);
  // ...
  return $tweet;
};

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container

  tweets.forEach(element => {
    console.log(element); // to see what it looks like
    const tweet = createTweetElement(element);
    $('.tweet-container').append(tweet);
  });
  console.log("Tweets are: ", $('#tweets-container'));

};

$(document).ready(function() { renderTweets(data); });


