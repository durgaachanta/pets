const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '../../pets_app/build/'));

//ui get route to fetch pets data
app.get('/pets/fetchpetsdata', (req, res) => {
  axios.get('http://5c983a812e1ca60014d60d43.mockapi.io/pets')
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

//ui post route to add new pet to MockAPI
app.post('/pets/postnewpetdata', (req, res) => {
  axios.post('http://5c983a812e1ca60014d60d43.mockapi.io/pets', req.body)
    .then((response) => {
      if (response.status === 201) {
        res.json({
          status: "success",
          message: "New pet data successfully added to MockAPI",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });

});

//ui delete route to delete record from MockAPI
app.delete('/pets/deletepet/:id', (req, res) => {
  axios.delete(`http://5c983a812e1ca60014d60d43.mockapi.io/pets/${req.params.id}`)
    .then((response) => {
      if (response.status === 200) {
        res.json({
          status: "success",
          message: "Pet deleted from MockAPI",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

//ui put route to edit a record for MockAPI
app.put('/pets/editpetdata/:id', (req, res) => {
  axios.put(`http://5c983a812e1ca60014d60d43.mockapi.io/pets/${req.params.id}`, req.body)
    .then((response) => {
      if (response.status === 200) {
        res.json({
          status: "success",
          message: "pet data edited",
        });
      }
    })
    .catch((error) => {
      console.logo(error);
    });

});

app.listen(1337);