const express = require("express");
const router = express.Router();
const {auth,isCordinator,isAdmin}=require("../middlewares/auth")

const {
    getAllAplication,
    getAllInterviewSchedule,
    applicationForCord,
    getAllAplicationsByJobId,
} = require("../controllers/Application");

router.post("/applicationForCord",auth,isCordinator, applicationForCord);
router.post("/getAllAplicationsByJobId",auth,isCordinator, getAllAplicationsByJobId);

router.get("/getAllAplication", getAllAplication);
router.get("/getAllInterviewSchedule", getAllInterviewSchedule);
 
 
module.exports = router;
  