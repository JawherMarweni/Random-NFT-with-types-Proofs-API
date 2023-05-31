const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

const discountsData = JSON.parse(fs.readFileSync("discounts.json"));
const proofsData = JSON.parse(fs.readFileSync("proofs.json"));

app.get("/checkAddress", (req, res) => {
  const { address } = req.query;

  const addressData = discountsData.find(
    (discount) => discount.receiver === address
  );

  if (addressData) {
    const nftType = addressData.nftType;
    const discount = addressData.discount;

    const proofData = proofsData.find((proof) => proof.address === address);

    if (proofData) {
      const proof = proofData.proof;

      res.json({ nftType, discount, proof });
    } else {
      res.status(404).json({ error: "Proof not found for the address" });
    }
  } else {
    res.status(404).json({ error: "Address does not exist" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
