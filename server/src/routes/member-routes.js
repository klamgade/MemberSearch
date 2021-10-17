const API_ROOT = '/members';
const MemberHandlers = require('./handler/member-handler');
const logger = require('../utils/logger');

module.exports = (app, log) => {
    const handlers = new MemberHandlers(log);
    logger.info(`navigating to members routes`);
    app.get(`${API_ROOT}`, handlers.getMembers);
}