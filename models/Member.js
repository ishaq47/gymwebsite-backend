const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  memberName: { type: String, required: true },
  cnic: { type: String, required: true },
  photo: { type: String },
  fatherName: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
  registrationDate: { type: Date },
  feeSubmitted: { type: Boolean, default: false },
}, { timestamp: true});

module.exports = mongoose.model('Member', MemberSchema);
