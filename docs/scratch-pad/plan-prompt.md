Given the business-case and specification we will now complete the plan for VisitFile using the plan.md file as the starting template. We also have the plan-guide.md as a reference.

Keep the original template headings and tables. Do not add login, an EHR, messaging, or a new JavaScript framework. This phase only adapts the existing collection + detail template into a front-end prototype.

Incorporate the following information into the plan, but maintain the format of the original template while refining the language and structure for clarity and professionalism:

## Approach Summary

We will adapt the class web template into VisitFile. First release is a phone-friendly front end with fictional after-visit files, a one-page file per visit, search and filters, and pin / bookmark / useful saved in the browser. No login. No clinic database.

## Tech Stack
- Frontend: existing template (HTML/CSS/JS), collection view + detail view
- Backend/DB: none this phase; local visit list + browser flags
- Hosting: GitHub Pages
- Other services/APIs: none

## Key decisions I already made 
- Adapt the current template instead of React/Vue
- Fictional sample visits in the app, not Supabase or an EHR
- Device-only flags (pin, bookmark, useful)
- Active care is a filter + banner, not a new app
- Call-now strip near the top of the file
- Labeled bottom bar: Back, Bookmark, Pin, Useful
- No auth APIs
- Host on GitHub Pages

## Components

List view, search, chips, banner, cards, detail file, call-now strip, bottom bar, device flag store, empty/error messages, demo-data label.

## Risks to include

Template fight, lost warning strip, sample wording sounding like real advice, pin vs bookmark confusion, private-mode storage, scope creep into login.

## Sequencing

Data + fields first, then list, then detail + warnings, then flags, then search/filters, then empty states and 375px check, then walk R1–R17.

Every ADR and component must cite specification requirement IDs (R1–R17).
