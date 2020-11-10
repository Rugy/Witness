let quotes = [];

export function initQuotes() {
  $.get("./resources/quotes.txt", function(data) {
    quotes = data.split("\n");
  });

  $("#quote-button").on("click", function() {
    setRandomQuote();
  })
}

function setRandomQuote() {
  let quoteID = Math.floor(Math.random() * quotes.length);
  $("#quote-field").text(quotes[quoteID]);
}
