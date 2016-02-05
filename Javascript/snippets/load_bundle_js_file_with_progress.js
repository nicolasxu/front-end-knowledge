var source = "http://stackoverflow.com/questions/18126406/how-can-i-get-the-progress-of-a-downloading-script";



// <script> tags only fire load and error events; 
// they do not fire progress events.


//  You can load your script content and monitor 
//  progress through Ajax, and then place the script 
//  contents into a new <script> element when the load completes


var req = new XMLHttpRequest();

// report progress events
req.addEventListener("progress", function(event) {
    if (event.lengthComputable) {
        var percentComplete = event.loaded / event.total;
        // ...
    } else {
        // Unable to compute progress information since the total size is unknown
    }
}, false);

// load responseText into a new script element
req.addEventListener("load", function(event) {
    var e = event.target;
    var s = document.createElement("script");
    s.innerHTML = e.responseText;
    // or: s[s.innerText!=undefined?"innerText":"textContent"] = e.responseText
    document.documentElement.appendChild(s);

    s.addEventListener("load", function() {
        // this runs after the new script has been executed...
    });
}, false);

req.open("GET", "foo.js");
req.send();