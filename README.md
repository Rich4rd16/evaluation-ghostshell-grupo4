## Funcionamiento de la Evaluación

Para asegurar el correcto funcionamiento de la evaluación, sigue estos pasos detallados:

1. **Instalación de Dependencias:**
   - En la raíz de la evaluación, ejecuta el siguiente comando para instalar todas las dependencias:
     ```
     npm install
     ```
   - Si ocurre algún error, estas son las dependencias que contiene la evaluación:

     ![Dependencias](img/Dependencias.PNG)

     ```
     npm install @nestjs/common@^10.0.0 @nestjs/core@^10.0.0 @nestjs/mongoose@^10.0.4 @nestjs/platform-express@^10.0.0 bson@^6.4.0 mongoose@^8.2.0 reflect-metadata@^0.2.0 rxjs@^7.8.1
     ```

2. **Configuración de la Base de Datos:**
   - Abre tu base de datos MongoCompass utilizando la URL asignada en el archivo `app.module.ts`:
     ```
     mongodb+srv://rich4rd16:ESPE178059@cluster0.ziisd1n.mongodb.net/ecommerce
     ```

      ![Url Mongo](img/Url_MongoDB.PNG)

      ![Mongo](img/MongoDB1.PNG)

      ![Mongo](img/MongoDB.PNG)

3. **Inicio del Proyecto:**
   - Ejecuta la siguiente línea de comando para iniciar el proyecto de evaluación:
     ```
     npm start
     ```
      ![Mongo](img/npm_start.PNG)
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
        - Visualización en ThunderClient
         ![Dependencias](img/Post_Cursos.png)

        - Visualización en la base de datos MongoDB (Se va a la colección cursos).
          
          ![Dependencias](img/Post_Cursos_MongoDB.png)

     - **Método PUT:**
       - Ruta: `http://localhost:3000/cursos/65ea8258669f5547ee3487e2`
       - Contenido JSON:
         ```json
         {
           "nombre": "Nombre del Curso 1",
           "descripcion": "Descripción del Curso 1"
         }
         ```
        - Visualización en ThunderClient
         ![Dependencias](img/Put_Cursos.png)

        - Visualización en la base de datos MongoDB (Se va a la colección cursos).
          
          ![Dependencias](img/Put_Cursos_MongoDB.png)
     - **Método GET:**
       - Ruta: `http://localhost:3000/cursos`
       - Visualización en ThunderClient
         ![Dependencias](img/Get_Cursos.png)

        - Visualización en la base de datos MongoDB (Se va a la colección cursos).
          
          ![Dependencias](img/Get_Cursos_MongoDB.png) 
     - **Método DELETE:**
       - Ruta: `http://localhost:3000/cursos/65ea8258669f5547ee3487e2`
       - Visualización en ThunderClient
         ![Dependencias](img/Delete_Cursos.png)

        - Visualización en la base de datos MongoDB (Se va a la colección cursos).
          
          ![Dependencias](img/Delete_Cursos_MongoDB.png) 
   
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
       - Visualización en ThunderClient
         ![Dependencias](img/Post_Temas.png)

        - Visualización en la base de datos MongoDB (Se va a la colección cursos).
          
          ![Dependencias](img/Post_Temas_MongoDB.png)  
     - **Método PUT:**
       - Ruta: `http://localhost:3000/cursos/65ea8258669f5547ee3487e2`
       - Contenido JSON:
         ```json
         {
           "nombre": "Nombre del Curso 1",
           "descripcion": "Descripción del Curso 1"
         }
         ```
       - Visualización en ThunderClient
         ![Dependencias](img/Put_Temas.png)

        - Visualización en la base de datos MongoDB (Se va a la colección cursos).
          
          ![Dependencias](img/Put_Temas_MongoDB.png)    
     - **Método GET:**
       - Ruta: `http://localhost:3000/temas/65ea86f2669f5547ee3487e9`
       - Visualización en ThunderClient
         ![Dependencias](img/Get_Temas.png)

        - Visualización en la base de datos MongoDB (Se va a la colección cursos).
          
          ![Dependencias](img/Get_Temas_MongoDB.png)   
     - **Método DELETE:**
       - Ruta: `http://localhost:3000/temas/65ea86f2669f5547ee3487e9`
       - Visualización en ThunderClient
         ![Dependencias](img/Delete_Temas.png)

        - Visualización en la base de datos MongoDB (Se va a la colección cursos).
          
          ![Dependencias](img/Delete_Temas_MongoDB.png)   
   
5. **Asignación y Eliminación de un Tema a un Curso:**
   - **Opción POST:**
     - Ruta: `http://localhost:3000/cursos/65ea7a47eb71ab38ccaeeba7/temas/65ea7a89eb71ab38ccaeebad`
     - Visualización en ThunderClient
         ![Dependencias](img/Post_Cursos_Temas.png)

        - Visualización en la base de datos MongoDB (Se va a la colección cursos).
          
          ![Dependencias](img/Post_Cursos_Temas_MongoDB.png)   
   - **Opción DELETE:**
     - Ruta: `http://localhost:3000/cursos/65ea7a47eb71ab38ccaeeba7/temas/65ea7a89eb71ab38ccaeebad`
     - Visualización en ThunderClient
         ![Dependencias](img/Delete_Cursos_Temas.png)

        - Visualización en la base de datos MongoDB (Se va a la colección cursos).
          
          ![Dependencias](img/Delete_Cursos_Temas_MongoDB.png)    

