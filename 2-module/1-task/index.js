/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  for (let key in salaries) {
    if (typeof salaries[key] == 'number') {
      return salaries.John + salaries.Ann + salaries.Pete;
    } else {
      return 0;
    }
  }



}
