import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const config = {
	position: 'top-center',
	autoClose: 4000,
	hideProgressBar: true,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: false,
	progress: undefined,
};

export const showAlert = (message, type) => {
	toast.configure();
	if (type === 'error') {
		toast.error(message, config);
	} else if (type === 'warning') {
		toast.warning(message, config);
	} else if (type === 'success') {
		toast.success(message, config);
	} else {
		toast.info(message, config);
	}
};