# Imagem base para o frontend com Next.js
FROM node:20 AS frontend

# Define variável de ambiente
ENV BASE_URL=http://127.0.0.1:8000

# Define o diretório de trabalho como /app
WORKDIR /app/devops-training

# Copia o código do frontend para o contêiner
COPY . .

# Instalação das dependências do frontend
RUN npm install

# Comando para construir o frontend
RUN npm run build

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação Next.js
CMD ["npm", "start"]