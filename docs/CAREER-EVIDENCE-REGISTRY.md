# Career Evidence Registry

**Status:** Active canonical index  
**Last updated:** 2026-09-03  
**Purpose:** One durable GitHub index for the evidence that supports Michael Roehr / MikeHacksAI career positioning, services, technical experiments, and recruiter-facing claims.

## Canonical-source model

This repository is the **career-facing index and packaging layer**. It should not copy every operational detail from every technical repository. Instead, it records what evidence exists, whether it is verified, where its canonical technical source lives, and whether it is ready for public/recruiter use.

### Rules

- External credential issuers remain authoritative for credentials they issue.
- Project-specific repositories remain authoritative for their technical implementation and evidence.
- Private company/account evidence remains in private company repositories.
- This repository holds sanitized, recruiter/client-facing summaries and links to the appropriate canonical sources.
- A claim should not be promoted to LinkedIn, Upwork, a resume, a service page, or a portfolio artifact until its evidence is captured here or in a linked canonical source.

## 1. Credentials & professional learning

Canonical career inventory: [`CREDENTIALS-AND-LEARNING.md`](CREDENTIALS-AND-LEARNING.md)

Current captured Microsoft Learn evidence includes:

- 7 Microsoft Learn badges
- 1 trophy
- Level 4
- 11,950 / 13,299 XP
- 7 completed modules
- 1 completed learning path
- 2 historical passed exams
- 1 historical Microsoft certification
- 6 hr 25 min of transcripted training
- **Microsoft Certified Professional** — earned June 4, 2000
- **Implementing and Supporting NT™ 4.0 Workstation** — Exam 073
- **Networking Essentials** — Exam 058
- **SC-200: Mitigate threats using Microsoft 365 Defender** learning path — completed June 19, 2026
- Defender for Cloud Apps learning
- Defender for Identity learning
- Microsoft Entra Identity Protection learning
- Microsoft Defender / Defender XDR incident mitigation and remediation learning
- cloud fundamentals learning

**Claim boundary:** SC-200 is currently supported as a completed **learning path**, not as a passed SC-200 certification exam or Microsoft Security Operations Analyst certification. Upgrade that claim only if the Microsoft Credentials page verifies it.

Pending: exact current Microsoft certification / Applied Skills entries from the **Credentials** page, expiration/renewal details where applicable, and the exact trophy title/date.

## 2. Recruiter-facing project portfolio

Canonical project triage: [`PORTFOLIO-INVENTORY.md`](PORTFOLIO-INVENTORY.md)

Current categories include:

- Defensive Drift
- Code Review Hub
- Drift Logs / Governance Evidence Pipeline
- Homelab / Cloud Operations
- Automation case studies
- AI System Evaluation & Assurance

Each technical project remains canonical in its own repository; this career repository packages only the evidence appropriate for recruiters, clients, LinkedIn, Upwork, and portfolio presentation.

## 3. Professional experience

Current resume source documents are maintained separately from this registry. Resume/LinkedIn claims should be reconciled against verified employment history and the evidence captured in the career portfolio before publication.

Key positioning areas currently supported by the career portfolio include:

- AI Operations
- AI Governance
- AI Evaluation / Assurance
- Responsible AI
- Automation
- Cloud / Infrastructure Operations
- Technical Operations
- Security foundations

## 4. Services and capabilities

Service claims should be backed by either:

- a verified credential or learning record;
- a tested technical implementation;
- a documented project/case study;
- professional employment experience; or
- reproducible evidence/demo output.

Planned service/capability inventory should distinguish:

- **Proven / deliverable now**
- **Demonstrated through projects**
- **In development / experimental**
- **Learning / training only**

This prevents experiments or coursework from being presented as commercial delivery experience before that claim is supported.

## 5. Experiments and labs

Technical experimentation is valuable career evidence when its status is explicit. Experiments may include homelab, cloud, AI, governance, security, automation, evaluation, and data/platform work.

For each experiment considered for professional use, capture:

- objective;
- environment/system under test;
- what Michael directly implemented;
- validation performed;
- result;
- limitations/failures;
- canonical repository/evidence path; and
- portfolio status.

Experiments do not need to be production systems to be useful evidence, but their maturity must be described truthfully.

## 6. Update workflow

Whenever new career-relevant evidence appears:

1. preserve the raw/technical evidence in its correct canonical source;
2. add or update the corresponding career inventory here;
3. classify it as credential, professional experience, service capability, project, or experiment;
4. mark evidence maturity and public-readiness accurately;
5. use the resulting verified record to update LinkedIn, Upwork, resume, website, or recruiter artifacts.

## Current next captures

- [x] Establish canonical Microsoft Learn achievement inventory.
- [x] Capture Microsoft Learn Transcript page/PDF.
- [x] Record historical Microsoft Certified Professional credential and passed exams from transcript.
- [x] Record SC-200 learning-path completion with the correct non-certification claim boundary.
- [ ] Capture exact Microsoft Learn Credentials page.
- [ ] Add exact current Microsoft certifications / Applied Skills after issuer verification.
- [ ] Capture exact trophy title/date.
- [ ] Build a consolidated services/capabilities inventory tied to evidence.
- [ ] Continue packaging Defensive Drift as the first flagship recruiter-facing artifact.
