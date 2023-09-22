import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    todo: String,
    author: String,
});

export default mongoose.model('todo', TodoSchema);
