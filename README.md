## Funcionamiento de la Evaluación

Para asegurar el correcto funcionamiento de la evaluación, sigue estos pasos detallados:

1. **Instalación de Dependencias:**
   - En la raíz de la evaluación, ejecuta el siguiente comando para instalar todas las dependencias:
     ```
     npm install
     ```
   - Si ocurre algún error, estas son las dependencias que contiene la evaluación:
     ```
     npm install @nestjs/common@^10.0.0 @nestjs/core@^10.0.0 @nestjs/mongoose@^10.0.4 @nestjs/platform-express@^10.0.0 bson@^6.4.0 mongoose@^8.2.0 reflect-metadata@^0.2.0 rxjs@^7.8.1
     ```

2. **Configuración de la Base de Datos:**
   - Abre tu base de datos MongoCompass utilizando la URL asignada en el archivo `app.module.ts`:
     ```
     mongodb+srv://rich4rd16:ESPE178059@cluster0.ziisd1n.mongodb.net/ecommerce
     ```

3. **Inicio del Proyecto:**
   - Ejecuta la siguiente línea de comando para iniciar el proyecto de evaluación:
     ```
     npm start
     ```

4. **Operaciones CRUD en Cursos y Temas:**
   
   - **Cursos:**
     - **Método POST:**
       - Ruta: `http://localhost:3000/cursos`
       - Contenido JSON:
         ```json
         {
           "nombre": "Nombre del Curso",
           "descripcion": "Descripción del Curso"
         }
         ```
     - **Método PUT:**
       - Ruta: `http://localhost:3000/cursos/65ea8258669f5547ee3487e2`
       - Contenido JSON:
         ```json
         {
           "nombre": "Nombre del Curso 1",
           "descripcion": "Descripción del Curso 1"
         }
         ```
     - **Método GET:**
       - Ruta: `http://localhost:3000/cursos`
     - **Método DELETE:**
       - Ruta: `http://localhost:3000/cursos/65ea8258669f5547ee3487e2`
   
   - **Temas:**
     - **Método POST:**
       - Ruta: `http://localhost:3000/temas`
       - Contenido JSON:
         ```json
         {
           "nombre": "Nombre del tema",
           "contenido": "Contenido del tema"
         }
         ```
     - **Método PUT:**
       - Ruta: `http://localhost:3000/cursos/65ea8258669f5547ee3487e2`
       - Contenido JSON:
         ```json
         {
           "nombre": "Nombre del Curso 1",
           "descripcion": "Descripción del Curso 1"
         }
         ```
     - **Método GET:**
       - Ruta: `http://localhost:3000/temas/65ea86f2669f5547ee3487e9`
     - **Método DELETE:**
       - Ruta: `http://localhost:3000/temas/65ea86f2669f5547ee3487e9`
   
5. **Asignación y Eliminación de un Tema a un Curso:**
   - **Opción POST:**
     - Ruta: `http://localhost:3000/cursos/65ea7a47eb71ab38ccaeeba7/temas/65ea7a89eb71ab38ccaeebad`
   - **Opción DELETE:**
     - Ruta: `http://localhost:3000/cursos/65ea7a47eb71ab38ccaeeba7/temas/65ea7a89eb71ab38ccaeebad`

Para visualizar los resultados de las operaciones, puedes utilizar ThunderClient y también verificar directamente en la base de datos MongoDB.
