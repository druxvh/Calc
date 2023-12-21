// let value = "";
// let display = document.querySelector("input");
// let buttons = document.querySelectorAll('button');

// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", (btn) => {
//     if(btn.target.innerHTML == "="){
//         value = eval(value)
//         display.value = value
//     }
//     else {
//         value += btn.target.textContent
//         display.value = value

//     }
//   });
// });

let val = "";
let buttons = document.querySelectorAll("button");
let display = document.querySelector("input");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent == "=") {
      val = eval(val);
      display.value = val;


    } else if(e.target.textContent == "AC"){
        val = "0"
        display.value = val


    } //else if(e.target.textContent == "Del"){
        
            console.log(val)
            val = val.slice(0, -1)
            display.value = val
            console.log(val)
        
    //
}
    
    
    else {
      val += e.target.textContent;
      display.value = val;
    }
  });
});
