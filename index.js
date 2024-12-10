const express = require('express');
require('./db/Config');
const app = express();
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

// Middleware
app.use(express.json());
app.use(cors());

// Import models
const ProviderInfo = require('./db/ProviderInfo');
const TakerInfo = require('./db/TakerInfo');
const ServiceReview = require('./db/ServiceReview');
const User = require('./db/User');
const VideoTaker = require('./db/VideoTaker');

// Routes for Provider and Taker Info
app.post('/add-ProviderInfo', async (req, resp) => {
    let providerInfo = new ProviderInfo(req.body);
    let result = await providerInfo.save();
    resp.send(result);
});

app.post('/add-TakerInfo', async (req, resp) => {
    let takerInfo = new TakerInfo(req.body);
    let result = await takerInfo.save();
    resp.send(result);
});

app.get('/search/:key', async (req, resp) => {
    let result = await TakerInfo.find({
        "$or": [{ ServiceCategory: { $regex: req.params.key } }]
    });
    resp.send(result);
});

app.get('/search/:key', async (req, resp) => {
    let result = await TakerInfo.find({
        "$or": [{ ServiceCategory: { $regex: req.params.key } }]
    });
    resp.send(result);
});

app.get('/search1/:key', async (req, resp) => {
    let result = await ProviderInfo.find({
        "$or": [{ ServiceCategory: { $regex: req.params.key } }]
    });
    resp.send(result);
});

// Routes for Service Reviews
app.post('/add-review', async (req, resp) => {
    let serviceReview = new ServiceReview(req.body);
    let result = await serviceReview.save();
    resp.send(result);
});

app.get('/overview', async (req, resp) => {
    let serviceReview = await ServiceReview.find();
    if (serviceReview.length > 0) {
        resp.send(serviceReview);
    } else {
        resp.send({ candidate: "No reviews found" });
    }
});

// User Routes (Register & Login)
app.post('/register', async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
});

app.post('/login', async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select('-password');
        if (user) {
            resp.send(user);
        } else {
            resp.send({ result: "No User Found" });
        }
    } else {
        resp.send({ result: "No main user found" });
    }
});

// Routes for VideoTaker
app.post('/add-VideoTakerInfo', async (req, resp) => {
    let videoTaker = new VideoTaker(req.body);
    let result = await videoTaker.save();
    resp.send(result);
});

app.get('/VideoOverview', async (req, resp) => {
    let videoTaker = await VideoTaker.find();
    if (videoTaker.length > 0) {
        resp.send(videoTaker);
    } else {
        resp.send({ candidate: "No reviews found" });
    }
});

// Socket.io for live location tracking
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

let locations = {};

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('update-location', (data) => {
        locations[socket.id] = data;
        io.emit('locations-updated', locations); // Broadcast to all clients
    });

    socket.on('disconnect', () => {
        delete locations[socket.id];
        io.emit('locations-updated', locations); // Broadcast to all clients
    });
});

// Start the server
server.listen(5000, () => {
    console.log('Server is running on port 5000');
});