const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/garage_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log(err));

const carSchema = new mongoose.Schema({

    brand: String,
    model: String,
    year: Number,
    create: { type: Date, default: Date.now },
});
console.log('car', carSchema);

const Car = mongoose.model('Car', carSchema);


Car.findById("5faa9c6eba4536257fc44d56", function(err, res){
    console.log(res)
});