const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user_01:mongouser01pass@mycluster.jwcmn.mongodb.net/practica1?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.error(err));