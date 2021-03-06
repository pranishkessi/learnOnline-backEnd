const mongoose = require('mongoose');

const studentData = mongoose.Schema({
          name: {
                    type: String,
                    reqired: true
          },
          email: {
                    type: String,
                    reqired: true,
                    unique: true
          },
          phone: {
                    type: Number,
                    reqired: true,
                    unique: true
          },

          password: {
                    type: String,
                    reqired: true       
          },
          admin:{
                    type:Boolean,
                    default:false
          }
})

module.exports = mongoose.model('Student', studentData)