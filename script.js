var who = prompt ('Кто пришёл?', '');

if (who == 'Админ') {
	var password = prompt ('Введите пароль', '');

	if (password == 'Чёрный Властелин') { 
		alert ('Добро пожаловать!');
	
	} else if (password == null) || (password == '') {
	alert ('Вход отменён');
	
	} else {
		alert ('Пароль неверен');
	}

} else if (who == null) || (password == '') {
	alert ('Вход отменён');

} else {
	alert ('Я вас не знаю');
