const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://admin:admin123456@fiap-tecnico.dsp0j.mongodb.net/todolist')
}

module.exports = conn
