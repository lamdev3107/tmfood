const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TMFood API",
      version: "1.0.0",
      description: "API documentation for the TMFood System",
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        Table: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            name: {
              type: "string",
            },
          },
        },
        Category: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              format: "int64",
            },
            name: {
              type: "string",
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
            Foods: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    format: "int64",
                  },
                  name: {
                    type: "string",
                  },
                  price: {
                    type: "number",
                  },
                  image: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ["./controllers/*.js"], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
