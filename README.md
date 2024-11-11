# Orders Microservices - NestJS Project

Este proyecto es un sistema de microservicios desarrollado con [NestJS](https://nestjs.com/) y Redis como sistema de almacenamiento en caché. La aplicación está diseñada para gestionar pedidos, inventario, notificaciones y autenticación en un entorno distribuido.

## Tecnologías Utilizadas

- **NestJS**: Framework para la creación de aplicaciones de servidor Node.js eficientes y escalables.
- **Redis**: Utilizado para caché de datos y manejo de sesiones.
- **Docker**: Para la orquestación y despliegue de los microservicios.
- **RabbitMQ** (opcional): Para la comunicación asíncrona entre servicios.

---

## Estructura del Proyecto

El proyecto consta de los siguientes servicios:

| Servicio              | Descripción                                                           |
|-----------------------|-----------------------------------------------------------------------|
| **Orders Service**    | Gestiona el CRUD de pedidos.                                         |
| **Inventory Service** | Gestiona el inventario de productos asociados con los pedidos.       |
| **Notification Service** | Envía notificaciones sobre actualizaciones en los pedidos.       |
| **Auth Service**      | Autentica y autoriza el acceso a los otros servicios.                 |

Cada servicio es independiente y se comunica con los demás mediante mensajes o peticiones HTTP, proporcionando una arquitectura de microservicios escalable.

---

## Instalación

1. Clona este repositorio.
2. Instala las dependencias en cada uno de los servicios:
   ```bash
   npm install
`
3. Configura las variables de entorno en cada servicio, especialmente para conectar con Redis y otros servicios  externos.
4. Inicia los servicios utilizando Docker o manualmente desde el CLI de NestJS.

##Servicios y Endpoints
Orders Service
Este servicio permite gestionar los pedidos, ofreciendo endpoints para crear, actualizar, eliminar y consultar información de pedidos.

Método	Endpoint	Descripción
POST	/orders	Crea un nuevo pedido.
GET	/orders	Obtiene una lista de todos los pedidos.
GET	/orders/:id	Obtiene un pedido específico por su ID.
PUT	/orders/:id	Actualiza un pedido existente por su ID.
DELETE	/orders/:id	Elimina un pedido por su ID.
Inventory Service
El servicio de inventario se encarga de la gestión de productos y su disponibilidad en el sistema.

Método	Endpoint	Descripción
GET	/inventory	Lista todos los productos en inventario.
GET	/inventory/:id	Obtiene los detalles de un producto específico.
PATCH	/inventory/:id	Actualiza la cantidad disponible en el inventario.
Notification Service
Este servicio se utiliza para enviar notificaciones a los usuarios sobre actualizaciones en sus pedidos.

Método	Endpoint	Descripción
POST	/notifications	Envía una notificación específica.
GET	/notifications	Lista todas las notificaciones enviadas.
Auth Service
El servicio de autenticación controla el acceso a los servicios mediante tokens.

Método	Endpoint	Descripción
POST	/auth/login	Autentica a un usuario y genera un token.
POST	/auth/register	Registra un nuevo usuario.
GET	/auth/profile	Obtiene el perfil del usuario autenticado.
Configuración de Redis
Para el funcionamiento adecuado de Redis, asegúrate de configurar las variables de entorno correspondientes en cada servicio.

REDIS_HOST=localhost
REDIS_PORT=6379

##Ejecución
Inicia cada servicio desde su directorio correspondiente:

# Desde el directorio de cada servicio
npm run start

#Contribuciones
Si deseas contribuir a este proyecto, realiza un fork del repositorio y envía tus cambios mediante un pull request.

