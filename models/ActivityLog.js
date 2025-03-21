const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  action: { type: String, required: true }, // ex.: "Criou caso", "Editou laudo"
  targetId: { type: mongoose.Schema.Types.ObjectId }, // ID do objeto afetado
  targetType: { type: String }, // ex.: "Case", "Report"
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ActivityLog', activityLogSchema);