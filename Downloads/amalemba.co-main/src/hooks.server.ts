import { PREVIEW_COOKIE_KEY } from '$lib/constants';
import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
// import { dev } from '$app/environment';
// import * as Sentry from '@sentry/sveltekit';

// Sentry.init({
//   environment: PUBLIC_SENTRY_ENVIRONMENT || 'unknown-environment',
//   dsn: PUBLIC_SENTRY_DNS,
//   tracesSampleRate: 0.0
// });

const validateDraftMode: Handle = async ({ event, resolve }) => {
  event.locals.version = event.cookies.get(PREVIEW_COOKIE_KEY) ? 'draft' : 'published';

  const response = await resolve(event);
  // Note: https://www.storyblok.com/docs/guide/essentials/visual-editor#visual-editor-preview
  if (event.locals.version === 'draft') {
    response.headers.set('X-Frame-Options', 'ALLOW-FROM storyblok.com');
  }

  return response;
};

export const handle = sequence(validateDraftMode);

// Remove any other Sentry-related code
// const handleErrorWithSentry = (error) => {
//   // Custom error handling logic
// };
