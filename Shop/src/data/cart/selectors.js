export const getTotal = (cartItems) => cartItems.reduce((acc, o) => acc + o.count * o.product.price, 0);

export const selectCartItemCounts = (cartItems) => cartItems.length;