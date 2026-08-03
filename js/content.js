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
    quoteSource: "The Lahore Resolution, 1940"
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
    quoteSource: "Attributed to Mohammad Ali Jinnah, 1946"
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
    quoteSource: ""
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
    quoteSource: ""
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
    quoteSource: "Paraphrased recollection attributed to Sir Cyril Radcliffe"
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
    quoteSource: ""
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
    quoteSource: "Jawaharlal Nehru, 15 August 1947"
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
    quoteSource: ""
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
    quoteSource: ""
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
    quoteSource: ""
  }
];

/* PLACEHOLDER — illustrative composite accounts. Replace with real,
   consented survivor testimony, photographs and audio before publishing. */
const STORIES = [
  {
    id: "s1",
    name: "A grandmother's account (composite)",
    tags: ["Punjab", "Women", "Migration", "Loss"],
    place: "Lyallpur to Amritsar",
    summary: "Left her home of forty years with one trunk, expecting to return within a season.",
    quote: "We locked the door as if we were going to the market. I still have the key.",
    full: "PLACEHOLDER TESTIMONY. In the real archive, this space will hold a first-person account: what was carried, what was left behind, the journey itself, and what “home” came to mean afterward. Contributions can be submitted through the site's interview intake once it is connected to a real archive process."
  },
  {
    id: "s2",
    name: "A boy separated from his sister (composite)",
    tags: ["Bengal", "Children", "Families", "Loss", "Hope"],
    place: "Dhaka to Kolkata",
    summary: "Was put on a train by an uncle in the chaos of a crowded platform and did not see his family for three years.",
    quote: "I learned my new address before I learned to spell it.",
    full: "PLACEHOLDER TESTIMONY. A future version of this card will describe how families searched for missing children through camp registries and newspaper notices, and, where possible, how the reunion happened."
  },
  {
    id: "s3",
    name: "A Sikh farmer's letter (composite)",
    tags: ["Punjab", "Migration", "Loss"],
    place: "Sheikhupura to Ludhiana",
    summary: "Wrote to a Muslim neighbour years later, asking after the well they had dug together.",
    quote: "Tell me if the mango tree still stands. I planted it the year your son was born.",
    full: "PLACEHOLDER TESTIMONY. This card is a stand-in for correspondence that families on both sides of the border sometimes exchanged in the decades after Partition, often the only remaining thread to a shared past."
  },
  {
    id: "s4",
    name: "A young bride's journey (composite)",
    tags: ["Women", "Migration", "Families"],
    place: "Multan to Jalandhar",
    summary: "Married three weeks before Partition, she crossed the new border with her husband's family, never having met most of them before.",
    quote: "I did not know their faces yet, only that we were now the same shape of afraid.",
    full: "PLACEHOLDER TESTIMONY. The finished section will let contributors upload a scanned photograph or wedding document alongside the story, with careful attention to consent and privacy."
  },
  {
    id: "s5",
    name: "A schoolteacher who stayed (composite)",
    tags: ["India", "Pakistan", "Hope"],
    place: "Lahore",
    summary: "One of the few in her neighbourhood who did not migrate, she kept her school open through the worst months.",
    quote: "Someone has to keep teaching the alphabet, even when the map keeps changing.",
    full: "PLACEHOLDER TESTIMONY. Represents the smaller, less-told story of those who did not migrate — a perspective the finished archive should actively seek out."
  },
  {
    id: "s6",
    name: "A railway signalman's diary (composite)",
    tags: ["Punjab", "Migration", "Loss"],
    place: "Wagah Junction",
    summary: "Kept a private log of the trains that passed through his signal box in August 1947.",
    quote: "Some nights I signalled trains through and did not look at what they carried.",
    full: "PLACEHOLDER TESTIMONY. A reminder that ordinary railway workers were among the war's quiet witnesses; oral history projects have recorded several such accounts."
  }
];

/* PLACEHOLDER — cassette-style interview cards awaiting real recordings. */
const INTERVIEWS = [
  {
    id: "i1",
    name: "Recording awaiting contribution",
    age: "—",
    location: "Punjab",
    transcript: "PLACEHOLDER. This card is reserved for an oral history interview — name, age at Partition, home village, and a transcript excerpt — to be added once a real interview is recorded and consented for publication."
  },
  {
    id: "i2",
    name: "Recording awaiting contribution",
    age: "—",
    location: "Bengal",
    transcript: "PLACEHOLDER. Reserved for a survivor or descendant account from the eastern border. See the 1947 Partition Archive and similar oral history projects for methodology on recording consent."
  },
  {
    id: "i3",
    name: "Recording awaiting contribution",
    age: "—",
    location: "Sindh",
    transcript: "PLACEHOLDER. Reserved for an account describing the Hindu and Sikh migration out of Sindh, a less-documented corridor of the wider migration."
  },
  {
    id: "i4",
    name: "Recording awaiting contribution",
    age: "—",
    location: "Delhi refugee camp",
    transcript: "PLACEHOLDER. Reserved for a firsthand account of camp life — registration, searching for relatives, and resettlement."
  }
];

const GALLERY_ITEMS = [
  { id: "g1", caption: "Placeholder — a departure platform crowded beyond capacity, August 1947.", tag: "Migration" },
  { id: "g2", caption: "Placeholder — a family's belongings loaded onto a bullock cart.", tag: "Families" },
  { id: "g3", caption: "Placeholder — volunteers registering new arrivals at a refugee camp.", tag: "Hope" },
  { id: "g4", caption: "Placeholder — a hand-drawn map showing a village divided by the new border.", tag: "Politics" },
  { id: "g5", caption: "Placeholder — a steam locomotive at a border station, escorted for safety.", tag: "Migration" },
  { id: "g6", caption: "Placeholder — a child's shoe recovered from a refugee train, kept in a family trunk since.", tag: "Loss" },
  { id: "g7", caption: "Placeholder — newspaper front page announcing the boundary award, 17 August 1947.", tag: "Politics" },
  { id: "g8", caption: "Placeholder — the Partition Museum, Amritsar, present day.", tag: "Legacy" }
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
