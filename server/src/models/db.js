const mongoose = require('mongoose');

const build_cs = (db) => {
    let cs = 'mongodb://';

    if(db.username && db.pass) {
        cs = cs + `${db.username}:${db.pass}@`;
    }

    cs = cs + `${db.uri}/${db.name}`;

    return cs;
};

module.exports = async(config, timeout = 2000) => {
    const cs = build_cs(config);

    const maxRetry = config.max_retry || 2;
    let attempt = 0;
    while (true) {
        attempt = attempt + 1;
        console.log(`mongodb connection attempt ${attempt}`);
        try {
            await mongoose.connect(cs, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 1000, poolSize: 10, bufferMaxEntries: 0 });
            console.log(`connection established to mongodb`);
            break;
        } catch(err) {
            if (attempt <= maxRetry) {
                console.log(`error connecting to mongodb ${err.message}`, {err});
                await new Promise(r => setTimeout(r, timeout));
            } else {
                throw err;
            }
        }
    }
}
