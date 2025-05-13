
'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log(session?.user?.firstName)

  if (status === 'loading') return <p>Loading...</p>;
  if (!session) {
    router.push('/login'); // Redirect if not logged in
    return null; // Don't render the page if not logged in
  }

  return (
    <div>
      <h1>Your Profile</h1>
      <div>
        <p><strong>Hello, </strong> {session.user?.firstName}</p>
        <p><strong>Email:</strong> {session.user?.email}</p>
        {/* <p><strong>Username:</strong> {session.user?.username}</p> */}
      </div>
    </div>
  );
};

export default ProfilePage;
