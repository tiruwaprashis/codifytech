# Codify.Tech — Landing Page

A React + Vite + Tailwind CSS landing page built from the Codify.Tech logo's color palette (navy `#0A1E64`, brand blue `#1C3FD1`, cyan `#1FC3E6`, dark teal `#0E3A46`).

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output is written to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Project structure

```
src/
  assets/
    logo.png          # your logo, used in the navbar and footer
  components/
    Navbar.jsx         # sticky nav with mobile menu
    Hero.jsx            # hero + "system signal" pulse-line card (signature element)
    Services.jsx        # 4-card services grid
    WhyUs.jsx            # 6-card "why choose us" grid
    Contact.jsx          # controlled contact form
    Footer.jsx            # footer with office details
  App.jsx
  main.jsx
  index.css             # Tailwind base + custom animation utilities
tailwind.config.js       # brand color tokens, fonts, shadows
```

## Notes

- Colors, fonts, and shadows are defined as design tokens in `tailwind.config.js` — edit them there to restyle the whole site at once.
- The pulse-line motif in the hero echoes the heartbeat/signal mark inside the "O" of your logo.
- The contact form (`src/components/Contact.jsx`) currently just shows a confirmation state on submit — wire `handleSubmit` up to your backend or a service like Formspree/Resend when you're ready to receive real submissions.
- Replace the placeholder email, phone, and office address in `Contact.jsx` and `Footer.jsx` with your real details if they differ.
# codifytech
