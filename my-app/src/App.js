import "./App.css";
import { Formik, Field, Form } from "formik";

function App() {
  const initialValues=
  {
    firstName: "",
    lastName: "",
    email: "",
  }
  const onSubmit=async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  }
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik>
       
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
