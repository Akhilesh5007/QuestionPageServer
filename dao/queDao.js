// var mongoDataBase=require('mongodb')
var getcon= require('../common/DBconnection')
const queDao = {
        daoSave : async (data)=>{
            try{
            console.log(3);
          const collton=await getcon();
            const finalresponse = await collton.insertOne(data)
            return finalresponse;
            }
            catch(e){
               return e;
            }
        },

    
}
module.exports = queDao;