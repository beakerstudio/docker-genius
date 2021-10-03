/**
 * @param {Object} data Form data.
 * @returns {Object} A service for docker-compose.yaml.
 */
 export function dockerCompose(data) {
  let service = {
    build: {
      context: ".",
      dockerfile: "Dockerfile-python",
    },
    command: data.python_command,
    environment: {
      PYTHONDONTWRITEBYTECODE: 1,
      PYTHONUNBUFFERED: 1,
    },
  };
  if (data.python_expose_port) {
    service["ports"] = [
      data.python_expose_port,
    ];
  }
  return service;
}

/**
 * @param {Object} data Form data.
 * @returns {String} Dockerfile.
 */
export function dockerfile(data) {
  return (`FROM python:${data.python_version}\n`
    + "\nWORKDIR /usr/src/app"
    + `\nCOPY ${data.python_pip_requirements_file} ./`
    + `\nRUN pip install --no-cache-dir -r ${data.python_pip_requirements_file}`
    + "\nCOPY . .");
}

/**
 * @param {Object} data Form data.
 * @returns {String} Markdown.
 */
export function readme(data) {
  return ("### Python"
    + `\n\nThe command \`${data.python_command}\` is run on \`docker-compose up\`.`
    + "\n\nInstall dependencies with pip by building image:"
    + "\n\n```"
    + `\ndocker-compose build ${data.python_service_name}`
    + "\n```"
    + "\n\nRun other one-off commands:"
    + "\n\n```"
    + `\ndocker-compose run --rm ${data.python_service_name} python changeme.py`
    + "\n```");
}
