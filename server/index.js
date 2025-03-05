const express = require('express');
const cookieParser = require('cookie-parser');
const database = require("./config/database");
require('dotenv').config();
const userRoutes = require("./routes/User");
const companiesRoutes = require("./routes/Companies");
const applicationsRoutes = require("./routes/Application");
const profileRoutes = require("./routes/Profile");
const currAcademicsRoutes = require("./routes/CurrAcademics");
const applyJobRoutes = require("./routes/ApplyJob");
const gapRoutes = require("./routes/Gap");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const jobRoutes = require("./routes/JobPostings");
const cors = require("cors");
 

const app = express();
database.connect();
app.use(fileUpload({
    useTempFiles: true, 
    tempFileDir: "/tmp"
}));
cloudinaryConnect();
app.use(express.json());
app.use(cookieParser());
 
app.use(cors({
    origin:"https://tp-cell-nit-bhopal-india-re1mmimgh-risu-guptas-projects.vercel.app/",
    credentials:true,
}))

app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/applications', applicationsRoutes);
app.use('/api/v1/companies', companiesRoutes);
app.use('/api/v1/jobposting', jobRoutes);
app.use('/api/v1/profile', profileRoutes);
app.use('/api/v1/gap', gapRoutes);
app.use('/api/v1/currAcademics', currAcademicsRoutes);
app.use('/api/v1/job', applyJobRoutes);

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is up and running.............."
    });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
