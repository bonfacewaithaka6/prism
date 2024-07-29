import mongoose from 'mongoose';

const depositSchema = new mongoose.Schema({
    paymentToken: { type: String, required: true },
    amount: { type: Number, required: true },
    depositType: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Deposit = mongoose.models.Deposit || mongoose.model('Deposit', depositSchema);

export default Deposit;
