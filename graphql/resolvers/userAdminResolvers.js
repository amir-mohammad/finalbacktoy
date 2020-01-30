const UserAdmin = require('../../models/UserAdmin');
const bcryptJs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const checkAuth = require('../../utils/checkAuth');


module.exports = {
    Mutation:{
        async registerUserAdmin(_,{name,mobile,password,confirmPassword},context){
           
            const salt = await bcryptJs.genSalt(10);
            const hashPassword = await bcryptJs.hash(password,salt);

            const newAdmin = new UserAdmin({
                name,
                mobile,
                password:hashPassword,
                createAt:new Date().toISOString()
            });

            const user = await newAdmin.save();

            const token = jwt.sign({id:user.id,mobile:user.mobile,name:user.name},config.get('SecretKey'),{
                expiresIn:'2h'
            })
            return {...user._doc,id:user.id,token}
        },

        async loginAdmin(_,{mobile,password},context){
            try {
                const admin = await UserAdmin.findOne({mobile});
                if(!admin){
                    throw new Error("admin is not exist");

                }
                const match = await bcryptJs.compare(password,admin.password);
                if(!match){
                    throw new Error("password  is not correct");
                }
                const token = jwt.sign({id:admin.id,mobile:admin.mobile,name:admin.name},config.get('SecretKey'),{
                    expiresIn:'2h'
                })
                return {...admin._doc,id:admin.id,token};
            } catch (error) {
                throw new Error("Internal server error"+error);
            }
        }
    }
}