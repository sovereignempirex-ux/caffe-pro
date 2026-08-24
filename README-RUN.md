# تشغيل مشروع مزاج

1. ثبّت Node.js 18 أو أحدث.
2. من داخل مجلد المشروع نفّذ: `node server/server.js`
3. افتح: `http://localhost:8787`

## التخزين وAPI

- للتطوير، البيانات تُحفظ في `server/data/store.json`.
- لتعيين أول مدير، انسخ `server/.env.example` إلى ملف بيئة على خادمك واضبط `ADMIN_BOOTSTRAP_EMAIL` ثم سجّل الدخول بهذا البريد.
- لا تضع Google Client Secret أو مفاتيح قاعدة البيانات في أي ملف داخل الواجهة. `config/api.config.js` يقبل فقط Client ID وAPI Base URL العامين.
- قبل النشر استخدم قاعدة بيانات حقيقية وHTTPS، ونفّذ التحقق من Google ID token على الخادم.
