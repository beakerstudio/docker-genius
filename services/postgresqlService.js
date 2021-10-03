/**
 * @param {Object} data Form data.
 * @returns {Object} A service for docker-compose.yaml.
 */
 export function dockerCompose(data) {
  return {
    image: `postgres:${data.postgresql_version}`,
    environment: {
      POSTGRES_DB: data.postgresql_database_name,
      POSTGRES_PASSWORD: data.postgresql_password,
      POSTGRES_USER: data.postgresql_user,
    },
    ports: [
      "5432:5432",
    ],
    volumes: [
      "/var/lib/postgresql/data",
    ],
  };
}

/**
 * @param {Object} data Form data.
 * @returns {String} Markdown.
 */
export function readme(data) {
  return ("### PostgreSQL"
    + "\n\nThe PostgreSQL server is started on `docker-compose up`."
    + "\n\nConnect to PostgreSQL from another container:\n"
    + `\n- __Database:__ ${data.postgresql_database_name}`
    + `\n- __Host:__ ${data.postgresql_service_name}`
    + `\n- __Password:__ ${data.postgresql_password}`
    + `\n- __User:__ ${data.postgresql_user}`
    + "\n\nConnect with the PostgreSQL shell:"
    + "\n\n```"
    + `\ndocker-compose run --rm ${data.postgresql_service_name} psql postgresql://${data.postgresql_user}@${data.postgresql_service_name}/${data.postgresql_database_name}`
    + "\n```");
}
