# Design System — VisitFile

## 1. Brand Principles
VisitFile should feel calm, clear, and clinical without looking like a hospital portal. A patient on a phone should be able to find one of their visits fast and read the notes without having to hunt for it. The interface should stay simple with calm colors: mint page, white cards, teal tiles, and a hint of red for urgent matters. 

## 2. Color Palette

| Name | Hex | Use |
|------|-----|-----|
| Primary | #0F766E | VisitFile wordmark, selected file, links |
| Primary-soft | #99E6DC | Unselected files, banner, pinned hints |
| Background | #E7F7F4 | Page behind the phone column  |
| Surface | #FFFFFF | Visit cards, search field, file body |
| Text | #111827 | Title and body text |
| Text-muted | #4B5563 | Dates, clinician, helper lines |
| Warning | #FECACA | Call-now strip background |
| Warning text | #7F1D1D | Call-now heading and symptoms |
| Border | #D1D5DB | Card and button edges |

## 3. Typography

| Role | Font | Size | Weight |
|------|------|------|--------|
| Wordmark | Helvetica | 22-24px | bold |
| Section Heading | Helvetica | 14-16px | bold |
| Screen Title | Helvetica | 20-22px | bold |
| Body | Helvetica | 14-16px | regular |
| Meta | Helvetica | 13px | muted |
| Bar Labels | Helvetica | 13px | regular |

## 4. Logo Usage
- File(s): [link/location]
- Do NOT: (stretch, recolor, place on busy backgrounds, etc.)

## 5. Spacing & Grid
- Design to a single phone column, about 360–390px wide, centered on large screens
- Page padding 16px
- Space between cards 12px
- Card padding 12–16px
- Section gaps on the detail file 16px
- Bottom action bar stays pinned; give it at least 44px tap height
- No sideways scroll at 375px

## 6. Core Components
List reusable UI patterns and their rules (e.g. radius, border, etc.).

| Component | Rules |
|-----------|-------|
| Search field | Full width, white, rounded corners, placeholder "Search Visits" |
| Filter buttons | All/Active Care/Bookmarked. Selected filter chip uses primary fill and white text. Unselected uses primary-soft. |
| Active care banner | Soft teal bar under the chips: "You have N visits in Active care ->" |
| Visit card | White rectangle, light border. Title + date on the first line, reason and clinician on the second line, and "PINNED" when pinned on the third with the "Tap for file ->" |
| Detail file | White column, title, date, clinician, red call now banner, and the spec sections in order |
| Call-now banner | Warning background, warning text, heading plus two short symptoms, optional clinic number/911, banner will never display full symptoms list so full list is at bottom of page |
| Bottom action bar | Back/Bookmark/Pin. Words, not icons, equal tap targets |
| Empty states | Plain muted sentence. No illustrations. |

## 7. Voice & Tone
Short, plain, direct. Speak like a nurse handing someone a sheet, not like a marketing site.

- Use: “Call if not improving in 7 days.”
- Avoid: “Your personalized wellness journey.”
- No jokes on warning signs.
- Demo data is labeled as sample, never as “your chart.”

## 8. Accessibility Standards
- Body text on white or mint must stay readable (dark gray/black, not light gray)
- Warning meaning uses a heading and words, not color alone
- Tap targets on the action bar at least 44px tall
- Contrast for teal-on-white titles should meet WCAG AA
- Do not rely on hover; this is a phone UI

## 9. Version & Change Log

| Version | Date | Change | Approved by |
|---------|------|--------|--------------|
| 1.0 | 09/27/2026 | First system, matched to the Adobe XD prototype and specification R11–R17 | Author |

---

**Referenced by:** spec.md Section 6 (Constraints — Branding), Design step of each project.
