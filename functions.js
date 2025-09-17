function update_paragraph(){
    var back_r = document.getElementById("back_r").value;
    var back_g = document.getElementById("back_g").value;
    var back_b = document.getElementById("back_b").value;

    var border_r = document.getElementById("border_r").value;
    var border_g = document.getElementById("border_g").value;
    var border_b = document.getElementById("border_b").value;

    var width = document.getElementById("width").value;
    

    var paragraph = document.getElementById("The P");

    paragraph.style.borderColor = `rgb(${border_r}, ${border_g}, ${border_b})`;
    paragraph.style.borderWidth = width;
    paragraph.style.backgroundColor = `rgb(${back_r}, ${back_g}, ${back_b})`;
}

function compare_password(){
    if (document.getElementById("p1").value.length < 8){
        alert("Password 1 is less than 8 characters")
    }
    else if (document.getElementById("p2").value.length < 8){
        alert("Password 2 is less than 8 characters")
    }
    else if (document.getElementById("p1").value == document.getElementById("p2").value){
        alert("Your password has been confirmed")
    } else {
        alert("Your passwords don't match!!!")
    }
}