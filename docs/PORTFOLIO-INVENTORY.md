# Portfolio Inventory

**Last updated:** 2026-09-15

This is the canonical inventory of projects being evaluated for recruiter-facing, LinkedIn, Upwork, and portfolio use. It distinguishes work ready to showcase from work requiring validation, evidence, packaging, or additional engineering.

## Status definitions

- 🟢 **Flagship** — strong enough to become a primary recruiter-facing artifact
- 🔵 **Supporting** — useful evidence, but not a primary showcase
- 🟡 **Needs Packaging** — technically strong but needs a case study, screenshots, report, demo, or clearer presentation
- 🟠 **Needs More Evidence** — needs testing, validation, results, or reproducible evidence before promotion
- ⚪ **Incubating** — promising but still under development
- 🔴 **Not Portfolio-Worthy Yet** — insufficient evidence or professional value in its current form

## Current inventory

### Defensive Drift

**Status:** 🟢 Flagship Candidate / 🟡 Needs Packaging

**Demonstrates:** AI governance, failure/drift analysis, evidence preservation, detections-as-code, historical backtesting, provenance, reconciliation, observability, corrective controls, human verification, and operational accountability.

**Existing evidence:** canonical project repositories; drift evidence; an independent review; expanded roadmap/design material.

**Required package:**

- a two-minute recruiter-readable case study;
- Michael's exact contribution and AI-assistance disclosure;
- architecture/workflow diagram;
- sanitized representative evidence with provenance;
- verified results and limitations;
- precise independent-review description: reviewer, date, scope, methodology, human versus AI involvement, findings, and limitations;
- technical-interviewer walkthrough and LinkedIn presentation.

**Next action:** package this first. Do not blur Defensive Drift with the separate Drift Logs/governance-evidence pipeline or describe roadmap controls as operational without evidence.

---

### Career Search Command Center

**Status:** 🟡 Selected Automation Case Study / Needs Packaging

**Why selected:** this is the strongest current bounded automation/product story, replacing the previous unselected automation slot.

**Current evidence reported:**

- working site;
- structured job records;
- qualification scoring;
- remote-eligibility classification;
- salary-fit and source tracking;
- remote-first work queue.

**Evidence still needed:**

- canonical repository and live-demo links;
- architecture/data-flow diagram;
- screenshots and representative sanitized records;
- evidence for implemented scoring/classification behavior;
- failure and stale-link handling;
- reproducibility instructions;
- explicit separation between implemented functions and planned LinkedIn-alert import, Monster intake, batch refresh, and stale-link automation.

**Acceptance story:** source intake → normalization → qualification/remote/salary evaluation → prioritized work queue.

---

### Code Review Hub

**Status:** 🟠 Needs More Evidence

The interface/design exists, but a complete end-to-end production-style test has not been documented. Do not describe it publicly as fully operational or place it in the primary showcase yet.

**Acceptance goal:** sample repository → Code Review Hub → scanner/AI findings → remediation → rerun → measurable improvement.

**Still needed:** current-state audit; scanner and AI-integration validation; error/failure tests; usability tests; documented bugs; before/after remediation evidence; reproducibility guide.

---

### Drift Logs / Governance Evidence Pipeline

**Status:** 🔵 Supporting / 🟡 Needs Packaging and Implementation Audit

**Demonstrates:** governance-evidence architecture, immutable raw evidence, derived records, provenance, reconciliation, automation, and planned Loki/Grafana observability.

**Boundary:** this is separate from Defensive Drift. Inventory what is operational versus planned before making implementation claims. Never modify original/raw drift evidence for portfolio presentation.

---

### SCORM Cloud Validation

**Status:** 🔵 Supporting Evidence / 🟡 Needs Packaging

**Verified result:** an ExeLearning SCORM 1.2 export reported a 100% result in SCORM Cloud after **Save the score** was enabled.

**Still needed:** preserve the tested package, configuration, dated result capture, expected-versus-observed behavior, and limitations. This supports product testing and validation skills but is not currently a primary flagship.

---

### Resume

**Status:** 🔵 Presentation Artifact / Needs Reconciliation

Updated DOCX and PDF versions have been committed in their canonical source. Reconcile claims, dates, role positioning, and portfolio links against verified evidence before treating the resume package as final.

---

### Transcription Platform

**Status:** ⚪ Incubating

The specification now covers resumable large uploads, progress/ETA/queue visibility, NAS-default output, optional analysis, recording context/speaker notes, controlled delivery, and links to original media.

**Boundary:** these are product requirements unless supported by implementation and test evidence. Keep out of the primary showcase until a verified workflow is captured.

---

### Homelab / Cloud Operations

**Status:** 🔵 Supporting / Potential Flagship Case Study

**Demonstrates:** Docker, Linux, networking, reverse proxying, monitoring, storage, backups, Cloudflare, cloud operations, incident response, and technical operations.

**Next action:** select one bounded operational incident or automation with trigger, controls, logs, failure handling, alerting, validation, and outcome. Do not attempt to showcase the entire homelab.

---

### AI System Evaluation & Assurance

**Status:** ⚪ Planned High-Value Artifact

A professional reproducible evaluation remains a valuable portfolio gap: objective, system under test, risk/failure model, test dataset, rubric, baseline, observed failures, corrective changes, rerun, before/after results, residual risks, and recommendations.

**Sequencing:** begin after existing portfolio work—especially Defensive Drift and Career Search Command Center—is packaged. Do not let a new project displace the stronger existing evidence.

## Current portfolio order

1. Defensive Drift
2. Career Search Command Center
3. One bounded operations/incident case study
4. Code Review Hub after acceptance testing
5. Supporting evidence: Drift pipeline, SCORM Cloud validation, credentials/learning, and selected technical operations
6. AI System Evaluation Report when the first existing artifacts are packaged
