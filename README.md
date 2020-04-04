Esta APi tiene dos finalidades: 
  1_ La persona que quiere adentrarse en el mundo del yoga y no conoce centros. Se le facilita información general de lo qué es el yoga, beneficios y tipos de yoga. 
  2_ La persona que practica yoga puede dejar su opinión sobre centro y conocer ubicación y demás información de los mismo.


  El acceso a la página es abierto para información genera pero para localización de centros y demás información tienes que estár registrado.

  Nuestra api tendrá una parte de backEnd y una de front que se realizará con Vue.js

*********************************************

**API ROUTES**
Please note that all routes in this API should be called with the /api prefix before the endpoint:

`POST http://localhost:3000/api/auth/signup`

**AUTHENTICATION ENDPOINTS**

  | METHOD| URL| What does it do
| ----- | ---- |
| POST | auth/signup | Create a new accoun |
| POST | auth/login | Autehenticates a use|


**ENDPOINTS**

 | METHOD| URL| What does it do
| ----- | ---- |
| GET | /home | Main page|
| GET | /yoga | Yoga general information, benefits and types|
| GET | /centers | List of centers|
| GET | /centers/:id | Information of a center|


