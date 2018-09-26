/* Subscription form functionality */
function subForm() {
    
    var subscriptions;
    if (localStorage.getItem("subs") === null) {
        subscriptions = [];
    } else {
        subscriptions = [localStorage.getItem("subs")];        
    }
    var newSub = document.getElementById("subscription").value;
    subscriptions.push(newSub);
    localStorage.setItem("subs", subscriptions);    
}

/* Save form functionality */
function saveForm() {
    document.getElementById("error").innerHTML = "";
        
    if (typeof (Storage) !== "undefined") {
        var enquires = [];
        if (localStorage.getItem("enquires") !== null) {
                        
            var enquiryArray = localStorage.getItem("enquires").split(",");
            var temp = [];
            // Reassembles equires into array of arrays
            for (var i = 0; i < enquiryArray.length; ++i) {
                temp.push(enquiryArray[i]);
                if (i % 5 == 4) {
                    enquires.push(temp);
                    temp = [];
                }
            }
        }
                
        var name = document.getElementById("fullName").value;
        var email = document.getElementById("email").value;
        var contactNumber = document.getElementById("contactNumber").value;
        var enquiry = document.getElementById("enquiry").value;

        enquires.push([name, email, contactNumber, enquiry, new Date]);

        console.log(enquires);        
        localStorage.setItem("enquires", enquires);

        
        
    } else {
        document.getElementById("error").innerHTML = "Web storage not available";
    }
}