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
    apiKey: "AIzaSyApbOc_xyRiQV1buF_xBLa73A05Vrt5GEU",
    authDomain: "recetario-de-aqui.firebaseapp.com",
    projectId: "recetario-de-aqui",
    appId: "1:9586202974:web:bc6d5e9f3540e2d48997cf"
  },
  // Proveedores que se muestran en la pantalla de entrada. Active en la consola
  // de Firebase (Authentication → Método de acceso) cada uno que deje en true.
  providers: {
    google: true,      // Gmail
    microsoft: false,  // Outlook, Hotmail, Live, MSN
    yahoo: false,      // Yahoo Mail
    apple: false,      // iCloud (requiere cuenta de Apple Developer)
    email: true        // cualquier otro correo: enlace de validación
  }
};
