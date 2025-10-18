# دليل استخدام لوحة التحكم (Admin Dashboard)

## 📋 نظرة عامة

لوحة التحكم تتيح لك تعديل محتوى الموقع بالكامل بدون الحاجة لكتابة أي كود. يمكنك تعديل:
- معلومات البطل (Hero Section)
- المهارات (Skills)
- المشاريع (Projects)
- التعليم والشهادات (Education & Certifications)
- معلومات الاتصال (Contact Info)
- رفع الصور والملفات

---

## 🖥️ الاستخدام المحلي (على جهازك)

### 1. تشغيل المشروع
افتح **نافذتي Terminal منفصلتين**:

**Terminal 1** - تشغيل الموقع:
```bash
npm run dev
```

**Terminal 2** - تشغيل Decap CMS Local Server:
```bash
npm run dev:cms
```

⚠️ **مهم جداً**: يجب تشغيل الأمرين معاً في نافذتين منفصلتين!

### 2. فتح لوحة التحكم
افتح المتصفح على:
```
http://localhost:8080/admin/index.html
```

### 3. تسجيل الدخول
- اختر **"Work with Local Repository"** أو **"Local Backend"**
- لا تحتاج كلمة مرور محليًا

### 4. تعديل المحتوى
- اختر القسم الذي تريد تعديله من القائمة الجانبية
- عدّل الحقول المطلوبة
- اضغط **Save** ثم **Publish**
- التغييرات ستظهر فورًا على الموقع

### 5. رفع الصور
- اضغط على حقل الصورة
- اختر **Upload** أو اسحب الصورة
- الصور تُحفظ في مجلد: `public/uploads`

---

## 🌐 الاستخدام على الإنتاج (Production)

### المتطلبات الأولية (مرة واحدة فقط)

#### 1. إنشاء GitHub OAuth App
- اذهب إلى: [GitHub Settings → Developer settings → OAuth Apps](https://github.com/settings/developers)
- اضغط **New OAuth App**
- املأ البيانات:
  - **Application name**: Portfolio Admin
  - **Homepage URL**: `https://portfolio-kohl-nine-61.vercel.app`
  - **Authorization callback URL**: `https://portfolio-kohl-nine-61.vercel.app/api/oauth/callback`
- اضغط **Register application**
- احفظ:
  - **Client ID**
  - **Client Secret** (اضغط Generate a new client secret)

#### 2. إضافة المتغيرات في Vercel
- اذهب إلى: [Vercel Dashboard](https://vercel.com/dashboard)
- اختر مشروعك → **Settings** → **Environment Variables**
- أضف:
  - `GITHUB_CLIENT_ID` = [Client ID من GitHub]
  - `GITHUB_CLIENT_SECRET` = [Client Secret من GitHub]
- اضغط **Save**
- أعد نشر المشروع (Redeploy)

### الاستخدام اليومي

#### 1. فتح لوحة التحكم
```
https://portfolio-kohl-nine-61.vercel.app/admin/index.html
```

#### 2. تسجيل الدخول
- اضغط **Login with GitHub**
- سجّل دخول بحساب GitHub الخاص بك
- امنح الصلاحيات المطلوبة

#### 3. تعديل المحتوى
- عدّل أي قسم تريده
- اضغط **Save** ثم **Publish**
- التغييرات ستُحفظ في GitHub
- Vercel سيعيد بناء الموقع تلقائيًا (خلال 1-2 دقيقة)
- افتح الموقع لرؤية التغييرات

---

## 📝 الأقسام المتاحة للتعديل

### Hero Section (القسم الرئيسي)
- الاسم
- العنوان الوظيفي
- الوصف
- صورة البروفايل

### Skills (المهارات)
- عنوان القسم
- الوصف
- فئات المهارات (Programming, Data Science, Tools, Soft Skills)
- إضافة/حذف مهارات
- اختيار الأيقونة لكل مهارة

### Projects (المشاريع)
- عنوان المشروع
- الفئة
- الوصف
- التقنيات المستخدمة
- التأثير (Impact)
- رابط GitHub
- رابط Demo
- صورة المشروع

### Education (التعليم)
- الدرجة العلمية
- التخصص
- المؤسسة
- الموقع
- فترة الدراسة
- المعدل (GPA)
- النقاط المميزة (Highlights)

### Certifications (الشهادات)
- اسم الشهادة
- الجهة المانحة
- التاريخ
- رقم الاعتماد (Credential)
- رابط التحقق

### Contact (معلومات الاتصال)
- البريد الإلكتروني
- رقم الهاتف
- روابط وسائل التواصل الاجتماعي

---

## 🔧 حل المشاكل الشائعة

### المشكلة: صفحة 404 عند فتح /admin
**الحل**: استخدم المسار الكامل:
```
/admin/index.html
```
بدلاً من `/admin` فقط

### المشكلة: لا تظهر التغييرات على الموقع
**الحل المحلي**:
- تأكد أن الملف `src/lib/portfolio-data.json` تم تحديثه
- أعد تحميل الصفحة (F5)

**الحل على Production**:
- انتظر 1-2 دقيقة حتى ينتهي Vercel من إعادة البناء
- تحقق من [Vercel Dashboard → Deployments](https://vercel.com/dashboard)
- امسح الكاش (Ctrl+Shift+R أو Ctrl+F5)

### المشكلة: يطلب تسجيل دخول Netlify بدلاً من GitHub
**الحل**:
- امسح الكاش (Cache) للمتصفح
- افتح في نافذة تصفح خاص (Incognito)
- تأكد أن `public/admin/config.yml` يحتوي على:
  ```yaml
  backend:
    name: github
  ```

### المشكلة: خطأ OAuth أو Authentication
**الحل**:
- تأكد من إضافة `GITHUB_CLIENT_ID` و `GITHUB_CLIENT_SECRET` في Vercel
- تأكد أن Authorization callback URL في GitHub OAuth App صحيح:
  ```
  https://portfolio-kohl-nine-61.vercel.app/api/oauth/callback
  ```
- أعد نشر المشروع في Vercel

---

## 📂 بنية الملفات

```
portfolio/
├── public/
│   ├── admin/
│   │   ├── index.html          # صفحة لوحة التحكم
│   │   ├── config.yml          # إعدادات Decap CMS
│   │   └── cms.js              # تخصيصات إضافية
│   └── uploads/                # مجلد الصور المرفوعة
├── src/
│   └── lib/
│       ├── portfolio-data.json # ملف البيانات (يتم تعديله من لوحة التحكم)
│       └── portfolio-data.ts   # يقرأ من JSON ويصدّره للمكونات
└── api/
    └── oauth/                  # معالجات GitHub OAuth
        ├── authorize.ts
        └── callback.ts
```

---

## 💡 نصائح مهمة

1. **النسخ الاحتياطي**: قبل التعديلات الكبيرة، انسخ محتوى `src/lib/portfolio-data.json`
2. **الصور**: استخدم صور بحجم معقول (أقل من 2MB) لسرعة تحميل الموقع
3. **الأيقونات**: استخدم أسماء أيقونات Lucide React الصحيحة (مثل: Code, Brain, Database)
4. **الروابط**: تأكد من صحة الروابط قبل النشر
5. **المحلي أولاً**: جرّب التعديلات محليًا قبل نشرها على Production

---

## 🆘 الدعم

إذا واجهت أي مشكلة:
1. تحقق من Console في المتصفح (F12)
2. راجع قسم "حل المشاكل الشائعة" أعلاه
3. تأكد من تحديث المشروع: `git pull origin main`
4. أعد تثبيت الحزم: `npm ci`

---

## 🎉 ملاحظات نهائية

- جميع التعديلات من لوحة التحكم تُحفظ في Git تلقائيًا
- يمكنك التراجع عن أي تعديل من خلال Git History
- لوحة التحكم آمنة ومحمية بـ GitHub OAuth
- لا تحتاج معرفة برمجية لاستخدام اللوحة

**استمتع بتعديل موقعك بسهولة! 🚀**
