var grade = 87;

switch (true) {
	case grade >= 90 && grade <= 100:
		console.log("You got an A! Nice work.");
		break;
	case grade >=80 && grade <= 89:
		console.log("You got a B. Well done.");
		break;
	case grade >=70 && grade <=79:
		console.log("You got a C. Average.");
		break;
	case grade >=60 && grade <=69:
		console.log("You got a D... get better noob");
		break;
	default:
		console.log("You failed");
	};

