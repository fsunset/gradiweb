Client = require('./clientModel');

// Show All Clients
exports.index = function(req, res) {
    Client.get(function(err, clients) {
        if (err) {
            res.json({
                error: err
            });
        }

        res.json({
            message: "All clients listed!",
            data: clients
        });
    });
};

// Create Client
exports.new = function(req, res) {
    var client = new Client();

    client.name = req.body.name ? req.body.name : client.name;
    client.email = req.body.email;
    client.phone = req.body.phone;
    
    client.save(function(err) {
        if (err) {
            res.json({
                error: err
            });
        }

        res.json({
            message: 'Client created!',
            data: client
        });
    });
};

// Show Client by ID
exports.view = function(req, res) {
    Client.findById(req.params.client_id, function(err, client) {
        if (err) {
            res.json({
                error: err
            });
        }

        res.json({
            message: 'Client info',
            data: client
        });
    });
};

// Update Client
exports.update = function(req, res) {
    Client.findById(req.params.client_id, function(err, client) {
        if (err) {
            res.json({
                error: err
            });
        }

        client.name = req.body.name ? req.body.name : client.name;
        client.gender = req.body.gender;
        client.email = req.body.email;
        client.phone = req.body.phone;

        client.save(function(err) {
            if (err) {
                res.json({
                    error: err
                });
            }

            res.json({
                message: 'Client updated',
                data: client
            });
        });
    });
};

// Delete Client
exports.delete = function(req, res) {
    Client.remove({
        _id: req.params.client_id
    }, function(err, client) {
        if (err) {
            res.json({
               error: err
            });
        }
            
        res.json({
            status: "success",
            message: 'Client deleted'
        });
    });
};
