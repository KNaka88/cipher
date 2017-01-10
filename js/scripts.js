var userSentence = "i like pie.";
alert(userSentence);
//var newuserSentence = userSentence.replace(/.^/, userSentence.charAt[0].toUpperCase());
var newuserSentence = userSentence.replace(/^./, function(v) { return v.toUpperCase();});
alert(newuserSentence);
/*
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
alert(newstr);
*/
