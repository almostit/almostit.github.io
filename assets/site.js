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
  // Both placements use the same availability and destination. Without JS,
  // the HTML fallback remains visible, non-interactive and accurate pre-launch.
  for (const [key, host, name] of [
    ["appStore", "apps.apple.com", "App Store"],
    ["googlePlay", "play.google.com", "Google Play"]
  ]) {
    const store = config[key];
    const url = approvedURL(store?.url, host);
    const destination = url ? new URL(url) : null;
    const isListing = destination && !destination.username && !destination.password &&
      (key === "appStore"
        ? /^\/(?:[a-z]{2}\/)?app\/(?:[^/]+\/)?id[0-9]+\/?$/.test(destination.pathname)
        : destination.pathname === "/store/apps/details" && !!destination.searchParams.get("id"));
    if (store?.status !== "available" || !isListing) continue;
    const label = lang === "fr"
      ? (key === "appStore" ? "Télécharger sur l’App Store" : "Télécharger sur Google Play")
      : (key === "appStore" ? "Download on the App Store" : "Get it on Google Play");
    document.querySelectorAll('[data-store="' + key + '"]').forEach(card => {
      const link = document.createElement("a");
      link.className = card.className;
      link.dataset.store = key;
      link.href = url;
      link.setAttribute("aria-label", label);
      while (card.firstChild) link.append(card.firstChild);
      link.querySelector(".store-status").textContent = lang === "fr" ? "Télécharger" : "Download";
      card.replaceWith(link);
    });
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
