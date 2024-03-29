const express = require("express");
const router = express.Router();

const loginController = require("../controllers/loginController");
const mainController = require("../controllers/mainController");

/* Set default layout for this route */
router.all("/*", (req, res, next) => {
    req.app.locals.layout = "layout.hbs";
    next();
});

/* GET home page */
router.get("/", mainController.indexGet);

/* GET about page */
router.get("/meist", mainController.aboutGet);

/* GET events page */
router.get("/%C3%BCritused", mainController.eventsGet);

/* GET event query page */
router.get("/%C3%BCritused/get/:skip", mainController.eventsQueryGet);

/* GET event page */
router.get("/%C3%BCritused/:id", mainController.eventGet);

/* GET liikmed page */
router.get("/liikmed", mainController.membersGet);

/* GET alumni page */
router.get("/vilistlased", mainController.alumniGet);

/* GET mentor page */
router.get("/mentor", mainController.mentorGet);


/* GET login form */
router.get("/login", loginController.loginGet);

/* POST login form */
router.post("/login", loginController.loginPost);

/* GET register form */
//router.get("/register", loginController.registerGet);

/* POST register form */
//router.post("/register", loginController.registerPost);

/* GET logout */
router.get("/logout", loginController.logout);

/* Locale cookies */
// https://gist.github.com/mashpie/5246334
/*router.get("/en", (req, res) => {
    res.cookie("locale", "en", {maxAge: 900000, httpOnly: true});
    res.redirect("back");
});
router.get("/et", (req, res) => {
    res.cookie("locale", "et", {maxAge: 900000, httpOnly: true});
    res.redirect("back");
});*/


/* Redirects */
router.get("/robocode2019", (req, res) => {
    res.redirect("https://docs.google.com/forms/d/e/1FAIpQLSfBqRZUZ2ZV6HM6Ln5fF4AiBQK1yKoNGCoI52s_LPLYRR9nxw/viewform");
});

module.exports = router;
