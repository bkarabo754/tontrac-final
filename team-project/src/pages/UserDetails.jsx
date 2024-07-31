import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Card from "@/components/Card";
import UserInfoRow from "@/components/UserInfoRow";
import UserProfile from "@/components/UserProfile";

// UserDetails component definition
const UserDetails = () => {
  // Get the location state which contains the user data
  const { state } = useLocation();
  // Hook to navigate
  const navigate = useNavigate();

  // Check if state or state.user is not available and display a message if true
  if (!state || !state.user) {
    return (
      <div className="text-center text-xl mt-8">No user details available</div>
    );
  }

  // Extract user data from the state
  const user = state.user;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Back button to navigate to the previous page */}
      <Button
        onClick={() => navigate(-1)}
        className="mb-4 bg-destructive hover:bg-destructive flex items-center animate-fadeIn text-text"
      >
        <ChevronLeft className="h-4 w-4 text-text" />
        Back
      </Button>
      <h1 className="text-3xl font-bold mb-6 text-center text-text animate-fadeIn">
        User Details
      </h1>
      {/* Card component to display user details */}
      <Card>
        {/* UserProfile component to display user profile picture and name */}
        <UserProfile user={user} />
        {/* Grid layout to display user information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-text">
          {/* UserInfoRow, a reusable component to display individual user details */}
          <UserInfoRow label="Gender" value={user.gender} />
          <UserInfoRow label="Email" value={user.email} />
          <UserInfoRow label="Cell" value={user.cell} />
          <UserInfoRow
            label="Location Number"
            value={user.location.street.number}
          />
          <UserInfoRow
            label="Location Name"
            value={user.location.street.name}
          />
          <UserInfoRow label="City" value={user.location.city} />
          <UserInfoRow label="State" value={user.location.state} />
          <UserInfoRow label="Country" value={user.location.country} />
        </div>
      </Card>
    </div>
  );
};

export default UserDetails;
