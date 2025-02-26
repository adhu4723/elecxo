import { createContext, useState, useContext } from "react";

// Create Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    console.log(cartItems);
    
    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
    
            if (existingItem) {
                console.log('Item already in cart:', existingItem);
                return prevItems; // Don't modify state if the item already exists
            } else {
                console.log('Adding new item to cart:', product);
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };
    

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const increaseQuantity = (id) => {
        setCartItems(prevItems => prevItems.map(item => 
            item.id === id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
        ));
    };

    const decreaseQuantity = (id) => {
        setCartItems(prevItems => prevItems.map(item => 
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 } 
                : item
        ));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom Hook to Use Cart Context
export const useCart = () => {
    return useContext(CartContext);
};
