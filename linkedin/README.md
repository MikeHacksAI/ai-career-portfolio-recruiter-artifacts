# LinkedIn Profile History

This folder tracks recruiter-facing LinkedIn profile changes over time.

## Purpose

- Preserve a dated baseline before profile edits.
- Record proposed and applied LinkedIn changes.
- Keep LinkedIn positioning aligned with the recruiter-facing portfolio without silently rewriting the resume.
- Maintain a clear Current → Proposed → Applied → Verified change history.

## Snapshot structure

- `snapshots/YYYY-MM-DD/` — dated LinkedIn profile baselines and change records.
- `scripts/` — local, review-first helpers used during profile maintenance.
- `.private-captures/` — raw authenticated browser captures. This directory is intentionally excluded from Git and must never be committed to the public repository.

## Change-control rule

LinkedIn changes are reviewed before they are applied. Automation may open pages and assist with capture/navigation, but profile edits and Save actions remain under direct human control.

## Current baseline

- `snapshots/2026-09-02/PROFILE-SNAPSHOT.md`
