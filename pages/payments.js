const favoritePayments = document.querySelectorAll(".SortableList-module__sortableList_HgAIy > div");

function handler() {
  console.log("test");
  for (let i = 0; i < favoritePayments.length - 1; i++) {
    const payment = favoritePayments[i];
    const paymentHref = payment.querySelector("a").href;
    const paymentButton = document.createElement("a");

    paymentButton.addEventListener("click", (e) => {
      e.preventDefault();
      const amount = +prompt("Сколько хочешь отправить?");

      window.open(`${paymentHref}?amount=${amount}`, "_blank");
    });


    paymentButton.className = "payment-btn";
    paymentButton.innerHTML = "Оплатить";
    payment.appendChild(paymentButton);
  }
}

setTimeout(() => handler(), 100)