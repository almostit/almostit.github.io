(() => {
  "use strict";
  const lang = document.documentElement.lang === "en" ? "en" : "fr";
  const preferenceKey = "almost-it-site-language";
  const remember = value => { try { localStorage.setItem(preferenceKey, value); } catch (_) { /* Browsing still works without storage. */ } };
  document.querySelectorAll("[data-language]").forEach(link => {
    link.addEventListener("click", () => remember(link.dataset.language));
  });
  // Only the neutral home entry detects language; deep links keep their explicit locale.
  if (location.pathname === "/") {
    const explicit = new URLSearchParams(location.search).get("lang");
    let saved = null;
    try { saved = localStorage.getItem(preferenceKey); } catch (_) { /* Optional preference. */ }
    const browserLanguage = (navigator.languages?.[0] || navigator.language || "fr").toLowerCase();
    const chosen = ["fr", "en"].includes(explicit) ? explicit : ["fr", "en"].includes(saved) ? saved : browserLanguage.startsWith("en") ? "en" : "fr";
    if (["fr", "en"].includes(explicit)) remember(explicit);
    if (chosen === "en") { location.replace("/en/" + location.hash); return; }
  }
  const config = window.ALMOST_IT_CONFIG || {};
  const approvedURL = (value, host) => {
    if (typeof value !== "string") return null;
    try { const url = new URL(value); return url.protocol === "https:" && (!host || url.hostname === host) ? url.href : null; } catch (_) { return null; }
  };
  const stores = document.getElementById("store-links");
  if (stores) {
    for (const [key, host, label] of [["appStore", "apps.apple.com", lang === "fr" ? "Télécharger sur l’App Store" : "Download on the App Store"], ["googlePlay", "play.google.com", lang === "fr" ? "Disponible sur Google Play" : "Get it on Google Play"]]) {
      const store = config[key], url = approvedURL(store?.url, host), badge = store?.badges?.[lang];
      // No badge or link is rendered until both the real URL and local artwork exist.
      if (!url || typeof badge !== "string" || !/^\/assets\/[a-zA-Z0-9_./-]+$/.test(badge)) continue;
      const link = document.createElement("a"), image = document.createElement("img");
      link.href = url; image.src = badge; image.alt = label; image.height = 48;
      link.append(image); stores.append(link); stores.hidden = false;
      if (key === "appStore") document.getElementById("app-store-status").hidden = true;
    }
  }
  const contact = document.getElementById("contact-action");
  if (contact) {
    const email = config.contact?.email, formURL = approvedURL(config.contact?.formUrl);
    const validEmail = typeof email === "string" && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email);
    if (validEmail || formURL) {
      contact.href = validEmail ? "mailto:" + encodeURIComponent(email) : formURL;
      contact.hidden = false;
      document.getElementById("contact-unavailable").hidden = true;
      document.getElementById("contact-status").textContent = lang === "fr" ? "Une question sur Almost It? Utilisez notre canal de contact dédié." : "A question about Almost It? Use our dedicated contact channel.";
    }
  }
})();
