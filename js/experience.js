/* =========================================================================
   THE LAST JOURNEY — experience layer
   Scroll-driven atmosphere, a live journey HUD, a trailing cursor ring,
   magnetic buttons, tilting cards, count-up statistics, and live research
   photography pulled from Wikipedia's public summary API at runtime.
   Everything here is progressive enhancement: if a fetch fails or the
   visitor has a touch device / reduced-motion preference, the page below
   still reads perfectly well without it.
   ========================================================================= */
(function () {
  "use strict";

  const systemReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  function reduceMotionActive() {
    return systemReducedMotion || document.getElementById("motion-toggle")?.getAttribute("aria-pressed") === "true";
  }

  /* ---------------------------------------------------------------------
     Scroll-driven atmosphere + Journey HUD
     --------------------------------------------------------------------- */
  const MOOD_STOPS = [
    { p: 0.00, top: "#9a7a44", bottom: "#2a1c0e", mood: "Dawn · peaceful" },
    { p: 0.10, top: "#8a6a3a", bottom: "#241a10", mood: "Village life" },
    { p: 0.22, top: "#7a5632", bottom: "#271a0f", mood: "Old certainties" },
    { p: 0.33, top: "#7a4a2a", bottom: "#2a1710", mood: "Rising tension" },
    { p: 0.45, top: "#6b3322", bottom: "#28120c", mood: "Unrest" },
    { p: 0.56, top: "#5a2a22", bottom: "#200f0c", mood: "Flight" },
    { p: 0.66, top: "#45262a", bottom: "#190e10", mood: "Loss" },
    { p: 0.76, top: "#33262f", bottom: "#120d14", mood: "Mourning" },
    { p: 0.86, top: "#2c2a3c", bottom: "#0f0e1a", mood: "Uncertainty" },
    { p: 0.94, top: "#3a3454", bottom: "#15132a", mood: "Remembrance" },
    { p: 1.00, top: "#55436a", bottom: "#1d1832", mood: "Hope" }
  ];

  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function mixHex(h1, h2, t) {
    const a = hexToRgb(h1), b = hexToRgb(h2);
    return `rgb(${Math.round(lerp(a[0], b[0], t))},${Math.round(lerp(a[1], b[1], t))},${Math.round(lerp(a[2], b[2], t))})`;
  }
  function moodAt(progress) {
    for (let i = 0; i < MOOD_STOPS.length - 1; i++) {
      const a = MOOD_STOPS[i], b = MOOD_STOPS[i + 1];
      if (progress >= a.p && progress <= b.p) {
        const t = (progress - a.p) / (b.p - a.p || 1);
        return { top: mixHex(a.top, b.top, t), bottom: mixHex(a.bottom, b.bottom, t), mood: t < 0.5 ? a.mood : b.mood };
      }
    }
    const last = MOOD_STOPS[MOOD_STOPS.length - 1];
    return { top: last.top, bottom: last.bottom, mood: last.mood };
  }

  const atmosphere = document.getElementById("atmosphere");
  const hud = document.getElementById("journey-hud");
  const hudCarriage = document.getElementById("hud-carriage");
  const hudDistance = document.getElementById("hud-distance");
  const hudMood = document.getElementById("hud-mood");
  const CARRIAGE_SECTIONS = Array.from(document.querySelectorAll(".carriage"));
  const JOURNEY_KM = 486; // Lahore–Delhi rail distance, used here as a narrative flourish

  let ticking = false;
  function updateExperienceScroll() {
    ticking = false;
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const progress = scrollable > 0 ? Math.min(1, Math.max(0, doc.scrollTop / scrollable)) : 0;

    const m = moodAt(progress);
    if (atmosphere) {
      atmosphere.style.setProperty("--mood-top", m.top);
      atmosphere.style.setProperty("--mood-bottom", m.bottom);
    }
    if (hud) {
      if (!hud.classList.contains("is-visible") && doc.scrollTop > 40) hud.classList.add("is-visible");
      if (doc.scrollTop <= 40) hud.classList.remove("is-visible");
      hudDistance.textContent = Math.round(progress * JOURNEY_KM) + " km";
      hudMood.textContent = m.mood;
      let current = CARRIAGE_SECTIONS[0];
      for (const sec of CARRIAGE_SECTIONS) {
        if (sec.getBoundingClientRect().top <= window.innerHeight * 0.4) current = sec;
      }
      hudCarriage.textContent = current ? (current.dataset.carriageName || current.id) : "Platform One";
    }

    if (heroTitleBlock) {
      const heroRect = hero.getBoundingClientRect();
      if (heroRect.bottom > 0) {
        const shift = Math.min(1, -heroRect.top / (heroRect.height || 1));
        heroTitleBlock.style.transform = reduceMotionActive()
          ? "none"
          : `translateY(${shift * 40}px) scale(${1 - shift * 0.06})`;
        heroTitleBlock.style.opacity = String(1 - shift * 1.1);
      }
    }
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(updateExperienceScroll); }
  }

  const hero = document.getElementById("hero");
  const heroTitleBlock = document.querySelector(".hero__title-block");

  window.addEventListener("scroll", onScroll, { passive: true });
  updateExperienceScroll();

  /* ---------------------------------------------------------------------
     Trailing cursor ring (desktop fine-pointer only)
     --------------------------------------------------------------------- */
  if (finePointer) {
    const ring = document.getElementById("cursor-ring");
    let rx = window.innerWidth / 2, ry = window.innerHeight / 2, mx = rx, my = ry;
    let ringVisible = false;
    document.addEventListener("mousemove", e => {
      mx = e.clientX; my = e.clientY;
      if (!ringVisible) { ring.classList.remove("is-hidden"); ringVisible = true; }
    }, { passive: true });
    document.addEventListener("mouseleave", () => ring.classList.add("is-hidden"));
    (function follow() {
      rx += (mx - rx) * (reduceMotionActive() ? 1 : 0.18);
      ry += (my - ry) * (reduceMotionActive() ? 1 : 0.18);
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(follow);
    })();
    const activeSelector = "a, button, .suitcase, .reel, .cassette, .gallery-frame, .map-region, input, textarea, select, [role='button']";
    document.addEventListener("mouseover", e => { if (e.target.closest(activeSelector)) ring.classList.add("is-active"); });
    document.addEventListener("mouseout", e => { if (e.target.closest(activeSelector)) ring.classList.remove("is-active"); });
  } else {
    document.getElementById("cursor-ring")?.remove();
  }

  /* ---------------------------------------------------------------------
     Magnetic buttons
     --------------------------------------------------------------------- */
  if (finePointer && !reduceMotionActive()) {
    document.querySelectorAll(".magnetic").forEach(btn => {
      const strength = 0.35;
      btn.addEventListener("mousemove", e => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      });
      btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
    });
  }

  /* ---------------------------------------------------------------------
     Tilt-on-hover cards
     --------------------------------------------------------------------- */
  if (finePointer && !reduceMotionActive()) {
    document.querySelectorAll(".paper-card, .gallery-frame, .luggage-tag").forEach(card => {
      card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rotateY = (px - 0.5) * 10;
        const rotateX = (0.5 - py) * 10;
        card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }

  /* ---------------------------------------------------------------------
     Count-up statistics (luggage tags)
     --------------------------------------------------------------------- */
  function animateCountUp(el) {
    const original = el.textContent.trim();
    const match = original.match(/[\d][\d,]*/);
    if (!match) return;
    const raw = match[0];
    const target = parseInt(raw.replace(/,/g, ""), 10);
    const hasComma = raw.includes(",");
    const prefix = original.slice(0, match.index);
    const suffix = original.slice(match.index + raw.length);
    const duration = 1100;
    const start = performance.now();
    function frame(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(target * eased);
      const formatted = hasComma ? value.toLocaleString("en-US") : String(value);
      el.textContent = prefix + formatted + suffix;
      if (t < 1) requestAnimationFrame(frame);
      else { el.textContent = original; el.classList.add("is-counted"); }
    }
    requestAnimationFrame(frame);
  }
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!reduceMotionActive()) animateCountUp(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  function watchStatValues() {
    document.querySelectorAll(".luggage-tag__value").forEach(v => countObserver.observe(v));
  }
  // Stats are rendered by main.js synchronously before this script runs,
  // but observe on the next tick in case of any load-order shuffle.
  setTimeout(watchStatValues, 0);

  /* ---------------------------------------------------------------------
     Live research photography — Wikipedia REST summary API
     Progressive enhancement: every element already has real written
     content; this only adds a genuine photograph and a source link when
     the fetch succeeds, and fails silently (keeping the text-only
     fallback) when it doesn't.
     --------------------------------------------------------------------- */
  const WIKI_API = "https://en.wikipedia.org/api/rest_v1/page/summary/";
  const wikiCache = {};

  function fetchWikiSummary(title) {
    if (wikiCache[title]) return wikiCache[title];
    const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    const timeout = controller ? setTimeout(() => controller.abort(), 7000) : null;
    wikiCache[title] = fetch(WIKI_API + encodeURIComponent(title), {
      headers: { Accept: "application/json" },
      signal: controller ? controller.signal : undefined
    })
      .then(res => { if (!res.ok) throw new Error("wiki fetch failed: " + res.status); return res.json(); })
      .finally(() => { if (timeout) clearTimeout(timeout); });
    return wikiCache[title];
  }

  function pickImageSrc(data) {
    return (data.thumbnail && data.thumbnail.source) || (data.originalimage && data.originalimage.source) || null;
  }

  function makeCredit(data, label) {
    if (!data.content_urls || !data.content_urls.desktop) return null;
    const credit = document.createElement("a");
    credit.className = "figure-credit";
    credit.href = data.content_urls.desktop.page;
    credit.target = "_blank";
    credit.rel = "noopener noreferrer";
    credit.textContent = label;
    return credit;
  }
  function insertCredit(afterEl, data, label) {
    const credit = makeCredit(data, label);
    if (credit) afterEl.insertAdjacentElement("afterend", credit);
  }

  function applyCircularFigure(el, data) {
    const src = pickImageSrc(data);
    if (!src) return;
    const img = document.createElement("img");
    img.src = src;
    img.alt = data.title || "";
    img.loading = "lazy";
    el.textContent = "";
    el.appendChild(img);
    const credit = makeCredit(data, "Photo & more: Wikipedia ↗");
    if (!credit) return;
    const card = el.closest(".character-card");
    if (card) card.appendChild(credit); else el.insertAdjacentElement("afterend", credit);
  }

  function applyFrameFigure(el, data) {
    const src = pickImageSrc(data);
    if (!src) { settleFallback(el); return; }
    const img = document.createElement("img");
    img.src = src;
    img.alt = data.title || "";
    img.loading = "lazy";
    el.textContent = "";
    el.appendChild(img);
    insertCredit(el, data, "Source: Wikipedia ↗");
  }

  function applyBookCover(el, data) {
    const src = pickImageSrc(data);
    if (!src) return;
    el.style.backgroundImage = `linear-gradient(180deg, rgba(20,13,6,.25), rgba(20,13,6,.75)), url("${src}")`;
    el.classList.add("has-photo");
  }

  function settleFallback(el) {
    // Fetch didn't pan out (offline, blocked, Wikipedia unreachable) — stop
    // claiming to be "loading" and settle on the plain descriptive label.
    const loading = el.querySelector(".figure-loading");
    if (loading) loading.remove();
  }

  function hydrateWikiFigures(root) {
    (root || document).querySelectorAll("[data-wiki-title]:not(.gallery-frame)").forEach(el => {
      const title = el.dataset.wikiTitle;
      fetchWikiSummary(title).then(data => {
        if (el.classList.contains("book-cover")) { applyBookCover(el, data); return; }
        if (el.classList.contains("figure-media")) { applyCircularFigure(el, data); return; }
        const target = el.querySelector("[data-figure]");
        if (!target) return;
        if (target.classList.contains("figure-media")) applyCircularFigure(target, data);
        else applyFrameFigure(target, data);
      }).catch(() => { settleFallback(el); });
    });
  }
  hydrateWikiFigures();

  // Exposed so content rendered dynamically after this script runs (e.g.
  // the timeline's station-detail panel, which replaces its own innerHTML
  // on every click) can hydrate its own real photos on demand.
  window.TLJ = window.TLJ || {};
  window.TLJ.hydrateFigures = hydrateWikiFigures;

  /* Gallery frames are <button>s — a nested <a> credit link would be invalid
     HTML there, so these resolve onto data attributes instead and the
     credit is shown in the lightbox caption (main.js) when opened. */
  function hydrateGalleryFigures() {
    document.querySelectorAll(".gallery-frame[data-wiki-title]").forEach(btn => {
      const title = btn.dataset.wikiTitle;
      const target = btn.querySelector("[data-figure]");
      fetchWikiSummary(title).then(data => {
        const src = pickImageSrc(data);
        if (!src) { if (target) settleFallback(target); return; }
        if (target) {
          const img = document.createElement("img");
          img.src = src;
          img.alt = data.title || "";
          img.loading = "lazy";
          target.textContent = "";
          target.appendChild(img);
        }
        btn.dataset.resolvedSrc = src;
        btn.dataset.resolvedTitle = data.title || "";
        if (data.content_urls && data.content_urls.desktop) {
          btn.dataset.resolvedCreditUrl = data.content_urls.desktop.page;
        }
      }).catch(() => { if (target) settleFallback(target); });
    });
  }
  hydrateGalleryFigures();

})();
