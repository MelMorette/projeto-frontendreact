import { useEffect, useState } from "react";

export default function useCart() {
  // const [total, setTotal] = useState(0.0);

  // My first logic
  // const addCart = (obj) => {
  //   const copyList = [...cart, obj];
  //   setCart(copyList);
  // };

  // const sumTotal = (obj) => {
  //   const n1 = +obj.price;
  //   const n2 = total;
  //   const sum = n1 + n2;
  //   setTotal(sum);
  // };

  // useEffect(() => {
  //   addCart(purchaseList);
  //   sumTotal(purchaseList);
  // }, [purchaseList]);

  // const addCart = (obj) => {
  //   const findObj = cart.find((item) => item.id === obj.id);

  //   if (findObj) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === obj.id ? { ...findObj, quant: findObj.quant + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...obj, quant: 1 }]);
  //   }
  // };

  // const awayCart = (obj) => {
  //   const findObj = cart.find((item) => item.id === obj.id);

  //   if (findObj.quant === 1) {
  //     setCart(cart.filter((item) => item.id !== obj.id));
  //   } else {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === obj.id ? { ...findObj, quant: findObj.quant - 1 } : item
  //       )
  //     );
  //   }
  // };
  //
  // const deleteCart = (obj) => {
  //   setCart(cart.filter((item) => item.id !== obj.id));
  // };


  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0)
  const [totalQuant, setTotalQuant] = useState(0)

  const sumTotal = ()=>{
    setTotalValue(cart.reduce((a, c) => a + (c.price.toFixed(2)) * c.quant, 0));
    setTotalQuant(cart.length);
  }
  
  useEffect(()=>{
    sumTotal()
  },[cart])

  const addCart = (obj) => {
    const cartCopy = [...cart];
    const findObj = cart.find((item) => item.id === obj.id);

    if (!findObj) {
      cartCopy.push({
        id: obj.id,
        satellite: obj.satellite,
        price: obj.price,
        description: obj.description,
        history: obj.history,
        image: obj.image,
        launchDate: obj.launchDate,
        launchSite: obj.launchSite,
        manufacturer: obj.manufacturer,
        orbitHeight: obj.orbitHeight,
        quant: 1
      });
    } else {
      findObj.quant = findObj.quant + 1;
    }
    setCart(cartCopy);
    localStorage.setItem("cart", JSON.stringify(cartCopy));
  };

  const awayCart = (obj) => {
    const findObj = cart.find((item) => item.id === obj.id);

    if (findObj.quant === 1) {
      setCart(cart.filter((item) => item.id !== obj.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === obj.id ? { ...findObj, quant: findObj.quant - 1 } : item
        )
      );
    }
  };

  const deleteCart = (obj) => {
    const cartCopy = [...cart];
    // const item = cartCopy.find((product) => product.id === obj.id);
    const cartFilter = cartCopy.filter((item) => item !== obj);
    setCart(cartFilter);
    localStorage.setItem("cart", JSON.stringify(cartFilter));
  };

  return {
    cart,
    setCart,
    totalValue,
    totalQuant,
    addCart,
    awayCart,
    deleteCart
  };
}
