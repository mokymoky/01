function showDate() {
  var d = new Date();
  var curr_date = d.getDate();
  var curr_month = d.getMonth() + 1; //months are zero based
  var curr_year = d.getFullYear();
  document.write( curr_month + "-" + curr_date + "-" + curr_year + "\n");
}
showDate();

function randomQuote() {
  var quote = new Array();
  quote[0] = "This project took so long.";
  quote[1] = "Monky";
  quote[2] = "Weee!";
  quote[3] = "Now try Terraria!";
  quote[4] = "YOOOO";
  quote[5] = "E.";
  quote[6] = "As a wise man said";
  quote[7] = "Lucky!";
  quote[8] = "Hank";
  quote[9] = "Please."
  quote[9] = "Javascript is pain"


  var rand = Math.floor(Math.random()*quote.length);
  document.write(quote[rand]);
}
randomQuote();
