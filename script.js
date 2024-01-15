function calc() {
    var name = document.myform.name.value;
    var id = document.myform.id.value;
    if (name == "") {
        alert("Enter first name");
        document.myform.name.focus();
        return false;
    }
    if (name.length < 6) {
        alert("enter name greater than 6 letters");
        document.myform.name.focus();
        return false;
    }
    if (id.length != 10) {
        alert("Enter Phone Number");
        document.myform.id.focus();
        return false;
    }
    let salary = document.myform.salary.value;
    let hra = 0.4 * salary;
    let da = 0.6 * salary;
    let grsal = parseInt(salary) + parseInt(hra) + parseInt(da);
    let pf = 0.13 * grsal;
    let tax = 0.2 * grsal;
    let ded = pf + tax;
    let net = parseInt(grsal) - parseInt(ded);
    document.getElementById("hra").innerHTML = hra;
    // document.write(hra);
    document.getElementById("da").innerHTML = da;
    document.getElementById("grsal").innerHTML = grsal;
    document.getElementById("pf").innerHTML = pf;
    document.getElementById("tax").innerHTML = tax;
    document.getElementById("ded").innerHTML = ded;
    document.getElementById("net").innerHTML = net;
}