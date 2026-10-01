# 06 · Debug and resume work

When a fix fails, do not simply repeat the same instruction at greater length. Clarify the input, observed result, and execution path. The agent may have edited a component that your route never uses.

<div class="chapter-note">

**Outcome:** A reproducible bug report or concise handoff note that does not require repeating the entire conversation.

</div>

## Required inputs

- The last approved stage and current Git status.
- Exact reproduction steps and authorized test data.
- Expected and actual results, with relevant evidence.
- Decisions that must remain in effect.

## Debugging prompt

```text
Bug in: [section]
Reproduction:
1. [open route]
2. [selections or test data]
3. [triggering action]

Expected: [result]
Actual: [observed behavior]
Evidence: [error message, screenshot, or relevant response excerpt]
Last related change: [commit or description]

Find the actual execution path and active component first.
Establish the cause with evidence before editing.
Do not disable validation merely to remove the error message.
Limit the fix to the cause and preserve the API contract.
Retest this scenario and a nearby scenario that previously worked.
Briefly report the cause, fix, and test results.
```

If two displayed amounts match but validation fails, inspect types, units, numeral conversion, and the source of the totals. Equal display strings do not establish equal raw values.

## When to start a fresh conversation

Length alone is not sufficient reason. Prepare a handoff when scope changes, stale context obstructs decisions, or tool limits disrupt continuation. For a small correction within the current stage, staying in the same conversation usually avoids extra work.

## Handoff summary prompt

```text
Prepare a brief handoff note to continue this task in a fresh conversation.
Include:
- Current objective and scope
- Repository path, branch, and last approved commit
- Uncommitted changes and files that must not be overwritten
- Completed stages and the next stage
- Exact frame links needed for the next stage
- Approved decisions and API/base-component constraints
- Checks completed, checks not run, and open bugs
- Startup command and suggested first action

Exclude secrets, real customer data, and long tool logs.
Mark uncertain facts as requiring verification.
Make the note usable without reading the full conversation.
```

In the new conversation, provide the summary with:


```text
This note continues an existing task.
Compare the actual repository and branch state with the summary before editing.
Report material differences; do not overwrite existing changes.
Continue only the identified next stage. Do not redo approved work.
[handoff summary]
```


## Checklist and exit criteria

- The bug can be reproduced through explicit steps.
- Hypotheses are distinguished from confirmed causes.
- The active execution path was inspected, not just a similarly named file.
- The handoff matches actual Git state.
- Completed work and remaining work are clearly separated.

After fixing a bug, return to [testing](./testing). After a handoff, resume the outstanding stage.

## Use fewer tokens

Token usage depends on the tool, model, and context size; this handbook promises no fixed reduction. Practical savings come from explicit scope, targeted file inspection, recorded decisions, and avoiding repeated work on approved sections.
