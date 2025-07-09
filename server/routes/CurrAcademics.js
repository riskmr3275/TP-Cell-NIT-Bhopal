const express = require("express");
const router = express.Router();

const {
    uploadResume,//   
    updateResume,//
    addCurrAcademics,//
     
    updateCurrAcademicsById,//
    deleteCurrAcademicsById,
    getAllCurrAcademics//
} = require("../controllers/CurrAcademics");

const {isStudent,auth}=require("../middlewares/auth");
router.post("/",auth,isStudent, uploadResume);
router.put("/:id",auth,isStudent, updateResume);
router.post("/add", auth, isStudent, addCurrAcademics);
 
router.put("/:id", auth, isStudent, updateCurrAcademicsById);
router.delete("/:id", auth, isStudent, deleteCurrAcademicsById);
router.get("/", auth, isStudent, getAllCurrAcademics);

module.exports = router;
