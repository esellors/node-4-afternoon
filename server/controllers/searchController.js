const swag = require('../models/swag');

module.exports = {
   search: (req, res) => {
      const {category} = req.params;

      if(!category) {
         res.status(200).json(swag);
      } else {
         const filteredItems = swag.filter(el => el.category === category);
 
         res.status(200).json(filteredItems)
      }
   }
}