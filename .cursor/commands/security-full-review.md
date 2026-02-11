# security-full-review

Run a FULL security review using ALL available security subagents.

Context:

- React 19 + Vite SPA
- TypeScript strict mode
- React Router DOM routes
- Redux Toolkit (UI state)
- TanStack React Query (server state)
- Session-based auth via httpOnly cookies (axios withCredentials)
- runtime-config.js (window.**RUNTIME_CONFIG**)
- Third-party integrations: GTM, Sentry, FullStory, Mixpanel (legacy), reCAPTCHA
- Google Docs iframe embed
- Optional PWA + Tauri wrapper

Instructions:

1. Invoke each security subagent independently:
   - DOM XSS & Browser Hardening Specialist
   - Session Auth & CSRF Specialist
   - Telemetry & Privacy Specialist
   - Supply Chain & Build Specialist

2. Each subagent must:
   - Identify tainted sources and exploitable sinks
   - Simulate realistic attacker abuse paths
   - Flag CRITICAL / HIGH / MEDIUM issues
   - Recommend concrete, secure fixes

3. After all subagents complete:
   - Merge findings
   - Deduplicate overlaps
   - Escalate the highest-risk issues

Output format (MANDATORY):

- Unified Security Findings table:
  Severity | Category | Location | Exploit Scenario | Recommended Fix
- “Must Fix Before Merge” list
- Optional “Nice to Have” hardening suggestions
- Clear final verdict: APPROVE / BLOCK / APPROVE WITH CHANGES

Constraints:

- Enforce the ULTRA-HARDENED React Security Engine rules
- Do NOT weaken security for convenience
- Do NOT suggest insecure workarounds
