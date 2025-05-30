# Desafio_Ricomida
Desafio Latam Ricomida

## Requerimientos

En grupos de dos personas se debe resolver los siguientes requerimientos:

- **Carousel**: Utilizar el carousel de Bootstrap con 2 carousel ítems y cada uno con 4 imágenes en su interior. Éste en tamaños sm, xs debe desaparecer. (1 Punto)
- **Tooltip**: Incluir un botón "Enviar por correo" con un tooltip aplicado. (1 Punto)
- **Evento**: Utilizar el evento “click” de jquery para mostrar una alerta al hacer un clic sobre el botón de "Enviar por Correo" mediante el uso de los selectores por Id, implementar el id a la etiqueta del botón con nombre: "enviarCorreo". El mensaje a mostrar en la alerta deberá ser: "El correo fue enviado correctamente...". (2 Puntos)

## Requerimientos Técnicos de jQuery

### Selectores de Etiqueta (3 puntos)
- **Evento**: `dblclick`
- **Método**: `on()`
- **Elementos**: Títulos "INGREDIENTES" y "PREPARACIÓN"
- **Acción**: Cambio de color a rojo
- **Comportamiento**: Individual para cada título

### Selectores de Clase (3 puntos)
- **Método**: `toggle()`
- **Elementos**: Cards en sección "Recetas Relacionadas"
- **Evento**: Click en títulos
- **Acción**: Alternar visibilidad del contenido
- **Alcance**: Todas las tarjetas

## Guía de Estilos

### Tipografías
#### Google Fonts
1. **Cabin**
   - Regular (400)
   - Bold (700)
2. **Lobster**
   - Regular (400)

### Paleta de Colores
```css
:root {
    --text-primary: #373a3c;
    --border-color: #dddddd;
    --black: #000;
    --white: #fff;
    --danger: #dc3545;
}
```
