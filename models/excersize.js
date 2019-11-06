const mongoose = require('./connection.js');

const ExcersizeSchema = new mongoose.Schema ({
    excersizeName: String,
    caloriesPerHour: Number,
    description: String
})
const excersizeCollection = mongoose.model('excersize', ExcersizeSchema);

//all activities
const getAllExcersize = () => {
    return excersizeCollection.find({})
}
//single excersize
const getSingleExcersize = (id) => {
    return excersizeCollection.findById(id)
}
//create
const createExcersize = (newExcersize) => {
    return excersizeCollection.create(newExcersize)
}
//update
const updateExcersize = (id, newExcersize) => {
    return excersizeCollection.updateOne({_id: id}, newExcersize)
}
//delete
const deleteExcersize = (id) => {
    return excersizeCollection.deleteOne({_id: id})
}

module.exports = {
getAllExcersize,
getSingleExcersize,
createExcersize,
updateExcersize,
deleteExcersize
}