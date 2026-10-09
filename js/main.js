/* =========================================================================
   THE LAST JOURNEY — interactivity
   Vanilla JS, no build step, no external dependencies besides the fonts
   loaded in the stylesheet. Organised as small independent modules that
   each wire up one piece of the page.
   ========================================================================= */
(function () {
  "use strict";

  const CARRIAGES = Array.from(document.querySelectorAll(".carriage")).map(el => ({
    id: el.id,
    name: el.dataset.carriageName || el.id,
    el
  }));

  /* ---------------------------------------------------------------------
     Audio: synthesised whistle + optional ambience (no external files)
     --------------------------------------------------------------------- */
  const TrainAudio = (function () {
    let ctx = null;
    let ambienceOn = false;
    let ambienceTimer = null;

    function getCtx() {
      if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (AC) ctx = new AC();
      }
      return ctx;
    }

    function whistle() {
      const c = getCtx();
      if (!c) return;
      if (c.state === "suspended") c.resume();
      const now = c.currentTime;
      [880, 660].forEach((freq, i) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.85, now + 1.1);
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.12, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
        osc.connect(gain).connect(c.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + 1.3);
      });
    }

    function chuff() {
      const c = getCtx();
      if (!c) return;
      const bufferSize = c.sampleRate * 0.12;
      const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
      }
      const noise = c.createBufferSource();
      noise.buffer = buffer;
      const filter = c.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 400;
      const gain = c.createGain();
      gain.gain.setValueAtTime(0.25, c.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.12);
      noise.connect(filter).connect(gain).connect(c.destination);
      noise.start();
    }

    function startAmbience() {
      if (ambienceOn) return;
      ambienceOn = true;
      const loop = () => {
        if (!ambienceOn) return;
        chuff();
        ambienceTimer = setTimeout(loop, 480);
      };
      loop();
    }
    function stopAmbience() {
      ambienceOn = false;
      clearTimeout(ambienceTimer);
    }
    function toggleAmbience() {
      if (ambienceOn) stopAmbience(); else startAmbience();
      return ambienceOn;
    }

    return { whistle, toggleAmbience };
  })();

  /* ---------------------------------------------------------------------
     Whistle caption (visible + accessible cue whenever a whistle "sounds")
     --------------------------------------------------------------------- */
  const whistleCaption = document.getElementById("whistle-caption");
  function announceWhistle(text) {
    if (text) whistleCaption.textContent = text;
    whistleCaption.classList.add("is-visible");
    clearTimeout(announceWhistle._t);
    announceWhistle._t = setTimeout(() => whistleCaption.classList.remove("is-visible"), 1800);
  }

  /* ---------------------------------------------------------------------
     Door transition + navigation between carriages
     --------------------------------------------------------------------- */
  const doorTransition = document.getElementById("door-transition");
  function travelTo(targetId, { silent } = {}) {
    const target = document.getElementById(targetId.replace("#", ""));
    if (!target) return;
    if (!silent) {
      TrainAudio.whistle();
      announceWhistle("Whistle blows — the compartment door slides open");
      doorTransition.classList.add("is-active");
      setTimeout(() => doorTransition.classList.remove("is-active"), 950);
    }
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.getElementById("board-train-btn").addEventListener("click", () => {
    travelTo("engine");
  });

  /* ---------------------------------------------------------------------
     Route bar: populate stops, show after hero, highlight current
     --------------------------------------------------------------------- */
  const routeBar = document.getElementById("route-bar");
  const routeScroller = document.getElementById("route-scroller");
  const hero = document.getElementById("hero");

  CARRIAGES.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "route-stop";
    btn.setAttribute("role", "listitem");
    btn.setAttribute("aria-current", "false");
    btn.textContent = c.name;
    btn.addEventListener("click", () => travelTo(c.id));
    routeScroller.appendChild(btn);
  });
  const routeStopEls = Array.from(routeScroller.children);

  const heroObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      routeBar.classList.toggle("is-visible", !entry.isIntersecting);
    });
  }, { threshold: 0.05 });
  heroObserver.observe(hero);

  /* ---------------------------------------------------------------------
     Scroll progress track + "engine" position + current-carriage highlight
     --------------------------------------------------------------------- */
  const progressFill = document.getElementById("progress-fill");
  const progressEngine = document.getElementById("progress-engine");

  function updateProgress() {
    const doc = document.documentElement;
    const scrolled = doc.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    const pct = height > 0 ? Math.min(100, (scrolled / height) * 100) : 0;
    progressFill.style.width = pct + "%";
    progressEngine.style.left = pct + "%";
  }

  const carriageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = CARRIAGES.findIndex(c => c.el === entry.target);
        routeStopEls.forEach((el, i) => el.setAttribute("aria-current", i === idx ? "true" : "false"));
        if (idx > -1 && routeStopEls[idx]) {
          routeStopEls[idx].scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
        }
      }
    });
  }, { threshold: 0.5 });
  CARRIAGES.forEach(c => carriageObserver.observe(c.el));

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* ---------------------------------------------------------------------
     Reveal-on-scroll
     --------------------------------------------------------------------- */
  document.querySelectorAll(".carriage .reveal, .engine-copy").forEach(el => el.classList.add("reveal"));
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  /* ---------------------------------------------------------------------
     Settings panel (search, dark mode, contrast, font size, motion)
     --------------------------------------------------------------------- */
  const settingsPanel = document.getElementById("settings-panel");
  const overlayScrim = document.getElementById("overlay-scrim");
  function openSettings() {
    settingsPanel.classList.add("is-open");
    settingsPanel.setAttribute("aria-hidden", "false");
    overlayScrim.classList.add("is-visible");
    document.getElementById("search-input").focus();
  }
  function closeSettings() {
    settingsPanel.classList.remove("is-open");
    settingsPanel.setAttribute("aria-hidden", "true");
    overlayScrim.classList.remove("is-visible");
  }
  document.getElementById("settings-toggle").addEventListener("click", openSettings);
  document.getElementById("search-toggle").addEventListener("click", openSettings);
  document.getElementById("settings-close").addEventListener("click", closeSettings);
  overlayScrim.addEventListener("click", () => { closeSettings(); closeModal(); closeLightbox(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeSettings(); closeModal(); closeLightbox(); }
  });

  const root = document.documentElement;
  function applyStoredPrefs() {
    const theme = localStorage.getItem("tlj-theme");
    const contrast = localStorage.getItem("tlj-contrast");
    const fontScale = localStorage.getItem("tlj-font-scale");
    const motion = localStorage.getItem("tlj-motion");
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      document.getElementById("theme-toggle").setAttribute("aria-pressed", "true");
    }
    if (contrast === "high") {
      root.setAttribute("data-contrast", "high");
      document.getElementById("contrast-toggle").setAttribute("aria-pressed", "true");
    }
    if (fontScale) document.body.style.fontSize = fontScale;
    if (motion === "reduced") {
      root.style.setProperty("--dur-slow", "1ms");
      root.style.setProperty("--dur-med", "1ms");
      root.style.setProperty("--dur-fast", "1ms");
      document.getElementById("motion-toggle").setAttribute("aria-pressed", "true");
    }
  }
  applyStoredPrefs();

  document.getElementById("theme-toggle").addEventListener("click", function () {
    const isDark = root.getAttribute("data-theme") === "dark";
    root.setAttribute("data-theme", isDark ? "light" : "dark");
    this.setAttribute("aria-pressed", String(!isDark));
    localStorage.setItem("tlj-theme", isDark ? "light" : "dark");
  });
  document.getElementById("contrast-toggle").addEventListener("click", function () {
    const isHigh = root.getAttribute("data-contrast") === "high";
    root.setAttribute("data-contrast", isHigh ? "normal" : "high");
    this.setAttribute("aria-pressed", String(!isHigh));
    localStorage.setItem("tlj-contrast", isHigh ? "normal" : "high");
  });
  let fontStep = parseFloat(localStorage.getItem("tlj-font-step") || "0");
  function applyFontStep() {
    document.body.style.fontSize = (1.05 + fontStep * 0.12) + "rem";
    localStorage.setItem("tlj-font-step", fontStep);
  }
  document.getElementById("font-increase").addEventListener("click", () => { fontStep = Math.min(4, fontStep + 1); applyFontStep(); });
  document.getElementById("font-decrease").addEventListener("click", () => { fontStep = Math.max(-2, fontStep - 1); applyFontStep(); });
  document.getElementById("font-reset").addEventListener("click", () => { fontStep = 0; applyFontStep(); });
  document.getElementById("motion-toggle").addEventListener("click", function () {
    const reduced = this.getAttribute("aria-pressed") === "true";
    this.setAttribute("aria-pressed", String(!reduced));
    if (!reduced) {
      root.style.setProperty("--dur-slow", "1ms");
      root.style.setProperty("--dur-med", "1ms");
      root.style.setProperty("--dur-fast", "1ms");
      localStorage.setItem("tlj-motion", "reduced");
    } else {
      root.style.removeProperty("--dur-slow");
      root.style.removeProperty("--dur-med");
      root.style.removeProperty("--dur-fast");
      localStorage.setItem("tlj-motion", "normal");
    }
  });

  document.getElementById("sound-toggle").addEventListener("click", function () {
    const on = TrainAudio.toggleAmbience();
    this.setAttribute("aria-pressed", String(on));
    this.textContent = on ? "🔊" : "🔇";
  });

  /* ---------------------------------------------------------------------
     Search
     --------------------------------------------------------------------- */
  document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const q = document.getElementById("search-input").value.trim().toLowerCase();
    const results = document.getElementById("search-results");
    results.innerHTML = "";
    if (!q) return;
    const matches = SEARCH_INDEX.filter(item => item.title.toLowerCase().includes(q));
    if (!matches.length) {
      results.innerHTML = "<p>No stations found on this line for that search.</p>";
      return;
    }
    matches.slice(0, 8).forEach(m => {
      const a = document.createElement("a");
      a.href = m.section;
      a.textContent = `${m.title} — ${m.type}`;
      a.addEventListener("click", ev => {
        ev.preventDefault();
        closeSettings();
        travelTo(m.section);
      });
      results.appendChild(a);
    });
  });

  /* ---------------------------------------------------------------------
     Generic modal
     --------------------------------------------------------------------- */
  const modalScrim = document.getElementById("modal-scrim");
  const modalContent = document.getElementById("modal-content");
  function openModal(html) {
    modalContent.innerHTML = html;
    modalScrim.classList.add("is-open");
    document.getElementById("modal-close").focus();
  }
  function closeModal() { modalScrim.classList.remove("is-open"); }
  document.getElementById("modal-close").addEventListener("click", closeModal);
  modalScrim.addEventListener("click", e => { if (e.target === modalScrim) closeModal(); });

  /* ---------------------------------------------------------------------
     Lightbox
     --------------------------------------------------------------------- */
  const lightbox = document.getElementById("lightbox");
  function closeLightbox() { lightbox.classList.remove("is-open"); }
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });

  /* ---------------------------------------------------------------------
     Timeline (Carriage 2)
     --------------------------------------------------------------------- */
  const timelineScroller = document.getElementById("timeline-scroller");
  const stationDetail = document.getElementById("station-detail");
  TIMELINE_EVENTS.forEach(ev => {
    const btn = document.createElement("button");
    btn.className = "station";
    btn.setAttribute("role", "listitem");
    btn.innerHTML = `
      <span class="station__dot" aria-hidden="true"></span>
      <span class="station__year">${ev.date}</span>
      <span class="station__name">${ev.name}</span>
      <span class="station__teaser">${ev.teaser}</span>
    `;
    btn.addEventListener("click", () => showStation(ev));
    timelineScroller.appendChild(btn);
  });
  function showStation(ev, { scroll } = { scroll: true }) {
    const photoBlock = ev.wikiTitle
      ? `<div data-wiki-title="${ev.wikiTitle}"><div class="research-figure__frame" data-figure><span class="figure-fallback">${ev.name}<br><span class="figure-loading">loading from Wikipedia…</span></span></div></div>`
      : "";
    stationDetail.innerHTML = `
      <span class="station-detail__meta">${ev.date}</span>
      <h3>${ev.name}</h3>
      <div class="station-detail__grid">
        <div>
          <p>${ev.body}</p>
          ${ev.quote ? `<blockquote class="quote-block">${ev.quote}<br><small>${ev.quoteSource}</small></blockquote>` : ""}
        </div>
        <div>
          ${photoBlock}
          <div>${ev.tags.map(t => `<span class="archive-chip">${t}</span>`).join("")}</div>
        </div>
      </div>
    `;
    stationDetail.classList.add("is-open");
    if (window.TLJ && window.TLJ.hydrateFigures) window.TLJ.hydrateFigures(stationDetail);
    if (scroll) stationDetail.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  if (TIMELINE_EVENTS.length) showStation(TIMELINE_EVENTS[0], { scroll: false });

  /* ---------------------------------------------------------------------
     Map (Carriage 4)
     --------------------------------------------------------------------- */
  const mapInfo = document.getElementById("map-info");
  document.querySelectorAll(".map-region").forEach(region => {
    function activate() {
      document.querySelectorAll(".map-region").forEach(r => r.setAttribute("aria-pressed", "false"));
      region.setAttribute("aria-pressed", "true");
      const data = MAP_REGIONS[region.dataset.region];
      if (!data) return;
      mapInfo.innerHTML = `
        <h3>${data.name}</h3>
        <p>${data.fact}</p>
        <div class="stat-line"><span>Estimated displaced</span><strong>${data.displaced}</strong></div>
        <div class="stat-line"><span>Key routes</span><strong>${data.routes}</strong></div>
      `;
    }
    region.addEventListener("click", activate);
    region.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); } });
  });

  /* ---------------------------------------------------------------------
     Human Stories: suitcases + filters (Carriage 5)
     --------------------------------------------------------------------- */
  const luggageRack = document.getElementById("luggage-rack");
  function renderStories(filter) {
    luggageRack.innerHTML = "";
    STORIES.filter(s => filter === "all" || s.tags.includes(filter)).forEach(s => {
      const btn = document.createElement("button");
      btn.className = "suitcase";
      btn.innerHTML = `
        <div class="suitcase__body">
          <div class="suitcase__latch"></div>
          <div class="suitcase__name">${s.name}</div>
          <div class="suitcase__meta">${s.place}</div>
          <p style="font-size:.85rem; margin-top:.6rem;">${s.summary}</p>
          <div class="suitcase__tags">${s.tags.map(t => `<span>${t}</span>`).join("")}</div>
        </div>
      `;
      btn.addEventListener("click", () => openModal(`
        <span class="modal__eyebrow">Real survivor account · ${s.place}</span>
        <h3>${s.name}</h3>
        <blockquote class="quote-block">${s.quote}</blockquote>
        <p>${s.full}</p>
        <p style="font-size:.85rem; color:var(--text-soft);">This is this site's own short summary of a publicly documented account, not a verbatim transcript — read ${s.name.split(" ")[0]}'s story in full, and in their own words, at the source below.</p>
        <a class="btn secondary" href="${s.sourceUrl}" target="_blank" rel="noopener noreferrer">${s.sourceName}</a>
        <div style="margin-top:1rem;">${s.tags.map(t => `<span class="archive-chip">${t}</span>`).join("")}</div>
      `));
      luggageRack.appendChild(btn);
    });
  }
  renderStories("all");
  document.querySelectorAll("#story-filters .pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#story-filters .pill-btn").forEach(b => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      renderStories(btn.dataset.filter);
    });
  });

  /* ---------------------------------------------------------------------
     Interview archive: cassettes
     --------------------------------------------------------------------- */
  const cassetteShelf = document.getElementById("cassette-shelf");
  INTERVIEWS.forEach(i => {
    const btn = document.createElement("button");
    btn.className = "cassette";
    btn.innerHTML = `
      <div class="cassette__window"><div class="cassette__reel"></div><div class="cassette__reel"></div></div>
      <div class="cassette__label">${i.name}</div>
      <div class="cassette__meta">${i.location} · Age at Partition: ${i.age}</div>
    `;
    btn.addEventListener("click", () => openModal(`
      <span class="modal__eyebrow">Real recorded interview · ${i.location}</span>
      <h3>${i.name}</h3>
      <p>${i.transcript}</p>
      <div class="audio-placeholder">🎙️ The recording itself is hosted by its original archive, not this site</div>
      <a class="btn secondary" href="${i.sourceUrl}" target="_blank" rel="noopener noreferrer">Watch or read the full interview ↗</a>
    `));
    cassetteShelf.appendChild(btn);
  });

  /* ---------------------------------------------------------------------
     Gallery wall + lightbox
     --------------------------------------------------------------------- */
  const galleryWall = document.getElementById("gallery-wall");
  GALLERY_ITEMS.forEach(g => {
    const btn = document.createElement("button");
    btn.className = "gallery-frame";
    btn.dataset.wikiTitle = g.wikiTitle;
    btn.setAttribute("aria-label", g.caption);
    btn.innerHTML = `<div class="gallery-frame__media" data-figure><span class="figure-fallback">${g.tag}<br><span class="figure-loading">loading from Wikipedia…</span></span></div>`;
    btn.addEventListener("click", () => {
      const img = document.getElementById("lightbox-img");
      const cap = document.getElementById("lightbox-caption");
      if (btn.dataset.resolvedSrc) {
        img.src = btn.dataset.resolvedSrc;
        img.alt = btn.dataset.resolvedTitle || g.caption;
        img.style.display = "";
        const creditUrl = btn.dataset.resolvedCreditUrl;
        cap.innerHTML = g.caption + (creditUrl ? ` — <a href="${creditUrl}" target="_blank" rel="noopener noreferrer">Source: Wikipedia ↗</a>` : "");
      } else {
        img.removeAttribute("src");
        img.style.display = "none";
        cap.textContent = g.caption;
      }
      lightbox.classList.add("is-open");
    });
    galleryWall.appendChild(btn);
  });

  /* ---------------------------------------------------------------------
     Film shelf (Carriage 12)
     --------------------------------------------------------------------- */
  const filmShelf = document.getElementById("film-shelf");
  function renderFilms(lens) {
    filmShelf.innerHTML = "";
    FILMS.filter(f => lens === "all" || f.lens === lens).forEach(f => {
      const btn = document.createElement("button");
      btn.className = "reel";
      btn.innerHTML = `<span>${f.title}<br>${f.year}</span>`;
      btn.addEventListener("click", () => openModal(`
        <span class="modal__eyebrow">${f.country} · ${f.year}</span>
        <h3>${f.title}</h3>
        <p>${f.desc}</p>
      `));
      filmShelf.appendChild(btn);
    });
  }
  renderFilms("all");
  document.querySelectorAll("#film-tabs .pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#film-tabs .pill-btn").forEach(b => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      renderFilms(btn.dataset.lens);
    });
  });

  /* ---------------------------------------------------------------------
     Statistics: luggage tags (Carriage 11)
     --------------------------------------------------------------------- */
  const statsGrid = document.getElementById("stats-grid");
  STATS.forEach(s => {
    const div = document.createElement("div");
    div.className = "luggage-tag";
    div.innerHTML = `
      <div class="luggage-tag__value">${s.value}</div>
      <div class="luggage-tag__label">${s.label}</div>
      <div class="luggage-tag__note">${s.note}</div>
    `;
    statsGrid.appendChild(div);
  });

  /* ---------------------------------------------------------------------
     Literature accordion (Carriage 13)
     --------------------------------------------------------------------- */
  document.querySelectorAll(".accordion-trigger").forEach(trigger => {
    const panel = trigger.nextElementSibling;
    trigger.addEventListener("click", () => {
      const open = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!open));
      panel.style.maxHeight = open ? null : panel.scrollHeight + "px";
    });
  });

  /* ---------------------------------------------------------------------
     Reflection wall
     --------------------------------------------------------------------- */
  const reflectionWall = document.getElementById("reflection-wall");
  const STORAGE_KEY = "tlj-reflections";
  function loadReflections() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      return stored && stored.length ? stored : REFLECTION_SEED;
    } catch (e) { return REFLECTION_SEED; }
  }
  function renderReflections() {
    reflectionWall.innerHTML = "";
    loadReflections().slice().reverse().forEach(r => {
      const note = document.createElement("div");
      note.className = "pinned-note";
      note.style.setProperty("--tilt", (r.tilt || 0) + "deg");
      note.innerHTML = `<span class="q">${r.q}</span>${escapeHtml(r.text)}`;
      reflectionWall.appendChild(note);
    });
  }
  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
  renderReflections();

  document.getElementById("reflection-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const q = document.getElementById("reflection-question").value;
    const text = document.getElementById("reflection-text").value.trim();
    if (!text) return;
    const all = loadReflections().slice();
    all.push({ q, text, tilt: (Math.random() * 4 - 2).toFixed(1) });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    document.getElementById("reflection-text").value = "";
    renderReflections();
  });

})();
