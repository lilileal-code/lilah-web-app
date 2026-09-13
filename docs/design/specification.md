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
- Success outcome: 
- Failure outcome:

 Actor: Adult Patient
- Trigger: They are home and
- Steps:
- Success outcome:
- Failure outcome:

*(Repeat for each core scenario. 3–5 is typical for a first spec.)*
 
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
| R1 | When a user submits the signup form with a valid email, the system shall create an account and send a confirmation email. | Event |
| R2 | | |
 
---
 
## 5. Acceptance Criteria
 
For each requirement, define the test that proves it's done. If you can't write a pass/fail test, the requirement is still too vague.
 
| Requirement | Test | Pass condition |
|-------------|------|-----------------|
| R1 | Submit form with valid email | Account exists in DB; email received within 60s |
 
---
 
## 6. Constraints & Non-Functional Requirements
 
- **Performance:**
- **Security/Privacy:**
- **Accessibility:**
- **Compliance/Legal:**
- **Budget/Timeline:**
---
 
## 7. Open Questions
 
Anything unresolved. Don't let AI or a builder guess silently — list it and get an answer before build starts.
 
| Question | Owner | Status |
|----------|-------|--------|
| | | Open / Resolved |
 
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
| Spec owner | | | |
| Reviewer | | | |
 
---
 
### Primary sources this template draws on
- [GitHub Spec Kit](https://github.com/github/spec-kit) — open-source spec/plan/tasks toolkit
- [Spec-Driven Development methodology](https://github.com/github/spec-kit/blob/main/spec-driven.md) — GitHub's explainer
- [EARS notation](https://alistairmavin.com/ears/) — requirements syntax
- [Microsoft: Spec-Driven Development for AI-Native Engineering](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering/)
