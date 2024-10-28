# Usa la imagen base de Node.js
FROM node:20.11.0

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /home/app/frontend

# Copia el archivo de dependencias y realiza la instalación
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos del frontend
COPY . .

# Exponer el puerto que usa Vite en modo de desarrollo (por defecto 5173)
EXPOSE 5173

# Comando para iniciar la aplicación en modo de desarrollo y exponerla en todas las interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
