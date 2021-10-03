/**
 * @param {Object} data Form data.
 * @returns {Object} A service for docker-compose.yaml.
 */
 export function dockerCompose(data) {
  let service = {
    command: data.golang_command,
    image: `golang:${data.golang_version}`,
    volumes: [
      "/go",
      ".:/app",
    ],
    working_dir: "/app",
  };
  if (data.golang_expose_port) {
    service["ports"] = [
      data.golang_expose_port,
    ];
  }
  return service;
}

/**
 * @param {Object} data Form data.
 * @returns {String} Markdown.
 */
export function readme(data) {
  return ("### Go"
    + `\n\nThe command \`${data.golang_command}\` is run on \`docker-compose up\`.`
    + "\n\nRun other one-off commands:"
    + "\n\n```"
    + `\ndocker-compose run --rm ${data.golang_service_name} go run changeme.go`
    + "\n```");
}
