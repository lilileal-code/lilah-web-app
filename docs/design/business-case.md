# Business Case — [VisitFile]

## 1. Problem / Opportunity
After a clinic visit, patients may forget their discharge instructions and call the nurse line to ask what the doctor said, which test to schedule, and which instruction sheet they were handed. Those sheets are easy to lose, and a full portal often buries a short visit in a long record. Repeat calls waste nurse time and leave patients unsure.
## 2. Proposed Solution
VisitFile is a small patient-facing library of after-visit files. A user browses a collection of visits and opens one file for a one-page briefing (facesheet): why they came, what was found, home instructions, follow-up, and warning signs. They can bookmark a visit, pin a short “active care” list, or mark a file useful. 

## 3. Options Considered

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| Option A | Do nothing. Keep paper sheets and nurse-line callbacks. | No build cost | Sheets get lost; nurses repeat instructions |
| Option B | Buy a full EHR patient portal. | Real records, messages, meds | Expensive; needs accounts and live data; too big for this course |
| Option C (recommended) | build VisitFile as a dedicated after-visit instruction library | Matches how patients actually look information up; faster to deliver; cheaper to maintain | Does not replace the full chart, messaging, or e-prescribing; content must stay current and written in plain language |

## 4. Feasibility

| Type | Assessment |
|------|------------|
| Operational — will people actually use/support this? | Yes. Patients already try to reread instructions on a phone after they leave. Nurses and medical assistants want fewer “what did they tell me?” calls. Success depends on short files, everyday wording, and a habit of publishing the file before the patient reaches the parking lot. |
| Technical — can we build it with what we have/can get? | Yes. The product is a catalog of visit records and a detail view for one record. That can be built with a standard web stack and a modest set of visit fields. Later releases can connect to the clinic’s record system; the first release can run on a curated set of visit files. |
| Economic — does the payoff justify the cost? | Yes. Development cost is limited because the first release only covers after-visit instructions. The main return is nurse time not spent repeating those instructions, plus fewer missed follow-ups. On the figures below, benefits cover cost in a little over a year. |
| Schedule — can it be done in a useful timeframe? | Yes. A first version with a defined file layout and an initial set of visit types can be designed, built, and reviewed in one planning cycle (about eight weeks), then expanded by department. |
## 5. Costs & Benefits

**Costs** (one-time + ongoing):

| Item | One-time | Ongoing/year |
|------|----------|----------------|
| Adapt the template | $4,800 | — |
| Write 20 sample visit files | $1,500 | — |
| Staff wording review | $600 | — |
| Hosting | $100 | $100 |
| Refresh content | — | $800 |
| Site upkeep | — | $400 |
| Total | $7,000 | $1,300 |

**Benefits** (tangible + intangible):

| Benefit | Tangible ($/time saved)? | Notes |
|---------|-----------------------------|-------|
| Fewer repeat nurse calls | Yes. About $6,000/year | Nurse time saved |
| Fewer missed follow-up tests and return visits | Partly | Patients can reopen the follow-up section instead of guessing |
| Instructions not lost on paper | No | One file per visit, always in the same place |
| Patient confidence after the visit | No | Clearer service after the appointment |
| Clinic can see which files patients mark useful | No |Feedback for better instructions over time |

**Payback period:** [about 12–14 months]
**ROI:** [(18,000 − 10,900) / 10,900 ≈ 65%]

*(See Toolkit Part C — Financial Analysis Tools document for payback, ROI, and present value formulas.)*

## 6. Priority & Urgency
The nurse line is already taking in after-visit confusion. Every month without a single readable visit file is another month of repeat calls and missed follow-ups. This work should start now because the problem is current, the first release can stay small as delay does not reduce call volume. A full portal project should be considered later.
## 7. Recommendation
Option C. Build VisitFile as the after-visit instruction library. 
## 8. Approval

| Role | Name | Date | Decision |
|------|------|------|----------|
| Sponsor | Clinical operations / patient experience manager | 3 September 2026 | Go |
---

### Primary sources
- *Systems Analysis and Design*, 10th ed. (Cengage, 2017) — Ch. 2 "Analyzing the Business Case" and Toolkit Part C "Financial Analysis Tools"
