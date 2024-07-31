const UserProfile = ({ user }) => {
  return (
    <div className="flex flex-col items-center mb-6">
      <img
        className="w-32 h-32 rounded-full mb-4"
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
      />
      <p className="text-xl font-bold text-text">{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
    </div>
  );
};

export default UserProfile;
