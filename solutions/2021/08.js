import { DigitalDisplay } from '../../utils/2021/digital-display';
import { sum as sumArray } from '../../utils/general/array-tools';

export default function(inputFile) {

	/* Example */
	// Step 1: 26
	// Step 2: 61229

	/* Actual */
	// Step 1: 421
	// Step 2: 986163

	// Create array of digital display instances from input string
	let displays = inputFile.map(reading => {
		let io = reading.split(' | ');
		return new DigitalDisplay(io[0], io[1]);
	});

	// Calculate number of output digits with digits 1, 4, 7 or 8
	const uniqueOutputs = sumArray(displays.map(display => {
		return display.outputs.filter(output => output.possibleValues.length === 1).length;
	}));

	// Calculate total of all display values
	const totalDisplayValue = sumArray(displays.map(display => display.outputValue));

	return {
		step1: uniqueOutputs,
		step2: totalDisplayValue
	}

}