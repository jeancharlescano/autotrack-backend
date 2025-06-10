import { pool } from "../config/database.config.js";

export const createEntretien = async (req, res) => {
  try {
    const { titre, prix, kilometrage, date, facture, immatriculation } =
      req.body;
    //    faudra recup le immat depuis la voiture qu'on est entrain de check mais là c pour test
    //    console.log("create entretien ~ req.body:", req.body)
    const car = await pool.query(
      "insert into entretien(titre,prix,kilometrage,date,facture,vehicule_immat)values($1,$2,$3,$4,$5,$6)",
      [titre, prix, kilometrage, date, facture, immatriculation]
    );

    res.status(200).send({ status: "success" });
  } catch (error) {
    console.log(" ~ create ~ error:", error);
    res.sendStatus(500);
  }
};

export async function getEntretien(req, res, next) {
  try {
    const { immat } = req.query;
    const result = await pool.query(
      `SELECT 
    e.titre,
    e.date,
    e.kilometrage ,
    e.prix ,
    e.facture ,
    v.immatriculation,
    json_agg(
        json_build_object(
            'nom', p.nom,
            'prix', c.prix_piece
        )
    ) AS pieces
FROM 
    vehicules v
JOIN 
    entretien e ON v.immatriculation = e.vehicule_immat
JOIN 
    changer c ON e.id = c.entretien_id
JOIN 
    piece p ON c.piece_id = p.id
WHERE 
    v.immatriculation = $1
GROUP BY 
    e.id, e.titre, e.date, v.immatriculation;`,
      [immat]
    );

    res.json(result.rows);
  } catch (error) {
    console.log("🚀 ~ getTest ~ error:", error);
  }
}
