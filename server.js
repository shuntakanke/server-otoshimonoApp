const express = require('express');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const lostPropertyRoutes = require('./routes/lostProperty');

const app = express();



app.use('/auth',authRoutes);
app.use('/users',usersRoutes);
app.use('/lost_property',lostPropertyRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT);