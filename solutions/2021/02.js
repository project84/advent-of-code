import { moveSubmarine } from '../../utils/2021/movement';

export default function (inputFile) {

	// Step 1: 2150351
	// Step 2: 1842742223

	const commands = inputFile.map(command => {
		let parts = command.split(' ');

		return {
			direction: parts[0],
			value: parseInt(parts[1])
		}

	});

	return {
		step1: moveSubmarine(commands, false).final,
		step2: moveSubmarine(commands, true).final
	};
}