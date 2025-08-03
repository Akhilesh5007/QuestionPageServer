const queDao = require("../dao/queDao");
const queService={
    serviceSave: async (data)=>{
        console.log(2);
        const res = await queDao.daoSave(data);
        // return queDao.daoSave(data);
        return res;
    }
}
module.exports=queService;  