// @flow

import db from '../config/models';

class JobData {
    static getJobList() {
        let jobs = db.objects('Job');

        // load sample data if list is empty
        if (jobs.length === 0) {
            db.write(() => {
                db.create('Job', { uuid: '1', fee: 13.0, size: 1 });
                db.create('Job', { uuid: '2', fee: 10.1, size: 2 });
                db.create('Job', { uuid: '3', fee: 10.4, size: 3 });
                db.create('Job', { uuid: '4', fee: 6, size: 4, attr: ['cold', 'hot', 'fragile'] });
            });
            jobs = db.objects('Job');
        }

        return jobs.map((j) => ({
            uuid: j.uuid,
            fee: j.fee,
            size: j.size
        }));
    }

    static removeJob(uuid) {
        db.write(() => {
            const delJob = db.objectForPrimaryKey('Job', uuid);
            db.delete(delJob);
        });
    }
}

export default JobData;
