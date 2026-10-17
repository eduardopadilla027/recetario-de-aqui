# Instrucciones para Claude Code — cocine-a-gusto (Recetarios de Aquí)

- **`ARQUITECTURA.md` es la fuente de verdad del proyecto.** Léelo antes de cambiar algo.
- **Después de cada cambio**, actualiza `ARQUITECTURA.md` en el mismo commit: las secciones afectadas, la versión del
  documento, la fecha, los conteos de recetas por categoría (§6) y una entrada nueva en el Registro de cambios (§13).
- **La versión de la app es la misma del documento:** al subirla, cambia también `APP_VERSION` y `APP_REVISED` en
  `js/app.js` y el texto inicial de `#site-author` y `#footer-text` en `index.html` (§13).
- Para añadir recetas sigue el procedimiento de §11 (modelo de datos, nutrición sin ingredientes sin contar, alérgenos,
  icono del plato) y verifica como indica §12.
- Las recetas son versiones propias redactadas para la app, en español de Puerto Rico (pasos en "usted") con su
  traducción al inglés línea por línea.
