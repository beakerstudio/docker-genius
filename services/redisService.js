/**
 * @param {Object} data Form data.
 * @returns {Object} A service for docker-compose.yaml.
 */
export function dockerCompose(data) {
  let results = {
    image: `redis:${data.redis_version}`,
  };
  if (data.redis_persistent_storage === "yes") {
    results["command"] = "redis-server --appendonly yes";
    results["volumes"] = ["/data"];
  }
  return results;
}

/**
 * @param {Object} data Form data.
 * @returns {String} Markdown.
 */
export function readme(data) {
  return ("### Redis"
    + "\n\nThe Redis server is started on `docker-compose up`."
    + "\n\nConnect to Redis from another container:\n"
    + `\n- __Host:__ ${data.redis_service_name}`
    + "\n\nConnect with the Redis shell:"
    + "\n\n```"
    + `\ndocker-compose run --rm ${data.redis_service_name} redis-cli -h ${data.redis_service_name}`
    + "\n```");
}
