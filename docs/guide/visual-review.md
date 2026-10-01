# 03 · Compare and refine visuals

“Almost the same” is not a completion criterion. Describe differences in dimensions, color, typography, placement, or state so each correction can be verified.

<div class="chapter-note">

**Outcome:** A list of resolved and remaining differences, with explicit comparison conditions.

</div>

## Required inputs

- The exact reference frame and a running version of the same section.
- Viewport width, browser zoom, and page state.
- Comparable test data: text length, item count, and selection state.
- Correct fonts and icons, with successful loading verified first.

## Comparison order

Match the design's viewport width and set browser zoom to 100%. Do not confuse an image including browser chrome with the design's content width.

| Order | What to inspect |
| --- | --- |
| 1 · Frame and parents | Page background, outer spacing, content width, header, title position |
| 2 · Layout | Columns, section spacing, left/right placement, collapsed panel height |
| 3 · Typography | Font family, weight, size, line height, numeral rendering |
| 4 · Components | Border color and thickness, shadows, radius, backgrounds |
| 5 · States | Active step, disabled button, expanded panel, error, dialog |

When several cards are too narrow, inspect parent padding and max-width first. Giving each child a fixed width can make mobile behavior worse.

In RTL layouts, check text direction, icon/text order, and action placement separately. Reversing the whole flex container to fix one element may break the rest.

## Visual correction prompt

```text
Current section: [title]
Reference frame: [link]
Application route: [route]
Comparison conditions: [width, zoom, page state, test data]
Current screenshot: [file or attachment, if needed]

Compare the frame and rendered output yourself again.
Differences I observed:
1. [element + current state + expected state]
2. [element + current state + expected state]

Before editing, check for shared causes in parents, RTL rules, or fonts.
Fix only related differences in this section. Preserve logic and base components.
Compare again at the same width and state after editing.
Briefly report resolved differences, remaining differences, and anything you could not inspect.
```

## Give precise feedback

Instead of “The stepper is wrong,” write:

> In the reference frame, the active circle is larger and connectors reach each circle's edge. The output uses equal diameters and leaves gaps on both ends. Read the actual dimensions from the frame and correct this component.

Read numeric spacing and color values from the design rather than presenting guesses as Figma values. Distinguish minor platform font-rendering differences from an incorrect font or weight.

## Review checklist

- Reference width, zoom, and state are recorded.
- Before/after output is compared under matching conditions.
- Long text, Persian numerals, and multiline titles are not clipped.
- Mobile has no horizontal overflow or unreachable actions.
- Expanded and collapsed panels and dialogs match the design.
- Previously approved desktop behavior is rechecked after shared changes.

Screenshots help developers review their work. Sending them to a manager is only required when the team's process calls for it; they do not replace testing the running branch.

## Ready to continue

Material differences must be resolved or explicitly accepted. Record decisions for incomplete designs, then proceed to [behavior testing](./testing).

## Use fewer tokens

Send a short numbered list of related differences. Include the relevant link and screenshot rather than repeating the full conversation.
