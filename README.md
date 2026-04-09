# Formulario de Contacto con Envío de Emails

Proyecto full-stack que implementa un formulario de contacto funcional con envío automático de emails y almacenamiento en MongoDB.

## Características

- **Frontend**: Formulario HTML/CSS/JavaScript con validación y feedback visual
- **Backend**: API REST con Express.js
- **Base de datos**: MongoDB para almacenar las consultas
- **Email**: Envío automático de notificaciones usando Nodemailer y Gmail
- **Estados**: Las consultas se guardan con estado "pending" por defecto

## Arquitectura

### Backend (Node.js + Express)
- **app.js**: Servidor principal y configuración de rutas
- **src/controllers/contactController.js**: Maneja las peticiones HTTP
- **src/services/contactService.js**: Lógica de negocio (guardar en DB + enviar email)
- **src/services/emailService.js**: Configuración de Nodemailer
- **src/models/Contact.js**: Modelo Mongoose para las consultas
- **src/config/db.js**: Conexión a MongoDB

### Frontend (HTML/CSS/JavaScript)
- **index.html**: Formulario de contacto
- **script.js**: Lógica del frontend con estados de carga y manejo de errores
- **styles.css**: Estilos modernos con feedback visual

## Flujo de Funcionamiento

1. Un usuario completa el formulario (nombre, email, mensaje)
2. El frontend envía los datos al backend via POST a `/api/contact`
3. El controller valida los datos y llama al service
4. El service:
   - Guarda la consulta en MongoDB con estado "pending"
   - Envía un email de notificación al administrador
5. El frontend muestra feedback visual (éxito/error)

## Configuración

### Variables de Entorno (.env)
```env
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/db_name
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_app_password_gmail
```

### Instalación
```bash
# Backend
cd backend
npm install
npm start

# Frontend (abrir en navegador)
# Abrir frontend/index.html directamente
```

## Notas Importantes

- Para Gmail, usar **App Password** (no la contraseña normal)
- El frontend está configurado para desarrollo (localhost:3000)
- Para producción, actualizar la URL en `frontend/script.js`
- Las credenciales están protegidas con `.gitignore`