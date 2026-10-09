# The Last Journey — Stories of the 1947 India–Pakistan Partition

An interactive digital museum, historical archive, and memorial exploring the
human impact of the 1947 India–Pakistan Partition, structured as a train
journey through history and inspired by Khushwant Singh's *Train to Pakistan*.

This is a **prototype**, built as plain HTML/CSS/JavaScript with no build
step, no framework, and no backend — so it can be hosted for free and edited
by anyone with a text editor.

## Structure

```
index.html        The entire site: hero + all 16 "carriages" (sections)
css/style.css     All styling — sepia/parchment theme, layout, animations
js/content.js     All content data (timeline, stories, interviews, films,
                  gallery captions, statistics, reflections, search index)
js/main.js        Core interactivity (navigation, timeline, map, filters,
                  modals, accessibility settings, reflection wall, sound)
js/experience.js  The "wow" layer: a scroll-driven mood rail, a live journey
                  HUD, a trailing cursor ring, magnetic/tilt interactions,
                  animated statistics, and real research photography
```

Everything is self-contained except the Google Fonts stylesheet loaded in
`css/style.css`, and the live Wikipedia photo lookups in `js/experience.js`
— both require the visitor's browser to have normal internet access
(standard for any deployed website). Both degrade gracefully: fonts fall
back to system serif, and every figure that would carry a Wikipedia photo
already has real, hand-written caption text, so the page reads correctly
even fully offline.

### Real research photography

Elements marked `data-wiki-title="..."` (political leaders, timeline events,
gallery photographs, the Radcliffe Line map, the Partition Museum, the Wagah
border, the novel's cover) fetch a real photograph and a "Source: Wikipedia
↗" credit live from Wikipedia's public REST summary API at load time — no
API key, no hardcoded image URLs to go stale. If the fetch fails or is
blocked, the element quietly keeps its plain-text fallback (a monogram
avatar for people, a captioned frame for places) instead of showing a
broken image. Every `wikiTitle` used was individually checked against the
real article title before being added — a wrong title is the most common
cause of a "missing" image, since the summary API 404s silently.

### Real survivor stories and interviews

The six cards in Human Stories and the four cassettes in the Interview
Archive (`js/content.js` → `STORIES` and `INTERVIEWS`) are real, named,
publicly documented people — Iqbal Bibi, Sushila Balkrishna Wagh, Ali Shan,
Khawaja Muhammad Zakariya, Mehmuda Khatoon, and Shahezadi Begam — sourced
from the 1947 Partition Archive, the National Endowment for the Humanities,
Dawn, IlmFeed, and the Bengal Gazette. Each `full` field is this project's
own short, third-person summary of their publicly reported account, not a
verbatim transcript (nobody involved in this prototype holds rights to
redistribute the original recordings), and every card links to its real
source so a visitor can read or watch the person's own words in full. A
"Explore the full archives" panel in that carriage links out to the 1947
Partition Archive (10,000+ interviews) and the Stanford Libraries' public
exhibit of filmed interviews, since the handful featured here are a sample,
not the whole record.

## Editing content

Almost everything a non-developer would want to change lives in
`js/content.js` as plain arrays of objects — timeline events, survivor
stories, interviews, gallery captions, films, and statistics. Add, remove, or
edit entries there; `main.js` renders whatever is in that file automatically.

A few things remain illustrative rather than sourced: the filter chips on
Human Stories include a couple of regions no current story is tagged with,
and the "Interview Archive" is a curated sample of four real interviews, not
an exhaustive one. There is no remaining fabricated content — survivor
stories, interviews, and research photography are all real and sourced as
described above.

## Running locally

No install step is required. From this folder, run any static file server, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Deploying for free

**GitHub Pages**
1. Push this repository to GitHub (already done if you're reading this there).
2. In the repo settings, under *Pages*, set the source to the branch you want
   to publish (e.g. `main`) and the root folder (`/`).
3. GitHub will publish the site at `https://<username>.github.io/<repo>/`.

**Netlify / Vercel**
1. Create a free account and "import" this repository.
2. Leave the build command empty and the publish directory as the repo root
   (there is nothing to build — it's static files).
3. Deploy. Both platforms give a free `*.netlify.app` / `*.vercel.app` URL.

No paid domain, hosting, database, or API key is required for any of the
above. A custom domain can be attached later on any of these platforms
without changing the site's code.

## Accessibility

The settings drawer (⚙️ icon) includes dark mode, a high-contrast mode, text
resizing, and a reduced-motion toggle. The site is keyboard-navigable
throughout, includes a skip-to-content link, and uses `alt`/`aria-label`
text on all imagery and interactive controls.

All of the new motion/visual flourishes (the mood rail, cursor ring,
magnetic buttons, card tilt, count-up numbers) are decorative only — they
never carry information on their own, are skipped entirely for touch
devices, and are disabled by the reduced-motion toggle or the OS-level
"prefers reduced motion" setting.

## A note on content

Historical facts (dates, figures, biographical notes) reflect widely cited
public scholarship on Partition; several statistics remain genuinely
disputed among historians and are presented as ranges with that caveat.
Survivor stories and interview cards are real, named, publicly documented
people, summarised from cited sources and linked back to them in full — see
"Real survivor stories and interviews" above. This project does not take a
political side on Partition and aims to present the perspectives of all
communities involved with equal care.
