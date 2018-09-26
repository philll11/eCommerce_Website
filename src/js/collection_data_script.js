function displayAllLocalStorage() {
    if (localStorage.getItem("enquires") !== null) {
        var enquires;
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
        
        
        
    } else {
        document.getElementById("display").innerHTML = "There are no customer equires";
    }
}

function clearAllLocalStorage() {
    localStorage.clear();
}