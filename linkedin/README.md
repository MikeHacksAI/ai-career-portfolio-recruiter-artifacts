# LinkedIn Profile Maintenance History

This folder is for profile-maintenance continuity, provenance, and rollback/reference purposes. It is **not intended to be a recruiter-facing showcase area**.

## Purpose

- Preserve dated LinkedIn baselines before profile edits.
- Record proposed and applied LinkedIn changes.
- Keep LinkedIn positioning aligned with the recruiter-facing portfolio without silently rewriting the resume.
- Maintain a clear Current → Proposed → Applied → Verified change history.

## Visibility boundary

The repository itself may be public, so files committed here can technically be discovered by someone browsing the repository. However:

- LinkedIn history and snapshots should not be linked prominently from recruiter-facing navigation.
- Recruiter-facing README content should point to polished artifacts, case studies, projects, and evidence instead.
- Raw authenticated browser captures, cookies, session data, or non-public account information must never be committed.
- `.private-captures/` and `.playwright-profile/` remain local-only and Git-ignored.

## Snapshot structure

- `snapshots/YYYY-MM-DD/` — dated LinkedIn profile baselines and change records.
- `scripts/` — local, review-first helpers used during profile maintenance.
- `.private-captures/` — raw authenticated browser captures; excluded from Git.

## Change-control rule

LinkedIn changes are reviewed before they are applied. Automation may open pages and assist with capture/navigation, but profile edits and Save actions remain under direct human control.

## Current baseline

- `snapshots/2026-09-02/PROFILE-SNAPSHOT.md`
