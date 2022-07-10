

(function(){
    // Resources
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    // https://www.w3schools.com/js/js_dates.asp
    // https://goddino.tistory.com/29
    // https://creatorjo.tistory.com/39
    // https://stackoverflow.com/questions/7829571/milliseconds-to-days/7829642

    var myNextBirthday = new Date(2022, 1, 28);
    var today = new Date();
    var gap = myNextBirthday - today;

    var week = Math.floor(gap / (1000 * 60 * 60 * 24 * 7));
    var day = Math.floor(gap % (1000 * 60 * 60 * 24 * 7) / (1000 * 60 * 60 * 24)); // one day (60 mins * 24 hours)
    var hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // one hour is 60 minutes
    var min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60)); // one minute is 60 seconds
    var sec = Math.floor((gap % (1000 * 60)) / 1000); // one second is 1000 milliseconds

    function question3(){

        console.log("There are " 
        + week, "week(s), " + day + " day(s), " + hour + " hour(s),  " + min + " minutes, " + sec + " seconds until my next birthday!");

    }

    question3();

})();