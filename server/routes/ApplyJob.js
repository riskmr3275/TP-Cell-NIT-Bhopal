const express = require("express");
const router = express.Router();

const {
    applyJob,
    deleteApplyJobById,
    getAllApplyJobs,
} = require("../controllers/ApplyJob");

const { isStudent, auth } = require("../middlewares/auth");

router.post("/applyJob", auth, isStudent, applyJob);
router.delete("/deleteApplyJobById", auth, isStudent, deleteApplyJobById);
router.get("/getAllApplyJobs", auth, isStudent, getAllApplyJobs);
 
module.exports = router;
  