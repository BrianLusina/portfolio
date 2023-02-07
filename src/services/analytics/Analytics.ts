import {
  logEvent,
  getAnalytics,
  Analytics as FirebaseAnalytics,
  EventParams,
  CustomEventName,
} from 'firebase/analytics';
import firebaseApp from '@services/firebase';
import config from '@config';

const {
  env: { nodeEnv, env },
} = config;

/**
 * Analytics Service.
 * This will handle all analytics events.
 * This could be a wrapper around any analytics library.
 */
export class Analytics {
  private readonly analytics: FirebaseAnalytics | undefined;

  constructor() {
    if (nodeEnv === 'production' || env === 'production') {
      this.analytics = getAnalytics(firebaseApp);
    }
  }

  logEvent(eventName: CustomEventName<string>, eventParams?: EventParams): void {
    if (this.analytics) {
      if (nodeEnv === 'production' || env === 'production') {
        logEvent(this.analytics, eventName, eventParams);
      }
    } else {
      console.log(`Analytics Stubbed: EventName: ${eventName}, EventParams: ${eventParams}`);
    }
  }
}

const analytics = new Analytics();

export default analytics;
