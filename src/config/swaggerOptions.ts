import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Event Management API Documentation",
            version: "1.0.0",
            description:
                "This is the API documentation for the Event Management application.",
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1",
                description: "Local server",
            },
        ],
        components: {
            schemas: {
                Event: {
                    type: "object",
                    properties: {
                        id: {type: 'string'},
                        name: {type: 'string'},
                        date: {type: 'string', format: 'date-time'},
                        capacity: {type: 'number'},
                        registrationCount: { type: 'number'},
                        status: {type: 'string', enum: ['active', 'cancelled', 'completed']},
                        category: {type: 'string', enum: ['conference', 'workshop', 'meetup', 'seminar', 'general']},
                    },
                },
                Events: {
                    type: "array",
                    items: {$ref: "#/components/schemas/Event"},
                },
                Error: {
                    type: "object",
                    properties: {
                        message: {type: "string"}
                    }
                }
            },
        },
    },
    apis: ["./src/api/v1/routes/*.ts", "./src/api/v1/validations/*.ts"], // Path to the API docs and schemas
};

// Generate the Swagger spec
export const generateSwaggerSpec = (): object => {
    return swaggerJsdoc(swaggerOptions);
};