# 04 · Test behavior and review code

A correct-looking page can send the wrong payload, lose selections, or enable submission too early. Approve appearance and behavior separately.

<div class="chapter-note">

**Outcome:** A reproducible record of executed checks, results, and limitations, together with a diff review.

</div>

## Required inputs

- Existing behaviors and explicitly approved logic changes.
- Authorized test data for primary and alternative paths.
- Stage acceptance criteria and existing project test commands.
- Changed files and shared consumers.

## Manual testing, step by step

1. Enter through the real application flow; direct navigation alone is insufficient.
2. Complete the successful path using test data and verify the saved result.
3. Exercise relevant boundaries: empty or invalid inputs, long content, multiple items, and removal of the final item.
4. Move forward and back; data and selections must follow the expected behavior.
5. Check repeated submission, dialog cancellation, and network failure in an authorized environment. Do not experiment on real records to generate failures.
6. Inspect DevTools Console for new errors and Network for the relevant request. Compare method, endpoint, payload, and request count against the approved contract. Exclude sensitive data from public reports.

## Sample test matrix

| Scenario | Expected result | Evidence |
| --- | --- | --- |
| New customer | Correct form and active validation | Form and validation message |
| Existing customer | Correct details and selections | Known test record |
| Two items, one payment | Correct totals and continuation rule | Raw and displayed values |
| Cancel member deletion | Member and data remain | Open and cancel confirmation |
| Return to previous step | Data follows existing behavior | Actual backward/forward navigation |
| Failed submission | Useful error and retry possible | Error response in authorized environment |

This is an example. Remove irrelevant rows and add the task's actual paths. Record passed, failed, or not run, with a reason, for each row.

## When there is no staging server

The example team workflow permits testing designated test records on production, including test SMS, without separate managerial approval. Do not assume this permission applies to another team or project.

Verify that identifiers, phone numbers, and records belong to the authorized test dataset. Record actual effects such as SMS delivery or receipt creation. If required test data is missing, report the blocker instead of substituting a real customer's data.

## Review the diff and run automated checks

Inspect more than CSS. Removed watchers, defaults, enablement conditions, payloads, events, and shared state can change behavior. Look for unrelated files, hardcoded test data, and temporary logs.

Match verification to the change: boundary-value tests for calculations, browser inspection and measurements for layout. Run lint, type checks, tests, or builds according to the project's tools and rules. Do not bypass a project's build prohibition.

## Review and testing prompt

```text
Stage: [title]
Expected behaviors: [list]
Authorized test data and environment: [needed details, no secrets or real customer data]
Approved logic changes: [description or "none"]
Testing rules: [project commands and restrictions]

Review this stage's diff and related consumers.
Identify risks to API contracts, validation, events, state, and shared components.
Run relevant existing tests and check primary and boundary paths in the browser.
Do not add redundant tests merely to increase test count.
If you cannot run a check or observe its result, explicitly mark it "not run".
Separate pre-existing project failures from new failures.
Report briefly: scenario, expectation, actual result, status, and remaining work.
Do not commit or push yet.
```

## Checklist and exit criteria

- Primary and relevant alternative paths are checked.
- Payloads and request counts match expectations.
- Important shared consumers are checked.
- Passed tests, visual inspection, and checks not run are clearly distinguished.
- No unresolved delivery-blocking failures remain.

The developer approves each section. Once these conditions hold, proceed to [commits and delivery](./delivery).

## Use fewer tokens

Provide only relevant error messages and reproduction steps. Repeat a successful check only when new changes, a failure, or a specific concern justify it.
