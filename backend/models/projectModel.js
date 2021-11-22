import mongoose from 'mongoose'
//import { number } from 'prop-types'

const projectSchema = new mongoose.Schema({
  index: {type: String, required: true},
  name: {type: String, required: true, unique: true},
  link: {type: String, required: true},
  url: {type: String, required: true},
  picture: {type: String, required: true},
},
{ 
  timestamps: true 
}
);

const Project = mongoose.model('Project', projectSchema);
export default Project