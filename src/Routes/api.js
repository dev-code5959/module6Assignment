const express = require('express');
const router = express.Router();

const  blogController = require('../Controllers/blogControllers');
const blogDetailsController = require('../Controllers/blogDetailsController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
const profitController = require('../Controllers/profitController');
const projectController = require('../Controllers/projectController');
const serviceController = require('../Controllers/serviceController');
const titleController = require('../Controllers/titleController');

//create blog api
router.get('/blog', blogController.create);
//read blog api
router.get('/blog/read',blogController.read)
// delete blog api
router.get('/blog/delete',blogController.delete);
// update blog api
router.get('/blog/update',blogController.update)



//blog details api

router.get('/blog/details',blogDetailsController.create);
//read blog details api
router.get('/blog/details/read', blogDetailsController.read)
//delete blog details api
router.get('/blog/details/delete',blogDetailsController.delete)
//update blog details api
router.get('/blog/details/update',blogDetailsController.update)



//create comments
router.get('/comments',commentController.create)
//read comments
router.get('/comments/read', commentController.read)
//delete comment
router.get('/comments/delete', commentController.delete)
//update comments
router.get('/comments/update', commentController.update)



//create message
router.get('/messages',messageController.create)
//read message
router.get('/messages/read', messageController.read)
//delete message
router.get('/messages/delete', messageController.delete)
//upate message
router.get('/messages/update', messageController.update)


//create portfolio
router.get('/portfolio',portfolioController.create)
//read portfolio
router.get('/portfolio/read', portfolioController.read)
//delete portfolio
router.get('/portfolio/delete', portfolioController.delete)
//update portfolio
router.get('/portfolio/update', portfolioController.update)



//create product
router.get('/products',productController.create);
//read product
router.get('/products/read', productController.read)
//delete product
router.get('/products/delete',productController.delete)
//update product
router.get('/products/update', productController.update)


//create profit
router.get('/profit', profitController.create)
//read profit
router.get('/profit/read', profitController.read)
//delete profit
router.get('/profit/delete',profitController.delete)
//update profit
router.get('/profit/update', profitController.update)


//create project
router.get('/projects',projectController.create)
//read project api
router.get('/projects/read', projectController.read)
//delete project
router.get('/projects/delete',projectController.delete)
//update project
router.get('/projects/update', projectController.update)


//create service
router.get('/services',serviceController.create)
//read service
router.get('/services/read',serviceController.read)
//delete service
router.get('/services/delete', serviceController.delete)
//update service
router.get('/services/update', serviceController.update)


//create title
router.get('/titles',titleController.create)
//read title
router.get('/titles/read', titleController.read)
//delete title
router.get('/titles/delete',titleController.delete)
//update title
router.get('/titles/update',titleController.delete)

module.exports = router;