'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const {app, runServer, closeServer} = require('../server');
const {DATABASE} = require('../config');
const knex = require('knex')(DATABASE);

chai.should();
chai.use(chaiHttp);

describe('class list with students in the class with grades', ()=>{
  before(()=>runServer());
  after(()=>{return knex.destroy().then(closeServer);});
  
  ////////////////////////////////////////////////////////////////
  /////////          Testing Student List            ////////////
  //////////////////////////////////////////////////////////////
  describe('Testing the student list',function(){
    describe('testing get and post endpoint skeleton (student)',function(){
      it('it should get with 200 status and array', function(){
        
      });
    });
    describe('Testing the database',function(){
      afterEach(()=>{
        return knex('studentlist').del().catch(err=>{
          console.error('ERROR:',err);
        });
      });
      describe('Get Tests',function(){

      });
      describe('Post Test',function(){

      });
      describe('Put Test',function(){

      });
      describe('Delete Test',function(){

      });
    });
  });
  ////////////////////////////////////////////////////////////////
  /////////          Testing Class List            //////////////
  //////////////////////////////////////////////////////////////
  describe('Testing the class list',function(){
    describe('testing get and post endpoint skeleton (class)',function(){
      
    });
    describe('Testing the database',function(){
      afterEach(()=>{
        return knex('classlist').del().catch(err=>{
          console.error('ERROR:',err);
        });
      });
      describe('Get Tests',function(){

      });
      describe('Post Test',function(){

      });
      describe('Put Test',function(){

      });
      describe('Delete Test',function(){

      });
    });
  });
});