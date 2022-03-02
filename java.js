let students = []
let current = 0

//загрузить данные студент по его id
function loadFromSite() {
	$.get('http://217.71.129.139:4035/students.php', function(data){
		students = JSON.parse(data)['response'];
	});
}
function load_students(id) {
	$('#name').val(students[id].name)
	$('#surname').val(students[id].surname)
}
	
//следующий студент
function next() {
	load_students(current)
	current++

if (current === students.length){
	}
}