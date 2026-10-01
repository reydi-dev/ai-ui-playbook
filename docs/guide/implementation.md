# 02 · Implement one stage

After [scoping the task](./task-scope), implement one approved section. Do not ask the agent to rewrite the entire flow in one pass.

<div class="chapter-note">

**Outcome:** A runnable section with updated visuals and preserved behavior, ready for comparison and testing—not automatic approval.

</div>

## Required inputs

- The selected stage, application route, and exact frame link.
- The initial findings and approved decisions.
- Project startup instructions, component rules, and test constraints.
- Git status: the task branch and existing changes to preserve.

## Connect and read the design

Ask the agent to use its Figma connection to report the target frame's name, dimensions, and sections. This establishes whether it can actually see the intended design. Configure the connection in the tool's settings; do not paste passwords or tokens into prompts.

If access or rate limits prevent inspection, check the exact node link and account access. A sufficiently detailed screenshot and required SVG assets can be a temporary fallback. Unclear details must not be reported as an exact match.

For a large flow, obtain a frame inventory first, then inspect only the current stage in detail. Identify expanded, collapsed, error, and success states explicitly rather than relying on frame names alone.

## Copyable prompt

```text
Current stage: [title and expected outcome]
Application route: [route]
Target frame: [link]
Target display: [desktop or mobile and frame width]
Approved decisions: [summary]
Project rules and startup instructions: [guide path or command]

Inspect Git status and files relevant to this stage first.
Preserve my existing changes.
Use the Figma tool to read the frame and its parent/child structure.
Implement this stage only.

Reuse existing components, fonts, and icons.
If Figma provides the exact icon, check whether that asset can be reused.
If it conflicts with project rules, let me decide before replacing it.
Preserve behavior, validation, events, API contracts, and form state.
Do not change base component internals without approval.
For mobile, prefer making the same component responsive.
If the design needs a logic change, report the conflict and proposal first.

After implementation:
- Check for remaining visual differences yourself.
- Run appropriate checks permitted by the project.
- Summarize files, possible behavior changes, checks run, and checks not run.
Do not commit, push, or start the next stage yet.
```

## Decide how much to refactor

Keep cleanup within the current section. Extract a component when it reduces duplication or complexity; shortening a file is not sufficient by itself.

Before merging two forms, compare validation, payloads, events, and consumers. Similar appearance does not establish identical behavior. Discuss risky shared changes with the technical lead and separate them into another task when appropriate.

## Review checklist

- Changes remain within the current stage.
- The page opens through the real application flow.
- Authorized test data is used instead of placeholder UI data.
- API field names and button enablement rules did not change accidentally.
- Shared changes and their impact are identified.
- The agent states which checks it actually ran.

## Ready to continue

The section must run. Next, perform [visual review](./visual-review) and [behavior testing](./testing). Implemented does not mean approved.

## Use fewer tokens

Provide a concise approved plan and decisions. A button-spacing fix does not require reloading the entire Figma file and repository.
