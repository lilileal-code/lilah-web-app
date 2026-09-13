# VisitFile — Specification
 
> **How to use this template:** The specification is meant to be detailed before building anything and to represent the core "source of truth". It should be written for a non-technical author, but clear enough for an AI agent (or a team) to build from.
 
---
 
## 0. Constitution (fill once per project, reuse across specs)
 
Non-negotiable principles this product must never violate, regardless of feature.
 
| # | Principle | Why it exists |
|---|-----------|----------------|
| 1 | Never present sample or demonstration visits as a real medical record | Patients mustn't think this file is their actual chart |
| 2 | Never give emergency care as an app feature | A web page cannot triage a crisis |
| 3 | Never hide warning signs in body or lightly colored text | People skip the fine print when they are worried |
| 4 | Never require an account to reread a visit file in the first release | Login was the main reason people abandoned portals in research |
| 5 | Never store real patient names, diagnoses, or contact details in the first release | First release is a demonstration set only |
 
---
 
## 1. Problem & Intent
 
**Who is this for?**
This would be used for a clinic patient (or family who is helping them) who just left an appointmnt and needs to reread their discharge notes/next steps. This will also be used by medical assistants who want to make fewer "what did they tell me?" calls
 
**What problem do they have today?**
Paper after-visit/discharge sheets often get left in cars or are mistaken for trash. Full patient portals tend to bury one short visit under labs, bills, messages, imaging, and a login wall. People call the nurse line to hear the same instructions again because they don't want to hunt for them.
 
**Why now / why us?**
The nurse phone line is already absorbing some of that confusion, but a dedicated visit-file library can operate as a small list-and-detail product without having to wait for a full EHR project.
 
**What does success look like?**
A first time user can open the most recent visit file in under 30 seconds and say the follow up plan in their own words. Also, the user would be able to pin down a visit and find it again under active care without any help. 
 
---
 
## 2. Scope
 
**In scope** — what this version must do.
- Show a list of after visit files (newest first)
- Let the user search by visit reason or clinician name
- filter the list: All, Active care, Bookmarked
- Open one visit as a single page with fixed sections
- Bookmark a visit, pin it to Active care, and mark it Useful
- Reme,ber those three flags on this device only
- Show a short "If this happens, call" strip near the top of every file
- Label the list as sample/demonstration data
- Work on a phone browser
 
**Out of scope** — what it explicitly will NOT do (this list prevents scope creep and over-building).
- Login to user accounts
- List real clinic records or have EHR connections
- Have secure messaging
- Appointment booking
- Prescription refill
- Lab results or billing
- AI-generated summaries
- Staff tools to publish new files
- Official medical advice beyond the text already on the file

---
 
## 3. User Scenarios
 
Write each as a short story: who, what they're trying to do, what "done" looks like.
 
**Scenario 1: [name]**
- Actor: Adult Patient
- Trigger: They are home and cannot remember their home care instructions for their cough
- Steps: Open VisitFile, see the list (newest first), tap the top card, read the call now excerpt, read home steps, follow-up
- Success outcome: They can find the 7-day follow up instructions/warning signs without having to call the office
- Failure outcome: They cannot tell which card is the correct one, or the file is too long to look through/scan

 Actor: Parent helping a child
- Trigger: The visit had a follow-up action (call if not better or refill check) that the parent can't remember and wants to make it easy to open if she forgets again
- Steps: Open VisitFile, find the most current visit file, tap Pin, go back, use Active care, see only pinned visits
- Success outcome: The visit is in the Active care section and the remaining action is visible
- Failure outcome: Pin is an icon they don't understand, or pinned visits disappear into the All section

 Actor: Adult Patient
- Trigger: They need their ankle-sprain file from last month, not their latest cough visit
- Steps: Open VisitFIle, Type "ankle" or "sprain" in search visits bar, tap to open the corresponding card
- Success outcome: Only relevant cards remain and the file opens
- Failure outcome: Search matches nothing useful and gives no way to clear

 Actor: Patient who feels worse overnight
- Trigger: New or worse symptoms after visit
- Steps: Open VisitFile, open the correct file, read the red call-now excerpt first, use the full warning list if needed
- Success outcome: They deduct whether to call the clinic or go to urgent care/ER; maybe even wait
- Failure outcome: Warning signs aren't front and center/apparent, and they call the nurse line in a panic instead
 
---
 
## 4. Requirements (EARS notation)
 
Use [EARS](https://alistairmavin.com/ears/) (Easy Approach to Requirements Syntax) so requirements are consistent and unambiguous.
 
Patterns:
- **Ubiquitous:** *The system shall [always do X].*
- **Event-driven:** *When [trigger], the system shall [response].*
- **State-driven:** *While [state], the system shall [response].*
- **Unwanted behavior:** *If [condition], then the system shall [response].*
- **Optional:** *Where [feature is present], the system shall [response].*

| ID | Requirement | Pattern |
|----|-------------|---------|
| R1 | The system shall show a collection of visit files on the first screen, newest being first. | Ubiquitous |
| R2 | The system shall label the collection as a sample/demonstration data and not personal medical records. | Ubiquitous |
| R3 | When the user taps a visit card, the system shall open that visit's detail file. | Event |
| R4 | When the user types in Search visits, the system shall filter cards by visit title, reason, and clinician name as they type. | Event |
| R5 | When the user taps All, Active care, or Bookmarked, the system shall show only visits that match that filter. | Event |
| R6 | While one or more visits are pinned, the system shall show a banner on the list stating how many visits are in Active care. | State |
| R7 | When the user taps Pin on a detail file, the system shall add that visit to Active care and show a short “Saved to Active care” confirmation. | Event |
| R8 | When the user taps Bookmark on a detail file, the system shall add that visit to Bookmarked and show a short confirmation. | Event |
| R9 | When the user taps Useful on a detail file, the system shall keep Useful on so the user can see it was marked. | Event |
| R10 | The system shall remember pin, bookmark, and useful flags on this device until site data is cleared. | Ubiquitous |
| R11 | The system shall show every detail file in this section order: title and date, clinician, call-now strip, why you came, what we found, what to do at home, medicines mentioned, follow-up, full warning signs, last updated. | Ubiquitous |
| R12 | The system shall show a labeled bottom action bar on the detail file: Back, Bookmark, Pin, Useful. | Ubiquitous |
| R13 | The system shall include “If you think this is an emergency, call 911.” on every detail file. | Ubiquitous |
| R14 | If search matches no visits, then the system shall say “No visits match. Clear search to see all.” | Unwanted |
| R15 | If Active care has no pinned visits, then the system shall say “Pin a visit you still need to act on." | Unwanted |
| R16 | If a visit file cannot be opened, then the system shall say “This file could not be opened. Go back to the list.” | Unwanted |
| R17 | Where the screen is a phone, the system shall keep primary actions usable with no sideways scroll. | Optional |
 
---
 
## 5. Acceptance Criteria
 
For each requirement, define the test that proves it's done. If you can't write a pass/fail test, the requirement is still too vague.
 
| Requirement | Test | Pass condition |
|-------------|------|-----------------|
| R1 | Load the home screen | A list of visit cards is visible; newest date is at the top |
| R2 | Read the home screen | Demo / not-your-record wording is visible without opening a file |
| R3 | Tap the first card | The matching visit file opens with that title and date |
| R4 | Type “cough” in search | Only cards whose title, reason, or clinician include cough stay visible |
| R5 | Tap Active care | Only pinned visits are listed |
| R6 | Pin one visit, return to All | Banner shows at least “1” visit in Active care |
| R7 | Tap Pin on a file | Visit appears under Active care; confirmation text appears |
| R8 | Tap Bookmark on a file | Visit appears under Bookmarked; confirmation text appears |
| R9 | Tap Useful | Control stays in the marked state after the tap |
| R10 | Pin a visit, reload the page | That visit is still pinned |
| R11 | Open any file | All required sections appear in the specified order |
| R12 | Open any file on a phone-width screen | Back, Bookmark, Pin, Useful are labeled and tappable at the bottom |
| R13 | Open any file | 911 emergency line is visible |
| R14 | Search “zzzzz” | Empty-search message is shown |
| R15 | Clear all pins, open Active care | Empty Active care message is shown |
| R16 | Force a missing visit id (or broken link) | Recovery message and a way back to the list are shown |
| R17 | View list and detail at 375px width | No horizontal scroll; bottom actions remain tappable |
 
---
 
## 6. Constraints & Non-Functional Requirements
 
- **Performance:** The list and a visit file should appear in under 2 seconds on a normal phone connection once the page is loaded. Search filtering should feel instant (no separate submit button required).
- **Security/Privacy:** First release uses fictional sample visits only. Do not collect real names, dates of birth, or clinic account data. Flags stay on the device. Do not send Useful marks to a clinic server in this version.
- **Accessibility:** Text must stay readable against the page background. Warning signs must not rely on color alone (use a heading plus words). Tap targets on the action bar must be large enough for a thumb. Language should sit at about a 6th–8th grade reading level.
- **Compliance/Legal:** This is not a medical device and not an official health record. Every file points emergencies to 911. Do not claim the app diagnoses or treats.
- **Budget/Timeline:** First release is a focused instruction library that can be designed, built, and reviewed in about eight weeks. No vendor portal license in this version.
---
 
## 7. Open Questions
 
Anything unresolved. Don't let AI or a builder guess silently — list it and get an answer before build starts.
 
| Question | Owner | Status |
|----------|-------|--------|
| How many sample visits ship in v1 (target 18–25)? | Spec owner | Resolved - 18–25 fictional primary-care and urgent-care files |
| Do Useful marks need to reach the clinic in v1? | Spec owner | Resolved - device only in v1 |
| Is Active care a separate app section or a filter? | Spec owner | Resolved - filter plus banner, from prototype tests |
| Should warning signs stay only at the bottom like paper sheets? | Spec owner | Resolved - short strip near the top, full list lower |
| When does staff publishing of real files start? | Clinic operations | Open - after v1 proves the patient flow |
 
---
 
## 8. Plan (derived from this spec — separate document once approved)
 
Once the spec above is approved, translate it into:
- **`plan.md`** — the approach and key decisions, each traced back to a requirement ID above
- **`tasks.md`** — atomic, ordered, checkable tasks derived from the plan
Do not skip from spec straight to a build without reviewing the plan first.
 
---
 
## 9. Approval
 
| Role | Name | Date | Signed off? |
|------|------|------|-------------|
| Spec owner | Lilah Leal (VisitFile Author) | 09/13/2026 | Yes |
| Reviewer | Clinic operations/patient experience manager | 09/13/2026 | Yes |
 
---
 
### Primary sources this template draws on
- [GitHub Spec Kit](https://github.com/github/spec-kit) — open-source spec/plan/tasks toolkit
- [Spec-Driven Development methodology](https://github.com/github/spec-kit/blob/main/spec-driven.md) — GitHub's explainer
- [EARS notation](https://alistairmavin.com/ears/) — requirements syntax
- [Microsoft: Spec-Driven Development for AI-Native Engineering](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering/)
