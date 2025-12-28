let cart = [];

function addToCart(product) {
    if (product === "Custom T-Shirt") {
        const text = document.getElementById("tshirtText").value;
        if (text === "") {
            alert("Enter print text for T-shirt");
            return;
        }
        cart.push(product + " (" + text + ")");
        document.getElementById("tshirtText").value = "";
    } else {
        cart.push(product);
    }
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        cartList.appendChild(li);
    });
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    document.getElementById("tracking").style.display = "block";
    simulateTracking();
}

function simulateTracking() {
    const status = document.getElementById("status");

    status.innerText = "Order Confirmed ✅";

    setTimeout(() => {
        status.innerText = "Printing / Packing 🏭";
    }, 3000);

    setTimeout(() => {
        status.innerText = "Out for Delivery 🚚";
    }, 6000);

    setTimeout(() => {
        status.innerText = "Delivered Successfully 🎉";
    }, 9000);
}
