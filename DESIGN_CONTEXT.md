# Portfolio design context

## Direction

- Premium charcoal-black foundation with emerald/mint light and a subtle cool-blue atmospheric accent.
- Apple-inspired liquid glass: translucent layered fills, soft specular borders, blur, and restrained depth shadows.
- Keep surfaces calm and legible; color should come from light and glow rather than loud blocks.

## Page structure

- Home: animated editorial hero headline and deferred 3D accent.
- Portfolio: glass project cards.
- Services: glass selectors with one deferred 3D model at a time.
- Contact/final page: left-aligned editorial About heading, one email CTA, plain-text Navigation links anchored low on the page, and a larger Connect subsection.

## Final-page content rules

- Do not reintroduce an email form or EmailJS.
- The primary action is a `mailto:` link to `mail2amikg@gmail.com`.
- Do not use the labels “Website Footer” or “Amit Kumar Giri” in the final section.
- About copy should communicate availability for freelance projects, internships, and jobs, with a Resume link.
- The final-page About heading uses the default system/browser font and matches the Services “How do I help?” heading size and fly-in motion.
- Navigation remains quiet plain text without surrounding boxes; Connect gets the larger visual treatment.
- Keep Navigation/Connect anchored at the bottom of the final full-height page.

## Performance rules

- Keep below-the-fold sections deferred until they enter the viewport.
- Keep 3D scenes deferred and use compressed GLB assets with the local Draco decoder.
- Prefer AVIF/WebP assets and lazy loading for non-critical images.
