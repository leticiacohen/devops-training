# Imagem base para o backend com FastAPI
FROM python:3.9-slim

# Configuração do ambiente Python
ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# Define o diretório de trabalho como /app
WORKDIR /app

# Instalação das dependências do backend
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia o código do backend para o contêiner
COPY . .

# Comando para iniciar o backend
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
