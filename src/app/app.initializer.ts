import { Store } from '@ngrx/store';
import * as featureActions from '../module/auth/store/auth.action';
import { AppState } from '../store/app.state';

export function appInitializer(store: Store<AppState>): () => Promise<void> {
  return () => {
    return new Promise<void>((resolve, reject) => {
      const savedState = localStorage.getItem('user');
      if (savedState) {
        try {
          const parsedState = JSON.parse(savedState);
          store.dispatch(featureActions.rehydrateState({ user: parsedState }));
        } catch (error) {
          console.error('Error parsing saved state:', error);
        }
      }
      resolve();
    });
  };
}
