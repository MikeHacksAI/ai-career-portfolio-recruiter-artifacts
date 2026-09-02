# Portfolio Inventory

This document is the canonical inventory of projects being evaluated for recruiter-facing, LinkedIn, Upwork, and portfolio use.

The purpose is to distinguish between work that is already strong enough to showcase and work that still requires validation, evidence, packaging, or additional engineering.

## Status Definitions

- 🟢 **Flagship** — strong enough to become a primary recruiter-facing artifact
- 🔵 **Supporting** — useful evidence, but not a primary showcase
- 🟡 **Needs Packaging** — technically strong but needs a case study, screenshots, report, demo, or clearer presentation
- 🟠 **Needs More Evidence** — needs testing, validation, results, or reproducible evidence before promotion
- ⚪ **Incubating** — promising but still under development
- 🔴 **Not Portfolio-Worthy Yet** — insufficient evidence or professional value in its current form

---

# Current Inventory

## Defensive Drift

**Status:** 🟢 Flagship Candidate

### Demonstrates
- AI governance
- AI failure/drift analysis
- evidence preservation
- corrective controls
- provenance
- human verification
- operational accountability

### Existing Evidence
- Defensive Drift project/repository
- drift evidence
- independent review

### Missing / Needed
- recruiter-readable case study
- concise explanation of independent review
- architecture/workflow diagram
- sanitized representative example
- LinkedIn presentation
- portfolio landing page

### Next Action
Package Defensive Drift and its independent review as the first flagship recruiter-facing artifact.

---

## Code Review Hub

**Status:** 🟠 Needs More Evidence

### Important Current Reality

The interface/design exists, but I have not personally completed a full end-to-end production-style test of the Code Review Hub yet.

Do NOT describe this project publicly as fully operational until validation is complete.

### Intended Capabilities
- consolidated code review workflow
- SonarQube
- Semgrep
- Trivy
- Hadolint
- AI reviewer integrations
- Gemini and other model integrations where implemented

### Missing / Needed
- current-state audit
- end-to-end acceptance test
- real sample repository
- scanner validation
- AI integration validation
- error/failure testing
- usability testing
- documented bugs
- enhancement backlog
- before/after remediation evidence

### Portfolio Acceptance Goal

Demonstrate:

sample repository
→ Code Review Hub
→ findings
→ remediation
→ rerun
→ measurable improvement

### Next Action
Return to the Code Review Hub project and perform a complete current-state audit and acceptance test before implementing additional enhancements.

---

## Drift Logs / Governance Evidence Pipeline

**Status:** 🟡 Needs Packaging / Evidence

### Demonstrates
- governance evidence architecture
- provenance
- immutable raw evidence
- derived records
- observability
- Grafana/Loki integration
- automation

### Next Action
Inventory current implementation and determine what is already operational versus planned.

---

## Homelab / Cloud Operations

**Status:** 🔵 Supporting / Potential Flagship Case Study

### Demonstrates
- Docker
- Linux
- networking
- reverse proxying
- monitoring
- storage
- backups
- Cloudflare
- Azure
- incident response
- technical operations

### Next Action
Select one strong operational story rather than attempting to showcase the entire homelab.

---

## Automation Case Study

**Status:** 🟡 Needs Selection

### Goal

Choose one real automation that demonstrates:

- trigger
- workflow
- approval boundary
- logging
- failure handling
- alerting
- validation
- operational outcome

### Next Action
Inventory existing automation projects and select the strongest example.

---

## AI System Evaluation & Assurance

**Status:** ⚪ Planned New Artifact

### Goal

Create a reproducible professional AI evaluation containing:

Objective
→ System Under Test
→ Risk / Failure Model
→ Evaluation Dataset
→ Evaluation Rubric
→ Baseline
→ Failures
→ Corrective Changes
→ Rerun
→ Before / After Results
→ Residual Risks
→ Recommendations

### Next Action
Do not start until existing portfolio work has been triaged and the first flagship artifact is being packaged.
