let {Product} = require("../db/models");
const slugify = require("slugify");

exports.productsList = async(req, res) => {
  try {
      const allProducts = await Product.findAll(
        {
          attributes :{exclude : ["createdAt","updatedAt"]}
        }
      )
      res.json(allProducts)
  } catch (error) {
    res.status(500).json({message : error.message})
    
  }
};

// exports.productsDetails = (req, res) => {
//   const { productId } = req.params;
//   const foundProduct = Product.find((product) => product.id === +productId);
//   console.log(foundProduct);
//   if (foundProduct) {
//     res.json(foundProduct);
//   } else {
//     res.status(404).json({ message: "Data not found" });
//   }
// };

exports.productsAdd = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body)
    res.status(201).json(newProduct)
  } catch (error) {

    res.status(500).json({message : error.message})
  }
  
};

exports.productsDelete = async (req, res) => {
  const {productId}=req.params
  try {
    const foundProduct = await Product.findByPk(productId)
    if (foundProduct) {
    await foundProduct.destroy()
    res.status(204).end()}
   
  else{
    res.status(404).json({message :"not found"})
  }

  }
  catch (error) {
    res.status(500).json({message : error.message})
  }
  
};

exports.updateProducts = async (req,res)=>{
const {productId} = req.params
try {
  const foundProduct = await Product.findByPk(productId)
  if (foundProduct) {
  await foundProduct.update()
  res.status(204).end()}
 
else{
  res.status(404).json({message :"not found"})

}

}
catch (error) {
  res.status(500).json({message : error.message})
}
}