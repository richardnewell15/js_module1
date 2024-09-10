let length;
let width;

function calculateTotalGroceryCost() {
  amount_1 = parseFloat(document.getElementById('amount_1').value);
  amount_2 = parseFloat(document.getElementById('amount_2').value);
  amount_3 = parseFloat(document.getElementById('amount_3').value);

  let totalAmount = amount_1 + amount_2 + amount_3;

  document.getElementById('result').innerText = `The total amount is: ${totalAmount}`;
}