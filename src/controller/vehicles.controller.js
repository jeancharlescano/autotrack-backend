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
      taille_pneu,
      image,
    } = req.body;
    console.log("create ~ req.body:", req.body);
    const car = await pool.query(
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
        taille_pneu,
        image,
      ]
    );

    res.status(200).send({ status: "success" });
  } catch (error) {
    console.log(" ~ create ~ error:", error);
    res.sendStatus(500);
  }
};

export default async function get_cars(req, res, next) {
  try {
    const result = await pool.query("select * from vehicules ");

    res.json(result.rows);
  } catch (error) {
    console.log("🚀 ~ getTest ~ error:", error);
  }
}

export async function get_entretien(req, res, next) {
  try {
    const { immat } = req.body;
    const result = await pool.query(
      "select * from entretien where vehicule_immat =$1",
      [immat]
    );
    // console.log("immat : ",immat)
    res.json(result.rows);
  } catch (error) {
    console.log("🚀 ~ getTest ~ error:", error);
  }
}

export async function list_piece(req, res, next) {
  try {
    const result = await pool.query("select * from piece");
    res.json(result.rows);
  } catch (error) {
    console.log("🚀 ~ getTest ~ error:", error);
  }
}

export const create_entretien = async (req, res) => {
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

export const create_piece = async (req, res) => {
  try {
    const { nom } = req.body;

    //    console.log("create piece ~ req.body:", req.body)
    const pcs = await pool.query("insert into piece(nom)values($1)", [nom]);

    res.status(200).send({ status: "success" });
  } catch (error) {
    console.log(" ~ create ~ error:", error);
    res.sendStatus(500);
  }
};
