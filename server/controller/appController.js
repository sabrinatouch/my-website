const signup = (req, res) => {
    res.status(201).json("Signup successful.");
}

const getbill = (req, res) => {
    res.status(201).json("getBill successful.");
}

module.exports = {
    signup,
    getbill
}