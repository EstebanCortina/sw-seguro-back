const Product = require("../../models/product_model.js")
module.exports = async (req, res) => {
    if (req.session.user_type_name !== "profesor"){
        res.status(403).send("forbidden")
    }

    try {
    let response = await Product.index_sells()    
    res.status(response.httpStatus).send(response)
    } catch (error) {
    console.log(error)
    res.status(500).send("server error")
    }
}