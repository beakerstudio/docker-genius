/**
 * @param {Object} data Form data.
 * @returns {Object} A service for docker-compose.yaml.
 */
export function dockerCompose(data) {
  return {
    environment: {
      MYSQL_DATABASE: data.mysql_database_name,
      MYSQL_PASSWORD: data.mysql_password,
      MYSQL_RANDOM_ROOT_PASSWORD: "1",
      MYSQL_USER: data.mysql_user,
    },
    image: `mysql:${data.mysql_version}`,
    volumes: [
      "/var/lib/mysql",
    ],
  };
}

/**
 * @param {Object} data Form data.
 * @returns {String} Markdown.
 */
export function readme(data) {
  return ("### MySQL"
    + "\n\nThe MySQL server is started on `docker-compose up`."
    + "\n\nConnect to MySQL from another container:\n"
    + `\n- __Database:__ ${data.mysql_database_name}`
    + `\n- __Host:__ ${data.mysql_service_name}`
    + `\n- __Password:__ ${data.mysql_password}`
    + `\n- __User:__ ${data.mysql_user}`
    + "\n\nConnect with the MySQL shell:"
    + "\n\n```"
    + `\ndocker-compose run --rm ${data.mysql_service_name} mysql --host=${data.mysql_service_name} --password=${data.mysql_password} --user=${data.mysql_user} ${data.mysql_database_name}`
    + "\n```");
}
