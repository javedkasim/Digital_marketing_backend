const {Software} = require("../model/software.model")

const handleSoftwareStoreController = async(req, res)=>{

        try {

            const body = req.body;

            if(!body.name || !body.phone || !body.email || !body.message){
                return res.status(400).json({Message:"All Field are required", Success: false});
            }
            const softwareAdd = await Software.insertOne(body);

            if(softwareAdd){
                return res.status(201).json({Message:"Your data insert successfully !", Success: true, Id: softwareAdd?._id });
            }

            console.log("softwareAdd", softwareAdd);

        } catch (error) {
             return res.status(500).json({Message:error.message, Success: false});
        }
};

module.exports = { handleSoftwareStoreController }