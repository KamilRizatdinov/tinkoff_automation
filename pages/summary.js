const navBar = document.querySelector("div.header__dDTkxt:nth-child(1) > nav:nth-child(1)");
const paymentsLink = document.createElement("span");
paymentsLink.className = "header__a3DO8h my-navigation";
paymentsLink.innerHTML = "<a href='/payments/my/' class='header__b3DO8h' data-qa-type='uikit/navigation.menuItem'><span class='header__e3DO8h'>Избранные платежи</span></a>"

setTimeout(() => navBar.appendChild(paymentsLink), 100);