import pairValueComparison from '../../utils/general/pair-value-comparison';

export default function (inputFile) {

	// Step 1: 1553
	// Step 2: 1597

	// Read input file and convert values to integer
	const measurements = inputFile.map(measurement => parseInt(measurement));

	// Create array of rolling measurements
	const rollingMeasurements = measurements.map((measurement, i) => {
		return measurement + measurements[i + 1] + measurements[i + 2];
	});

	return {
		step1: pairValueComparison(measurements, 'increase'),
		step2: pairValueComparison(rollingMeasurements, 'increase')
	}
}