function clearEnqBoxes() {
   $("#fullName").val() = "";
   $("#email").val() = "";
   $("#contactNumber").val() = "";
   $("#enquiry").val() = "";       
}
function clearSubBoxes() {
    $("#subscription").val() = "";
}

/* Save form functionality */
$(document).ready(function() {
    function saveForm() {
        if (typeof (Storage) !== "undefined") {
            var enquires = [], enquiry = [];
            if (localStorage.getItem("enquires") !== null) {
                var storage = localStorage.getItem("enquires").split(",");
                // Reassembles equires into array of arrays
                for (var i = 0; i < storage.length; ++i) {
                    enquiry.push(storage[i]);
                    if (i % 5 == 4) {
                        enquires.push(enquiry);
                        enquiry = [];
                    }
                }
            }
//          Prevents form being saved without name and enquiry
            if($("#fullName").val() !== "" && $("#enquiry").val() !== "" ) {
//              Clears ay residual box-shadowing
                document.querySelector("#fullName").style.boxShadow = "none";
                document.querySelector("#enquiry").style.boxShadow = "none";
                
                var name = $("#fullName").val();
                var email = $("#email").val();
                var contactNumber = $("#contactNumber").val();
                var enquiry = $("#enquiry").val();

                enquires.push([name, email, contactNumber, enquiry, new Date]);

                localStorage.setItem("enquires", enquires);
                
//              Testing
//              console.log(localStorage.getItem("enquires"));
            } else if($("#fullName").val() === "") {
                document.querySelector("#enquiry").style.boxShadow = "none";
                document.querySelector("#fullName").style.boxShadow = "0 0 5px red";               
            } else {
                document.querySelector("#fullName").style.boxShadow = "none"; 
                document.querySelector("#enquiry").style.boxShadow = "0 0 5px red";
           }
        }
    }
    $("#saveFormBtn").click(saveForm);
    $("#saveFormBtn").click(clearEnqBoxes);
});




/* Subscription form functionality */
$(document).ready(function() {
    function subForm() {
        if (typeof (Storage) !== "undefined") {
            var subscriptions;
            if (localStorage.getItem("subs") !== null) {
                subscriptions = [localStorage.getItem("subs")];
            } else {  
                subscriptions = [];   
            }            
//          Prevents subsriptions being saved without an email
            if ($("#subscription").val() !== "") {
//              Clears ay residual box-shadowing
                document.querySelector("#subscription").style.boxShadow = "none";
                
                var newSub = $("#subscription").val();
                subscriptions.push(newSub);
                localStorage.setItem("subs", subscriptions);
                
//              Testing
//              console.log(localStorage.getItem("subs"));     
            } else {
                document.querySelector("#subscription").style.boxShadow = "0 0 5px red";
            }           
        } 
    }
    $("#subFormBtn").click(subForm);
    $("#subFormBtn").click(clearSubBoxes);
});

