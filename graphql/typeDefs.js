const {gql} = require('apollo-server-express');

const typeDefs = gql`
 type UserAdmin{
     id:ID!
     name:String,
     mobile:String,
     createAt:String,
     token:String,
     password:String
 }
 type Brand{
     id:ID!
     name:String,
     image:String
 }
 
 type SubCategory{
     name:String,
     url:String,
 }
 input inputSubCategory{
     name:String,
     url:String,
 }
type Category{
    id:ID!
    name:String
    subCategory:[SubCategory]!
    
}
type Reviews{
    customerName:String
        createAt:String
        body:String
        rate:Int
}
input  inputReviews{
    customerName:String
        createAt:String
        body:String
        rate:Int
}
type Options{
    optName:String
    optValue:String
}
input inputOptions{
    optName:String
    optValue:String
}
type Specification{
    speName:String
    speValue:String
}
input inputSpecification{
    speName:String
    speValue:String
}
type Product{
    id:ID!
    title:String
    images:[String]
    barcode:String
  
    price:String
    offerPrice:String
    point:String
    Quantity:Int
    options:[Options]
    brandId:ID
    categoryId:ID
    subCategory:String
    specification:[Specification]
    description:String
    showInFeatured:Boolean
    showInLatest:Boolean
    showInBest:Boolean
    newp:Boolean
    offer:Boolean
    shippingCost:String



}
 

type Query{
    getAllUsers:[UserAdmin]!,
    getBrands:[Brand]!
 }
 type Mutation{
     registerUserAdmin(name:String,mobile:String,password:String,confirmPassword:String): UserAdmin!
     loginAdmin(mobile:String,password:String):UserAdmin!



     addBrand(name:String,image:String):Brand!
     updateBrand(id:ID!,name:String,image:String):Brand!

     addCategory(name:String,subCategory:[inputSubCategory]):Category!
     updateCategory(id:ID!,name:String,subCategory:[inputSubCategory]):Category!

     addProduct(
    title:String
    images:[String]
    barcode:String
    reviews:[inputReviews]
    price:String
    offerPrice:String
    point:String
    Quantity:Int
    options:[inputOptions]
    brandId:ID
    categoryId:ID
    subCategory:String
    specification:[inputSpecification]
    description:String
    showInFeatured:Boolean
    showInLatest:Boolean
    showInBest:Boolean
    newp:Boolean
    offer:Boolean
    shippingCost:String):Product!
 }


`;

module.exports = typeDefs;