Make homepage and shop page

route shop and home page

have sticky nav 

let users check cart, add to cart, etc
submit order which resets cart

When adding to cart, send an object that contains

Item: {
    name:
    img:
    id:
    quantity:
    price:
}

This item gets pushed into the cart, which is an array

For every item in the cart, the cart should update with a little icon showing how many items are in it
When viewing cart, it should show the props of the item and calculate the price before tax

checking out should flush all the items from the array and start over

