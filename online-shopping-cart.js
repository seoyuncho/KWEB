let sum = 0;

const price = {
    apple: 700,
    orange: 800,
    lemon: 900,
};

for (const cart of document.getElementsByClassName('add-to-cart')) {
    cart.addEventListener('click', event => {
        const item = event.target.parentNode.parentNode.getAttribute('id');
        sum += price[item];
        document.getElementById('cost').innerText = sum;
    });
}
