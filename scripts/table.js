function addRow() {
    var elements = document.getElementById("candidate_form").elements;
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var status = document.getElementById("status");
    var lastModified = document.getElementById("lastModified");
    console.log(firstName);

    var table = document.getElementById("my_table");
    var tbody = document.createElement("tbody");
    var tr = document.createElement("tr");
    // table.insertRow(-1).innerHtml = "<tr><td>hello</td></tr>";
    for (var i = 0; i< elements.length; i++){
        if (elements[i].value !== "Submit"){
            var td = document.createElement("td");
            var txt = document.createTextNode(elements[i].value);
            td.appendChild(txt);
            tr.appendChild(td);
        }
        
    }

    tbody.appendChild(tr);


    console.log(tr);
    //table.insertRow(tr);
    table.appendChild(tbody);
    
}