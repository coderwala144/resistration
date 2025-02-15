
function Name1() {
    const name = document.getElementById("Name").value;
    alert("Your name is : " + name);

    const array = name.split(" ");
    let fname = array[0];
    let mname = array[1];
    let lname = array[2];

    document.getElementById("Name").innerHTML = fname;
    alert("First name is : " + fname);

    if (mname !== undefined) {
        alert("Middle name is : " + mname);
    }

    if (lname !== undefined) {
        alert("Last name is : " + lname);
    }
}

function address() {
    const addr = document.getElementById("address").value;
    alert("Address is : " + addr);
}

function date() {
    const date_Birth = document.getElementById("Box2").value;
    alert("Date of birth: " + date_Birth);

    const phone = document.getElementById("1Box2").value;
    alert("Phone: " + phone);
}

function check() {
    let num3 = document.querySelector('input[name="gender"]:checked').value;
    alert("Gender is : " + num3);

    let num4 = document.querySelector('input[name="Amputation"]:checked').value;
    alert("Option is : " + num4);
}

function Pancard() {
    let num3 = document.getElementById("Pancard").value;

    if (num3.length !== 10) {
        alert("Invalid number");
    } else {
        document.getElementById("Pancard").value = num3.toUpperCase();
        alert("Pancard number is : " + num3.toUpperCase());
        return true;
    }

}

function Adhar() {
    let num4 = document.getElementById("Adhar").value;
    if (num4.length !== 12) {
        alert("Invalid number");
    } else {
        alert("Adharcard  number is : " + num4);


    }
}
    function marks() {
        const marks = [
            parseInt(document.getElementById("marks1").value),
            parseInt(document.getElementById("marks2").value),
            parseInt(document.getElementById("marks3").value),
            parseInt(document.getElementById("marks4").value),
            parseInt(document.getElementById("marks5").value),
            parseInt(document.getElementById("marks6").value)
        ];

        // Sort marks in descending order
        marks.sort((a, b) => b - a);

        // Sum the highest 5 marks
        const bestFiveTotal = marks.slice(0, 5).reduce((sum, mark) => sum + mark, 0);

        // Calculate percentage
        const percentage = bestFiveTotal / 5;

        // Display the result
        alert("Percentage is : " + percentage + "%");
        console.log("Percentage is : " + percentage + "%");
    }


    function submit() {
        Name1();
        address();
        date();
        Pancard();
        Adhar();
        check();
    }


