const MemberRepository = require('../../repositories/member-repository');
const logger = require('../../utils/logger');

class MemberHandlers {
    constructor(logger) {
        this.memberRepository = new MemberRepository(logger);
        this.getMembers = this.getMembers.bind(this);
        this.buildFilter = this.buildFilter.bind(this);
    }

    async getMembers(req, res) {
        try {
            const query = req.query;
            const filter = this.buildFilter(query);
            logger.info(`accessing to member repository`);
            let result = await this.memberRepository.getAll(filter);
            res.status(200);
            res.json({
                    response: result
                }); 
        } catch (error) {
            logger.info('error', error)
        }
    }

    async createMember(req, res) {
		try {
            const input = req.body;
            if(input) {
                let result = await this.memberRepository.create(input);
                res.status(200);
                res.json({
                    data: result.toObject(),
                });
            } else {
                res.status(400);
                res.json({ data: null });
            }
        } catch (err) {
            this.handleError(err, res);
        }
    }

    buildFilter(query) {
        let filter = {};
        if(query.policyNumber) {
            filter.policyNumber = query.policyNumber;
        }
        if(query.memberCardNumber) {
            filter.memberCardNumber = query.memberCardNumber;
        } 
        return filter;
    }
}

module.exports = MemberHandlers;