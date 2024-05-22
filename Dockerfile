# Usa la imagen base de Node.js
FROM node:20.11.0

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /home/app/frontend

# Copia el resto de los archivos del frontend
COPY . .

# Instala las dependencias
RUN npm install

# Exponer el puerto el puerto que uses para ejecutar npm run dev
EXPOSE 5173

# Comando para iniciar la aplicación en modo de desarrollo
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
