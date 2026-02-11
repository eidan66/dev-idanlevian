# quality-fix-and-verify

## description:

Runs build, typecheck, lint, format, and tests — fixes all errors and warnings

---

Run a full quality verification and auto-fix pass for this repo.

Steps (execute in this order conceptually):

1. Vite build check
2. TypeScript strict typecheck
3. ESLint (including security-related rules)
4. Prettier formatting
5. Unit tests (Jest / Vitest)
6. E2E tests (Playwright) — if relevant to touched code

For each step:

- Identify ALL errors and warnings
- Fix them directly in the code
- Prefer minimal, safe, idiomatic fixes
- Preserve behavior unless explicitly unsafe

Specific constraints:

- Do NOT weaken TypeScript types to silence errors
- Do NOT disable ESLint rules unless there is a strong justification
- Do NOT use `any`, `@ts-ignore`, or `eslint-disable` unless unavoidable
- Do NOT relax tests; fix the implementation instead
- Ensure fixes comply with the ULTRA-HARDENED React Security Engine

If a fix introduces security implications:

- STOP
- Explain the risk
- Propose a secure alternative

Final output (MANDATORY):

- Summary table:
  Check | Status | Files Changed | Notes
- List of all fixes applied
- Confirmation that:
  ✔ Build passes
  ✔ Typecheck passes
  ✔ Lint passes
  ✔ Formatting is clean
  ✔ Tests pass
