// Mål for gamle WordPress-adresser som er fjernet med vilje (410 Gone): arkiver,
// feeder og vedleggssider uten publisert parent. Reglene som sender trafikk hit,
// ligger i next.config.ts (rewrites), så den opprinnelige adressen beholdes i nettleseren.
// Se docs/migration/wordpress-archives-and-media.md.

const body = `<!doctype html>
<html lang="nb">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Siden finnes ikke lenger – Min Egen Sjef</title>
<style>body{margin:0;background:#060a14;color:#e6e9f0;font:1.0625rem/1.7 system-ui,sans-serif}main{max-width:36rem;margin:0 auto;padding:4rem 1rem}h1{font-size:1.75rem;line-height:1.2}a{color:#8fb4ff}</style>
</head>
<body>
<main>
<h1>Siden finnes ikke lenger</h1>
<p>Dette var en arkiv- eller vedleggsside fra den gamle versjonen av Min Egen Sjef. Den er fjernet med vilje.</p>
<p><a href="/artikler/">Se alle artiklene</a> eller gå til <a href="/">forsiden</a>.</p>
</main>
</body>
</html>`;

const headers = {
  "Content-Type": "text/html; charset=utf-8",
  "X-Robots-Tag": "noindex",
  "Cache-Control": "public, max-age=3600",
};

export function GET() {
  return new Response(body, { status: 410, headers });
}

export function HEAD() {
  return new Response(null, { status: 410, headers });
}
