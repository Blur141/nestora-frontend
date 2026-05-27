export const DISTRICTS = [
  "All Districts",
  "Thiruvananthapuram",
  "Kochi",
  "Kozhikode",
  "Thrissur",
  "Kollam",
  "Palakkad",
  "Alappuzha",
  "Kannur",
  "Malappuram",
  "Kottayam",
];

export const CATEGORIES = [
  "All Categories",
  "Properties",
  "Home Services",
  "Tool Rentals",
  "Construction",
  "Marketplace",
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
  { label: "Tool Rentals", href: "/tools" },
  { label: "Construction", href: "/construction" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FEATURES = [
  {
    icon: "building",
    title: "Real Estate",
    description:
      "Buy, sell, or rent houses, villas, apartments and plots across Kerala's 14 districts.",
    href: "/properties",
  },
  {
    icon: "wrench",
    title: "Home Services",
    description:
      "Book verified plumbers, electricians, cleaners, painters and carpenters instantly.",
    href: "/services",
  },
  {
    icon: "toolbox",
    title: "Tool Rentals",
    description:
      "Rent professional-grade tools by the day — drills, mixers, scaffolding and more.",
    href: "/tools",
  },
  {
    icon: "hardhat",
    title: "Construction Workers",
    description:
      "Hire skilled masons, contractors, engineers and architects for your dream build.",
    href: "/construction",
  },
  {
    icon: "boxes",
    title: "Building Materials",
    description:
      "Source cement, steel, tiles, paint and plumbing supplies at wholesale prices.",
    href: "/marketplace",
  },
  {
    icon: "sofa",
    title: "Used Marketplace",
    description:
      "Buy and sell pre-owned furniture, appliances, electronics and home décor.",
    href: "/marketplace",
  },
];

export const PROPERTIES = [
  {
    id: 1,
    title: "Modern Villa in Kochi",
    location: "Edappally, Kochi",
    type: "For Sale",
    beds: 4,
    baths: 3,
    sqft: 2400,
    price: "₹1.25 Cr",
    perMonth: false,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
  },
  {
    id: 2,
    title: "Beachside Apartment",
    location: "Kovalam, Trivandrum",
    type: "For Rent",
    beds: 2,
    baths: 2,
    sqft: 1200,
    price: "₹25,000",
    perMonth: true,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
  },
  {
    id: 3,
    title: "Traditional Nalukettu",
    location: "Thrissur",
    type: "For Sale",
    beds: 5,
    baths: 4,
    sqft: 3800,
    price: "₹2.80 Cr",
    perMonth: false,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
  },
];

export const STATS = [
  { icon: "home", value: 10000, suffix: "+", label: "Properties Listed" },
  { icon: "users", value: 500, suffix: "+", label: "Verified Workers" },
  { icon: "handshake", value: 25000, suffix: "+", label: "Happy Customers" },
  { icon: "star", value: 4, suffix: ".9/5", label: "Average Rating" },
];

export const SERVICES = [
  {
    icon: "droplets",
    title: "Plumbing",
    rating: 4.9,
    fullStars: 5,
    halfStar: false,
    description: "Leaks, installations, pipe fitting — 24/7 emergency service.",
  },
  {
    icon: "zap",
    title: "Electrical",
    rating: 4.8,
    fullStars: 4,
    halfStar: true,
    description: "Wiring, switchboards, fan installation, inverter setup.",
  },
  {
    icon: "sparkles",
    title: "Cleaning",
    rating: 5.0,
    fullStars: 5,
    halfStar: false,
    description:
      "Deep cleaning, sofa, kitchen, bathroom & post-construction.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    text: "Found our dream villa in Kochi through VeeduHub. The verified listings and responsive agents made it effortless.",
    name: "Anjali Rajan",
    location: "Kochi",
    initials: "AR",
  },
  {
    id: 2,
    text: "Booked a carpenter and plumber within 10 minutes. Workers were professional and prices were fair.",
    name: "Mohammed Kabeer",
    location: "Kozhikode",
    initials: "MK",
  },
  {
    id: 3,
    text: "Rented scaffolding and a cement mixer for my home renovation. Delivery was prompt and rates unbeatable.",
    name: "Sneha Pillai",
    location: "Thrissur",
    initials: "SP",
  },
];

export const FAQS = [
  {
    q: "Is VeeduHub available across all of Kerala?",
    a: "Yes! We operate in all 14 districts of Kerala including Thiruvananthapuram, Kochi, Kozhikode, Thrissur and more.",
    defaultOpen: true,
  },
  {
    q: "Are the workers verified?",
    a: "Every worker undergoes ID verification, skill assessment, and background checks before being onboarded.",
    defaultOpen: false,
  },
  {
    q: "How does tool rental work?",
    a: "Browse tools, select rental dates, pay online or COD, and we deliver to your site. Returns are hassle-free.",
    defaultOpen: false,
  },
  {
    q: "Is there a fee to list my property?",
    a: "Basic listings are free. Premium placements with photography and promotion start from ₹499/month.",
    defaultOpen: false,
  },
  {
    q: "Do you offer construction project management?",
    a: "Yes — our partnered contractors and engineers can manage end-to-end construction with transparent pricing.",
    defaultOpen: false,
  },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Properties", href: "/properties" },
  { label: "Home Services", href: "/services" },
  { label: "Tool Rentals", href: "/tools" },
  { label: "Construction", href: "/construction" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "About Us", href: "/about" },
];

export const FOOTER_DISTRICTS = [
  "Thiruvananthapuram",
  "Kochi (Ernakulam)",
  "Kozhikode",
  "Thrissur",
  "Kollam",
  "Palakkad",
];

// ── PROPERTIES PAGE ──────────────────────────────────────────────
export const PROPERTY_LISTINGS = [
  { id: 1, title: "Luxury Villa with Pool", location: "Kakkanad, Kochi", type: "For Sale", beds: 5, baths: 5, sqft: 3200, price: "₹2.45 Cr", perMonth: false, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800" },
  { id: 2, title: "3BHK Family Apartment", location: "Aluva, Kochi", type: "For Rent", beds: 3, baths: 3, sqft: 1600, price: "₹32,000", perMonth: true, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800" },
  { id: 3, title: "Hilltop Bungalow", location: "Wayanad", type: "For Sale", beds: 4, baths: 4, sqft: 2800, price: "₹1.75 Cr", perMonth: false, image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800" },
  { id: 4, title: "Modern Penthouse", location: "Marine Drive, Kochi", type: "For Sale", beds: 3, baths: 3, sqft: 2100, price: "₹3.10 Cr", perMonth: false, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800" },
  { id: 5, title: "Cozy Studio Flat", location: "Technopark, Trivandrum", type: "For Rent", beds: 1, baths: 1, sqft: 550, price: "₹12,500", perMonth: true, image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800" },
  { id: 6, title: "Garden View Independent House", location: "Palakkad", type: "For Sale", beds: 3, baths: 3, sqft: 1800, price: "₹85 Lakh", perMonth: false, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800" },
];

export const PROPERTY_TYPES = ["All Types", "Villa", "Apartment", "Independent House", "Plot", "Commercial"];
export const BUDGET_OPTIONS = ["Any Budget", "Under ₹25 Lakh", "₹25–50 Lakh", "₹50 Lakh–1 Cr", "₹1–2 Cr", "Above ₹2 Cr"];
export const BEDROOM_OPTIONS = ["Any", "1 BHK", "2 BHK", "3 BHK", "4+ BHK"];

// ── SERVICES PAGE ─────────────────────────────────────────────────
export const WORKERS = [
  { id: 1, name: "Rajesh Kumar", service: "Plumbing", serviceIcon: "droplets", rating: 4.9, reviews: 210, fullStars: 5, halfStar: false, location: "Kochi", experience: 7, available: true, availabilityText: "Available today", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600" },
  { id: 2, name: "Suresh Menon", service: "Electrical", serviceIcon: "zap", rating: 4.7, reviews: 180, fullStars: 4, halfStar: true, location: "Thrissur", experience: 10, available: true, availabilityText: "Available today", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600" },
  { id: 3, name: "Priya Nair", service: "Cleaning", serviceIcon: "sparkles", rating: 5.0, reviews: 340, fullStars: 5, halfStar: false, location: "Trivandrum", experience: 5, available: false, availabilityText: "Next slot: Tomorrow", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" },
  { id: 4, name: "Anil Das", service: "Painting", serviceIcon: "paintBucket", rating: 4.5, reviews: 125, fullStars: 4, halfStar: false, location: "Kozhikode", experience: 12, available: true, availabilityText: "Available today", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600" },
  { id: 5, name: "Vinod Thomas", service: "AC Repair", serviceIcon: "snowflake", rating: 4.8, reviews: 195, fullStars: 5, halfStar: false, location: "Kochi", experience: 8, available: true, availabilityText: "Available today", image: "https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=600" },
  { id: 6, name: "Karim Ali", service: "Carpentry", serviceIcon: "hammer", rating: 4.6, reviews: 160, fullStars: 4, halfStar: true, location: "Malappuram", experience: 15, available: true, availabilityText: "Available today", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600" },
];

// ── TOOLS PAGE ────────────────────────────────────────────────────
export const TOOLS = [
  { id: 1, name: "Cement Mixer (1 Bag)", description: "Electric motor, 1-bag capacity. Ideal for small construction sites.", price: "₹450", available: true, badge: "Popular", badgeRent: false, image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600" },
  { id: 2, name: "Hammer Drill Machine", description: "Bosch 750W impact drill with bit set. Perfect for concrete & masonry.", price: "₹250", available: true, badge: null, badgeRent: false, image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600" },
  { id: 3, name: "Scaffolding Set (10ft)", description: "MS steel scaffolding frame with planks. Safe and sturdy.", price: "₹180", available: true, badge: null, badgeRent: false, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600" },
  { id: 4, name: "Wet Tile Cutter", description: "10-inch diamond blade cutter for precise tile cuts.", price: "₹350", available: false, badge: null, badgeRent: false, image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600" },
  { id: 5, name: "Arc Welding Machine", description: "200A IGBT inverter welder with helmet and gloves.", price: "₹400", available: true, badge: null, badgeRent: false, image: "https://images.unsplash.com/photo-1617791160588-241658c0f566?w=600" },
  { id: 6, name: "Concrete Vibrator", description: "Petrol-powered poker vibrator for slab work.", price: "₹500", available: true, badge: "New", badgeRent: true, image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600" },
];

// ── CONSTRUCTION PAGE ─────────────────────────────────────────────
export const PROS = [
  { id: 1, name: "Thomas Builders & Co.", role: "Contractor", location: "Kochi", experience: 18, rating: 4.9, reviews: 87, fullStars: 5, halfStar: false, description: "Turnkey residential construction with transparent pricing and on-time delivery.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600" },
  { id: 2, name: "Eng. Divya Pillai", role: "Engineer", location: "Trivandrum", experience: 12, rating: 4.8, reviews: 64, fullStars: 4, halfStar: true, description: "Structural engineering, soil testing, RCC design and government approvals.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600" },
  { id: 3, name: "Studio Malabar", role: "Architect", location: "Kozhikode", experience: 15, rating: 5.0, reviews: 52, fullStars: 5, halfStar: false, description: "Contemporary Kerala-inspired architecture blending tradition with modernity.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600" },
  { id: 4, name: "Woodland Interiors", role: "Interior Designer", location: "Thrissur", experience: 9, rating: 4.9, reviews: 110, fullStars: 5, halfStar: false, description: "Modular kitchens, wardrobes, living spaces — end-to-end interior solutions.", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600" },
  { id: 5, name: "Nair Constructions", role: "Contractor", location: "Palakkad", experience: 22, rating: 4.7, reviews: 140, fullStars: 4, halfStar: true, description: "Specialists in traditional Nalukettu homes and heritage restorations.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600" },
  { id: 6, name: "Ar. Meera Rajan", role: "Architect", location: "Kochi", experience: 8, rating: 5.0, reviews: 38, fullStars: 5, halfStar: false, description: "Eco-friendly, Vastu-compliant designs with 3D visualisation and site supervision.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600" },
];

// ── MARKETPLACE PAGE ──────────────────────────────────────────────
export const PRODUCT_CATEGORIES = ["All", "Furniture", "Appliances", "Electronics", "Home Décor", "Building Materials"];

export const PRODUCTS = [
  { id: 1, name: "L-Shape Sofa Set", category: "Furniture", location: "Kochi", price: "₹18,500", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500" },
  { id: 2, name: "Samsung 320L Fridge", category: "Appliances", location: "Thrissur", price: "₹12,000", image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd38?w=500" },
  { id: 3, name: "Sony 55\" Smart TV", category: "Electronics", location: "Kozhikode", price: "₹28,000", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500" },
  { id: 4, name: "Wooden Wall Mirror", category: "Home Décor", location: "Alappuzha", price: "₹2,800", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500" },
  { id: 5, name: "Teak Dining Table", category: "Furniture", location: "Trivandrum", price: "₹22,000", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500" },
  { id: 6, name: "LG 7kg Washing Machine", category: "Appliances", location: "Kochi", price: "₹9,500", image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=500" },
  { id: 7, name: "Voltas 1.5 Ton AC", category: "Electronics", location: "Palakkad", price: "₹19,000", image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500" },
  { id: 8, name: "Handwoven Cane Lamp", category: "Home Décor", location: "Kannur", price: "₹1,800", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500" },
];

// ── ABOUT PAGE ────────────────────────────────────────────────────
export const ABOUT_VALUES = [
  { icon: "shieldCheck", title: "Trust First", description: "Every worker, contractor and seller is verified before listing." },
  { icon: "handHelping", title: "Community", description: "We empower local Kerala workers with fair pricing and visibility." },
  { icon: "leaf", title: "Sustainability", description: "Tool sharing and used-goods marketplace reduce waste." },
];

// ── CONTACT PAGE ──────────────────────────────────────────────────
export const CONTACT_DETAILS = [
  { icon: "mapPin", title: "Head Office", lines: ["3rd Floor, Skyline Tower, MG Road", "Ernakulam, Kochi — 682016"] },
  { icon: "phone", title: "Phone", lines: ["+91 98765 43210", "+91 484 234 5678"] },
  { icon: "mail", title: "Email", lines: ["hello@veeduhub.in", "support@veeduhub.in"] },
  { icon: "clock", title: "Hours", lines: ["Mon–Sat: 9:00 AM – 8:00 PM", "Sun: 10:00 AM – 5:00 PM"] },
];
