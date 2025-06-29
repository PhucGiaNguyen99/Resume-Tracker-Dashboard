import useStore from '../store/useStore';
import { useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export default function Dashboard() {
    // Get the logged-in user, jobs list, and setJobs from the Zustand global state store
    const { user, jobs, setJobs } = useStore();

    useEffect(() => {
        const fetchJobs = async () => {
            if (!user) return;

            // Query the documents from Firestore
            const q = query(collection(db, 'jobs'), where('userId', '==', user.uid));
            const snapshot = await getDocs(q);

            // Store the result in Zustand 
            setJobs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))); // Map the documents into objects
        };
        fetchJobs();
    }, [user]);

    return (
        <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <ul>
            {jobs.map(job => (
            <li key={job.id} className="border-b py-2">{job.position} @ {job.company} - {job.status}</li>
            ))}
        </ul>
        </div>
    );
}
