/* =========================================================================
   THE LAST JOURNEY — content data
   All entries below are historically-grounded summaries EXCEPT where a
   record is explicitly marked as a "placeholder" — those are illustrative
   composites written for this prototype, standing in for real survivor
   testimony, photographs, and audio that should replace them before the
   site is published. Search PLACEHOLDER to find every such spot.
   ========================================================================= */

const TIMELINE_EVENTS = [
  {
    id: "t1940",
    year: "1940",
    date: "23 March 1940",
    name: "The Lahore Resolution",
    teaser: "The Muslim League calls for separate states.",
    body: "At its Lahore session, the All-India Muslim League formally adopted a resolution demanding that regions with a Muslim majority in the north-west and east of British India be grouped into “independent states.” It became the foundational document behind the later demand for Pakistan.",
    tags: ["Politics", "Punjab", "Bengal"],
    quote: "“No constitutional plan would be workable or acceptable to the Muslims unless geographical contiguous units are demarcated into regions.”",
    quoteSource: "The Lahore Resolution, 1940",
    wikiTitle: "Lahore Resolution"
  },
  {
    id: "t1946",
    year: "1946",
    date: "16 August 1946",
    name: "Direct Action Day",
    teaser: "Calcutta erupts in communal violence.",
    body: "After the failure of the Cabinet Mission's power-sharing plan, the Muslim League called for “Direct Action” to press its demand for Pakistan. In Calcutta, the call preceded days of communal killing that left thousands dead and marked a turning point after which many politicians on all sides came to believe undivided India was no longer sustainable.",
    tags: ["Bengal", "Politics", "Loss"],
    quote: "“We shall have either a divided India or a destroyed India.”",
    quoteSource: "Attributed to Mohammad Ali Jinnah, 1946",
    wikiTitle: "Direct Action Day"
  },
  {
    id: "t1947feb",
    year: "1947",
    date: "20 February 1947",
    name: "Britain sets a deadline",
    teaser: "Attlee announces withdrawal by June 1948.",
    body: "Prime Minister Clement Attlee announced that Britain intended to transfer power to Indian hands no later than June 1948. Lord Mountbatten was appointed the last Viceroy, tasked with arranging the handover.",
    tags: ["Politics"],
    quote: "",
    quoteSource: "",
    wikiTitle: "Clement Attlee"
  },
  {
    id: "t1947mar",
    year: "1947",
    date: "March 1947",
    name: "Violence spreads through Punjab",
    teaser: "Rawalpindi and neighbouring districts burn.",
    body: "Communal killings in the Rawalpindi district and elsewhere in Punjab forced entire villages to flee, months before any border had even been drawn. These early massacres previewed the scale of what would follow and hardened positions on all sides.",
    tags: ["Punjab", "Loss", "Migration"],
    quote: "",
    quoteSource: ""
  },
  {
    id: "t1947jun",
    year: "1947",
    date: "3 June 1947",
    name: "The Mountbatten Plan",
    teaser: "Independence is moved forward to August.",
    body: "Mountbatten announced that partition would occur immediately, moving independence forward by ten months to 15 August 1947. The compressed timeline left almost no time to plan for the movement of tens of millions of people.",
    tags: ["Politics"],
    quote: "",
    quoteSource: "",
    wikiTitle: "Indian Independence Act 1947"
  },
  {
    id: "t1947jul",
    year: "1947",
    date: "8 July 1947",
    name: "The Radcliffe Line is drawn",
    teaser: "A boundary decided in five weeks.",
    body: "Sir Cyril Radcliffe, a British barrister who had never before visited India, was given five weeks to draw the borders of Punjab and Bengal. Working from outdated maps and incomplete census data, his commission divided villages, rivers, and families with a single pen line.",
    tags: ["Punjab", "Bengal", "Politics"],
    quote: "“I thought the viceroy wanted the report out before independence. I didn't want my name on it, but there was nothing else to be done.”",
    quoteSource: "Paraphrased recollection attributed to Sir Cyril Radcliffe",
    wikiTitle: "Radcliffe Line"
  },
  {
    id: "t1947aug14",
    year: "1947",
    date: "14 August 1947",
    name: "Pakistan is born",
    teaser: "Independence at midnight in Karachi.",
    body: "Pakistan came into existence as a sovereign, independent state, with Muhammad Ali Jinnah sworn in as its first Governor-General in Karachi.",
    tags: ["Politics"],
    quote: "",
    quoteSource: "",
    wikiTitle: "Muhammad Ali Jinnah"
  },
  {
    id: "t1947aug15",
    year: "1947",
    date: "15 August 1947",
    name: "India is born",
    teaser: "“A moment which comes but rarely.”",
    body: "India became independent at midnight, with Jawaharlal Nehru delivering his “Tryst with Destiny” address. The Radcliffe Line, which would decide which new country millions of people now lived in, was published only two days later.",
    tags: ["Politics"],
    quote: "“At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom.”",
    quoteSource: "Jawaharlal Nehru, 15 August 1947",
    wikiTitle: "Jawaharlal Nehru"
  },
  {
    id: "t1947aug17",
    year: "1947",
    date: "17 August 1947",
    name: "The border is published",
    teaser: "Millions learn overnight which country they live in.",
    body: "The final boundary award was made public, two days after both nations had already celebrated independence. Villagers who had gone to sleep in India woke to find themselves in Pakistan, or the reverse, without ever having moved.",
    tags: ["Punjab", "Bengal", "Migration"],
    quote: "",
    quoteSource: "",
    wikiTitle: "Radcliffe Line"
  },
  {
    id: "t1947augsep",
    year: "1947",
    date: "August–September 1947",
    name: "The great migration",
    teaser: "The largest mass migration in recorded history.",
    body: "An estimated 14 to 16 million people crossed the new borders in a matter of weeks — on foot in columns stretching for miles, in bullock carts, and packed onto trains. Convoys were attacked from all sides; so-called “ghost trains” arrived at stations carrying only the dead.",
    tags: ["Punjab", "Bengal", "Migration", "Loss"],
    quote: "",
    quoteSource: "",
    wikiTitle: "Partition of India"
  },
  {
    id: "t1947sep",
    year: "1947",
    date: "September 1947",
    name: "The refugee camps",
    teaser: "Kurukshetra, Walton, and cities of tents.",
    body: "Vast camps sprang up on both sides of the new border — the camp at Kurukshetra alone sheltered several hundred thousand people at its peak. Volunteers, including women's organisations, worked to trace missing family members and reunite separated children with relatives.",
    tags: ["Migration", "Families", "Hope"],
    quote: "",
    quoteSource: ""
  },
  {
    id: "t1948jan",
    year: "1948",
    date: "30 January 1948",
    name: "Gandhi is assassinated",
    teaser: "A final act of the year's violence.",
    body: "Mohandas Gandhi, who had spent the months after independence trying to halt communal killing, was assassinated in Delhi by a Hindu nationalist who believed Gandhi had been too conciliatory toward Muslims and Pakistan.",
    tags: ["Politics", "Loss"],
    quote: "",
    quoteSource: "",
    wikiTitle: "Assassination of Mahatma Gandhi"
  }
];

/* REAL, NAMED accounts, each summarised from a public, citable source and
   linked back to it in full. These are not verbatim transcripts — nobody
   involved in this prototype has recorded or been granted rights to
   redistribute the original interviews — so every "quote" below is this
   site's own short, third-person description of a documented real event,
   never words put directly in a survivor's mouth. Read the linked source
   for their own account in their own words. */
const STORIES = [
  {
    id: "s1",
    name: "Iqbal Bibi",
    tags: ["Pakistan", "Punjab", "Women", "Migration", "Loss"],
    place: "Behram refugee camp to Lahore, via Wagah",
    summary: "Spent fifteen days reaching Lahore from a refugee camp at Behram, hiding to avoid armed attackers and watching disease spread along the route.",
    quote: "Fifteen days from a refugee camp to Lahore, through disease and fear, before the group ever reached Wagah.",
    full: "As recorded by the 1947 Partition Archive: Iqbal Bibi's family travelled under military escort toward Amritsar, where the truck carrying them came under attack. The journey from the Behram camp to Lahore took fifteen days, during which, by her account, roughly a hundred to two hundred people in her group died of water-borne disease before they ever crossed into Pakistan at Wagah. From there her family was moved to a transit camp at Walton Cantonment, and then on to a house near Lahore Railway Station.",
    sourceName: "Read her full story at the 1947 Partition Archive ↗",
    sourceUrl: "https://www.1947partitionarchive.org/iqbal-bibi/"
  },
  {
    id: "s2",
    name: "Sushila Balkrishna Wagh",
    tags: ["Pakistan", "Children", "Families", "Hope"],
    place: "Karachi, Sindh",
    summary: "An eight-year-old in Karachi when Partition came; her family's Muslim neighbours sheltered her older sister by presenting her as their own.",
    quote: "Protected not by strangers, but by the very neighbours Partition was supposed to turn into enemies.",
    full: "As recorded by the 1947 Partition Archive (interview by Yash Anil Pund): Sushila was eight years old and living in Karachi, where her grandfather served as a governor's aide and her father worked for Burmah Shell. Karachi stayed largely calm through 1947 itself — the violence her family feared arrived only with riots in 1948. In the meantime, local Muslim neighbours helped shield the family, at one point presenting her older sister as their own daughter or niece to protect her.",
    sourceName: "Read her full story at the 1947 Partition Archive ↗",
    sourceUrl: "https://www.1947partitionarchive.org/sushila-balkrishna-wagh/"
  },
  {
    id: "s3",
    name: "Ali Shan",
    tags: ["Punjab", "Children", "Loss", "Hope"],
    place: "Punjab to the San Francisco Bay Area",
    summary: "Orphaned at six when a mob killed his family; survived refugee camps alone as a child, and later built a life around forgiving the men responsible.",
    quote: "A six-year-old's survival, and a lifetime spent afterward choosing forgiveness over the alternative.",
    full: "As recounted to the National Endowment for the Humanities and the 1947 Partition Archive: Ali Shan watched a mob kill his mother, brother, and two aunts during an attack on his village, and became the sole survivor of that attack on his family. He spent time alone in refugee camps as a young child before eventually rebuilding a life in the United States. Decades later, now a grandfather in the Bay Area, he has spoken publicly about deliberately choosing to forgive the people responsible, as part of his own path through that trauma.",
    sourceName: "Read the NEH's account of his story ↗",
    sourceUrl: "https://www.neh.gov/article/story-1947-partition-told-people-who-were-there"
  },
  {
    id: "s4",
    name: "Khawaja Muhammad Zakariya",
    tags: ["Pakistan", "Punjab", "Migration", "Loss"],
    place: "Amritsar to Lahore",
    summary: "A Punjab University professor who, decades later, still recalled fleeing a targeted Muslim neighbourhood in Amritsar on a train packed with refugees bound for Lahore.",
    quote: "A neighbourhood emptied itself onto a crowded train before the violence arrived.",
    full: "As reported by Dawn and recorded by a 1947 Partition Archive volunteer: Zakariya, later a retired professor of Urdu literature at Punjab University, recalled his family leaving their Muslim neighbourhood in Amritsar shortly before it came under attack, then joining other families aboard trains packed with refugees bound for Lahore — carrying only what they could hold.",
    sourceName: "Read Dawn's coverage of his and other recorded accounts ↗",
    sourceUrl: "https://www.dawn.com/news/1169309"
  },
  {
    id: "s5",
    name: "Mehmuda Khatoon",
    tags: ["India", "Pakistan", "Children", "Migration", "Families"],
    place: "Delhi to Lahore to Karachi",
    summary: "Four years old when her father died just before the family fled Delhi; she reached Karachi only after stops in Lahore.",
    quote: "A father's death and a border crossing arrived in the same season of her childhood.",
    full: "As reported by IlmFeed, drawing on recorded Partition oral histories: Mehmuda Khatoon was born in Delhi and was only four years old when her father died, days before her mother's family fled the city. The family travelled by train toward Lahore, and she eventually settled with relatives in Karachi after passing through the Punjab.",
    sourceName: "Read more accounts like hers at IlmFeed ↗",
    sourceUrl: "https://ilmfeed.com/heartbreaking-stories-from-the-1947-india-pakistan-partition/"
  },
  {
    id: "s6",
    name: "Shahezadi Begam",
    tags: ["Bengal", "Women", "Migration", "Loss"],
    place: "Kolkata to Dhaka",
    summary: "Moved from Kolkata to Dhaka as a child and, decades later, is still living in a relief camp.",
    quote: "Still, after all these decades, in a relief camp.",
    full: "As reported by the Bengal Gazette, drawing on a 1947 Partition Archive interview: Shahezadi Begam was displaced as a child from urban Kolkata to Dhaka in the Partition of Bengal. Unlike the Punjab corridor, Bengal's displacement continued in waves for years afterward — Shahezadi's own account reflects that longer, less sudden uprooting, and she remains, by this account, a resident of a relief camp to this day.",
    sourceName: "Read the Bengal Gazette's coverage ↗",
    sourceUrl: "https://bengalgazette.org/2023/04/02/the-forgotten-survivors-the-two-voices-of-partition-refugees-in-bangladesh/"
  }
];

/* REAL filmed/recorded interviews, held by the 1947 Partition Archive and
   the Stanford Libraries' public exhibit of it — not hosted on this site,
   but linked to directly so visitors can watch or read the originals. */
const INTERVIEWS = [
  {
    id: "i1",
    name: "Iqbal Bibi",
    age: "—",
    location: "Punjab / Sindh corridor",
    transcript: "Her fifteen-day journey from the Behram refugee camp to Lahore is recorded in full, in her own words, at the 1947 Partition Archive.",
    sourceUrl: "https://www.1947partitionarchive.org/iqbal-bibi/"
  },
  {
    id: "i2",
    name: "Sushila Balkrishna Wagh",
    age: "8 at Partition",
    location: "Karachi, Sindh",
    transcript: "Interviewed by Yash Anil Pund for the 1947 Partition Archive, with Pankhuri Wagh as camera person — her full account of childhood in Karachi is published there.",
    sourceUrl: "https://www.1947partitionarchive.org/sushila-balkrishna-wagh/"
  },
  {
    id: "i3",
    name: "Mohammad Shamsul Alam Joarder",
    age: "—",
    location: "Dhaka, Bengal",
    transcript: "Recorded in Dhaka in 2012; his family worked at the Alliance Jute Mills. The interview, in Bengali with five video files, is held in the Stanford Libraries' public exhibit of the Archive's collection.",
    sourceUrl: "https://exhibits.stanford.edu/1947-partition/browse/interviews"
  },
  {
    id: "i4",
    name: "Ahmed Ilias",
    age: "—",
    location: "Dhaka, Bangladesh",
    transcript: "Interviewed by Farhana Afroz in 2012, describing his Bihari identity and his decision to migrate to the eastern wing of Pakistan after Partition.",
    sourceUrl: "https://www.1947partitionarchive.org/"
  }
];

/* Real photographs, fetched live from Wikipedia (see js/experience.js) by
   wikiTitle. Each is a genuine, identifiable historical subject — not a
   staged or composite scene — with its caption describing what the photo
   actually shows. Falls back to a plain labelled frame if the fetch fails. */
const GALLERY_ITEMS = [
  { id: "g1", wikiTitle: "Partition of India", caption: "The Partition of India, August 1947 — the event this entire site retraces.", tag: "History" },
  { id: "g2", wikiTitle: "Radcliffe Line", caption: "The Radcliffe Line: the boundary drawn through Punjab and Bengal in five weeks.", tag: "Politics" },
  { id: "g3", wikiTitle: "Direct Action Day", caption: "Direct Action Day, Calcutta, 16 August 1946 — a turning point on the road to Partition.", tag: "Loss" },
  { id: "g4", wikiTitle: "Noakhali riots", caption: "Gandhi listens to a survivor during his peace march through Noakhali, 1946.", tag: "Hope" },
  { id: "g5", wikiTitle: "Punjab Boundary Force", caption: "The Punjab Boundary Force — the outmatched military effort to contain the violence of August 1947.", tag: "Migration" },
  { id: "g6", wikiTitle: "Jawaharlal Nehru", caption: "Jawaharlal Nehru, who delivered India's \"Tryst with Destiny\" address at independence.", tag: "Politics" },
  { id: "g7", wikiTitle: "Attari–Wagah border ceremony", caption: "The daily Attari–Wagah border ceremony, performed in mirror image on both sides of the line, today.", tag: "Legacy" },
  { id: "g8", wikiTitle: "Kolkata Partition Museum", caption: "The Kolkata Partition Museum — a newer institution documenting Partition from the Bengal side.", tag: "Legacy" }
];

const FILMS = [
  {
    id: "f1", title: "Train to Pakistan", year: "1998", country: "India", lens: "balanced",
    desc: "Pamela Rooks's adaptation of Khushwant Singh's novel, set almost entirely in the fictional village of Mano Majra, follows the same restraint as the book — refusing to assign villainy to one community."
  },
  {
    id: "f2", title: "Earth (1947 Earth)", year: "1998", country: "India", lens: "balanced",
    desc: "Deepa Mehta's film, based on Bapsi Sidhwa's novel Cracking India, follows Partition in Lahore through the eyes of a Parsi child, whose neutrality lets her watch friendships curdle into suspicion."
  },
  {
    id: "f3", title: "Pinjar", year: "2003", country: "India", lens: "india",
    desc: "Adapted from Amrita Pritam's novel, centring on the abduction of women across the new border and the long, unresolved question of what “recovery” and “return” meant for them."
  },
  {
    id: "f4", title: "Khamosh Pani (Silent Waters)", year: "2003", country: "Pakistan", lens: "pakistan",
    desc: "Sabiha Sumar's film reaches back into a Pakistani Punjabi village's memory of 1947 through the story of a woman who survived abduction, examining silence as a survival strategy."
  },
  {
    id: "f5", title: "Gadar: Ek Prem Katha", year: "2001", country: "India", lens: "india",
    desc: "A commercially successful, more melodramatic take on cross-border romance and rescue; useful in this archive as an example of how popular cinema can lean into nationalist framing."
  },
  {
    id: "f6", title: "Viceroy's House", year: "2017", country: "UK/India", lens: "balanced",
    desc: "Gurinder Chadha's account of the final months in the Viceroy's residence, criticised by some historians for its framing of Churchill-era policy, but notable for centring domestic staff alongside decision-makers."
  },
  {
    id: "f7", title: "Partition Voices (documentary strand)", year: "multiple", country: "UK/South Asia", lens: "balanced",
    desc: "Umbrella term for oral-history documentary projects (BBC and others) built from recorded survivor testimony rather than dramatisation — the closest media form to this website's own Interview Archive."
  }
];

const STATS = [
  { value: "14–16M", label: "People displaced", note: "Widely cited estimate of the number who crossed the new borders in 1947–48 — the largest mass migration in recorded history." },
  { value: "200K–2M", label: "Estimated deaths", note: "Historians' estimates vary widely and remain contested; no official census of the dead was ever completed." },
  { value: "~75,000", label: "Women abducted", note: "Estimated number of women abducted across both new borders, per government recovery operation records cited by historians." },
  { value: "2", label: "New nations", note: "India and Pakistan, born within a day of each other in August 1947." },
  { value: "5 weeks", label: "Time given to draw the border", note: "The span in which the Radcliffe Boundary Commission was asked to divide Punjab and Bengal." },
  { value: "~300,000", label: "Peak camp population, Kurukshetra", note: "One of the largest refugee camps established after Partition." }
];

const REFLECTION_SEED = [
  { q: "What story stayed with you?", text: "The signalman who could not look at what the trains carried. I keep thinking of the ones who had to keep working anyway.", tilt: -2 },
  { q: "What does home mean to you?", text: "A key to a door that isn't there anymore. My grandmother still has hers.", tilt: 1 },
  { q: "What story stayed with you?", text: "The mango tree letter. That someone would ask about a tree, decades later, across a border neither could cross.", tilt: -1 },
  { q: "What does home mean to you?", text: "Home is the language my parents argue in, even though neither of their villages exist on the map anymore.", tilt: 2 }
];

const MAP_REGIONS = {
  punjab: {
    name: "Punjab",
    fact: "Split almost exactly down the middle, Punjab saw the most concentrated violence and the largest single migration corridor of the entire Partition — Sikhs and Hindus moving east, Muslims moving west, often past each other on the same roads.",
    displaced: "≈10 million",
    routes: "Lahore ↔ Amritsar, Sialkot ↔ Jammu, Multan ↔ Ferozepur"
  },
  bengal: {
    name: "Bengal",
    fact: "Divided into West Bengal (India) and East Bengal (later East Pakistan, then Bangladesh in 1971). Migration here was less sudden but continued for years afterward, and the region's partition would be redrawn by history a second time in 1971.",
    displaced: "≈3–4 million (1947 alone)",
    routes: "Kolkata ↔ Dhaka, Khulna ↔ Kolkata"
  },
  sindh: {
    name: "Sindh",
    fact: "Home to a large, long-settled Hindu and Sikh trading population, most of whom left for India by sea and rail in 1947–48 — a migration that receives comparatively little attention next to Punjab and Bengal.",
    displaced: "≈1.2–1.4 million",
    routes: "Karachi ↔ Bombay (by sea), Hyderabad (Sindh) ↔ Jodhpur"
  },
  delhi: {
    name: "Delhi & the NWFP borderlands",
    fact: "Delhi absorbed an enormous refugee population almost overnight, reshaping the city's demography permanently; camps at Kingsway and Purana Qila held tens of thousands at a time.",
    displaced: "≈500,000 into Delhi alone",
    routes: "Rawalpindi/Peshawar ↔ Delhi"
  }
};

const SEARCH_INDEX = [
  ...TIMELINE_EVENTS.map(e => ({ title: e.name, section: "#carriage-2", type: "Timeline" })),
  ...STORIES.map(s => ({ title: s.name, section: "#carriage-5", type: "Human Story" })),
  ...FILMS.map(f => ({ title: f.title, section: "#carriage-12", type: "Film" })),
  { title: "What was Partition?", section: "#carriage-1", type: "Carriage" },
  { title: "Causes of Partition", section: "#carriage-3", type: "Carriage" },
  { title: "Migration and Refugee Crisis", section: "#carriage-4", type: "Carriage" },
  { title: "Women and Children", section: "#carriage-6", type: "Carriage" },
  { title: "Religion and Identity", section: "#carriage-7", type: "Carriage" },
  { title: "Politics and Leaders", section: "#carriage-8", type: "Carriage" },
  { title: "Culture, Art and Memory", section: "#carriage-9", type: "Carriage" },
  { title: "Impact on Families", section: "#carriage-10", type: "Carriage" },
  { title: "Economic and Social Impact", section: "#carriage-11", type: "Carriage" },
  { title: "Media Representation", section: "#carriage-12", type: "Carriage" },
  { title: "Train to Pakistan (the novel)", section: "#carriage-13", type: "Carriage" },
  { title: "Legacy Today", section: "#carriage-14", type: "Carriage" },
  { title: "Jinnah, Nehru, Gandhi, Mountbatten, Radcliffe", section: "#carriage-8", type: "Politics" }
];
