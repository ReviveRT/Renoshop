// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
} */
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const DATAS = require('./miista-export.json')

app.use(express.json());

app.get('/allData',(req,res) => {
     res.send(DATAS)
})

app.get('/items',(req,res) => {
     const page = parseInt(req.query.page)
     const limit = parseInt(req.query.limit)
     const startIndex = (page - 1) * limit;
     const endIndex = page * limit;
     const resultUsers = Object.values(DATAS.data.allContentfulProductPage.edges).slice(startIndex,endIndex)
     res.json(resultUsers)
})

app.use('/filter', (req, res, next) => {
     const filters = req.query;
     const filteredUsers = Object.values(DATAS.data.allContentfulProductPage.edges).filter(user => {
       let isValid = true;
       for (key in filters) {
         isValid = isValid && user[key] == filters[key];
       }
       return isValid;
     });
     res.send(filteredUsers);
     console.log(filteredUsers);
   });


app.listen(PORT, () => console.log('server running'))

