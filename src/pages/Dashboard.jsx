const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="p-6">

      {/* COMMON HEADER */}
      <h1 className="text-2xl font-bold mb-6">
        Welcome {user?.role}
      </h1>

      {/* 🔥 STATS SECTION (ADD HERE) */}
      <div className="grid grid-cols-4 gap-4 mb-6">

        <div className="p-4 bg-blue-100 rounded-xl shadow">
          <h2 className="text-sm">Total Orders</h2>
          <p className="text-xl font-bold">10</p>
        </div>

        <div className="p-4 bg-yellow-100 rounded-xl shadow">
          <h2 className="text-sm">Pending</h2>
          <p className="text-xl font-bold">3</p>
        </div>

        <div className="p-4 bg-green-100 rounded-xl shadow">
          <h2 className="text-sm">Approved</h2>
          <p className="text-xl font-bold">5</p>
        </div>

        <div className="p-4 bg-red-100 rounded-xl shadow">
          <h2 className="text-sm">Rejected</h2>
          <p className="text-xl font-bold">2</p>
        </div>

      </div>

       {/* ADMIN UI */}
      {user?.role === "Admin" && (
        <div className="grid grid-cols-3 gap-6">

          <div className="p-4 shadow rounded-xl">
            <h2 className="font-semibold">Add Product</h2>
            <p>Create new inventory items</p>
          </div>

          <div className="p-4 shadow rounded-xl">
            <h2 className="font-semibold">Update Product</h2>
            <p>Edit product details</p>
          </div>

          <div className="p-4 shadow rounded-xl">
            <h2 className="font-semibold">Delete Product</h2>
            <p>Remove items from inventory</p>
          </div>

        </div>
      )}

      {/* SALES EXECUTIVE UI */}
      {user?.role === "Sales Executive" && (
        <div className="grid grid-cols-2 gap-6">

          <div className="p-4 shadow rounded-xl">
            <h2 className="font-semibold">Create Order</h2>
            <p>Select products and quantity</p>
          </div>

          <div className="p-4 shadow rounded-xl">
            <h2 className="font-semibold">My Orders</h2>
            <p>View your created orders</p>
          </div>

        </div>
      )}

      {/* MANAGER UI */}
      {user?.role === "Manager" && (
        <div className="grid grid-cols-2 gap-6">

          <div className="p-4 shadow rounded-xl">
            <h2 className="font-semibold">Pending Orders</h2>
            <p>Approve or reject orders</p>
          </div>

          <div className="p-4 shadow rounded-xl">
            <h2 className="font-semibold">Approval History</h2>
            <p>View past decisions</p>
          </div>

        </div>
      )}



     
    </div>
  );
};

export default Dashboard;