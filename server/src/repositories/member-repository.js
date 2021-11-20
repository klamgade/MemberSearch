const logger = require('../utils/logger');
const getMembersJSON = require('../MOCK_DATA.json');
const Member = require('../models/member');
 

class MemberRepository {
    constructor(logger) {
        this.log = logger;
        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
    }

    async getAll(filter) {
        logger.info(`navigating to paged to get all members`);
        let allMembers = getMembersJSON;

        let filteredMembers = allMembers.filter((member) => { 
            if(!filter.memberCardNumber) {
                return member.policyNumber == filter.policyNumber;
            } else {
                return member.policyNumber == filter.policyNumber && member.memberCardNumber == filter.memberCardNumber;
            }
        });
        return filteredMembers;
    }

    async create(doc) {
        return await Member.create(doc);
    }
}


module.exports = MemberRepository;
