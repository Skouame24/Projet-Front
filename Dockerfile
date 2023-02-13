#Créera un environnement de nœud dans le conteneur
FROM node

WORKDIR /app
##exécute pour créer des node_modules pour votre application
COPY package.json .
RUN npm i

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 3000

CMD ["npm", "run", "dev"]