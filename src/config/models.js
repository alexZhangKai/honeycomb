// @flow

import Realm from 'realm';

const models = [
    {
        schemaVersion: 1,
        schema: [
            {
                name: 'Job',
                primaryKey: 'uuid',
                properties: {
                    uuid: 'string',
                    fee: 'double',
                    size: 'int',
                    attr: 'string?[]'
                }
            }
        ]
    }
];

let currentVersion = Realm.schemaVersion(Realm.defaultPath);
if (currentVersion !== -1) {
    while (currentVersion < models.length) {
        const realm = new Realm(models[currentVersion++]);
        realm.close();
    }
}

export default new Realm(models[models.length - 1]);
