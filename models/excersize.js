const mongoose = require('mongoose');

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
const updateExcersize = () => {
    return excersizeCollection.update({_id: id}, newExcersize)
}
//delete
const deleteExcersize = () => {
    return excersizeCollection.deleteOne({_id: id})
}

module.exports = {
getAllExcersize,
getSingleExcersize,
createExcersize,
updateExcersize,
deleteExcersize
}