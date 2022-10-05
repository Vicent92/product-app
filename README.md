# Como poner en marcha la aplicación
 
`npm run dev` para que la aplicación corra en desarrollo
 
`npm run test` para correr los test que tiene un watching para monitorear las pruebas constantemente
 
# Como utilizar la api de prueba que ejecuta la aplicación
 
Lo que utilice para simular una api, fue la herramienta, json-serve. La ventaja que tiene, es que lo tienes directamente
en tu editor, tan solo con crear un archivo json en mi casa `db.json` esta herramienta lee este archivo y levanta un server.
 
Para ejecutarlo solo tienes que utilizar el siguiente script:
`npm run serve`
 
# Detalles del funcionamiento de la app y su estructura
 
## Detalles de la aplicación
 
### Framework de UI
`styled-component`: Me facilita el poder agregar estilos globales e implementarlos gracias a la buena integración con
javascript.
 
`Material ui`: Puedo implementar componentes que ya estaban previamente estilados y así ahorrar tiempo, por ejemplo,
me ayudo en los inputs, ya que tenían un estilo por default, que me parecía apropiado y así, dedicar más tiempo
en el desarrollo de las funcionalidades.
 
### Herramientas de desarrollo
Trate, en lo que más pude, de utilizar herramientas que react ya me daba en su ecosistema, como:
 
`Context`: Para manejar estados globales, ya que con eso me parecía suficiente para manejar los estados que tengo en la
Aplicación.
 
`useMemo`: Para evitar que la función de del filtrado se creara en todo momento que era llamada, me parecía conveniente
aplicar useMemo, para así memorizar un resultado que se dio con anterioridad y la función no se crearía de nuevo.
 
`Custom hooks`: Mi intención siempre es que cada componente o función, tengan un solo trabajo. En el caso de los componentes, lo correcto es que solo se encarguen de renderizar elementos de la vista y que las propiedades que le lleguen, sean las justas y necesarias. Gracias a los hooks, pude migrar toda la lógica de la aplicación fuera de los componentes. De esta manera se logra una aplicación mucho más mantenible en el tiempo.
 
`Vitest y testing-library`: Vitest está creada sobre jest y tiene las mismas funcionalidades, pero es un poco más rápido. Testing-library, me ayuda a testear los componentes con facilidad.
 
### Estructura
Solo explicaré como está organizado el código fuente, la carpeta `src`.
Más allá de las carpetas de los componentes, que son `form`, `header`, `layout`, `products` y `updateForm`. También tenemos las carpetas de `hooks`, `interfaces`, `services`, `contest`, y `test`.