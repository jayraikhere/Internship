// Get the order button element
const orderButton1 = document.getElementById('orderCountButton1');

// Initialize order count to 0
let orderCount1 = 0;

// Update the order count and button text
function updateOrderCount1() {
  orderCount1++;
  orderButton1.innerHTML = orderCount1;
}

// Add event listener to the order button
orderButton1.addEventListener('click', function() {
  updateOrderCount1();
});



const orderButton2 = document.getElementById('orderCountButton2');
let orderCount2 = 0;
function updateOrderCount2() {
  orderCount2++;
  orderButton2.innerHTML = orderCount2;
}
orderButton2.addEventListener('click', function() {
  updateOrderCount2();
});

const orderButton3 = document.getElementById('orderCountButton3');
let orderCount3 = 0;
function updateOrderCount3() {
  orderCount3++;
  orderButton3.innerHTML = orderCount3;
}
orderButton3.addEventListener('click', function() {
  updateOrderCount3();
});