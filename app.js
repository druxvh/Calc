let val = "";
let buttons = document.querySelectorAll(".btn");
let display = document.querySelector("input");
let operators = document.querySelectorAll(".operator");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent == "=") {
      val = eval(val);
      display.value = val;
      switch (true) {
        case isNaN(val):
          alert("The Value is Not a Number");
          val = "";
          display.value = val;
          break;

        case val === undefined:
          alert("The Value is Undefined");
          val = "";
          display.value = val;
          break;

        case val === Infinity:
          alert("The Value is Infinity");
          val = "";
          display.value = val;
          break;
      }
    } else if (e.target.textContent == "AC") {
      val = "";
      display.value = 0;
    } else if (e.target.textContent == "Del") {
      val = val.slice(0, -1);
      // val = val.substring(0, val.length -1)
      display.value = val;
      if (val == "") {
        display.value = 0;
      } else {
        return 0;
      }
    } else {
      val += e.target.textContent;
      display.value = val;
    }
  });
});
