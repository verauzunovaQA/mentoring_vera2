(function handleCalculator() {
  //When click on button
  //Take the text value from the input field
  //Perform calculation
  //Display it somewhere (maybe in the input field itself)
  //[+()/=-\d\s]
  const input = document.querySelector('.calculator__input');
  const btn = document.querySelector('.calculator__calculate');
  const validationMessage = document.querySelector(".calculator__input-validation-message");
  const regExpression = /^[+()/=-\d\s\*]*$/;


  btn.addEventListener("click", () => {
    
    const validationResult = regExpression.test(input.value);
    
    if(validationResult === false) {
      // alert("The calculation statement seems not to be correct");
      validationMessage.innerHTML = "The calculation statement seems not to be correct";
      throw Error("The calculation statement seems not to be correct");
    }

    validationMessage.innerHTML = "";
    input.value = eval(input.value);
  })
})()