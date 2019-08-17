# Express & MONGODB

ExpressJS CRUD - API.


Express & MongoDB -  CRUD

Objective

To create endpoints, model and controller for complete CRUD.


Restrictions

----------------------------------------------------------
//////////////////////////////////////////////////////////
**********************************************************

Express-MongoDB - Tratamientos Nivel SSR

Actualización de tratamientos:
-Se encuentra treatment a modificar por Id.
-Se toma en cuenta el usuario para encontrar tratamiento.
-Si cambia un item de lista de tratamientos:
    - Se remueve el appointment del item que se cambió y del nuevo item se crea el appointment correspondiente.

Eliminado de citas
- Si se borra algún appointment se tiene que borrar el appointment id de la lista de appointments en treatments.  

Eliminado de usuarios

Si se borra un usuario se eliminan los tratamientos, por lo tanto también se eliminan los nombramientos correspondientes.



Nota: Crear los puntos finales correspondientes.
