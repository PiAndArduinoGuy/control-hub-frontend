FROM node:14-alpine as BUILD
COPY src /control-hub-frontend
WORKDIR /control-hub-frontend
RUN npm install
RUN npm run build

FROM tomcat:9.0
WORKDIR webapps
COPY --from=BUILD /control-hub-frontend/dist/control-hub-frontend control-hub-frontend
RUN apt update \
    && apt install gettext-base
WORKDIR /usr/local/tomcat/bin
CMD envsubst < /usr/local/tomcat/webapps/control-hub-frontend/assets/env.template.js > /usr/local/tomcat/webapps/control-hub-frontend/assets/env.js ; catalina.sh run