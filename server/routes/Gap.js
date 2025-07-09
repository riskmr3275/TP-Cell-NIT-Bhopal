const express = require("express");
const router = express.Router();

const {
    addGap,
    getGapById,
    updateGapById,
    deleteGapById,
    getAllGaps,
} = require("../controllers/Gap");

const {isStudent,auth}=require("../middlewares/auth");

router.post("/add", auth, isStudent, addGap);
router.get("/:id", auth, isStudent, getGapById);
router.put("/:id", auth, isStudent, updateGapById);
router.delete("/:id", auth, isStudent, deleteGapById);
router.get("/", auth, isStudent, getAllGaps);


module.exports = router;
