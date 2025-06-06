import { pool } from "../config/database.config.js";

export const createVehicles = async (req, res) => {
  try {
    const {
      immatriculation,
      marque,
      modele,
      annee,
      motorisation,
      kilometrage,
      carburant,
      puissance,
      taillePneu,
      image,
    } = req.body;
    await pool.query(
      "insert into vehicules(immatriculation , marque,modele,annee,motorisation,kilometrage,carburant,puissance,taille_pneu,image)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
      [
        immatriculation,
        marque,
        modele,
        annee,
        motorisation,
        kilometrage,
        carburant,
        puissance,
        taillePneu,
        image,
      ]
    );

    res.status(200).send({ status: "success" });
  } catch (error) {
    console.log(" ~ create ~ error:", error);
    res.sendStatus(500);
  }
};

export async function getCars(req, res, next) {
  try {
    const result = await pool.query("select * from vehicules ");

    for (const vehicleRow of result.rows) {
      vehicleRow.image=`data:image/*;base64,${vehicleRow.image}`
    }


    res.send(result.rows);
  } catch (error) {
    console.log("🚀 ~ getTest ~ error:", error);
  }
}







