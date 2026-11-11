# CFON · Taller Digital — PWA independiente (versión inicial)

## Qué incluye
- Inicio, proyectos, guías y herramientas, adaptable a Fedora y Android.
- Instalación como aplicación web progresiva (PWA) desde el navegador compatible.
- Lectura sin Internet tras una primera visita con conexión, gracias al service worker.
- Crear/editar proyectos, buscarlos y exportar/importar sus fichas JSON.
- Los datos editados se guardan **solo en el navegador de cada dispositivo**; no se sincronizan y pueden perderse si se borran datos del sitio. Exporta respaldos regularmente.

## Qué NO incluye todavía
- Esta versión **no es una exportación completa** del sitio original de ChatGPT.
- No se han migrado mapas 2D/3D, adjuntos, DWG/DXF, documentos privados, cuentas, ni un servidor de sincronización.
- Las fichas de proyectos existentes son descriptivas, NO enlaces operativos a sus mapas.
- El sitio original sigue separado. Su contenido privado no debe añadirse a un repositorio público.

## Probar en Fedora
Abre una terminal dentro de la carpeta extraída:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Luego visita `http://127.0.0.1:8000` en Chrome. **No abras directamente index.html mediante file://**: la PWA y el servicio offline necesitan HTTP(S).

## Publicar gratis con GitHub Pages
1. Crea un repositorio nuevo (por ejemplo `CFON-Taller-Digital`). Si lo haces público, todo el contenido cargado al repositorio será visible para cualquiera.
2. Sube los **archivos del interior** de esta carpeta a la raíz del repositorio (`index.html`, `app.js`, `styles.css`, etc.). No subas documentos privados.
3. En GitHub: Settings → Pages → Build and deployment → Deploy from a branch → `main` y `/ (root)` → Save.
4. GitHub mostrará una URL HTTPS similar a `https://TU-USUARIO.github.io/CFON-Taller-Digital/` (no es una URL existente hasta publicar).
5. Abre esa URL en Fedora o Android. En Chrome, usa el menú **Instalar aplicación** o **Añadir a pantalla principal**, según el navegador.
6. Visita la aplicación con Internet una vez; entonces la interfaz básica puede abrirse sin conexión.

## Límites y seguridad
- La instalación desde el navegador requiere HTTPS público o localhost; `http://` con IP de una red normal no admite siempre PWA.
- El modo offline solo cubre los archivos incluidos o almacenados previamente; servicios externos y mapas remotos necesitan conexión.
- Los proyectos y datos importados se guardan localmente por dispositivo (localStorage) y **no se publican ni sincronizan automáticamente**.
- Para conservar funciones originales y archivos privados entre dispositivos, hace falta migración selectiva y un backend con acceso autenticado.
