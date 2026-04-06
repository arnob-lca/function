# JS ফাংশন শিখি 🚀 — PWA

> JavaScript ফাংশন বাংলায় শিখুন — লাইভ ডেমো, কুইজ ও সাউন্ড ইফেক্ট সহ

## 📁 ফাইল স্ট্রাকচার

```
js-functions-pwa/
├── index.html          ← মূল অ্যাপ
├── manifest.json       ← PWA কনফিগারেশন
├── service-worker.js   ← অফলাইন সাপোর্ট
├── icons/
│   ├── icon-192.png    ← অ্যাপ আইকন (192×192)
│   └── icon-512.png    ← অ্যাপ আইকন (512×512)
└── README.md           ← এই ফাইল
```

## 🚀 কীভাবে চালাবেন (How to Run)

### Option 1: VS Code Live Server (সহজ)
1. VS Code-এ ফোল্ডার খুলুন
2. Live Server extension ইন্সটল করুন
3. `index.html` রাইট-ক্লিক → **Open with Live Server**

### Option 2: Python Local Server
```bash
cd js-functions-pwa
python -m http.server 8080
# তারপর ব্রাউজারে: http://localhost:8080
```

### Option 3: Node.js (npx serve)
```bash
cd js-functions-pwa
npx serve .
```

> ⚠️ **গুরুত্বপূর্ণ:** PWA এবং Service Worker কাজ করতে HTTP server দরকার।
> সরাসরি `index.html` ফাইল ডাবল-ক্লিক করে খুললে Service Worker কাজ করবে না।

## 📲 হোম স্ক্রিনে যোগ করুন (Install as App)

### Android / Chrome:
- ব্রাউজারে সাইট খুলুন → নিচে "ইন্সটল করুন" ব্যানার দেখুন
- অথবা Chrome menu (⋮) → **Add to Home Screen**

### iOS / Safari:
- Safari-এ খুলুন → Share বাটন (⎋) → **Add to Home Screen**

### Desktop Chrome/Edge:
- URL বারে ইন্সটল আইকন (➕) ক্লিক করুন

## ✨ ফিচার সমূহ

| ফিচার | বিবরণ |
|-------|-------|
| 📚 ১২টি Function Type | Declaration থেকে Async/Await পর্যন্ত |
| 📖 বাংলা ব্যাখ্যা | সহজ ভাষায় প্রতিটি ফাংশনের ব্যাখ্যা |
| 💻 কোড উদাহরণ | Syntax-highlighted, কপি করা যাবে |
| 🧪 লাইভ ডেমো | সরাসরি ব্রাউজারে চালিয়ে দেখুন |
| ❓ কুইজ | প্রতিটি ফাংশনে প্রশ্নোত্তর |
| 🔊 Sound Effects | Subtle audio feedback |
| 🌙 Dark/Light Mode | থিম পরিবর্তন |
| 📴 Offline Support | ইন্টারনেট ছাড়াও চলবে |
| 📲 Installable PWA | হোম স্ক্রিনে যোগ করুন |

## 🛠️ টেকনোলজি

- **HTML5** — Semantic markup
- **CSS3** — Variables, Grid, Flexbox, Animations
- **Vanilla JavaScript** — কোনো framework নেই
- **Web APIs** — Web Audio API, Service Worker, Cache API
- **PWA** — manifest.json + Service Worker

## 📊 Function Coverage

### বেসিক (Basic)
- Function Declaration (Hoisting সহ)
- Function Expression
- Arrow Function (ES6+)

### অ্যাডভান্সড (Advanced)
- Closure (Private data pattern)
- IIFE (Immediately Invoked)
- Recursion (Factorial example)

### হায়ার-অর্ডার (Higher-Order)
- Higher-Order Function (HOF concept)
- map() — Array transformation
- filter() — Conditional filtering
- reduce() — Single value aggregation

### অ্যাসিঙ্ক (Async)
- Callback Function
- Async / Await (with real API demo)

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 80+ | ✅ পূর্ণ সাপোর্ট |
| Firefox 75+ | ✅ পূর্ণ সাপোর্ট |
| Safari 14+ | ✅ সাপোর্ট |
| Edge 80+ | ✅ পূর্ণ সাপোর্ট |
| Mobile Chrome | ✅ + Install prompt |
| Mobile Safari | ✅ (manual add to home) |

---
Made with ❤️ — বাংলাদেশের শিক্ষার্থীদের জন্য
