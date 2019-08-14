let router = require('express').Router(),
	clientController = require('./clientController');

// Set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'Working...',
        message: 'Crafted with <3'
    });
});

// Routes
router.route('/client/all')
    .get(clientController.index);

router.route('/client/new')
    .post(clientController.new);

router.route('/client/:client_id')
    .get(clientController.view)
    .patch(clientController.update)
    .put(clientController.update)
    .delete(clientController.delete);

module.exports = router;
