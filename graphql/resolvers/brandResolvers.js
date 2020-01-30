const Brand = require('../../models/Brand');
const checkAuth = require('../../utils/checkAuth');

module.exports = {
    Mutation:{
        async addBrand(_,{name,image},context){
            const admin = checkAuth(context);
            try {
                let brand = await Brand.findOne({name});
                if(brand){
                    throw new Error("this brand already exist");
                }

                const newBrand = new Brand({
                    name,
                    image
                });
                brand  = newBrand.save();
                return brand; 
            } catch (error) {
                throw new Error('Internal server Error'+ error);
            }
        },
        async updateBrand(_,{id,name,image},context){
            const admin = checkAuth(context);
            let brand = await Brand.findById(id);
            if(!brand){
                throw new Error('This brand is not exist');
            }

            brand.name = name;
            brand.image = image;
            
            const updateBrand = await brand.save();
            return updateBrand;
        }
    }
}