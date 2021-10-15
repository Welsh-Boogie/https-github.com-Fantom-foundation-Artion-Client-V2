export const SET_LANGUAGE = 'setLanguage';
export const SET_DOCUMENT_TITLE = 'setDocumentTitle';
export const SET_THEME = 'setTheme';
export const SET_TX_STATUS = 'setTxStatus';

export const mutations = {
    /**
     * @param {AppState} state
     * @param {string} languageCode
     */
    [SET_LANGUAGE](state, languageCode) {
        state.language = languageCode;
    },
    /**
     * @param {AppState} state
     * @param {string} title
     */
    [SET_DOCUMENT_TITLE](state, title) {
        state.documentTitle = title;
    },
    /**
     * @param {AppState} state
     * @param {string} theme
     */
    [SET_THEME](state, theme) {
        state.theme = theme;
    },
    /**
     * @param {AppState} state
     * @param {TxStatus} txStatus
     */
    [SET_TX_STATUS](state, txStatus) {
        state.txStatus = txStatus;
    },
};
