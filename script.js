let budget = 0;
let cart = [];

function setBudget() {
    let userBudget = Number(document.getElementById('budget-input').value);

    if (userBudget <= 0) {
        alert('Please enter a valid budget');
    } else {
        budget = userBudget;

        document.getElementById('total-budget').innerHTML = '₦' + budget;

        document.getElementById('remaining-balance').innerHTML = '₦' + budget;

        document.getElementById('budget-input').value = '';
    }
}


function addItem() {
    let itemName = document.getElementById('item-name').value;
    let quantity = Number(document.getElementById('item-quantity').value);
    let price = Number(document.getElementById('item-price').value);

    if (itemName.trim() == '' || quantity <= 0 || price <= 0) {
        alert('Please fill all fields correctly');
    } else {
        let total = quantity * price;


cart.push([itemName, quantity, price, total]);

document.getElementById('display').innerHTML = '';

for (let index = 0; index < cart.length; index++) {
    document.getElementById('display').innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${cart[index][0]}</td>
            <td>${cart[index][1]}</td>
            <td>₦${cart[index][2]}</td>
            <td>₦${cart[index][3]}</td>
            <td>
                <button class="delete-button" onclick="deleteItem(${index})">Delete</button>
            </td>
    </tr>
    `;
}


let totalSpent = 0;

for (let index = 0; index < cart.length; index++) {
    totalSpent += cart[index][3];
}

document.getElementById('total-spent').innerHTML = '₦' + totalSpent;

document.getElementById('shopping-total').innerHTML = '₦' + totalSpent;

let balance = budget - totalSpent;

document.getElementById('remaining-balance').innerHTML = '₦' + balance;
document.getElementById('item-count').innerHTML = cart.length + ' items';


if (budget > 0) {
    let percentage = (totalSpent / budget) * 100;

    document.getElementById('budget-percentage').innerHTML = Math.round(percentage) + '%';

    document.getElementById('budget-progress').style.width = percentage + '%';
}

document.getElementById('item-name').value = '';
document.getElementById('item-quantity').value = '';
document.getElementById('item-price').value = '';


}




}


function deleteItem(index) {
    cart.splice(index, 1);

    console.log(cart);
}