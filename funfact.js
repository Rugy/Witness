let funfacts = [];

export function initFunfacts() {
  $.get("./resources/funfacts.txt", function(data) {
    funfacts = data.split("\n");
  });

  $("#funfact-button").on("click", function() {
    setRandomFunfact();
  })
}

function setRandomFunfact() {
  let funfactID = Math.floor(Math.random() * funfacts.length);

  let text = funfacts[funfactID];
  let htmlElem;

  if (text.includes(".mp4")) {
    let src = "'./resources/" + text + "'";
    htmlElem = "<p>So hört Florentin sich an, wenn er Regeln erklärt</p><video><source src=" + src + " type='video/mp4'</video>"
    $("#quote-field").html(htmlElem);
    $("#quote-field video").trigger("play");
  } else {
    $("#quote-field").html(text);
  }

}
