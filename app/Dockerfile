FROM node:14-alpine as BUILD
COPY src /control-hub-frontend
WORKDIR /control-hub-frontend
RUN npm install
RUN npm run build --prod

FROM tomcat:9.0
WORKDIR webapps
COPY --from=BUILD /control-hub-frontend/dist/control-hub-frontend control-hub-frontend
WORKDIR /usr/local/tomcat/bin
CMD ["catalina.sh", "run"]