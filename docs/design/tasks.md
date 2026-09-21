# Tasks — VisitFile

> Derived from the plan document. Each task is small, checkable, and traceable to a requirement.

## Task List

| ID | Task | Traces to (R# / ADR#) | Depends on | Status |
|----|------|--------------------------|------------|--------|
| T1 | List the template’s current item fields and map each VisitFile field (title, date, clinician, reason, findings, home steps, medicines, follow-up, warnings, last updated) | R11, ADR-00, ADR-01 | — | Not started |
| T2 | Replace placeholder item data with 8 fictional visit files using those fields (expand to 18–25 after the screens work) | R1, R2, ADR-01 | T1 | Not started |
| T3 | Add the home-list demo label: sample / demonstration data, not a personal medical record | R2 | T2 | Not Started |
| T4 | Sort the collection newest-first and show title, date, clinician, one-line reason, and pin/bookmark hints on each card | R1, ADR-00 | T2 | Not Started |
| T5 | Wire card tap so it opens the matching visit file | R3 | T4 | Not Started |
| T6 | Build the detail page in spec order: title/date, clinician, call-now strip, why you came, findings, home steps, medicines, follow-up, full warnings, last updated | R11, ADR-04 | T6 | Not Started |
| T7 | Add the red call-now strip near the top of every file and the line “If you think this is an emergency, call 911.” | R11, R13, ADR-04 | T6 | Not Started |
| T8 | Add a labeled bottom bar on the detail page: Back, Bookmark, Pin, Useful | R12, ADR-05 | T6 | Not Started |
| T9 | Make Back return to the collection | R12 | T8 | Not Started |
| T10 | Implement Pin: mark the visit, show “Saved to Active care,” include it in the Active care filter | R7, ADR-03 | T8 | Not Started |
| T11 | Implement Bookmark: mark the visit, show a short confirmation, include it in Bookmarked | R8 | T8 | Not Started |
| T12 | Persist pin and bookmark in the browser and restore them after reload | R10, ADR-02 | T10, T11 | Not Started |
| T13 | Add All / Active care / Bookmarked chips that filter the list | R5, ADR-03 | T10, T11 | Not Started |
| T14 | Show the “You have N visits in Active care” banner when any visit is pinned | R6, ADR-03 | T10, T13 | Not Started |
| T15 | Add Search visits that filters by title, reason, or clinician as the user types | R4 | T4 | Not Started |
| T16 | Show "No visits match. Clear search to see all." when search has no hits | R14 | T15 | Not started |
| T17 | Show “Pin a visit you still need to act on.” when Active care is empty | R15 | T13 | Not Started |
| T18 | Show “This file could not be opened. Go back to the list.” for a missing visit | R16 | T5 | Not Started |
| T19 | Check list and detail at 375px width: no sideways scroll, bottom actions still tappable | R17 | T8, T13 | Not Started |
| T20 | Grow the sample set to 18–25 fictional primary-care and urgent-care files with no real names | R1, ADR-01 | T2, T19 | Not Started |
| T21 | Walk the specification acceptance table for R1–R17 and fix any failing test | R1-R17 | T19, T20 | Not Started |

**Status values:** Not started · In progress · Done · Blocked

## Definition of Done (applies to every task)
- Matches its linked requirement's acceptance criteria in the specification.
- Reviewed by a human before marked done
- No task marked done without a test passing

## Blocked / Questions
| Task | Blocker | Raised | Resolved |
|------|---------|--------|----------|
| - | None. Staff publishing and login stay out of this task list on purpose (spec out of scope). | 09/21/2026 | - |
