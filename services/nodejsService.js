/**
 * @param {Object} data Form data.
 * @returns {Object} A service for docker-compose.yaml.
 */
 export function dockerCompose(data) {
  let service = {
    command: data.nodejs_command,
    image: `node:${data.nodejs_version}`,
    volumes: [
      ".:/app",
    ],
    working_dir: "/app",
  };
  if (data.nodejs_expose_port) {
    service["ports"] = [
      data.nodejs_expose_port,
    ];
  }
  return service;
}

/**
 * @param {Object} data Form data.
 * @returns {String} Markdown.
 */
export function readme(data) {
  return ("### Node.js"
    + `\n\nThe command \`${data.nodejs_command}\` is run on \`docker-compose up\`.`
    + "\n\nInstall dependencies with npm:"
    + "\n\n```"
    + `\ndocker-compose run --rm ${data.nodejs_service_name} npm install`
    + "\n```"
    + "\n\nRun other one-off commands:"
    + "\n\n```"
    + `\ndocker-compose run --rm ${data.nodejs_service_name} node changeme.js`
    + "\n```");
}
