const redis = require("redis");

const getClient = () => {
	return redis.createClient({
		host: 'localhost',
		port: '32768',
		password: 'redispw',
		db: 1,
	});
};

module.exports.getClient = getClient;
