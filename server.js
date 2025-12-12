const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the root directory (logo.svg lives here)
app.use(express.static(path.join(__dirname)));

// Simple HTML page
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Private Access Verified</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: #0f172a;
      color: #e5e7eb;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }

    .card {
      background: #020617;
      border-radius: 12px;
      padding: 32px 40px;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
      max-width: 420px;
      animation: subtle-bounce 1.2s ease-out;
    }

    @keyframes subtle-bounce {
      0% {
        transform: translateY(20px);
        opacity: 0;
      }
      60% {
        transform: translateY(-6px);
        opacity: 1;
      }
      100% {
        transform: translateY(0);
      }
    }

    .logo-wrapper {
      background: #ffffff;
      border-radius: 8px;
      padding: 10px;
      display: inline-block;
      margin-bottom: 20px;
    }

    img {
      width: 40px;
      display: block;
    }

    h1 {
      font-size: 22px;
      margin-bottom: 12px;
    }

    p {
      font-size: 15px;
      line-height: 1.5;
      color: #9ca3af;
    }

    .emoji {
      font-size: 24px;
      margin-top: 16px;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo-wrapper">
      <img src="/logo.svg" alt="Twingate Logo" />
    </div>
    <h1>Private Access Confirmed!</h1>
    <p>
      If you are seeing this, you are accessing me <strong>privately</strong>.
      No public ingress. No exposed ports. Just clean Layer&nbsp;4 access.
    </p>
    <div class="emoji">🔒🚪</div>
  </div>
</body>
</html>
`;

app.get("/", (_req, res) => {
  res.status(200).send(html);
});

// Optional health check
app.get("/healthz", (_req, res) => {
  res.status(200).send("ok");
});

// Port handling
const port = process.env.PORT ? Number(process.env.PORT) : 80;

app.listen(port, "0.0.0.0", () => {
  console.log(`Private web app listening on port ${port}`);
});