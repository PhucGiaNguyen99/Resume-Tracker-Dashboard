import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import useStore from '../store/useStore';

// Position, company, and status are required
const JobSchema = Yup.object({
    position: Yup.string().required(),
    company: Yup.string().required(),
    status: Yup.string().required(),
});

export default function JobForm() {
    // Pull the logged-in user from global Zustand store
    // Link the submitted job entries with a userId
    const user = useStore(state => state.user);

    return (
        <Formik
            // Set the default values for position, company, and status
            initialValues={{ position: '', company: '', status: 'applied' }}
            validationSchema={JobSchema}
        
            onSubmit={async (values, actions) => {
                // Add the job to Firestore
                // Attach the current user's ID
                await addDoc(collection(db, 'jobs'), {
                    ...values,
                userId: user.uid,
                createdAt: new Date().toISOString()
                });
                actions.resetForm();
            }}
            >
                <Form className="flex flex-col gap-4 p-4">
                    <Field name="position" placeholder="Position" className="border p-2" />
                    <ErrorMessage name="position" className="text-red-600 text-sm" component="div" />

                    <Field name="company" placeholder="Company" className="border p-2" />
                    <ErrorMessage name="company" className="text-red-600 text-sm" component="div" />

                    // Add the dropdown to select job application status
                    <Field as="select" name="status" className="border p-2">
                        <option value="applied">Applied</option>
                        <option value="interview">Interview</option>
                        <option value="offer">Offer</option>
                        <option value="rejected">Rejected</option>
                    </Field>

                    <button type="submit" className="bg-green-600 text-white p-2">Submit</button>
                </Form>
        </Formik>
    );
}