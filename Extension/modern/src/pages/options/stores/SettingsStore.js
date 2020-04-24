import {
    action,
    observable,
    runInAction,
} from 'mobx';

import messenger from '../../../services/messenger';

class SettingsStore {
    @observable settings = null;

    @observable optionsReadyToRender = false;

    @observable version = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    async requestOptionsData() {
        const data = await messenger.getOptionsData();
        runInAction(() => {
            this.settings = data.settings;
            this.version = data.appVersion;
            this.optionsReadyToRender = true;
        });
    }
}

export default SettingsStore;
