# AI Collaboration Playbook

> Coordinated workflow for:  
> - GitHub Copilot (Editor Implementation Agent)  
> - Gemini Code Assist (Architecture & Review Agent)  
> - Gemini CLI (Automation & Ops Agent)

---

## 1. Agent Personas

### 1.1 Copilot (Editor Implementation Agent)
Focus: Fast, incremental code authoring & refactor inside VS Code.  
Principles:
- Follow existing patterns & lint rules.
- Minimize speculative abstractions.
- Provide inline tests (where feasible) alongside changes.
Primary Output: Code diffs & small commits.

### 1.2 Gemini Code Assist (Architecture & Review Agent)
Focus: Design validation, refactor strategy, performance checks, risk analysis.  
Principles:
- Justify structural changes.
- Suggest alternative patterns with trade-offs.
- Generate diff review summaries and improvement patches.
Primary Output: Design notes, refactor plans, review feedback, structured prompts back to Copilot.

### 1.3 Gemini CLI (Automation & Ops Agent)
Focus: Shell & repo state manipulation (branching, merging, housekeeping).  
Principles:
- Always verify clean working tree before destructive ops.
- Print a clear “SUMMARY” block after each session.
- Never silently discard changes.
Primary Output: Executed git commands, build/lint/test runs, dependency updates, scan outputs.

---

## 2. Responsibility Matrix

| Task Type | Copilot | Gemini Code Assist | Gemini CLI |
|-----------|---------|--------------------|------------|
| Add or modify feature code | PRIMARY | Advisory | Support (git operations) |
| Tailwind / Design token expansion | PRIMARY | Validate scaling strategy | Commit & branch mgmt |
| Large refactor plan | Assists after plan | PRIMARY | Executes branch scaffolding |
| Distinction logic changes | PRIMARY | Validate algorithmic correctness | Runs tests/build |
| Performance profiling ideas | Implements hooks | PRIMARY | May run optional tooling |
| Documentation updates | PRIMARY (draft) | Enhances clarity | Commits / version tags |
| CI/CD config changes | Assists | Validates structure | Commits / pushes |
| Dependency auditing | - | Recommends upgrades | Runs `npm audit fix` / updates |
| Release tagging | - | Advises semver | Executes tag & push |

---

## 3. Current Project Phase Alignment

| Phase | Status | Next AI Actions |
|-------|--------|-----------------|
| Legacy Calculator Removal | COMPLETE | None |
| Branding Phase 1 (Tokens, DistinctionPanel restyle) | IN PROGRESS | Finalize emerald theme integration |
| Branding Phase 2 (Sidebar + Layout + Hex Layer) | NOT STARTED | Architecture planning first |
| Placeholder Mascot & Shield Integration | PARTIAL (logo stub) | Expand usage in layout (Phase 2) |
| Policy-driven model (Issue #21) | BACKLOG | Architecture spike (Gemini Code Assist) |
| Theming toggle (dark/system) | BACKLOG | Defer until Phase 2 stable |
| Performance/Bundle Audit | NOT STARTED | After Phase 2 UI |

---

## 4. Execution Pipelines

### 4.1 Feature / Styling Change Pipeline
1. Gemini Code Assist: Validate scope & propose structure (optional if trivial).
2. Copilot: Implement code in small commits (≤ 200 lines ideal).
3. Gemini CLI:  
   - Run lint/build  
   - Tag baseline if major visual milestone  
4. Gemini Code Assist: Summarize diff, produce risk checklist.
5. Merge via PR once checklist passes.

### 4.2 Refactor Pipeline (Non-trivial)
1. Gemini Code Assist: “Refactor Blueprint” (inputs: goals, risk factors, rollback plan).
2. Copilot: Apply first slice (mechanical moves only).
3. Gemini CLI: Build & run type checks after each slice.
4. Repeat until blueprint complete; final review summary posted.

### 4.3 Hotfix / Rapid Patch
1. Gemini CLI: confirm clean tree + create hotfix branch.
2. Copilot: patch code.
3. Gemini CLI: quick lint/build/test → push.
4. Gemini Code Assist: produce post-mortem note template (optional).

---

## 5. Prompt Templates

### 5.1 Copilot (In-Editor)
```
You are Copilot Implementation Agent.
TASK: Restyle DistinctionPanel to emerald theme.
CONSTRAINTS:
- Remove all purple/indigo utilities.
- Use existing tokens (see brand.css).
- Keep prop interface unchanged.
- Must remain responsive.
DELIVERABLE: Updated DistinctionPanel.tsx only.
DO NOT: Modify logic, add new dependencies.
```

```
You are Copilot Implementation Agent.
TASK: Add ShieldLogo to EnhancedCalculator header.
CONSTRAINTS:
- Keep layout minimal; no sidebar changes.
- Import existing ShieldLogo component.
- Add subtle animation class if present.
```

### 5.2 Gemini Code Assist (Design / Review)
```
You are Architecture & Review Agent.
INPUT: DistinctionPanel.tsx (post-emerald restyle).
EVALUATE:
- Consistency with token strategy (brand.css).
- Accessibility (contrast, text size).
- Opportunities for class consolidation.
OUTPUT:
1. Pass/Fail summary.
2. Suggested improvements (ranked by impact).
3. Any refactor candidates for Phase 2.
```

```
You are Architecture & Review Agent.
REQUEST: Prepare a blueprint for Branding Phase 2.
CONTEXT:
- Phase 1 adds tokens + minimal header.
NEEDS:
- Sidebar theming
- Hex animated background
- Light/dark toggle strategy
- Mascot component integration pattern
OUTPUT:
Structured plan with sequence, risk notes, rollback points.
```

### 5.3 Gemini CLI (Automation)
```
You are Automation & Ops Agent.
TASKS:
1. Ensure branch feat/emerald-brand-phase1 is current with origin.
2. Run npm run lint and npm run build.
3. If clean, create tag 'branding-phase1-preview'.
4. Output summary: lint warnings count, build size, next manual QA steps.
Abort on dirty working tree.
```

```
You are Automation & Ops Agent.
TASK: Security & dependency housekeeping.
STEPS:
1. Run npm audit --json and summarize vulnerabilities by severity.
2. Attempt npm audit fix (non-force).
3. If lockfile changes: commit "chore: npm audit fix (non-breaking)".
4. Output before/after counts.
Do NOT use --force.
```

---

## 6. Checklists

### 6.1 Branding Phase 1 Completion Checklist
- [ ] brand.css includes: palette vars, surfaces, glow utilities, distinction panel styles.
- [ ] tailwind.config.ts extended with emerald colors & animations.
- [ ] ShieldLogo implemented with accessible <svg>, role="img", aria-label.
- [ ] DistinctionPanel uses no legacy purple/indigo.
- [ ] EnhancedCalculator header includes ShieldLogo + heading variant.
- [ ] No console errors in dev.
- [ ] `npm run build` success.
- [ ] PR description updated with Scope / Out of Scope.
- [ ] Diff size < 800 lines (excluding lockfile) OR explained if larger.

### 6.2 Phase 2 Pre-Start Checklist
- [ ] Phase 1 merged to main.
- [ ] Tag created: v0.x-branding-phase1 (or similar).
- [ ] Open Issue: “Branding Phase 2 Plan” with blueprint.
- [ ] No unresolved accessibility concerns from review.

---

## 7. Escalation & Rollback Rules

| Scenario | Action |
|----------|--------|
| Build fails after Tailwind extension | Revert last commit (Gemini CLI), diff to isolate syntax error. |
| Distinction panel logic regression | Git bisect (if multi-commit); revert functional change only. |
| Styling regressions in production (post-merge) | Hotfix branch → revert emergent commit → reapply with tests. |
| Token explosion / duplication detected | Gemini Code Assist drafts consolidation patch before adding more. |

Rollback Command Template (Gemini CLI):
```
git checkout main
git pull
git revert <commit-sha> -m "Revert: branding regression"
git push origin main
```

---

## 8. File & Commit Conventions

| Type | Prefix Example |
|------|----------------|
| Feature / UI | feat(branding): add emerald panel styles |
| Refactor | refactor(calc): extract weight logic |
| Chore | chore: update browserslist data |
| Fix | fix(distinction): correct OSA rounding edge case |
| Docs | docs(readme): add legacy removal note |
| Performance | perf(calc): memoize heavy computation |

Small commits favored: < 300 changed lines excluding generated artifacts.

---

## 9. Structured Review Template (Gemini Code Assist)

```
### Review Summary
Status: (approve / needs changes)

### Checks
- Tokens consistency: ✅/⚠️
- Accessibility contrast: ✅/⚠️
- Dead code / unused styles: ✅/⚠️
- Logic untouched (styling-only diff): ✅/⚠️

### Recommendations
1. ...
2. ...

### Phase 2 Candidates
- ...
```

---

## 10. Upcoming Roadmap (Draft)

| Priority | Item | Notes |
|----------|------|-------|
| High | Sidebar theming (glass + active highlight) | Introduce layout shell wrapper |
| High | Hex motion layer (low GPU cost) | CSS mask / transform cycle |
| Medium | Theme toggle (system / dark) | Mirror current tokens with dark variants |
| Medium | Mascot context usage | Smaller badge & friendly micro interactions |
| Medium | Assessment policy engine (Issue #21) | Configurable per-program weighting |
| Low | Offline-ready caching | PWA manifest + selective asset caching |
| Low | Performance budget gate | CI step: warn if JS bundle > 450kb gzip |

---

## 11. Sample Combined Workflow (One Iteration)

1. Developer: “Need DistinctionPanel emerald restyle.”
2. Gemini Code Assist: Approves approach (variables reused).
3. Copilot: Generates new JSX + class usage.
4. Gemini CLI: Lint + build + tag preview.
5. Gemini Code Assist: Review template posted in PR.
6. Merge after checklist passes → Tag.

---

## 12. Phase 1 Status Tracker (Fill During Work)

| Component | Status | Notes |
|-----------|--------|-------|
| brand.css tokens | In Progress |  |
| Tailwind extension | Pending |  |
| ShieldLogo SVG | Pending |  |
| DistinctionPanel restyle | Pending |  |
| EnhancedCalculator header | Pending |  |
| PR #25 updates | Open |  |
| QA/Build verification | Pending |  |

---

## 13. Fast Prompts Library (Copy/Paste)

**Ask Copilot for refactor:**
```
Refactor EnhancedCalculator: extract status icon resolution into utility function without changing output. Keep file under 250 lines. Provide new function in same file near bottom.
```

**Ask Gemini CLI for QA pass:**
```
Run full QA pass:
1. git fetch origin
2. Ensure working tree clean
3. npm run lint
4. npm run build
5. Search for purple-/indigo- classes
6. Summarize warnings + final bundle size
```

**Ask Gemini Code Assist for complexity scan:**
```
Scan EnhancedCalculator.tsx for cyclomatic complexity hotspots, list top 3 with suggestions to reduce branching.
```

---

## 14. Governance Notes

- Avoid broad renames during branding (stabilize visual layer first).
- Distinction logic = domain-critical: treat with code freeze unless bug.
- All changes touching `src/lib/calculator.ts` require explicit diff summary justification.

---

## 15. Exit Criteria for Branding Phase 1

Must meet all:
- Distinction experience visually matches emerald style guide intent.
- No regressions in final mark calculation.
- All UI retains acceptable contrast.
- PR #25 merged & tagged.
- Phase 2 blueprint issue created.

---

_End of Playbook_