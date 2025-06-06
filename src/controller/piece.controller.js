export const createPiece = async (req, res) => {
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

export async function listPiece(req, res, next) {
  try {
    const result = await pool.query("select * from piece");
    res.json(result.rows);
  } catch (error) {
    console.log("🚀 ~ getTest ~ error:", error);
  }
}