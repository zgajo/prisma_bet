const { getUserId } = require('../utils');

const Query = {
	me: (parent, args, ctx, info) => {
		return ctx.db.query.user({ where: { id: getUserId(ctx) } }, info);
	},
	users: (parent, args, ctx, info) => {
		return ctx.db.query.users({}, info);
	},
};

module.exports = {
	Query,
};
