$(document).ready(function() {
    function displayLS() {
        if (typeof (Storage) !== "undefined") {
            
            // Removes display element after equiry added
            document.getElementById("display").innerHTML = "";
            
            var table = "<div class=\"row\"><div class=\"head\">Customer</div><div class=\"head\">Email</div><div class=\"head\">Cell Phone Number</div><div class=\"head\">Enquiry</div><div class=\"head\">Time Stamp</div></div>";
            
            var enquires = [], enquiry = [];            
            if(localStorage.getItem("enquires") !== null) {
                var storage = localStorage.getItem("enquires").split(",");
                // Reassembles equires into array of arrays
                for (var i = 0; i < storage.length; ++i) {
                    enquiry.push(storage[i]);
                    if (i % 5 == 4) {
                        var row = "<div class=\"row\"><div class=\"column\">" + enquiry[0] + "</div><div class=\"column\">" + enquiry[1] +"</div><div class=\"column\">" + enquiry[2] + "</div><div class=\"column\">" + enquiry[3] + "</div><div class=\"column\">" + enquiry[4] + "</div></div>"            
                        table += row;
                        enquiry = [];
                    }
                }
                document.getElementById("table").innerHTML = table;
            }
        }
    }
    $("#disLSBtn").click(displayLS);
});

//
//    function test() {
//        document.getElementById("table").innerHTML += "<div class=\"row\"><div class=\"column\">x</div><div class=\"column\">x</div><div class=\"column\">x</div><div class=\"column\">x</div><div class=\"column\">x</div></div>";
//    }
//    $("#clearLSBtn").click(test);


$(document).ready(function() {
    function clearLS() {
        if (typeof (Storage) !== "undefined") {
            localStorage.clear();            
        }
    }
    $("#clearLSBtn").click(clearLS);
});