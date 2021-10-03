/**
 * @param {Object} data Form data.
 * @returns {Object} A service for docker-compose.yaml.
 */
 export function dockerCompose(data) {
  return {
    environment: {
      MONGO_INITDB_ROOT_USERNAME: data.mongodb_user,
      MONGO_INITDB_ROOT_PASSWORD: data.mongodb_password,
    },
    image: `mongo:${data.mongodb_version}`,
  };
}

/**
 * @param {Object} data Form data.
 * @returns {String} Markdown.
 */
export function readme(data) {
  return ("### MongoDB"
    + "\n\nThe MongoDB server is started on `docker-compose up`."
    + "\n\nConnect to MongoDB from another container:\n"
    + `\n- __Host:__ ${data.mongodb_service_name}`
    + `\n- __Password:__ ${data.mongodb_password}`
    + `\n- __User:__ ${data.mongodb_user}`
    + "\n\nConnect with the MongoDB shell:"
    + "\n\n```"
    + `\ndocker-compose run --rm ${data.mongodb_service_name} mongo --host=${data.mongodb_service_name} --password=${data.mongodb_password} --username=${data.mongodb_user}`
    + "\n```");
}
