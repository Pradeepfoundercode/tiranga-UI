# Tiranga UI

## Setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Architecture

- React Router handles page navigation.
- TanStack React Query handles API/server state and cache.
- Local React state handles page-specific UI state and modal state.
- Custom hooks contain reusable data and timer logic.
- Axios provides the API client.
- React Hook Form and Zod handle form state and validation.
- React Hot Toast handles user feedback.

The project does not add Zustand or Context API because the current application has no client-global state that requires either. They can be introduced when a real shared client-state requirement appears.
