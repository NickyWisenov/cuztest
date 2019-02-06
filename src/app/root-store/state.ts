import { CommonStoreState } from './common-store';
import { PricemodelStoreState } from './pricemodel-store';
import { AuthStoreState } from './auth-store';

export interface State {
    common: CommonStoreState.State;
    pricemodel: PricemodelStoreState.State;
    auth: AuthStoreState.State;
}