const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome {user?.role}
      </h1>

      {user?.role === "Admin" && <p>Admin Panel</p>}
      {user?.role === "Sales Executive" && <p>Sales Panel</p>}
      {user?.role === "Manager" && <p>Manager Panel</p>}
    </div>
  );
};

export default Dashboard;