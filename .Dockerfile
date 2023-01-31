#Créera un environnement de nœud dans le conteneur
FROM node

WORKDIR /app
##exécute pour créer des node_modules pour votre application
COPY package.json .
RUN npm i

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 5173

<<<<<<< HEAD
CMD ["npm", "run", "dev"]
=======
CMD ["npm", "run", "dev"]
>>>>>>> c6c61dddea542b7af581274224720e3c49628184
