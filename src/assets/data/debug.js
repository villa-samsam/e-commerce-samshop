//bufferingSort products by pricebuffering:
const handleSort = (e) => {
  const value = e.target.value;
  if (value === "descending") {
    const sortedProducts = Products.sort((a, b) => {
      return a.price - b.price;
    });
    setProductsData(sortedProducts);
    console.log(sortedProducts);
  }
  if (value === "ascending") {
    const sortedProducts = Products.sort((a, b) => {
      return b.price - a.price;
    });
    setProductsData(sortedProducts);
    console.log(sortedProducts);
  }
};

//1. Sort by high price/ low price
//2. Current data of the user when logging in is the same
//3. Favorites icon
//4. admin protection

const uploadTask = uploadBytesResumable(storageRef, enterProductImg).then(
  () => {
    getDownloadURL(storageRef).then(async (downloadURL) => {
      await addDoc(docRef, {
        title: enterTitle,
        shortDesc: enterShortDesc,
        description: enterDescription,
        category: enterCategory,
        price: enterPrice,
        imgUrl: downloadURL,
      });
    });
    toast.success("Новый товар добавлен");
  }
);
