import express, {Router} from "express";
import { getAllEvent, healthCheck } from "../controllers/eventController";
import { validateRequest } from "../middleware/validateRequest";
import * as productController from "../controllers/eventController";
import { eventSchemas } from "../validations/eventValidation";
const router: Router = express.Router();



router.get("/health", healthCheck); 

/**
 * @openapi
 * /events:
 *   get:
 *     summary: Retrieve a list of events
 *     tags: [Events]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all event
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Event retrieved"
 *                 count:
 *                   type: number
 *                   example: 1
 *                 events:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Events'
 */
router.get("/events", getAllEvent);

/**
 * @openapi
 * /events/{id}:
 *   get:
 *     summary: Retrieve an event with Id
 *     tags: [Events]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the event
 *     responses:
 *       '200':
 *         description: Successfully retrieved an event with Id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 event:
 *                   $ref: '#/components/schemas/Event'
 *       '404':
 *         description: Event not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'       
 */
router.get(
       "/events/:id",
       validateRequest(eventSchemas.getById),
       productController.getEventById
);

/**
 * @openapi
 * /events:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name  
 *               - date
 *               - capacity
 *             properties:
 *               name:
 *                 type: string
 *                 minLength: 3
 *                 example: "RRC student meeting"
 *               date:
 *                 type: string
 *                 format: date-time
 *                 description: "Event date should be future"
 *                 example: "2026-04-15T19:00:00Z"
 *               capacity:
 *                 type: number
 *                 minimum: 3
 *                 example: 500
 *               registrationCount:
 *                 type: number
 *                 minimum: 0
 *                 description: "Number of registrations must be less than or equal to capacity (optional)"
 *                 example: 30
 *               status:
 *                 type: string
 *                 enum: ["active", "cancelled", "completed"]
 *                 description: "Event status (optional)"
 *                 default: "active"
 *                 example: "active"
 *               category:
 *                 type: string
 *                 enum: ["conference", "workshop", "meetup", "seminar", "general"]
 *                 description: "Event category (optional)"
 *                 example: "workshop"
 *     responses:
 *       '201':
 *         description: Successfully created an event with given information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 event:
 *                   $ref: '#/components/schemas/Event'
 *       '400':
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'     
 */
router.post(
       "/events",
       validateRequest(eventSchemas.create),
       productController.createEvent
);

/**
 * @openapi
 * /events/{id}:
 *   put:
 *     summary: Update an event with Id
 *     tags: [Events]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 minLength: 3
 *                 example: "RRC student meeting"
 *               date:
 *                 type: string
 *                 format: date-time
 *                 description: "Event date should be future"
 *                 example: "2026-04-15T19:00:00Z"
 *               capacity:
 *                 type: number
 *                 minimum: 3
 *                 example: 500
 *               registrationCount:
 *                 type: number
 *                 minimum: 0
 *                 description: "Number must be less than or equal to capacity (optional)"
 *                 example: 500
 *               status:
 *                 type: string
 *                 enum: ["active", "cancelled", "completed"]
 *                 description: "Event status (optional)"
 *                 example: "active"
 *               category:
 *                 type: string
 *                 enum: ["conference", "workshop", "meetup", "seminar", "general"]
 *                 description: "Event category (optional)"
 *                 example: "workshop"
 *     responses:
 *       '200':
 *         description: Successfully updated an event with given information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 event:
 *                   $ref: '#/components/schemas/Event'
 *       '400':
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'    
 *       '404':
 *         description: Event not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error' 
 */
router.put(
       "/events/:id",
       validateRequest(eventSchemas.update),
       productController.updateEvent
); 

/**
 * @openapi
 * /events/{id}:
 *   delete:
 *     summary: Delete an event with an Id
 *     tags: [Events]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the event
 *     responses:
 *       '200':
 *         description: Successfully deleted an event with Id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '404':
 *         description: Event not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'       
 */
router.delete(
       "/events/:id",
       validateRequest(eventSchemas.delete),
       productController.deleteEvent
); 

export default router;



