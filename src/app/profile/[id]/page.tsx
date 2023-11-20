export default function UserProfilePage({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>
        Profile page of user
        <span className="p-2 rounded bg-orange-400">{params.id}</span>
      </p>
    </div>
  );
}
