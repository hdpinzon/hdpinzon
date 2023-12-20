var daytime = new Date();
var hour = daytime.getHours();
var greeting;

if (hour > 18){
    greeting = "Good evening"
}
else if (hour > 12){
    greeting = "Good afternoon"
}
else if (hour > 0){
    greeting = "Good morning"
}
else if (hour > 0){
    greeting = "Welcome"
}
document.write("<h3>"+ greeting + "</h3>");