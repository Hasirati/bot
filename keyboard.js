const kb = require('./keyboard-button')

module.exports = {
	home: [
		[kb.home.schedule, kb.home.map, kb.home.mkl],
		[kb.home.expert],
		[kb.home.mess],
	],
	mk: [[kb.mk.morning, kb.mk.evening]],
}
