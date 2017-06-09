'use strict';
const express = require('express');
const studentRouter = express.Router();
const bodyParser = express('body-parser');
const {DATABASE_URL,PORT} = require('config');
const knex = require('knex')(DATABASE_URL);
studentRouter.use(bodyParser.json());

///////////////////////////////////////////////////////////////
///////////          Student Get Methods            //////////
/////////////////////////////////////////////////////////////
studentRouter.get('/', (req,res)=>{
  knex('studentList')
    .select(req.body.id,req.body.firstName, req.body.lastName)
    .then(results =>{
      return res.json(results);
    });
});

studentRouter.get('/:id',(req,res)=>{
  knex('studentList')
    .select(req.body.id,req.body.firstName,req.body.lastName)
    .where('id', req.params.id)
    .then(result=>{
      return res.json(result);
    });
});

///////////////////////////////////////////////////////////////
///////////          Student Post Method            //////////
/////////////////////////////////////////////////////////////
studentRouter.post('/',(req,res)=>{
  if (!(req.body.firstName && req.body.lastName) ) {
    return res.status(400).send(`Missing title in body request.`);
  }
  const inserted ={};
  const insertFields = ['firstName','lastName','age','email'];
  insertFields.forEach(el=>{
    if(req.body[el]){
      return inserted[el]= req.body[el];
    }
  });
  knex('studentList')
    .insert(inserted)
    .returning(['id', 'firstName', 'lastName'])
    .then(result=>{
      return res.status(201).json(result);
    });
});

///////////////////////////////////////////////////////////////
///////////          Student Put Method            ///////////
/////////////////////////////////////////////////////////////
studentRouter.put('/:id',(req,res)=>{
  if(req.body.id !== req.params.id){
    const message = 'Missing id in req.body or req.body.id != req.params.id';
    console.error(message);
    return res.status(400).json({message});
  }
  const updated ={};
  const updateFields = ['firstName','lastName','age','email'];
  updateFields.forEach(el=>{
    if(req.body[el]){
      return updated[el]= req.body[el];
    }
  });
  knex('studentList')
  .update(updated)
  .where('id',req.params.id)
  .returning(['id', 'firstName', 'lastName'])
  .then(result=>{
    res.json(result);
  });
});

///////////////////////////////////////////////////////////////
///////////          Student Delete Method            ////////
/////////////////////////////////////////////////////////////
studentRouter.delete('/:id',(req,res)=>{
  knex('studentList')
  .del()
  .where('id'.req.params.id)
  .then(res.status(204).end());
});

module.exports = studentRouter;