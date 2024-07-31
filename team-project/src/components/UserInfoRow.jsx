const UserInfoRow = ({ label, value }) => {
  return (
    <p>
      <strong>{label}:</strong> {value}
    </p>
  );
};

export default UserInfoRow;
