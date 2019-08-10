// evaluate if exists 'x' services

// module
const container = config => ({
    get(service, data) {
        if(!config[service]) { // evalua el obj service
            throw new Error(`Service ${service} not found`);
        }
        
        const serviceFactory = config[service];
        return serviceFactory(this, data);
    }
});

module.exports = container;