# Giaza Font Setup

## Font Files Needed

To use the Giaza font for the ICONS title, you need to add these font files to the `public/fonts/` directory:

- `Giaza-Regular.woff2` (400 weight)
- `Giaza-Bold.woff2` (700 weight)

## Current Status

✅ Font configuration is set up in `app/layout.tsx`
✅ ICONS title in header uses Giaza font
✅ ICONS title in footer uses Giaza font

## To Complete Setup:

1. Add your Giaza font files to `public/fonts/`
2. The font will automatically load and display

## Fallback

If the Giaza font files are not found, the text will fall back to the default font (Cormorant Garamond).

## Font Usage

The Giaza font is applied to:
- Header ICONS title: `style={{ fontFamily: 'var(--font-giaza)' }}`
- Footer ICONS title: `style={{ fontFamily: 'var(--font-giaza)' }}`
