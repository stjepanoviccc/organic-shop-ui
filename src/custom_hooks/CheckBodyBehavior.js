import { useEffect } from "react";
import { useNavMenu } from "../context/NavMenuContext";
import { useCart } from "../context/CartContext";

const useCheckBodyBehavior = () => {
    const isNavActive = useNavMenu();
    const isCartActive = useCart();
  
    useEffect(() => {
      if (isNavActive || isCartActive) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [isNavActive, isCartActive])
};

export default useCheckBodyBehavior;