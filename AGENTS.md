# OpenCode Agent Instructions

## Commands
- **Development**: `npm run dev`
- **Build**: `npm run build` (runs `type-check` and `build-only`)
- **Testing**: `npm run test:unit`
- **Linting**: `npm run lint` (runs `oxlint` and `eslint`)
- **Formatting**: `npm run format`

## Setup & Conventions
- **Environment**: Ensure a `.env` file exists (use `.env.template` as a base).
- **Verification**: Always run `npm run lint` and `npm run type-check` before finalizing changes.
- **Tooling**: Uses Vite, Vitest, Vue 3, Pinia, Tailwind CSS.
