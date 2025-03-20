export function getAge(birthday: Date) {
	const today = new Date();
	let age = today.getFullYear() - birthday.getFullYear();
	const monthDifference = today.getMonth() - birthday.getMonth();
	const dayDifference = today.getDate() - birthday.getDate();

	if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
		age--;
	}

	return age;
}
