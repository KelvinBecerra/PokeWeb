# PokeWeb
#Se esta usando react con este proyecto, la manera de aplicarlo fue con vite fue 
npm create vite@latest nombre-mi-proyecto
'del npm crear un proyecto de ultima version de vite con el siguiente nombre'
cd nombre-mi-proyecto
se mueve a la carpeta del archivo
npm install 
instala dependencias
para correr el servidor se usa: npm run dev
se recomienda usar tailwind para el proyecto 

 Cuándo usar npm run build
1️⃣ Antes de subir tu proyecto a producción

Si vas a desplegar tu app en Netlify, Vercel, Firebase Hosting, etc., necesitas ejecutar npm run build.

Esto genera la carpeta /dist con los archivos listos para el servidor.

2️⃣ Si cambias configuraciones en vite.config.js

Si modificas rutas, alias, plugins o configuraciones de Vite, es recomendable hacer un nuevo build.

3️⃣ Si necesitas probar cómo se verá en producción

Puedes ejecutar:
npm run preview
Esto inicia un servidor local con la versión de producción.

4️⃣ Si tu proyecto está en un servidor y haces cambios en el código

En servidores como Apache o Nginx, debes volver a hacer build y reemplazar la carpeta /dist.