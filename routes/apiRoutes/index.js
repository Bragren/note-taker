const notesRoutes = require('../apiRoutes/noteRoutes');
const router = require('express').Router();

router.use(notesRoutes);

module.exports = router;