export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  dek: string;
  body: Block[];
};

export const ARTICLES: Article[] = [
  {
    slug: "why-every-diagnostic-centre-needs-a-website",
    tag: "Diagnostics",
    title: "Why every diagnostic centre needs a website",
    excerpt:
      "When someone needs a test, they search first and decide fast. If you are not there, bookable and credible, the centre two streets over gets the patient you would have kept.",
    readTime: "6 min read",
    dek: "When someone needs a test, they reach for their phone before they reach for a phone number. If your centre is not there, ready to book and easy to trust, the patient goes to whoever is.",
    body: [
      { type: "h2", text: "The patient journey starts with a search" },
      {
        type: "p",
        text: "Think about how a test actually gets booked today. A doctor recommends a scan, or a person notices a symptom. The very next step is almost always the same: they search. Blood test near me. Ultrasound in my city. MRI cost. They are not flipping through a directory or asking a friend. They are typing, and they are deciding in the first few results.",
      },
      {
        type: "p",
        text: "If your centre does not appear, or appears with nothing credible behind it, you are invisible at the exact moment someone is ready to book. The centre that shows up, loads fast, and lets them book in two taps wins the patient. It is rarely the best-equipped lab that wins. It is the easiest one to find and trust.",
      },
      { type: "h2", text: "A website does three jobs a phone number cannot" },
      {
        type: "p",
        text: "A phone line is passive. It waits, and it only works when someone is there to answer. A website works for you around the clock, and it does three things a number alone never will.",
      },
      {
        type: "ul",
        items: [
          "Gets you found. Search engines need real pages to rank. A proper website, built around the tests you offer and the areas you serve, is what puts you in front of people searching right now.",
          "Builds trust in seconds. Accreditations, equipment, turnaround times, and clear pricing answer the quiet questions every patient has before they commit.",
          "Takes the booking. Online booking captures the patient while intent is high, at 11pm on a Sunday, not only during office hours when someone can pick up the phone.",
        ],
      },
      { type: "h2", text: "Trust is the real product" },
      {
        type: "p",
        text: "Healthcare is personal, and choosing where to have a test done is an act of trust. People look for signals: is this place real, is it clean, is it competent, will my results be handled properly. A website is where you answer all of that before anyone walks in.",
      },
      {
        type: "p",
        text: "Show your accreditations and certifications. Name your equipment. Explain what a visit looks like. Publish honest turnaround times. Every specific detail lowers the anxiety that makes people hesitate, and hesitation is exactly where you lose bookings.",
      },
      { type: "h2", text: "Results and repeat visits" },
      {
        type: "p",
        text: "The relationship does not end when the test is done. A secure results portal saves patients a second trip and gives referring doctors a faster, cleaner handoff. Reminders bring people back for follow-ups. These are the quiet systems that turn a one-time visit into a centre patients return to and recommend.",
      },
      { type: "h2", text: "What good looks like" },
      {
        type: "p",
        text: "A diagnostic centre website does not need to be complicated. It needs to be fast, clear, and built to convert. At a minimum:",
      },
      {
        type: "ul",
        items: [
          "A clear list of tests and services, each on its own findable page",
          "Online booking that works properly on a phone",
          "Prices or price ranges wherever you can share them",
          "Accreditations, equipment, and turnaround times",
          "A claimed, optimised Google Business Profile pointing to it",
          "Directions, hours, and a fast way to reach a human",
        ],
      },
      {
        type: "p",
        text: "Get those right and the website stops being a brochure. It becomes the front desk that never closes.",
      },
    ],
  },
  {
    slug: "google-business-profile-vs-website",
    tag: "Local SEO",
    title: "Google Business Profile vs a website: which one wins?",
    excerpt:
      "One gets you found on the map. The other gets you chosen. Here is what each does, why serious businesses run both, and the order to build them in.",
    readTime: "5 min read",
    dek: "One puts you on the map. The other closes the sale. People treat them as rivals, when really they are a relay. Here is how each works, and why you want both.",
    body: [
      { type: "h2", text: "They are not the same tool" },
      {
        type: "p",
        text: "A Google Business Profile is the free listing that shows up on Google Maps and in the local pack, the little box of businesses with stars, hours, and directions. A website is the place you fully control, where you tell your whole story and close the sale. People confuse them because both help you get found. They do very different jobs.",
      },
      { type: "h2", text: "What a Google Business Profile does well" },
      {
        type: "ul",
        items: [
          "Puts you on the map, literally, for the near me searches",
          "Shows reviews, hours, phone, and directions at a glance",
          "Costs nothing and is quick to set up",
          "Drives calls and visits from people ready to act right now",
        ],
      },
      {
        type: "p",
        text: "If you have not claimed and filled out your profile, do it today. It is the single fastest way to become visible locally. But it has limits. You do not control the layout, your competitors sit right beside you, and there is only so much you can say. It gets you noticed. It does not do the convincing.",
      },
      { type: "h2", text: "What a website does that a profile cannot" },
      {
        type: "p",
        text: "A website is where hesitation turns into a decision. It is unlimited space that you own, with no competitor listed next to you.",
      },
      {
        type: "ul",
        items: [
          "Ranks for the wider searches, not just near me but the questions and services people research before they buy",
          "Tells the full story: your work, your process, your proof",
          "Answers objections and builds trust before anyone contacts you",
          "Captures leads and bookings on your terms, with forms and payments",
          "Belongs to you, not to a platform that can change the rules tomorrow",
        ],
      },
      { type: "h2", text: "Why you need both, in this order" },
      {
        type: "p",
        text: "The profile and the website are not competitors. They are a relay. The profile gets you seen and earns the click. The website receives that click and turns it into an enquiry, a booking, or a sale. A profile with no website sends interested people nowhere. A website with no profile is a shop on a street nobody walks down.",
      },
      {
        type: "p",
        text: "Starting from zero, claim the profile first for quick visibility, then build the website that gives every visitor a real reason to choose you. Point the two at each other, and they compound.",
      },
      { type: "h2", text: "The bottom line" },
      {
        type: "p",
        text: "A Google Business Profile gets you found. A website gets you chosen. You do not pick one. You build the profile to be seen and the website to be selected, and you let each do the job the other cannot.",
      },
    ],
  },
  {
    slug: "how-hotels-lose-bookings-without-a-website",
    tag: "Hospitality",
    title: "How hotels lose bookings without a website",
    excerpt:
      "Every reservation through a travel platform costs you a commission and a guest you never really met. A direct booking site quietly earns both back, on every single stay.",
    readTime: "7 min read",
    dek: "Every reservation that comes through a travel platform costs you a commission and a guest you never really got to keep. A direct booking website earns both back, one stay at a time.",
    body: [
      { type: "h2", text: "The commission you stopped noticing" },
      {
        type: "p",
        text: "Online travel agencies are brilliant at what they do. They put your rooms in front of millions of travellers, and for that reach they take a cut, often somewhere between fifteen and twenty five percent of every booking. In a busy month, that is not a marketing cost. It is a silent partner taking a slice of your best revenue.",
      },
      {
        type: "p",
        text: "The trap is that it feels free. You never write a cheque; the commission simply never arrives. But a hotel filling most of its rooms through platforms is renting its own guests, and paying that rent forever.",
      },
      { type: "h2", text: "You do not own the guest" },
      {
        type: "p",
        text: "When someone books through a platform, the platform owns the relationship. It has their email. It sends the follow-ups. Next time that guest travels, the platform is who they hear from, not your hotel. You served the coffee, made the bed, and remembered their name, and someone else kept the address.",
      },
      {
        type: "p",
        text: "A direct booking on your own site flips that. You get the guest details, the permission to stay in touch, and the chance to turn one stay into a habit.",
      },
      {
        type: "h2",
        text: "The brand guests meet online is not the one they meet at the door",
      },
      {
        type: "p",
        text: "A platform listing flattens every hotel into the same grid of thumbnails and a price. Your property, your service, the feeling of the place, none of it survives a row of stock photos. Guests arrive expecting a commodity and are pleasantly surprised, when they should have been sold on exactly that feeling before they ever booked.",
      },
      {
        type: "p",
        text: "Your website is the only place the full experience comes through: the film of the light in the courtyard, the story of the building, the reason your rates are what they are. That is what lets you compete on more than price.",
      },
      { type: "h2", text: "Direct booking is more than a button" },
      {
        type: "p",
        text: "Winning direct bookings takes more than adding a book now button. It takes:",
      },
      {
        type: "ul",
        items: [
          "A site that loads fast and feels as considered as the stay itself",
          "Rooms, rates, and real availability, bookable in a few taps",
          "A reason to book direct: a best-rate guarantee, a perk, an upgrade",
          "Photography and video that sell the feeling, not just the floor plan",
          "Follow-up that brings guests back with no platform in the middle",
        ],
      },
      { type: "h2", text: "The maths that changes everything" },
      {
        type: "p",
        text: "You will not replace the platforms overnight, and you should not try. They are a real channel. But every booking you move from platform to direct is a booking that keeps its full value and hands you the guest. Shift even a third of your reservations to direct, and the commission you recover, plus the repeat stays you earn, can outweigh the cost of the website many times over in a single season.",
      },
    ],
  },
  {
    slug: "what-is-gs1-barcode-registration",
    tag: "Retail",
    title: "What is GS1 barcode registration, and do you need it?",
    excerpt:
      "If you want your product on a shelf or in a marketplace, the barcode is not optional. Here is what a genuine GS1 barcode is, and how to get one without the guesswork.",
    readTime: "4 min read",
    dek: "If you want your product on a shelf or in a marketplace, the barcode is a gatekeeper, not a detail. Here is what a genuine GS1 barcode actually is, and how to get one right.",
    body: [
      { type: "h2", text: "What a barcode really is" },
      {
        type: "p",
        text: "The barcode on a product is not just a pattern that scans. It is a globally unique number, and that number is what links your product to a price at the till, a listing in a marketplace, and a line in a retailer inventory system. The stripes are simply a way for a scanner to read the number.",
      },
      {
        type: "p",
        text: "That number comes from GS1, the international body that issues the barcode standards used almost everywhere in retail. A GS1 number is genuinely yours and recognised worldwide, which is exactly why serious retailers ask for it.",
      },
      { type: "h2", text: "Why cheap barcodes cause expensive problems" },
      {
        type: "p",
        text: "You can find barcodes sold for a few dollars online. The catch is that many are resold numbers that were originally issued to another company. They may scan fine on your own printer, then get rejected the moment a real retailer or marketplace checks the registration and sees the number does not belong to you.",
      },
      {
        type: "p",
        text: "The result is delisted products, blocked listings, and a scramble to re-barcode an entire product line after it is already printed and packed. A genuine GS1 registration avoids all of it. It is the difference between a barcode that works at your desk and one that works in the real world.",
      },
      { type: "h2", text: "Do you actually need one?" },
      { type: "p", text: "You need a GS1 barcode if you plan to:" },
      {
        type: "ul",
        items: [
          "Sell through supermarkets, pharmacies, or any physical retailer",
          "List on major online marketplaces that require a valid product number",
          "Export, where clean product identification is expected",
          "Scale beyond one-to-one selling, where manual tracking breaks down",
        ],
      },
      {
        type: "p",
        text: "If you only sell direct from your own website or at a market stall, you may not need one yet. But the moment retail is the goal, the barcode stops being a detail and becomes a gatekeeper.",
      },
      { type: "h2", text: "How to get it right the first time" },
      {
        type: "p",
        text: "The process is straightforward when it is done properly:",
      },
      {
        type: "ul",
        items: [
          "Register with GS1 and obtain your own company prefix and numbers",
          "Assign a unique number to each product and each variant, since a different size or flavour needs its own",
          "Generate the barcode artwork at the correct size and contrast so it scans reliably every time",
          "Set up the product data that sits behind the number",
        ],
      },
      {
        type: "p",
        text: "Get those steps right and your product is genuinely shelf-ready and export-ready, with a barcode that holds up to scrutiny anywhere in the world.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
