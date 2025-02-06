import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "API de Gestion de Cinéma",
    description: "Documentation générée automatiquement avec swagger-autogen",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:" + process.env.PORT,
      description: "Serveur local",
    },
  ],
};

const outputFile = "./src/config/swagger-output.json";
const endpointsFiles = ["./src/routes/*.ts"];

export const generateSwagger = async () => {
  try {
    console.log(await swaggerAutogen(outputFile, endpointsFiles, doc));
    console.log("Swagger documentation generated successfully.");
  } catch (error) {
    console.error("Error generating Swagger documentation:", error);
  }
};
