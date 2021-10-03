/**
 * @param {Object} data Form data.
 * @returns {Object} A service for docker-compose.yaml.
 */
 export function dockerCompose(data) {
  let service = (data.php_composer === "yes" || data.php_apache_public_directory !== "/var/www/html"
    ? {
      build: {
        context: ".",
        dockerfile: "Dockerfile-php",
      }
    }
    : {
      image: `php:${data.php_version}`,
    });
  service["ports"] = [
    `${data.php_apache_port}:80`,
  ];
  service["volumes"] = [".:/var/www/html"];
  return service;
}

/**
 * @param {Object} data Form data.
 * @returns {String} Dockerfile.
 */
export function dockerfile(data) {
  let results = `FROM php:${data.php_version}`;
  if (data.php_composer === "yes") {
    results += (`\n\nRUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \\`
      + `\n  && php composer-setup.php \\`
      + `\n  && php -r "unlink('composer-setup.php');" \\`
      + `\n  && mv composer.phar /bin/composer`);
  }
  if (data.php_apache_public_directory !== "/var/www/html") {
    results += (`\n\nRUN sed -ri -e 's!/var/www/html!${data.php_apache_public_directory}!g' /etc/apache2/sites-available/*.conf \\`
      + `\n  && sed -ri -e 's!/var/www/!${data.php_apache_public_directory}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf`);
  }
  return results;
}

/**
 * @param {Object} data Form data.
 * @returns {String} Markdown.
 */
export function readme(data) {
  let results = ("### PHP"
    + `\n\nThe Apache webserver is started on port ${data.php_apache_port} during \`docker-compose up\`.`
    + "\n\nRun other one-off commands:"
    + "\n\n```"
    + `\ndocker-compose run --rm ${data.php_service_name} php /var/www/html/changeme.php`
    + "\n```");
  if (data.php_composer === "yes") {
    results += ("\n\nRun Composer:"
      + "\n\n```"
      + `\ndocker-compose run --rm ${data.php_service_name} composer update`
      + "\n```");
  }
  return results;
}
