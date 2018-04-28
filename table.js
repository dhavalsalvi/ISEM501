function addRow() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var status = document.getElementById("status");
    var lastModified = document.getElementById("lastModified");
    console.log(firstName);

    var table = document.getElementById("my-table");
    // table.insertRow(-1).innerHtml = "<tr><td>hello</td></tr>";
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var txt = document.createTextNode("some value");
    
   td.appendChild(txt);
   tr.appendChild(td);
   table.appendChild(tr);
}
