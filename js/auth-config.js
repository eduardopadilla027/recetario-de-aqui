/* Recetarios de Aquí · Configuración del acceso (js/auth.js).
 *
 * El acceso usa Firebase Authentication (sin contraseñas) y Cloud Firestore
 * (correo + número de usos). Pegue aquí la configuración web de su proyecto de
 * Firebase: Consola de Firebase → Configuración del proyecto → Tus apps → Web.
 * Estos valores son públicos por diseño (identifican el proyecto); la seguridad
 * la dan las reglas de firestore.rules y los dominios autorizados.
 *
 * Mientras `apiKey` esté vacío la app muestra "Acceso sin configurar".
 * Pasos completos en ARQUITECTURA.md §7.3. */

const AUTH_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",       // p. ej. "recetario-de-aqui.firebaseapp.com"
    projectId: "",        // p. ej. "recetario-de-aqui"
    appId: ""
  },
  // Proveedores que se muestran en la pantalla de entrada. Active en la consola
  // de Firebase (Authentication → Método de acceso) cada uno que deje en true.
  providers: {
    google: true,      // Gmail
    microsoft: true,   // Outlook, Hotmail, Live, MSN
    yahoo: true,       // Yahoo Mail
    apple: false,      // iCloud (requiere cuenta de Apple Developer)
    email: true        // cualquier otro correo: enlace de validación
  }
};
