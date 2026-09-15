# Career Evidence Registry

**Status:** Active canonical index  
**Last updated:** 2026-09-15  
**Purpose:** One durable GitHub index for the evidence that supports Michael Roehr / MikeHacksAI career positioning, services, technical experiments, and recruiter-facing claims.

## Canonical-source model

This repository is the **career-facing index and packaging layer**. It does not copy every operational detail from every technical repository. It records what evidence exists, where its canonical source lives, its maturity, and whether it is safe and ready for public use.

### Rules

- External credential issuers remain authoritative for credentials they issue.
- Project-specific repositories remain authoritative for technical implementation and evidence.
- Private company/account evidence remains in private company repositories.
- This repository holds sanitized recruiter/client summaries and links to canonical sources.
- A claim is not promoted to LinkedIn, Upwork, a resume, a service page, or a portfolio artifact until its evidence is captured here or in a linked canonical source.
- Original drift records remain immutable. Any portfolio representation is a derived, sanitized artifact with provenance.
- AI assistance is disclosed through accurate ownership language: architecture, requirements, orchestration, testing, evaluation, debugging, governance, deployment, validation, operational ownership, and judgment.

## 1. Credentials, affiliations, and professional learning

Canonical inventory: [CREDENTIALS-AND-LEARNING.md](CREDENTIALS-AND-LEARNING.md)

Verified Microsoft Learn evidence captured as of 2026-09-03 includes:

- 7 Microsoft Learn badges
- 1 verified trophy: **Mitigate threats using Microsoft Defender XDR**
- Level 4; 11,950 / 13,299 XP
- 7 completed modules; 1 completed learning path
- 2 historical passed exams
- **Microsoft Certified Professional** — earned June 4, 2000; retired
- **SC-200: Mitigate threats using Microsoft 365 Defender** learning path — completed June 19, 2026

**Claim boundary:** the dated Microsoft Learn export lists no active certifications or verifiable credentials. SC-200 is a completed learning path/trophy, not a passed SC-200 certification exam.

### Microsoft affiliation wording controls

These are candidate claims, not automatically approved public claims:

- Use **“Microsoft alumnus”** only when actual Microsoft employment history is verified.
- Use **“Member of the Microsoft Alumni Network”** only when active membership is verified.
- Use **“MikeHacksAI is a member of the Microsoft AI Cloud Partner Program”** only when current Partner Center enrollment and business verification are confirmed.
- Never use **“Microsoft Solutions Partner,”** a solution-area designation, specialization, or corresponding badge without evidence that the exact designation was earned.
- Keep raw Partner Center and account evidence containing identifiers in the private company repository.

## 2. Recruiter-facing project portfolio

Canonical triage: [PORTFOLIO-INVENTORY.md](PORTFOLIO-INVENTORY.md)

| Artifact | Classification | Evidence/readiness boundary |
|---|---|---|
| Defensive Drift | Flagship candidate; needs packaging | Strong governance design and evidence base. Independent-review claims require exact reviewer, date, scope, methodology, human/AI involvement, findings, and limitations. |
| Career Search Command Center | Selected automation case study; needs packaging | Working site and structured job data support the case study. Verify and capture qualification scoring, remote eligibility, salary fit, source tracking, screenshots, and current limitations. |
| Code Review Hub | Needs more evidence | Do not promote as fully operational until the complete acceptance test is documented. |
| Drift Logs / Governance Evidence Pipeline | Supporting; needs implementation boundary | Separate from Defensive Drift. Distinguish operational controls from roadmap items. |
| SCORM Cloud validation | Supporting evidence | ExeLearning SCORM 1.2 package reported a 100% result after score-saving configuration was enabled. Preserve the package/configuration/result evidence before publication. |
| Transcription Platform | Incubating | Requirements are well defined; implementation and validation are not yet sufficient for recruiter-facing claims. |
| Resume | Presentation artifact | Updated DOCX and PDF exist; reconcile their claims and links against this registry and target roles. |

## 3. Career narrative

The portfolio should make this progression explicit:

**IT Support / Troubleshooting / Escalation / Technical Operations**  
→ **Automation / Infrastructure / Cloud / Security / Observability**  
→ **AI Operations / AI Evaluation / AI Governance / AI Assurance**

Earlier experience remains directly relevant through root-cause analysis, escalation, production support, documentation, evidence collection, reliability, change control, customer-impact awareness, and security awareness.

## 4. Evidence package required for promotion

Every primary artifact should include:

- problem and professional relevance;
- Michael's direct contribution;
- architecture and implementation decisions;
- canonical technical source;
- test or evaluation evidence;
- measurable result where supported;
- screenshots or diagrams safe for public disclosure;
- reproducibility guidance;
- limitations, known failures, and maturity label; and
- audience-specific presentation for recruiters, technical interviewers, LinkedIn, and Upwork.

## 5. Update workflow

When new career-relevant evidence appears:

1. Preserve raw technical evidence in its canonical repository.
2. Add or update the corresponding entry here.
3. Classify it as credential, professional experience, service capability, project, experiment, evidence artifact, or presentation artifact.
4. Record verification state, maturity, limitations, and public-disclosure safety.
5. Update external career surfaces only from the verified record.

## Current next captures

- [x] Establish the canonical Microsoft Learn achievement inventory.
- [x] Record SC-200 learning-path completion with the correct non-certification boundary.
- [x] Select Career Search Command Center as the bounded automation case-study candidate.
- [x] Add the verified SCORM Cloud result as supporting evidence pending package capture.
- [x] Record the updated resume DOCX/PDF as presentation artifacts pending reconciliation.
- [x] Record the expanded Defensive Drift technical roadmap without claiming planned controls are operational.
- [x] Record the transcription platform as incubating rather than recruiter-ready.
- [ ] Verify Microsoft employment, Alumni Network membership, and Partner Center status before publishing affiliation claims.
- [ ] Package Defensive Drift as the first recruiter-facing flagship.
- [ ] Capture Career Search Command Center screenshots, workflow evidence, limitations, and reproducibility notes.
- [ ] Complete Code Review Hub's end-to-end acceptance test.
- [ ] Reconcile resume, LinkedIn, and Upwork claims against this registry.
