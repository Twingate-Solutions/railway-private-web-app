# railway-private-web-app

A minimal Node.js web application designed to run **privately on Railway** and be accessed **only via Twingate** (Layer 4), with no public ingress.

If you can see the page, you’re accessing it privately 🔒

---

## What this demonstrates

* A Node.js (Express) web app running on **port 80**
* **No public Railway domain**
* Access enforced at **Layer 4** via a Twingate Connector
* No reverse proxy, no WAF, no application-layer auth

---

## How it works

* The app listens on `0.0.0.0:80` (or `$PORT` if provided)
* Railway runs the service without public networking enabled
* A Twingate Connector runs alongside the app in the same project
* Twingate provides the only network path to the service

---

## Running locally

```bash
npm install
npm start
```

Then visit:

```
http://localhost:80/
```

---

## Deploying to Railway (private)

1. Deploy the repo to Railway
2. **Do not generate a public domain**
3. (Optional) Set `PORT=80`
4. Deploy a Twingate Connector in the same service
5. Create a Twingate Resource pointing to:

```
railway-private-web-app.railway.internal # (or whatever the Railway private DNS is)
```

---

## Notes / Callouts

* Public access is controlled entirely by Railway domains (not needed!)
* This repo is intended as a **POC / reference**, not a production app

---

## License

MIT