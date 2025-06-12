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
    const vehiclesWithImages = await Promise.all(
      result.rows.map(async (vehicle) => {
        if (!vehicle.image) return vehicle;

        try {
          const imageResponse = await fetch(
            `http://localhost:3200/preview/image/${vehicle.image}`
          );

          if (!imageResponse.ok) {
            console.error(`Image non trouvée pour ${vehicle.image}`);
            return { ...vehicle, image: null };
          }

          const imageBuffer = await imageResponse.arrayBuffer();
          const base64Image = Buffer.from(imageBuffer).toString("base64");

          return {
            ...vehicle,
            image: `data:image/jpeg;base64,${base64Image}`,
          };
        } catch (error) {
          console.error(`Erreur image ${vehicle.image}:`, error);
          return { ...vehicle, image: null };
        }
      })
    );

    res.status(200).json(vehiclesWithImages);
  } catch (error) {
    console.error("Erreur getCars:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
}

//     for  (const vehicleRow of result.rows) {
//       const nom_image = vehicleRow.image;
//       vehicleRow.image = await fetch(`http://localhost:3200/preview/image/${nom_image}`);}

//     res.send(result.rows);
//   } catch (error) {
//     console.log("🚀 ~ getTest ~ error:", error);
//   }
// }
