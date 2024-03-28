const signup = (req,res) =>{
    res.status(201).json("Sign up Success")
}

const getbill = (req,res) =>{
    res.status(201).json("Bill generated")
}

module.exports = {
    signup,
    getbill
}