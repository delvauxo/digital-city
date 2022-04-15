//https://brikev.github.io/express-jsdoc-swagger-docs/

const swaggerSpec = {
    info: {
      version: '0.1.0',
      title: 'Demo Api',
      description: 'Api Recap en Express'
    },
    baseDir: __dirname,
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: [
      '../models/*.js',
      '../controllers/*.js'
  ],
    // URL where SwaggerUI will be rendered
    swaggerUIPath: '/swagger',
    // Expose OpenAPI UI
    exposeSwaggerUI: true,
    // Expose Open API JSON Docs documentation in `apiDocsPath` path.
    exposeApiDocs: false,
    // Open API JSON Docs endpoint.
    apiDocsPath: '/v3/swagger',
    // Set non-required fields as nullable by default
    notRequiredAsNullable: false,
  };

module.exports = swaggerSpec;