export class Config {
    static get(config) {
        if(!config)
            throw new Error('Config.get requires a key to be passed as a string.')
        return config.split('.').reduce(Config.objectPropertyReducer, Object.assign, window.config)
    }

    static objectPropertyReducer(aggregator, currentPropery) {
        return (typeof (aggregator) === 'undefined' || typeof (aggregator[currentPropery]) === 'undefined') ? undefined : aggregator[currentPropery]
    }
}