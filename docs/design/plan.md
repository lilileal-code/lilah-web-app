# Plan — VisitFile

> Written after specification. Every decision here must trace back to a requirement ID.

## 1. Approach Summary
We will adapt the existing collection-and-detail web template into VisitFile. The first working version is a phone-friendly front end: a list of fictional after-visit files, a one-page file for each visit, search and filters, and pin / bookmark / useful flags saved in the browser. There is no login and no clinic database in this phase. After that front end meets the specification tests, later work can consider staff publishing or live records. This phase only proves the patient flow.

## 1.5 Tech Stack
- Frontend: Existing class web-app template (collection view + detail view), HTML/CSS/JavaScript as already used in the repo
- Backend/DB: None in this phase. Visit records live as a local data list in the app. Pin / bookmark / useful live in the browser on that device
- Hosting: GitHub Pages (same site that already serves the docs)
- Other services/APIs: None. No EHR

## 2. Key Decisions (ADRs)

| ADR # | Decision | Traces to (R#) | Alternatives considered | Why this one |
|-------|----------|------------------|---------------------------|----------------|
| ADR-00 | Adapt the current template front end instead of starting a new framework | R1, R3, R17 | Rebuild in React/Vue; buy a portal | The repo already lists items and opens a detail page. A rewrite would delay proving the visit-file flow |
| ADR-01 | Store visit records as a local data list in the app (fictional sample visits only) | R1, R2, R11 | Supabase/Postgres; live EHR feed | Spec forbids real records and login in v1. A local list is enough for 18–25 demo files |
| ADR-02 | Save pin, bookmark, and useful in the browser on this device | R7, R8, R9, R10 | Server-side user profile; cookies tied to an account | No accounts in v1. Device storage matches “remember until site data is cleared” |
| ADR-03 | Active care is a filter on the same list, plus a count banner, not a separate app | R5, R6, R15 | Fourth top-level section; a second site | Prototype testers needed “visits I still act on” without leaving the catalog |
| ADR-04 | Put a call-now strip near the top of the detail file; keep the full warning list lower | R11, R13, R14-style scanning | Warnings only at the bottom like paper sheets | Testers skipped the bottom of the file when worried |
| ADR-05 | Detail actions are a labeled bottom bar: Back, Bookmark, Pin, Useful | R12, R7, R8, R9 | Header icons only | Testers missed unlabeled icons |
| ADR-06 | No authentication and no third-party APIs in this phase | R2, constitution items 4–5 | Supabase Auth; MyChart-style login | Spec success is “open a file in 30 seconds,” not “create an account” |
| ADR-07 | Host the working front end on GitHub Pages with the rest of the repo | R17 | Railway, Netlify, clinic intranet | Pages is already live for the design docs and matches a static front end |

## 3. Components / Building Blocks

| Component | Purpose | Related requirements |
|-----------|---------|------------------------|
| Visit data list | Holds 18-25 fictional visit files and their fields | R1, R11 |
| Collection/list view | Shows visit cards, newest first, with search and filter options | R1,R2, R4, R5, R6, R17 |
| Active care banner | Tells the user how many visits are pinned and jumps to that filter | R6 |
| Search box | Filters cards by title, reason, or clinician as the user types | R4, R14 |
| Filter options (All/Active care/Bookmarked) | Shows only matching visits | R5, R15 |
| Visit card | Title, date, clinician, one-line reason, pin/bookmark flags | R1, R3 |
| Detail/visit file view | One page per visit in the require section order | R3, R11, R13 |
| Call-now strip | Short urgent text near the top of the file | R11, R13 |
| Bottom action bar | Back, Bookmark, Pin | R7, R8, R9, R12 |
| Device flag store | Remembers pins and bookmarks on this browser | R10 |
| Empty and error messages | Search miss, empty Active care, broken file | R14, R15, R16 |
| Demo data label | States the list is sample data, not a personal record | R2 |

## 4. Dependencies & Assumptions
- External services/tools needed: GitHub repo and GitHub Pages; a browser. No paid APIs.
- Assumptions being made (flag anything unverified):
- The class template can be restyled and its item fields renamed without a full rewrite (ADR-00).
- Eighteen to twenty-five short visit files are enough to test search and filters.
- Browser storage is available and the user is fine losing flags if they clear site data (R10).
- Testers will use a phone-width window or a real phone browser (R17).
- Staff publishing of real files stays out of this phase (open question in the spec).

## 5. Risks

| Risk | Likelihood | Impact | Mitigation | Owner |
|------|------------|--------|------------|-------|
| Template strcuture fights the visit file layout | Medium | High | Change fields and labels first; do not replace the list/detail pattern | Author |
| Warning strip and bottom bar get lost when porting from the XD mock | Medium | High | Build those two pieces early and test at 375px | Author |
| Sample visit wording sounds like real advice or uses real names | Low | High | Fictional names only; 911 line on every file; demo label on the list | Author |
| Pin vs bookmark confuse users again | Medium | Medium | Use words on the bar, not icons only; Active care banner on the list | Author |
| Browser storage fails in private mode | Low | Medium | Flags reset is acceptable; show the empty Active care message | Author |
| Scope creeps into login or messaging | Medium | High | Out-of-scope list in the spec; no tasks for accounts or inbox | Author |

## 6. Sequencing
1. Visit data list and field names — every screen reads this (R1, R11).
2. Collection view with demo label, newest-first cards, and tap-to-open (R1–R3, R2). Risk: template item shape.
3. Detail view with required section order, call-now strip, and 911 line (R11, R13). Risk: people skip warnings.
4. Bottom action bar and device flags (R7–R10, R12).
5. Search, filter chips, Active care banner, empty states (R4–R6, R14–R15).
6. Broken-file message and 375px pass (R16, R17).
7. Walk the specification acceptance table and fix gaps.

Do not add a database, login, or staff publisher until this sequence passes the spec tests.
## 7. Review & Approval
| Reviewer | Date | Approved? |
|----------|------|-----------|
| Lilah Leal (spec owner) | 09/21/2026 | Yes |

**Gate:** Do not generate tasks until this plan is done.
