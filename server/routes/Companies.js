const express = require("express");
const router = express.Router();

const {
    getAllCompany,
    getAllCompanyDetails,
    addCompanyDetails,
    // deleteCompany,
} = require("../controllers/companies");

const { isStudent, auth,isAdmin,isCordinator } = require("../middlewares/auth");

router.get("/getAllComapny", getAllCompany);
router.post("/getAllComapnyDetails",auth,isCordinator, getAllCompanyDetails);
router.post("/addComapnyDetails",auth,isCordinator||isAdmin, addCompanyDetails);
 
module.exports = router;
  