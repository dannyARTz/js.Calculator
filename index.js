let displayValue = "";
let expression = "";
let currentNumber = "";

const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const type = this.dataset.type;
        const value = this.dataset.value || this.textContent.trim();

        //Logic

        if(type === "number"){
            displayValue += value;
            expression += value;
        }

        if(type === "operator"){
            displayValue += `${value}`;
            expression += value;
        }

        if(type === "backspace"){
            displayValue = displayValue.slice(0, -1);
            expression = expression.slice(0, -1);
        }

        if(type === "delete"){
            displayValue = "";
            expression= "";
        }




        if(type === "equal"){
            try{
                const result = eval(expression);
                displayValue = result.toString();
                expression = result.toString();
                console.log(result);
                screen.scrollLeft = 0;
            } catch{
                displayValue = "Error";
                expression = "";
            }
        }

  
        screen.textContent = displayValue || "0";

        if(type !== "equal"){
        screen.scrollLeft = screen.scrollWidth;}
    });
});


