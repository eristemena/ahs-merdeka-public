const express = require('express');

const transactionController = require('../controllers/transaction');
const { jwtAuth } = require('../mwares/jwt-auth');
const { canView, canAdd } = require('../permissions/transaction');

const router = express.Router();

router.use(jwtAuth);

const middlewareCanView = (req, res, next) => {
    if (!canView(req.authUser)) {
        res.status(403);
        return res.send('Forbidden');
    }

    next();
};

router.get('/', middlewareCanView, transactionController.fetch);
router.post('/', transactionController.add);
router.put('/:id(\\d+)', transactionController.edit);

module.exports = router;