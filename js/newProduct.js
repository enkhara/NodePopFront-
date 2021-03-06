import LoaderController from './Controllers/LoaderController.js';
import ErrorsController from './Controllers/ErrorsController.js';
import NewProductFormController from './Controllers/NewProductFormController.js';
import NavBarController from './Controllers/NavBarController.js';
import LogoutController from './Controllers/LogoutController.js';

window.addEventListener('DOMContentLoaded', () => {
	const loader = document.querySelector('.loader-container');
	new LoaderController(loader);

	const navBar = document.querySelector('.nav-bar');
	new NavBarController(navBar);

	const logoutButtonElement = document.querySelector('.logout-button');
	const logoutButton = new LogoutController(logoutButtonElement);
	logoutButton.deleteTokeFromStorage();

	const errorElement = document.querySelector('.global-errors');
	new ErrorsController(errorElement);

	const formElement = document.querySelector('form');
	new NewProductFormController(formElement);
});
