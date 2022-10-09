// The select functions simply show/hide controls for each shape of pizza.
// They are triggered by the pizza shape radio buttons.
function circle_select() {
    document.getElementById("circle_input").style.display = "inline";
    document.getElementById("square_input").style.display = "none";
    document.getElementById("rectangle_input").style.display = "none";
}

function square_select() {
    document.getElementById("circle_input").style.display = "none";
    document.getElementById("square_input").style.display = "inline";
    document.getElementById("rectangle_input").style.display = "none";
}

function rectangle_select() {
    document.getElementById("circle_input").style.display = "none";
    document.getElementById("square_input").style.display = "none";
    document.getElementById("rectangle_input").style.display = "inline";
}

// Show/hide the controls for pizza by-the-slice
// Triggered by the check box
function sliced_select() {
    var slices = document.getElementById("slices");
    var price_label = document.getElementById("price_label");
    if (document.getElementById("sliced").checked) {
        slices.style.display = "inline";
        price_label.innerHTML = "per slice";
    }
    else {
        slices.style.display = "none";
        price_label.innerHTML = "per pie";
    }
}

// Calculate the price per square inch of the pizza, given the information
function calculate() {
    // Display the output
    document.getElementById("unitprice").style.display = "inline";
    var calculated = document.getElementById("calculated");
    var price = Number(document.getElementById("price").value);
    // Only output a unit price if a total price was provided
    if (price > 0) {
        // Calculate the area of the pizza, depending on the shape
        if (document.getElementById("circle").checked)
            var area = ((Number(document.getElementById("diameter").value)/2)**2)*Math.PI;
        else if (document.getElementById("square").checked)
            var area = (Number(document.getElementById("side").value))**2;
        else
            var area = Number(document.getElementById("length").value) * Number(document.getElementById("width").value);
        // Don't divide by zero (no dimensions provided)
        if (area > 0) {
            // Price by slice if indicated
            var slices = 1;
            if (document.getElementById("sliced").checked)
                slices = Number(document.getElementById("num_slices").value);
            // Don't multiply by zero (no slice numbers provided)
            if (slices > 0) {
                calculated.style.color = "black";
                var unitprice_inches = price*slices/area;
                var unitprice_feet = unitprice_inches*144;
                calculated.innerHTML = "$" + unitprice_inches.toFixed(2) + 
                    " per square inch ($" + unitprice_feet.toFixed(2) + " per square foot)"
            }
            else {
                calculated.style.color = "red";
                calculated.innerHTML = "Please enter a valid number of slices";
            }
        }
        else {
            calculated.style.color = "red";
            calculated.innerHTML = "Please enter a valid size";
        }
    }
    else {
        calculated.style.color = "red";
        calculated.innerHTML = "Please enter a valid price";
    }
}