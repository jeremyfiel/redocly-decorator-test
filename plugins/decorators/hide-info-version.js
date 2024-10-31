const id = 'myUniqueId';

/** @type {import('@redocly/cli').OasDecorator} */
const decorators = {
    oas3: {
        'hideInfoVersion': HideInfoVersion
    }
};


function HideInfoVersion() {
    console.log("removing Info.version");
    return {
        Info: {
            leave(target) {
                if(target.version) {
                    delete target.version;
                }
            }
        },
    }
};

module.exports = { id, decorators };
