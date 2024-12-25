const {
    _env_
} = window

const apiKey = _env_ ? _env_.FIREBASE_API_KEY : import.meta.env.FIREBASE_API_KEY || ''
const authDomain = _env_ ? _env_.FIREBASE_AUTH_DOMAIN : import.meta.env.FIREBASE_AUTH_DOMAIN || ''
const projectId = _env_ ? _env_.FIREBASE_PROJECT_ID : import.meta.env.FIREBASE_PROJECT_ID || ''
const storageBucket = _env_ ? _env_.FIREBASE_STORAGE_BUCKET : import.meta.env.FIREBASE_STORAGE_BUCKET || ''
const messagingSenderId = _env_ ? _env_.FIREBASE_MESSAGING_SENDER_ID : import.meta.env.FIREBASE_MESSAGING_SENDER_ID || ''
const appId = _env_ ? _env_.FIREBASE_APP_ID : import.meta.env.FIREBASE_APP_ID || ''
const measurementId = _env_ ? _env_.FIREBASE_MEASUREMENT_ID : import.meta.env.FIREBASE_MEASUREMENT_ID || ''

export default {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
}
