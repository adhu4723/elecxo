import { createContext, useState, useContext, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

// Create Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Load cart items from localStorage if available
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Save cart items to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);

            if (existingItem) {
                return prevItems;
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });

                // Move toast notification outside setCartItems
                const isItemInCart = cartItems.some(item => item.id === product.id);
                console.log(isItemInCart);
                
                if (isItemInCart) {
                    toast.error("Item already in cart!");
                } else {
                    toast.success("Item added to cart!");
                }
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

    const cartTotal = () => {
        return cartItems.reduce((total, item) => total + item.rate * item.quantity, 0);
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cartItems");
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            clearCart,
            cartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom Hook to Use Cart Context
export const useCart = () => {
    return useContext(CartContext);
};
