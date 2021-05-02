const url = new URL(window.location.href);
const amount = url.searchParams.get("amount");


function handler() {
  if (amount) {
    console.log(amount);
    const amountInput = document.querySelector(".Input__valueContent_1A9ol");
    const eventX = new Event('input', {bubbles: true});
    amountInput.value = amount;
    amountInput.dispatchEvent(eventX);

    setTimeout(() => document.querySelector(".ui-button").click(), 1000);
  }
}

setTimeout(() => handler(), 100)
