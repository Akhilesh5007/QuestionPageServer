var mongoDataBase=require('mongodb')
const getConn = async () => {
    const mongoCl = mongoDataBase.MongoClient
    const mongoServer = await mongoCl.connect(process.env.DB_URL)
    const db = mongoServer.db("AkhilDB");
    const collections = db.collection("QuestionPage")
    return collections;

}
module.exports= getConn;