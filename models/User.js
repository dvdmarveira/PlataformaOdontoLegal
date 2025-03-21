const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hash da senha
  role: { type: String, enum: ['Administrador', 'Perito', 'Assistente'], default: 'Perito' },
  permissions: {
    viewCases: { type: Boolean, default: true },
    editCases: { type: Boolean, default: false },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);