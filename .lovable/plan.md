

## Problem

The uploaded Python logo PNG has a transparent background, but when saved as an asset, the transparency may have been lost, or the `<img>` element doesn't blend with its container backgrounds. The fix is straightforward: ensure the image file is correctly copied with transparency preserved, and that no CSS is adding a background.

## Plan

1. **Re-copy the uploaded PNG** from `user-uploads://Python-programming-logo-on-transparent-background-PNG.png` to `src/assets/python-logo.png`, ensuring binary fidelity (transparency preserved).

2. **Update `PythonIcon.tsx`** to add `object-contain` and ensure no background is applied — the `className` pass-through should handle sizing, but we can also add `bg-transparent` as a safety measure:

```tsx
<img src={pythonLogo} alt="Python" className={`bg-transparent ${className}`} />
```

This ensures the logo blends with whatever background it's placed on (dark filter buttons, light skill tags, etc.).

