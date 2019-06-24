import * as Sentry from "@sentry/browser"; // (fails)
// also tried:
// import { init } from '@sentry/browser'; (fails)
// <...> from '@sentry/browser/dist/sdk; (in this case the init part gets transpiled to ({})   )
// <...> from '@sentry/browser/esm/sdk; (fails)
// <...> from '@sentry/browser/esm/; (fails)
// tried old Sentry v5.0 - and the init get's transpiled to ({})

Sentry.init({
	dsn: "SOMETHING",
	environment: "SOMETHING"
});
