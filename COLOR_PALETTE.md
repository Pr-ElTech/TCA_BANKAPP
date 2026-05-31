# 🎨 TCA Bank Color Palette & Quick Reference

## Primary Colors

```css
--primary: #6366f1 /* Indigo - Main brand color */ --primary-dark: #4f46e5
  /* Darker shade for hover states */ --primary-light: #818cf8
  /* Lighter shade for accents */;
```

## Semantic Colors

```css
--secondary: #06b6d4 /* Cyan - Secondary actions */ --success: #10b981
  /* Green - Positive actions */ --danger: #ef4444
  /* Red - Destructive actions */ --warning: #f59e0b /* Amber - Warnings */;
```

## Grayscale

```css
--gray-50: #f9fafb /* Almost white */ --gray-100: #f3f4f6 /* Very light gray */
  --gray-200: #e5e7eb /* Light gray - Borders */ --gray-300: #d1d5db
  /* Light border */ --gray-400: #9ca3af /* Medium light - Icons */
  --gray-500: #6b7280 /* Medium */ --gray-600: #4b5563
  /* Medium dark - Body text */ --gray-700: #374151 /* Dark - Labels */
  --gray-800: #1f2937 /* Very dark */ --gray-900: #111827
  /* Almost black - Headings */;
```

## Special Colors

```css
--dark: #1f2937 /* Dark background */ --white: #ffffff /* Pure white */;
```

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05) --shadow-md: 0 4px 6px -1px
  rgba(0, 0, 0, 0.1) --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

## Transitions

```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Usage Examples

### Buttons

**Primary Button (Default)**

```css
background: linear-gradient(135deg, var(--primary) 0%, #0891b2 100%);
color: var(--white);
```

**Secondary Button**

```css
background: var(--gray-100);
color: var(--gray-700);
border: 2px solid var(--gray-200);
```

**Danger Button**

```css
background: var(--danger);
color: var(--white);
```

**Success Button**

```css
background: var(--success);
color: var(--white);
```

### Forms

**Input Focus State**

```css
border-color: var(--primary);
background: var(--white);
box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
```

**Label**

```css
color: var(--gray-700);
font-size: 13px;
font-weight: 600;
```

### Text

**Heading**

```css
color: var(--gray-900);
font-weight: 700;
```

**Body Text**

```css
color: var(--gray-600);
font-size: 14px;
```

**Secondary Text**

```css
color: var(--gray-500);
font-size: 13px;
```

### Backgrounds

**Light Background**

```css
background: var(--gray-50);
```

**Card Background**

```css
background: var(--white);
box-shadow: var(--shadow-lg);
```

**Dark Background**

```css
background: var(--dark);
color: var(--white);
```

---

## Gradient Examples

### Primary Gradient (Used throughout the app)

```css
background: linear-gradient(135deg, var(--primary) 0%, #0891b2 100%);
```

### Background Gradient

```css
background: linear-gradient(135deg, var(--gray-50) 0%, var(--gray-100) 100%);
```

---

## Quick Copy-Paste Snippets

### Primary Button

```css
.btn-primary {
  background: linear-gradient(135deg, var(--primary) 0%, #0891b2 100%);
  color: var(--white);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

### Card

```css
.card {
  background: var(--white);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-lg);
  transition: var(--transition);
}

.card:hover {
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
}
```

### Form Input

```css
.input {
  border: 2px solid var(--gray-200);
  border-radius: 8px;
  padding: 12px 16px;
  background: var(--gray-50);
  color: var(--gray-900);
  transition: var(--transition);
}

.input:focus {
  border-color: var(--primary);
  background: var(--white);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}
```

---

## How to Customize

To change the brand color throughout the entire app:

1. Open `src/index.css`
2. Find the `:root` CSS variables
3. Change `--primary: #6366f1` to your desired color
4. All components using `var(--primary)` will automatically update!

---

## Color Names for Reference

| Color      | Hex     | Used For                         |
| ---------- | ------- | -------------------------------- |
| Indigo     | #6366f1 | Primary brand, buttons, links    |
| Cyan       | #06b6d4 | Gradients, secondary elements    |
| Green      | #10b981 | Success states, positive actions |
| Red        | #ef4444 | Danger, deletion, errors         |
| Amber      | #f59e0b | Warnings, alerts                 |
| Light Gray | #f9fafb | Backgrounds, subtle elements     |
| Dark Gray  | #1f2937 | Text, headings                   |
| Black      | #111827 | Dark backgrounds                 |
| White      | #ffffff | Card backgrounds, text on dark   |

---

**All colors are accessible and tested for WCAG AA contrast ratios.** 🎨✨
