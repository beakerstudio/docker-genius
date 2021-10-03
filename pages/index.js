import FieldSelect from "../components/FieldSelect";
import FieldText from "../components/FieldText";
import Header from "../components/Header";
import HomePageHead from "../components/HomePageHead";
import Service from "../components/Service";
import ServicesForm from "../components/ServicesForm";

const ERROR_REQUIRED = "This field is required.";

const VALID_NAME = {
  message: "Invalid name.",
  value: /^[A-Za-z]+[A-Za-z0-9_]*$/,
};

const VALID_PORT = {
  message: "Invalid port.",
  value: /^[0-9]{2,4}$/,
};

const VALID_PORT_MAPPING = {
  message: "Invalid port mapping.",
  value: /^[0-9]{2,4}([:]{1}[0-9]{2,4})?$/,
};

export default function HomePage() {
  return (
    <>
      <HomePageHead/>
      <div className="Container">
        <Header
          tagline="Effortless development environments with pure Docker."
          title="Docker Genius"
        />
        <ServicesForm>
          <Service title="Go">
            <FieldText
              label="Service Name"
              name="golang_service_name"
              validate={{
                pattern: VALID_NAME,
                required: ERROR_REQUIRED,
              }}
              value="golang"
            />
            <FieldSelect
              label="Version"
              name="golang_version"
              options={[
                {
                  label: "1.17",
                  value: "1.17",
                },
                {
                  label: "1.16",
                  value: "1.16",
                },
                {
                  label: "1.15",
                  value: "1.15",
                },
              ]}
              value="1.17"
            />
            <FieldText
              label="Command"
              name="golang_command"
              validate={{
                required: ERROR_REQUIRED,
              }}
              value="go run main.go"
            />
            <FieldText
              label="Expose Port"
              name="golang_expose_port"
              placeholder="8001:8001"
              validate={{
                pattern: VALID_PORT_MAPPING,
              }}
              value=""
            />
          </Service>
          <Service title="MongoDB">
            <FieldText
              label="Service Name"
              name="mongodb_service_name"
              validate={{
                pattern: VALID_NAME,
                required: ERROR_REQUIRED,
              }}
              value="mongodb"
            />
            <FieldSelect
              label="Version"
              name="mongodb_version"
              options={[
                {
                  label: "4",
                  value: "4",
                },
                {
                  label: "3",
                  value: "3",
                },
              ]}
              value="4"
            />
            <FieldText
              label="User"
              name="mongodb_user"
              validate={{
                pattern: VALID_NAME,
                required: ERROR_REQUIRED,
              }}
              value="root"
            />
            <FieldText
              label="Password"
              name="mongodb_password"
              validate={{
                required: ERROR_REQUIRED,
              }}
              value="changeme"
            />
          </Service>
          <Service title="MySQL">
            <FieldText
              label="Service Name"
              name="mysql_service_name"
              validate={{
                pattern: VALID_NAME,
                required: ERROR_REQUIRED,
              }}
              value="mysql"
            />
            <FieldSelect
              label="Version"
              name="mysql_version"
              options={[
                {
                  label: "8.0",
                  value: "8",
                },
                {
                  label: "5.7",
                  value: "5.7",
                },
              ]}
              value="8"
            />
            <FieldText
              label="Database Name"
              name="mysql_database_name"
              validate={{
                pattern: VALID_NAME,
                required: ERROR_REQUIRED,
              }}
              value="app"
            />
            <FieldText
              label="User"
              name="mysql_user"
              validate={{
                pattern: VALID_NAME,
                required: ERROR_REQUIRED,
              }}
              value="local"
            />
            <FieldText
              label="Password"
              name="mysql_password"
              validate={{
                required: ERROR_REQUIRED,
              }}
              value="changeme"
            />
          </Service>
          <Service title="Node.js">
            <FieldText
              label="Service Name"
              name="nodejs_service_name"
              validate={{
                pattern: VALID_NAME,
                required: ERROR_REQUIRED,
              }}
              value="nodejs"
            />
            <FieldSelect
              label="Version"
              name="nodejs_version"
              options={[
                {
                  label: "16",
                  value: "16",
                },
                {
                  label: "14",
                  value: "14",
                },
                {
                  label: "12",
                  value: "12",
                },
              ]}
              value="14"
            />
            <FieldText
              label="Command"
              name="nodejs_command"
              validate={{
                required: ERROR_REQUIRED,
              }}
              value="npm run start"
            />
            <FieldText
              label="Expose Port"
              name="nodejs_expose_port"
              placeholder="3000:3000"
              validate={{
                pattern: VALID_PORT_MAPPING,
              }}
              value=""
            />
          </Service>
          <Service title="PHP">
            <FieldText
              label="Service Name"
              name="php_service_name"
              validate={{
                pattern: VALID_NAME,
                required: ERROR_REQUIRED,
              }}
              value="php"
            />
            <FieldSelect
              label="Version"
              name="php_version"
              options={[
                {
                  label: "8",
                  value: "8-apache",
                },
                {
                  label: "7",
                  value: "7-apache",
                },
              ]}
              value="8"
            />
            <FieldText
              label="Apache Port"
              name="php_apache_port"
              validate={{
                pattern: VALID_PORT,
                required: ERROR_REQUIRED,
              }}
              value="8080"
            />
            <FieldText
              label="Apache Public Directory"
              name="php_apache_public_directory"
              placeholder="/var/www/html"
              validate={{
                required: ERROR_REQUIRED,
              }}
              value="/var/www/html"
            />
            <FieldSelect
              label="Install Composer"
              name="php_composer"
              options={[
                {
                  label: "No",
                  value: "no",
                },
                {
                  label: "Yes",
                  value: "yes",
                },
              ]}
              value="no"
            />
          </Service>
          <Service title="PostgreSQL">
            <FieldText
              label="Service Name"
              name="postgresql_service_name"
              validate={{
                pattern: VALID_NAME,
                required: ERROR_REQUIRED,
              }}
              value="postgresql"
            />
            <FieldSelect
              label="Version"
              name="postgresql_version"
              options={[
                {
                  label: "14",
                  value: "14",
                },
                {
                  label: "13",
                  value: "13",
                },
                {
                  label: "12",
                  value: "12",
                },
                {
                  label: "11",
                  value: "11",
                },
                {
                  label: "10",
                  value: "10",
                },
                {
                  label: "9",
                  value: "9",
                },
              ]}
              value="14"
            />
            <FieldText
              label="Database Name"
              name="postgresql_database_name"
              validate={{
                pattern: VALID_NAME,
                required: ERROR_REQUIRED,
              }}
              value="app"
            />
            <FieldText
              label="User"
              name="postgresql_user"
              validate={{
                pattern: VALID_NAME,
                required: ERROR_REQUIRED,
              }}
              value="local"
            />
            <FieldText
              label="Password"
              name="postgresql_password"
              validate={{
                required: ERROR_REQUIRED,
              }}
              value="changeme"
            />
          </Service>
          <Service title="Python">
            <FieldText
              label="Service Name"
              name="python_service_name"
              validate={{
                pattern: VALID_NAME,
                required: ERROR_REQUIRED,
              }}
              value="python"
            />
            <FieldSelect
              label="Version"
              name="python_version"
              options={[
                {
                  label: "3.9",
                  value: "3.9",
                },
                {
                  label: "3.8",
                  value: "3.8",
                },
                {
                  label: "3.7",
                  value: "3.7",
                },
                {
                  label: "3.6",
                  value: "3.6",
                },
                {
                  label: "2",
                  value: "2",
                },
              ]}
              value="3.9"
            />
            <FieldText
              label="Command"
              name="python_command"
              validate={{
                required: ERROR_REQUIRED,
              }}
              value="python changeme.py"
            />
            <FieldText
              label="Pip Requirements File"
              name="python_pip_requirements_file"
              validate={{
                required: ERROR_REQUIRED,
              }}
              value="requirements.txt"
            />
            <FieldText
              label="Expose Port"
              name="python_expose_port"
              placeholder="8000:8000"
              validate={{
                pattern: VALID_PORT_MAPPING,
              }}
              value=""
            />
          </Service>
          <Service title="Redis">
            <FieldText
              label="Service Name"
              name="redis_service_name"
              validate={{
                pattern: VALID_NAME,
                required: ERROR_REQUIRED,
              }}
              value="redis"
            />
            <FieldSelect
              label="Version"
              name="redis_version"
              options={[
                {
                  label: "6",
                  value: "6",
                },
                {
                  label: "5",
                  value: "5",
                },
              ]}
              value="6"
            />
            <FieldSelect
              label="Persistent Storage"
              name="redis_persistent_storage"
              options={[
                {
                  label: "No",
                  value: "no",
                },
                {
                  label: "Yes",
                  value: "yes",
                },
              ]}
              value="no"
            />
          </Service>
        </ServicesForm>
      </div>
    </>
  );
}
