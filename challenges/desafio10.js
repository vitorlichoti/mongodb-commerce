db.produtos.find({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "proteínas",
      $and: [
        { percentual: { $gte: 30 } },
        { percentual: { $lte: 40 } },
      ],
    },
  },
}, { _id: 0, nome: 1 });