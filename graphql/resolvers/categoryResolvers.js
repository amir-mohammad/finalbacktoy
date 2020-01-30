const Category = require('../../models/Category');
const checkAuth = require("../../utils/checkAuth");

module.exports = {
    Mutation:{
        async addCategory(_,{name,subCategory},context){
            const admin = checkAuth(context);

          try {
            let category = await Category.findOne({name});
            if(category){
                throw new Error('this category is already exist');
            }

            const newCategory = new Category({
                name,
                subCategory
            });

           category  = newCategory.save();
           return category; 
          } catch (error) {
            throw new Error('Internal server error'+error);
          }
        },
        async updateCategory(_,{id,name,subCategory},context){
            const admin = checkAuth(context);
            try {
                let category = await Category.findById(id);
                if(!category){
                    throw new Error("This category is not exist");
                }

                category.name = name;
                category.subCategory = subCategory;

                const newCategory = await category.save();
                return newCategory
            } catch (error) {
                throw new Error("Internal server error"+error);
            }
        }
    }
}