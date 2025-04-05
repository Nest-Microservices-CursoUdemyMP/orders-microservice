<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Orders MicroService

```
docker compose up -d
```

## Dev

1. Clonar el repositorio
2. Instalar dependencias
3. Crear un archivo `.env` basado en el `.env.template`
4. Levantar la base de datos con `docker compose up -d`
5. Levantar el servidor de NATS
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```
6. Levantar proyecto con `npm run start:dev`


