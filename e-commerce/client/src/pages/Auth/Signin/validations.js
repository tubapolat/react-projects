import * as yup from "yup";

const validations = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid e-mail address.")
		.required("Required field."),
	password: yup
		.string()
		.min(5, "Your password should be at least 4 characters")
		.required(),
});

export default validations;
