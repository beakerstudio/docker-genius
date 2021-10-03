import React, { useState } from "react";
import { useForm } from "react-hook-form";
import yaml from "js-yaml";
import Button from "../components/Button";
import Result from "../components/Result";
import ServicesFormTerms from "./ServicesFormTerms";
import * as golangService from "../services/golangService";
import * as mongodbService from "../services/mongodbService";
import * as mysqlService from "../services/mysqlService";
import * as nodejsService from "../services/nodejsService";
import * as phpService from "../services/phpService";
import * as postgresqlService from "../services/postgresqlService";
import * as pythonService from "../services/pythonService";
import * as redisService from "../services/redisService";
import servicesForms from "../styles/ServicesForm.module.css";

export default function ServicesForm({ children }) {
  const childs = Array.isArray(children) ? children : [children];
  const {formState, handleSubmit, register} = useForm();
  const [state, setState] = useState({
    genFiles: [],
    isActiveIndices: childs.map(() => false),
  });

  const onSubmit = (data) => {
    const activeServices = {};
    const services = {};
    let extraFiles = [];
    let genReadme = ("# Documentation"
      + "\n\n## Dev Environment"
      + "\n\nThis development environment was generated with [Docker Genius](https://dockergenius.com) and requires [Docker](https://www.docker.com) to run."
      + "\n\nStart everything from the command line:"
      + "\n\n```"
      + "\ndocker-compose up"
      + "\n```");

    state.isActiveIndices.forEach((isActive, index) => {
      activeServices[childs[index].props.title] = isActive;
    });

    // Go
    if (activeServices["Go"]) {
      services[data.golang_service_name] = golangService.dockerCompose(data);
      genReadme += "\n\n" + golangService.readme(data);
    }

    // MongoDB
    if (activeServices["MongoDB"]) {
      services[data.mongodb_service_name] = mongodbService.dockerCompose(data);
      genReadme += "\n\n" + mongodbService.readme(data);
    }

    // MySQL
    if (activeServices["MySQL"]) {
      services[data.mysql_service_name] = mysqlService.dockerCompose(data);
      genReadme += "\n\n" + mysqlService.readme(data);
    }

    // Node.js
    if (activeServices["Node.js"]) {
      services[data.nodejs_service_name] = nodejsService.dockerCompose(data);
      genReadme += "\n\n" + nodejsService.readme(data);
    }

    // PHP
    if (activeServices["PHP"]) {
      services[data.php_service_name] = phpService.dockerCompose(data);
      if (data.php_composer === "yes" || data.php_apache_public_directory !== "/var/www/html") {
        extraFiles[extraFiles.length] = {
          name: "Dockerfile-php",
          value: phpService.dockerfile(data),
        };
      }
      genReadme += "\n\n" + phpService.readme(data);
    }

    // PostgreSQL
    if (activeServices["PostgreSQL"]) {
      services[data.postgresql_service_name] = postgresqlService.dockerCompose(data);
      genReadme += "\n\n" + postgresqlService.readme(data);
    }

    // Python
    if (activeServices["Python"]) {
      services[data.python_service_name] = pythonService.dockerCompose(data);
      extraFiles[extraFiles.length] = {
        name: "Dockerfile-python",
        value: pythonService.dockerfile(data),
      };
      genReadme += "\n\n" + pythonService.readme(data);
    }

    // Redis
    if (activeServices["Redis"]) {
      services[data.redis_service_name] = redisService.dockerCompose(data);
      genReadme += "\n\n" + redisService.readme(data);
    }

    const genDockerCompose = yaml.dump({
      version: "3.9",
      services,
    }, {
      lineWidth: -1,
    });

    let genFiles = [
      {
        name: "docker-compose.yaml",
        value: genDockerCompose,
      },
      {
        name: "README.md",
        value: genReadme,
      },
    ];
    for (let i = 0; i < extraFiles.length; i++) {
      genFiles[genFiles.length] = extraFiles[i];
    }

    setState({
      ...state,
      genFiles,
    });
  };

  return (
    <>
      <form className={servicesForms.ServicesForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={servicesForms.ServicesForm_services}>
          {React.Children.map(childs, (child, index) => (
            React.cloneElement(child, {
              errors: formState.errors,
              isActive: state.isActiveIndices[index],
              key: index,
              register,
              toggleIsActive: (event) => {
                event.preventDefault();
                setState({
                  ...state,
                  isActiveIndices: state.isActiveIndices.map((isActive, isActiveIndex) => (
                    isActiveIndex === index ? !isActive : isActive
                  )),
                });
              },
            })
          ))}
        </div>
        <div className={servicesForms.ServicesForm_submit}>
          <Button label="Generate Dev Environment" />
        </div>
        <div className={servicesForms.ServicesForm_terms}>
          <ServicesFormTerms/>
        </div>
      </form>
      {state.genFiles.length > 0 && (
        <Result files={state.genFiles} />
      )}
    </>
  );
}
