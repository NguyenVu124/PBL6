const express = require('express');
const { hotelController } = require('../controllers');
const auth = require('../middlewares/auth');

const router = express.Router();

router.route('/:userId').post(auth('manageHotels'), hotelController.createHotel);
router.route('/').get(hotelController.getHotels);
router
  .route('/:hotelId')
  .get(hotelController.getHotel)
  .patch(auth('manageHotels'), hotelController.updateHotel)
  .delete(auth('manageHotels'), hotelController.deleteHotel);

router.route('/:hotelId/room').get(hotelController.getRooms);

router.route('/room').post(auth('manageRooms'), hotelController.createRoom);

router
  .route('/room/:roomId')
  .get(hotelController.getRoom)
  .patch(auth('manageRooms'), hotelController.updateRoom)
  .delete(auth('manageRooms'), hotelController.deleteRoom);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Hotel
 *   description: Hotel management and retrieval
 */

/**
 * @swagger
 * /hotel/{userId}:
 *   post:
 *     summary: Create a hotel
 *     description:  Admins and Partner can create hotel
 *     tags: [Hotel]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - city
 *               - email
 *               - address
 *               - phone
 *               - totalRooms
 *               - availableRooms
 *               - imageCover
 *             properties:
 *               name:
 *                 type: string
 *               idUser:
 *                 type: string
 *               city:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               totalRooms:
 *                  type: Number
 *               availableRooms:
 *                  type: Number
 *               vote:
 *                  type: Number
 *               imageCover:
 *                  type: string
 *               images:
 *                  type: Array(String)
 *               rooms:
 *                  type: Array(roomIds)
 *               feedbacks:
 *                  type: Array(feedbackIds)
 *             example:
 *                name: Novotel,
 *                idUser: 61af6a598a479b6e18d60505,
 *                city: Đà Nẵng,
 *                address: 36 Bạch Đằng, Street, Hải Châu, Đà Nẵng,
 *                phone: 0339878481,
 *                totalRooms: 100,
 *                availableRooms: 50,
 *                imageCover: #,
 *                images: []
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *       "400":
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 */

/**
 * @swagger
 * /hotel:
 *   get:
 *     summary: Get all hotels
 *     description: retrieve all hotels.
 *     tags: [Hotel]
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
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /hotel/{hotelId}:
 *   get:
 *     summary: Get a hotel
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [Hotel]
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
 *                $ref: '#/components/schemas/User'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a hotel
 *     description: Logged in users can only update their own information. Only admins can update other users.
 *     tags: [Hotel]
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *             example:
 *               name: fake name
 *               email: fake@example.com
 *               password: password1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a hotel
 *     description: Logged in users can delete only themselves. Only admins can delete other users.
 *     tags: [Hotel]
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
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /hotel/{hotelId}/room:
 *   get:
 *     summary: Get all room of hotel
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [Hotel]
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
 *                $ref: '#/components/schemas/User'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */

/**
 * @swagger
 * /hotel/room/{roomId}:
 *   get:
 *     summary: Get a room
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [Hotel]
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
 *                $ref: '#/components/schemas/User'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a room
 *     description: Logged in users can only update their own information. Only admins can update other users.
 *     tags: [Hotel]
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *             example:
 *               name: fake name
 *               email: fake@example.com
 *               password: password1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a room
 *     description: Logged in users can delete only themselves. Only admins can delete other users.
 *     tags: [Hotel]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *         description: User id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /hotel/room:
 *   post:
 *     summary: Create a room
 *     description:  Admins and Partner can create hotel
 *     tags: [Hotel]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idHotel
 *               - price
 *               - type
 *               - images
 *               - available
 *             properties:
 *               idHotel:
 *                 type: idHotel
 *               price:
 *                 type: Number
 *               type:
 *                 type: string
 *                  enum: [Single, Double, Family]
 *               images:
 *                  type: array-string
 *               available:
 *                  type: array-Date
 *             example:
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *       "400":
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 */
