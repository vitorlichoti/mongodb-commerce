db.produtos.update({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "sódio",
      quantidade: { $gte: 40 },
    },
  },
}, { $addToSet: { tags: "muito sódio" } });

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });