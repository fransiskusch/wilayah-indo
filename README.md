# 🇮🇩 Indonesia Administrative Regions Dataset

Open dataset of Indonesian administrative areas (provinces, regencies/cities, districts, villages, and postal codes).  
Provided as **static JSON via CDN** or through a lightweight **API proxy** (Hono + Cloudflare Workers).

---

## 📦 Features

- ⚡ **Fast & spike-proof** — Served by jsDelivr CDN and Cloudflare Workers  
- 🧩 **Granular files** — Small JSON files per region  
- 🔒 **CORS-ready** — Safe for browser fetch/axios/fetch API  
- 🌐 **Multilingual docs** — Available in English and Bahasa Indonesia  
- 📖 Full documentation at [wilayah.fransiskus.site](https://wilayah.fransiskus.site)

---

## 🚀 Usage Options

### 1. CDN (jsDelivr)

Data is served directly from the GitHub repo via jsDelivr. Use `.json` files for each administrative level.

**Base URL:**

```plaintext
https://cdn.jsdelivr.net/gh/fransiskusch/wilayah-indo/data
```

**Endpoints:**

| Level            | Path Example                                  | cURL Example                                                                 |
|------------------|-----------------------------------------------|-------------------------------------------------------------------------------|
| Provinces        | `/provinces.json`                             | `curl https://cdn.jsdelivr.net/gh/fransiskusch/wilayah-indo/data/provinces.json` |
| Regencies/Cities | `/regencies/:prov.json` → `/regencies/31.json`| `curl https://cdn.jsdelivr.net/gh/fransiskusch/wilayah-indo/data/regencies/31.json` |
| Districts        | `/districts/:prov.:reg.json` → `/districts/31.74.json` | `curl https://cdn.jsdelivr.net/gh/fransiskusch/wilayah-indo/data/districts/31.74.json` |
| Postal/Villages  | `/postal/:prov/:reg/:dist.json` → `/postal/31/74/06.json` | `curl https://cdn.jsdelivr.net/gh/fransiskusch/wilayah-indo/data/postal/31/74/06.json` |

**Example Fetch (JS):**

```js
const BASE = "https://cdn.jsdelivr.net/gh/fransiskusch/wilayah-indo/data";

const provinces = await fetch(`${BASE}/provinces.json`).then(r => r.json());
console.log(provinces);
```

---

### 2. API (Hono + Cloudflare Workers)

Use the Cloudflare Worker proxy for an API-like structure without `.json` extensions.

**Base URL:**

```plaintext
https://wilayah-api.franskristiono.workers.dev/api
```

**Endpoints:**

| Level            | Path Example                        | cURL Example                                                                 |
|------------------|-------------------------------------|-------------------------------------------------------------------------------|
| Health Check     | `/health`                           | `curl https://wilayah-api.franskristiono.workers.dev/api/health`              |
| Provinces        | `/provinces`                        | `curl https://wilayah-api.franskristiono.workers.dev/api/provinces`           |
| Regencies/Cities | `/regencies/:prov` → `/regencies/31`| `curl https://wilayah-api.franskristiono.workers.dev/api/regencies/31`        |
| Districts        | `/districts/:reg` → `/districts/31.74` | `curl https://wilayah-api.franskristiono.workers.dev/api/districts/31.74`   |
| Postal/Villages  | `/postal/:p/:r/:d` → `/postal/31/74/06` | `curl https://wilayah-api.franskristiono.workers.dev/api/postal/31/74/06`  |

**Example Fetch (JS):**

```js
const BASE = "https://wilayah-api.franskristiono.workers.dev/api";

const provinces = await fetch(`${BASE}/provinces`).then(r => r.json());
console.log(provinces);
```

---

## 📊 Example Response

### `/provinces.json`

```json
[
  { "code": "31", "name": "DKI Jakarta" },
  { "code": "32", "name": "Jawa Barat" }
]
```

### `/postal/31/74/06.json`

```json
[
  { "village": "Kuningan Timur", "postal_code": "12950" },
  { "village": "Menteng Atas",  "postal_code": "12960" }
]
```

---

## 📖 Full Documentation

For detailed usage guides, quickstart, and examples, visit:  
👉 [wilayah.fransiskus.site](https://wilayah.fransiskus.site)

Test all endpoints quickly with our **Postman Collection**.

---

## 🤝 Contributing

Want to add new data or improve the API? Check out `CONTRIBUTING.md` for guidelines.  

⭐ If you find this dataset useful, consider **starring the repo** to support the project!

---

## 📝 License

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — Free to use with attribution.  

**Creator:** [Fransiskus Christiono](https://fransiskus.site)  
