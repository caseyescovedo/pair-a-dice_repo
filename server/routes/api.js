const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Post request for user registration
router.post('/user', userController.addUser, (req, res) => {
    res.status(200).json(res.locals.user);
});


//Put request, skill level and language
router.put('/skill', userController.addSkillLanguage,
    (req, res) => res.status(200).json({})
);

//get request for partner
router.get('/partner', userController.findPartner, userController.statusReady,(req, res) => {
  // res.status(200).json(res.locals.partner);
  console.log(res.locals.partner);
  res.send(res.locals.partner);
});

// //Put request, update partners Yes/No,
router.post('/feedback', userController.sessionFeedback,
    (req, res) => res.status(200).json({})
);

//Put request, increment session count
router.put('/session', userController.incrementSessionCount, userController.statusNotReady,
    (req, res) => res.status(200).json({})
);

// //Put request, update partners Yes/No,
// router.put('/feedback', userController.updateUserFeedback,
//     (req, res) => res.status(200).json({})
// );


module.exports = router;