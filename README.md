# VeeduHub — Kerala's #1 Home Platform

A fully responsive **Next.js** frontend for VeeduHub, a complete home ecosystem for Kerala — covering property listings, home services, tool rentals, construction professionals, and a used-goods marketplace.

> **Frontend only.** All data is mocked locally — no backend or database required.

---

## What Does This App Do?

VeeduHub connects four types of users in one place:

| User type | What they can do |
|---|---|
| **Buyer / Renter** | Browse properties across Kerala |
| **Homeowner / Seller** | List homes for sale or rent |
| **Worker / Technician** | Offer skilled services (plumbing, electrical, etc.) |
| **Contractor / Builder** | Find construction projects |

---

## Pages at a Glance

| Route | What you'll see |
|---|---|
| `/` | Homepage — hero search, features, stats, services, FAQs, CTA |
| `/properties` | Filter & browse property listings (buy / rent) |
| `/services` | Find skilled workers by trade |
| `/tools` | Rent construction tools by the day |
| `/construction` | Hire contractors and builders |
| `/marketplace` | Buy & sell used furniture, appliances, electronics |
| `/about` | Company story and values |
| `/contact` | Contact form + map embed |
| `/login` | Sign-in page (glassmorphism UI) |
| `/register` | Create account with role selector |

---

## Tech Stack

| What | Version | Why |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.6 | React framework with file-based routing |
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first CSS base |
| [Lucide React](https://lucide.dev/) | latest | Clean icon set |
| [React Icons](https://react-icons.github.io/react-icons/) | 5 | Social media icons (Fa6 pack) |
| [pnpm](https://pnpm.io/) | any | Fast package manager |

---

## Project Structure

```
nestora-frontend/
│
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (fonts, metadata)
│   ├── globals.css             # ENTIRE design system lives here
│   │
│   ├── (root)/
│   │   └── page.tsx            # Homepage — assembles all home components
│   │
│   ├── (pages)/                # Route group — shares Navbar + Footer
│   │   ├── layout.tsx          # Injects Navbar and Footer automatically
│   │   ├── properties/page.tsx
│   │   ├── services/page.tsx
│   │   ├── tools/page.tsx
│   │   ├── construction/page.tsx
│   │   ├── marketplace/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   │
│   ├── login/page.tsx          # Standalone — no Navbar/Footer
│   └── register/page.tsx       # Standalone — no Navbar/Footer
│
├── components/
│   └── home/                   # Reusable homepage sections
│       ├── navbar.tsx          # Responsive navbar with mobile menu
│       ├── hero.tsx            # Hero section with search bar
│       ├── features.tsx        # 6-card feature grid
│       ├── properties.tsx      # Featured property cards
│       ├── stats.tsx           # Animated count-up statistics
│       ├── services.tsx        # Service worker cards
│       ├── testimonials.tsx    # Customer reviews
│       ├── faq.tsx             # Accordion FAQ (no JS — pure HTML)
│       ├── cta.tsx             # Call-to-action banner
│       ├── footer.tsx          # Footer with links & socials
│       └── stars.tsx           # Reusable star rating component
│
├── lib/
│   ├── mock-data.ts            # ALL mock data for every page (~300 lines)
│   └── utils.ts                # Tailwind class merge helper
│
└── public/                     # Static assets
```

### Why is there a `(pages)` folder with parentheses?

The parentheses make it a **route group** in Next.js. The folder name is ignored in the URL — `/properties` works, not `/(pages)/properties`. The group exists so that all inner pages automatically get the Navbar and Footer injected via `(pages)/layout.tsx`, without repeating that code in every page file.

---

## Getting Started

### Prerequisites

Make sure you have these installed:

- **Node.js** v18 or higher — [download here](https://nodejs.org/)
- **pnpm** — install it once with: `npm install -g pnpm`

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd nestora-frontend
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the VeeduHub homepage.

### Other commands

```bash
pnpm build    # Build for production (checks for errors)
pnpm start    # Run the production build locally
pnpm lint     # Run the linter to check for code issues
```

---

## How Mock Data Works

All data is stored in one file: `lib/mock-data.ts`. There is no API or database — every page imports its data directly from this file.

**Example — adding a new property listing:**

Open `lib/mock-data.ts` and find the `PROPERTY_LISTINGS` array. Add a new object following the same shape:

```ts
// lib/mock-data.ts
export const PROPERTY_LISTINGS = [
  {
    id: 7,                                          // unique number
    title: "3 BHK Villa in Thrissur",
    type: "Villa",
    status: "For Sale",                             // "For Sale" or "For Rent"
    price: "₹85 L",
    beds: 3,
    baths: 2,
    area: "1,800 sq ft",
    location: "Thrissur, Kerala",
    image: "https://images.unsplash.com/photo-xxx", // any Unsplash URL
  },
  // ... existing entries
];
```

Save the file — the browser hot-reloads and shows your new card instantly.

---

## Design System

The entire visual design lives in `app/globals.css` (~526 lines). It uses **CSS custom properties** (variables) so colours and spacing are consistent everywhere.

### Key colour variables

```css
--emerald:       #10b981   /* Primary green — buttons, accents */
--emerald-dark:  #059669   /* Hover states */
--gold:          #f59e0b   /* Stars, highlights */
--gradient:      linear-gradient(135deg, #10b981, #059669)
--gradient-hero: linear-gradient(135deg, #064e3b, #065f46, #047857)
```

### Reusable CSS classes you'll see everywhere

| Class | What it does |
|---|---|
| `.btn.btn-primary` | Green filled button |
| `.btn.btn-outline` | Transparent button with border |
| `.btn.btn-ghost` | Text-only button |
| `.btn.btn-lg` / `.btn-sm` | Size variants |
| `.card` | White card with shadow and border radius |
| `.glass` | Glassmorphism card (frosted glass effect) |
| `.badge` | Small "For Sale" / "Used" label on images |
| `.gradient-text` | Emerald gradient applied to text |
| `.section` | Section wrapper with vertical padding |
| `.container` | Centred, max-width content wrapper |
| `.grid.grid-2/3/4` | Responsive CSS grid layouts |
| `.page-hero` | Dark green hero banner for inner pages |

---

## Adding a New Page

1. Create a folder inside `app/(pages)/` — for example `app/(pages)/blog/`
2. Add a `page.tsx` file inside it
3. That's it — the Navbar and Footer appear automatically

```tsx
// app/(pages)/blog/page.tsx
export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our <span className="gradient-text">Blog</span></h1>
          <p>Tips, guides, and news from Kerala's home experts.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p>Blog posts go here.</p>
        </div>
      </section>
    </>
  );
}
```

Visit `http://localhost:3000/blog` and your new page is live.

---

## Connecting a Real Backend (Future)

Right now every page imports from `lib/mock-data.ts`. When you're ready to connect a real API:

1. Replace the import in the page file with an `async` data fetch
2. Server components (no `"use client"` at the top) can `fetch()` directly — no extra libraries needed
3. Client components (with `"use client"`) should use a library like [SWR](https://swr.vercel.app/) or [React Query](https://tanstack.com/query)

```tsx
// Before (mock data)
import { PROPERTY_LISTINGS } from "@/lib/mock-data";

// After (real API — server component)
const res = await fetch("https://api.veeduhub.com/properties");
const listings = await res.json();
```

---

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com/) — it was made by the Next.js team and requires zero configuration.

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com/) → New Project → Import your repo
3. Click **Deploy** — done

Your site will be live at `https://your-project.vercel.app` in about 60 seconds.

---

## License

This project is private. All rights reserved.
