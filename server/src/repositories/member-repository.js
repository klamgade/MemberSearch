const logger = require('../utils/logger');
const getMembersJSON = require('../MOCK_DATA.json');
const Member = require('../models/member');
 

class MemberRepository {
    constructor(logger) {
        this.log = logger;
        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
        this.get = this.get.bind(this);
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

    async paged(filter, sortBy, page, perPage) {
        let results = [];

        let count = await Member.count(filter).exec();
        if(count > 0) {
            results = await Member
                .find(filter)
                .sort(sortBy)
                .lean()
                .limit(Number(perPage))
                .skip(perPage * page)
                .exec();   
        }
        return {
            total: count,
            items: results
        }
    }

    async get(identifier) {
        const result = await Member.findOne({ _id: identifier}).exec();
        return result;
    }

    async create(doc) {
        const result = await Member.create(doc);
        return result;
    }
}


module.exports = MemberRepository;
