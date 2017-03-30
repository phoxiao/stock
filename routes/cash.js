var express = require('express');
var router = express.Router();
var cash = require('./cash');

router.get('/cash', function(req, res, next) {
    cash.getAllCash(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    })
});

outer.get('/cash/:id', function(req, res, next) {
    if (req.params.id) {
        cash.getCashById(req.params.id, function(err, row) {
            if (err) {
                res.json(err);
            } else {
                res.json(row);
            }
        });
    } else {
        cash.getAllCash(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    }
});

router.post('/cash', function(req, res, next) {
    cash.addCash(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    })
});

router.put('/cash/:id', function(req, res, next) {
    cash.updateCash(req.body, function(err, row) {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    })
});

router.delete('/cash/:id', function(req, res, next) {
    cash.deleteCash(req.params.id, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    })
});

module.exports = router;