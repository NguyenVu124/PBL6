const express = require('express');
const { selfVehicleController } = require('../controllers');
const auth = require('../middlewares/auth');

const router = express.Router();

router.route('/:userId').post(auth('createSelfVehicle'), selfVehicleController.createSelfVehicle);
router.route('/').get(selfVehicleController.getSelfVehicles);
router
  .route('/:selfVehicleId')
  .get(selfVehicleController.getSelfVehicle)
  .patch(auth('updateSelfVehicle'), selfVehicleController.updateSelfVehicle)
  .delete(auth('deleteSelfVehicle'), selfVehicleController.deleteSelfVehicle);

router.route('/:selfVehicleId/detailVehicle').get(selfVehicleController.getDetailVehicles);

router.route('/detailVehicle').post(auth('createDetailVehicle'), selfVehicleController.createDetailVehicle);

router
  .route('/detailVehicle/:detailVehicleId')
  .get(selfVehicleController.getDetailVehicle)
  .patch(auth('updateDetailVehicle'), selfVehicleController.updateDetailVehicle)
  .delete(auth('deleteDetailVehicle'), selfVehicleController.deleteDetailVehicle);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: SelfVehicle
 *   description: SelfVehicle management and retrieval
 */

/**
 * @swagger
 * /selfVehicle:
 *   get:
 *     summary: Get all SelfVehicles
 *     description: retrieve all SelfVehicles.
 *     tags: [SelfVehicle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: User name
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         description: User role
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of users
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *       "403":
 */

/**
 * @swagger
 * /selfVehicle/{selfVehicleId}:
 *   get:
 *     summary: Get a SelfVehicle
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [SelfVehicle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *       "401":
 *       "403":
 *       "404":
 *
 *   patch:
 *     summary: Update a SelfVehicle
 *     description: Logged in users can only update their own information. Only admins can update other users.
 *     tags: [SelfVehicle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *             example:
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *       "400":
 *       "401":
 *       "403":
 *       "404":
 *
 *   delete:
 *     summary: Delete a SelfVehicle
 *     description: Logged in users can delete only themselves. Only admins can delete other users.
 *     tags: [SelfVehicle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *       "403":
 *       "404":
 */

/**
 * @swagger
 * /selfVehicle/{selfVehicleId}/detailVehicle:
 *   get:
 *     summary: Get all tables of SelfVehicle
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [SelfVehicle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *       "401":
 *       "403":
 *       "404":
 *
 */

/**
 * @swagger
 * /selfVehicle/detailVehicle/{detailVehicleId}:
 *   get:
 *     summary: Get a detailVehicle
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [SelfVehicle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *       "401":
 *       "403":
 *       "404":
 *
 *   patch:
 *     summary: Update a detailVehicle
 *     description: Logged in users can only update their own information. Only admins can update other users.
 *     tags: [SelfVehicle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *             example:
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *       "400":
 *       "401":
 *       "403":
 *       "404":
 *
 *   delete:
 *     summary: Delete a detailVehicle
 *     description: Logged in users can delete only themselves. Only admins can delete other users.
 *     tags: [SelfVehicle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *       "403":
 *       "404":
 */

/**
 * @swagger
 * /SelfVehicle/detailVehicle:
 *   post:
 *     summary: Create a detailVehicle
 *     description:  Admins and Partner can create detailVehicle
 *     tags: [SelfVehicle]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *             properties:
 *             example:
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *       "400":
 *       "401":
 *       "403":
 *
 */

/**
 * @swagger
 * /SelfVehicle:
 *   get:
 *     summary: Get all SelfVehicles
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [SelfVehicle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *       "401":
 *       "403":
 *       "404":
 */

/**
 * @swagger
 * /selfVehicle/{userId}:
 *   post:
 *     summary: Create a SelfVehicle
 *     description:  Admins and Partner can create SelfVehicle
 *     tags: [SelfVehicle]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *             properties:
 *             example:
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *       "400":
 *       "401":
 *       "403":
 *
 */
