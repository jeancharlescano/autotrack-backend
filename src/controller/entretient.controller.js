
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