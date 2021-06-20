let {event} = require("../db/models");
const slugify = require("slugify");

exports.eventsLis = async(req, res) => {
  try {
      const allEvents = await event.findAll(
        {
          attributes :{exclude : ["createdAt","updatedAt"]}
        }
      )
      res.json(allEvents )
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

exports. eventsAdd = async (req, res) => {
  try {
    const newEvent = await event.create(req.body)
    res.status(201).json(newEvent )
  } catch (error) {

    res.status(500).json({message : error.message})
  }
  
};

exports.eventsDelete = async (req, res) => {
  const {eventId}=req.params
  try {
    const foundEvent = await event.findByPk(eventId)
    if (foundEvent) {
    await foundEvent.destroy()
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
const {eventId} = req.params
try {
  const foundEvent = await Product.findByPk(eventId)
  if (foundEvent) {
  await foundEvent.update()
  res.status(204).end()}
 
else{
  res.status(404).json({message :"not found"})

}

}
catch (error) {
  res.status(500).json({message : error.message})
}
}