const Product = require("../../models/Product");
const checkAuth = require('../../utils/checkAuth');

module.exports = {
  Mutation: {
    async addProduct(_,{
        title,
        images,
        barcode,
       
        price,
        offerPrice,
        point,
        Quantity,
        options,
        brandId,
        categoryId,
        subCategory,
        specification,
        description,
        showInFeatured,
        showInLatest,
        showInBest,
        offer,
        newp,
        shippingCost
      },
      context
    ) {
      const admin = checkAuth(context);

      try {
        let product = await Product.findOne({ title });
        if (product) {
          throw new Error("this Product is already exist");
        }
  
        const newProduct = new Product({
          title,
          images,
          barcode,
         
          price,
          offerPrice,
          point,
          Quantity,
          options,
          brandId,
          categoryId,
          subCategory,
          specification,
          description,
          showInFeatured,
          showInLatest,
          showInBest,
          offer,
          newp,
          shippingCost
        });
        
        const prd = await newProduct.save();
        return prd;
      } catch (error) {
        throw new Error("Internal server Error"+ error);
      }
    }
  }
};
