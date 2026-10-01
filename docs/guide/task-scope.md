# 01 · Understand and split the task

A task may say only: “Align the orders table with Figma.” Before editing code, establish which screens, states, and behaviors belong to the task.

<div class="chapter-note">

**Outcome:** A short plan with reviewable sections, a frame link for each section, and explicit open questions. No code changes yet.

</div>

## Required inputs

- The task title and application route, such as `/orders`.
- Exact desktop and mobile frame links instead of a link to a large design file.
- A runnable application and suitable test data for its different states.
- Project rules: base components, behaviors to preserve, and constraints on shared changes.

If you do not have exact links, ask the agent to inspect the relevant Figma section and list its frames first. Successfully accessing a file does not mean every state has been inspected.

## Copyable prompt

Replace the bracketed placeholders. This prompt authorizes investigation only, not implementation. Use the copy button in the corner.

```text
Task: [short title]
Application route: [route]
Desktop Figma: [exact frame link]
Mobile Figma: [exact frame link]

Do not change code yet.
1. Verify access to the frames. State clearly if anything cannot be read.
2. Find the relevant page, components, and data flow in the project.
Read relevant files only; do not inspect the entire repository.
3. Compare the visible design states with existing behavior:
normal, empty, error, loading, panels, and dialogs, where applicable.
4. List conflicts with business logic or API requirements and missing details.
Do not invent behavior for ambiguous parts.
5. Recommend whether this task needs subdivision.
If it does, propose reviewable sections, desktop first and then mobile.

Constraints:
- Preserve existing behavior and API contracts unless changes are explicitly approved.
- Reuse existing base components.
- Before proposing a shared component change, identify its consumers and impact.
- Suggest cleanup only within this task and without behavioral changes.

Keep the output brief:
main files, open questions, stages, and verification for each stage.
```

## Review the proposed plan

Open both the application and the design yourself. The agent's inspection does not replace your own observation.

- Does the plan cover relevant filters and dialogs?
- Are empty, error, and long-content states accounted for?
- Does each stage produce something runnable and reviewable?
- Could a shared change affect other screens?
- Has a visual change been confused with a behavioral change?

“Fix the table” is vague. “Align the desktop table and check sorting, pagination, and the empty state” has a clearer outcome. A simple spacing change between two buttons usually does not need a multi-stage plan.

## Resolve ambiguity

If a design conflicts with a required field, API, or existing behavior, raise it with the technical lead first. If unavailable, contact the designer or design liaison. Independent decisions are exceptional and must remain within the team's authority.

A useful question contains **the conflict, its impact, and a proposed option**:

> The design omits sales information, but the API requires two fields from that section. Removing it would prevent submission. I suggest keeping the section with updated styling. Is that behavior approved?

## Ready to implement

- [ ] The scope and exclusions are clear.
- [ ] Relevant frames are identified and accessible.
- [ ] Questions affecting the next stage have been answered.
- [ ] Each stage has visual and behavioral review criteria.
- [ ] A separate task branch exists.

Assign only **the first stage** to the agent after this review. Review and approve each section, then make a separate commit with a clear Persian message. Prepare the merge request when the full task is complete.

## Use fewer tokens

Precise frame links, a route, and explicit constraints reduce repeated explanations. Request an operational summary instead of a line-by-line file report. Save the approved plan in the task notes so subsequent work does not require rereading the entire conversation.
