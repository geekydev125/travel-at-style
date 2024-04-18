import { redirect } from 'next/navigation';

export default function Home() {
	redirect('/steamers');
	
	return null;
}
