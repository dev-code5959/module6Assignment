const e = require("express");


exports.create = async (req, res) => {

    await res.send("Create Blog Api");
}

exports.read = async (req, res) => {
    await res.send("Read Blog Api");
}
exports.delete = async (req, res) => {
    await res.send("Delete Blog Api");
}
exports.update = async (req,res)=>{
    await res.send("Update Blog Api");
}