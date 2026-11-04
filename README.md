# HROCYNTH Corporate Website

A multi-page corporate website frontend built with React, TypeScript and Vite. The visual system follows the supplied HROCYNTH brand direction: deep navy, electric blue, cyan, silver and white, with advanced but restrained motion and a selected 3D hero scene.

## Included pages

- Home
- About
- Leadership
- Solutions
- Industries
- Innovation & AI
- Ventures
- Government
- Global Approach
- Contact
- 404 fallback

## Requirements

- Node.js 20.19+ or 22.12+ recommended
- npm 10+

## Run locally

1. Extract the ZIP.
2. Open the `hrocynth-website` folder in VS Code.
3. Open the integrated terminal in that folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Technology

- React 18 + TypeScript
- Vite
- React Router
- Tailwind CSS (available/configured; primary visual system is in `src/styles/global.css`)
- Framer Motion
- Three.js + React Three Fiber + Drei
- GSAP (installed for future timeline/scroll choreography)
- Lucide React
- Zod

## Brand assets

The supplied reference images are copied into `public/assets/brand` and `public/assets/images`. The horizontal logo images are used in the site header and footer. The skyline and earth-horizon images are used in hero and banner sections.

## Important launch checklist

This is a frontend implementation. Before using it as a live corporate site:

1. Replace `hello@hrocynth.com` with the verified business contact address if different.
2. Add approved founder/leadership names, headshots and biographies.
3. Confirm the legal company name, registered address, social URLs and privacy policy.
4. Connect the contact form to a secure backend, CRM or form service. The current form validates in the browser and displays a demo success state; it does not send or store enquiries.
5. Review all service descriptions and public-sector claims for business/legal approval.
6. Add production hosting, domain, analytics and cookie/privacy controls as required.
7. Consider self-hosting the fonts and optimizing the supplied JPG logo assets into transparent SVG/PNG files for best production quality.

## Notes

- 3D hero uses a lightweight procedural Three.js scene; no external model downloads are required.
- The site includes reduced-motion handling and responsive layouts.
- No fabricated customer logos, testimonials, certifications, office addresses or performance statistics are included.
