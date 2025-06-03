export const createVehicles = async (req, res) => {
    console.log("🚀 ~ createVehicles ~ req:", req.body)
    res.status(200).send({"status": "success"})
    
}