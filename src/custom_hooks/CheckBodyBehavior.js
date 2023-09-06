import { useEffect } from "react";
import { useNavMenu } from "../context/NavMenuContext";
import { useLoginModal } from "../context/LoginModalContext";
import { useCart } from "../context/CartContext";

const useCheckBodyBehavior = () => {
    const isLoginModalActive = useLoginModal();
    const isNavActive = useNavMenu();
    const isCartActive = useCart();
  
    useEffect(() => {
      if (isNavActive || isCartActive || isLoginModalActive) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [isNavActive, isCartActive, isLoginModalActive])
};

export default useCheckBodyBehavior;