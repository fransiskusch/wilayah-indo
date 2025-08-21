# 🇮🇩 Indonesia Administrative Regions Dataset

Open dataset of Indonesian administrative areas (province, regency/city, district, village + postal code).  
Provided as **static JSON via CDN** or through a lightweight **API proxy** (Hono + Cloudflare Workers).

---

## 📦 Features

- ⚡ **Fast & spike-proof** — served by jsDelivr CDN and Cloudflare Workers  
- 🧩 **Granular files** — small JSON per region  
- 🔒 **CORS-ready** — safe for browser fetch/axios/fetch API  
- 🌐 **Multilingual docs** — English & Bahasa Indonesia  
- 📖 Full documentation available at [wilayah.fransiskus.site](https://wilayah.fransiskus.site)

---

## 🚀 Usage Options

### 1. CDN (jsDelivr)

Data is served directly from the GitHub repo via jsDelivr.  
Use `.json` files for each level.

**Base URL:**

https://cdn.jsdelivr.net/gh/fransiskusch/wilayah-indo/data

**Endpoints:**

| Level            | Path Example                                              | cURL Example                                                                 |
|------------------|-----------------------------------------------------------|------------------------------------------------------------------------------|
| Provinces        | `/provinces.json`                                         | `curl https://cdn.jsdelivr.net/gh/fransiskusch/wilayah-indo/data/provinces.json` |
| Regencies/Cities | `/regencies/:prov.json` → `/regencies/31.json`            | `curl https://cdn.jsdelivr.net/gh/fransiskusch/wilayah-indo/data/regencies/31.json` |
| Districts        | `/districts/:prov.:reg.json` → `/districts/31.74.json`    | `curl https://cdn.jsdelivr.net/gh/fransiskusch/wilayah-indo/data/districts/31.74.json` |
| Postal/Villages  | `/postal/:prov/:reg/:dist.json` → `/postal/31/74/06.json` | `curl https://cdn.jsdelivr.net/gh/fransiskusch/wilayah-indo/data/postal/31/74/06.json` |

**Example Fetch (JS):**

```js
const BASE = "https://cdn.jsdelivr.net/gh/fransiskusch/wilayah-indo/data";

const provinces = await fetch(`${BASE}/provinces.json`).then(r => r.json());
console.log(provinces);


2. API (Hono + Cloudflare Workers)
If you prefer an API-like structure, use the Cloudflare Worker proxy.It provides the same dataset but without .json extensions.
Base URL:
https://wilayah-api.franskristiono.workers.dev/api

Endpoints:



Level
Path Example
cURL Example



Health Check
/health
curl https://wilayah-api.franskristiono.workers.dev/api/health


Provinces
/provinces
curl https://wilayah-api.franskristiono.workers.dev/api/provinces


Regencies/Cities
/regencies/:prov → /regencies/31
curl https://wilayah-api.franskristiono.workers.dev/api/regencies/31


Districts
/districts/:reg → /districts/31.74
curl https://wilayah-api.franskristiono.workers.dev/api/districts/31.74


Postal/Villages
/postal/:p/:r/:d → /postal/31/74/06
curl https://wilayah-api.franskristiono.workers.dev/api/postal/31/74/06


Example Fetch (JS):
const BASE = "https://wilayah-api.franskristiono.workers.dev/api";

const provinces = await fetch(`${BASE}/provinces`).then(r => r.json());
console.log(provinces);


📊 Example Response
/provinces.json
[
  { "code": "31", "name": "DKI Jakarta" },
  { "code": "32", "name": "Jawa Barat" }
]

/postal/31/74/06.json
[
  { "village": "Kuningan Timur", "postal_code": "12950" },
  { "village": "Menteng Atas",  "postal_code": "12960" }
]


📖 Full Documentation
For full usage guides, quickstart, and examples, visit:👉 wilayah.fransiskus.site
You can also import our Postman Collection to test all endpoints quickly.

🤝 Contributing
Want to add new data or improve the API? Check out CONTRIBUTING.md for guidelines.⭐ If you find this dataset useful, consider starring the repo to support the project!

📝 License
CC BY 4.0 — free to use with attribution.
Creator: Fransiskus Christiono```
