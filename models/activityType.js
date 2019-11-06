const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema ({
    onFoot: String,
    swimming: String,
    cycling: String
})
const activityCollection = mongoose.model('activity', ActivitySchema);

//all activities
const getAllActivitity = () => {
    return activityCollection.find({})
}
//single activity
const getSingleActivity = (id) => {
    return activityCollection.findById(id)
}
//create
const createActivity = (newActivity) => {
    return activityCollection.create(newActivity)
}
//update
const updateActivity = () => {
    return activityCollection.update({_id: id}, newActivity)
}
//delete
const deleteActivity = () => {
    return activityCollection.deleteOne({_id: id})
}


module.exports = {
getAllActivitity,
getSingleActivity,
createActivity,
updateActivity,
deleteActivity
}