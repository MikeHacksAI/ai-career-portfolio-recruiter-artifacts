# LinkedIn Profile Baseline — 2026-09-02

**Profile:** https://www.linkedin.com/in/mikeroehr  
**Snapshot date:** 2026-09-02  
**Status:** Baseline created before LinkedIn profile edits

## Capture status

The LinkedIn connector confirms the canonical profile URL above, but it does not expose the full live profile text. LinkedIn also blocks direct unauthenticated page retrieval through the available web fetch path.

Because this repository is public, a raw authenticated LinkedIn HTML dump must **not** be committed here: authenticated captures can contain account-specific or non-public data beyond the recruiter-facing profile.

A capture-only Playwright helper is stored under `linkedin/scripts/`. It is designed to open LinkedIn in a visible browser and save the raw baseline locally under the Git-ignored `linkedin/.private-captures/` directory. After the recruiter-visible fields are verified, this file will be updated with the exact pre-edit public profile content.

## Verified baseline metadata

- Name: Michael Roehr
- LinkedIn profile URL: https://www.linkedin.com/in/mikeroehr
- Location used for profile lookup: Dallas, Texas
- Snapshot purpose: Preserve the pre-enhancement LinkedIn state before updating headline, About, current experience, Featured content, skills, or prior experience.

## Planned change ledger

| Section | Baseline captured | Proposed | Applied | Verified |
|---|---|---|---|---|
| Headline | Pending browser capture | No | No | No |
| About | Pending browser capture | No | No | No |
| MikeHacks.ai / Current Experience | Pending browser capture | No | No | No |
| Featured / Portfolio Artifacts | Pending browser capture | No | No | No |
| Skills | Pending browser capture | No | No | No |
| Prior Experience | Pending browser capture | No | No | No |

## Preservation rule

This dated snapshot is the canonical **pre-change baseline** for the LinkedIn enhancement work begun on 2026-09-02. Do not overwrite the baseline with later profile wording. Future states should receive their own dated snapshot folders.
