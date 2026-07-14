# Deployment Guide — InjuryInsight

## Step 1: Push to GitHub

```bash
cd injury-recovery-hub
git init
git add .
git commit -m "Initial commit: InjuryInsight Next.js + Supabase"
```

Create a new repo on GitHub (github.com/new), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/injury-recovery-hub.git
git branch -M main
git push -u origin main
```

## Step 2: Set up Supabase (free)

1. Go to https://supabase.com and create a free account
2. Create a new project (choose a region close to you)
3. Wait ~2 minutes for it to provision
4. Go to Settings → API
5. Copy your **Project URL** and **anon public** key

The site works without Supabase for now — skip to Step 3 if you want to deploy first.

## Step 3: Deploy to Vercel (free)

1. Go to https://vercel.com and sign in with GitHub
2. Click "Add New Project" → Import your `injury-recovery-hub` repo
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon key
4. Click Deploy

Your site will be live at `your-project-name.vercel.app` in ~60 seconds.

## Step 4: Custom domain (~$10/year)

1. Buy a domain at Namecheap or Porkbun (e.g., `injuryinsight.io`)
2. In Vercel → your project → Settings → Domains
3. Add your domain and follow the DNS instructions
4. Done — your site is live on a real domain

## Optional: Add email newsletter (free)

Use Resend (resend.com) for free transactional email up to 3,000/month.
The `supabase-schema.sql` file has the subscribers table ready to go.

## Directory structure

```
injury-recovery-hub/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── community/page.tsx  # Community (Reddit links)
│   └── injuries/
│       ├── page.tsx        # All injuries grid
│       └── [slug]/page.tsx # Individual injury detail
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── InjuryCard.tsx
├── lib/
│   ├── data.ts             # All injury data + Reddit links
│   ├── types.ts            # TypeScript types
│   └── supabase/
│       ├── client.ts       # Browser Supabase client
│       └── server.ts       # Server Supabase client
├── supabase-schema.sql     # Optional DB schema
└── .env.local.example      # Environment variables template
```

## Adding more injuries

Edit `lib/data.ts` — add a new object to the `INJURIES` array with:
- slug, name, body_part, severity, recovery_time
- thumbnail (Pexels URL works)
- phases (recovery roadmap steps)
- videos (YouTube IDs)
- tips
- subreddit (matching a key in COMMUNITY_LINKS)

The page is automatically generated at `/injuries/your-slug`.
