let rewCalculate = () => {
  let billAmount = document.getElementById("billamount").value;
  billAmount = Number(billAmount);
  let tipPer = document.getElementById("percent").value;
  tipPer = Number(tipPer);

  let tipAmount = (billAmount * tipPer) / 100;
  document.getElementById("reamount").innerHTML =
    "Tip Amount Is : " + tipAmount;

  let output = tipAmount + billAmount;
  document.getElementById("totalamount").innerHTML = "Total Amount: " + output;
};

let resetInputs = () => {
  billAmount = 0;
};