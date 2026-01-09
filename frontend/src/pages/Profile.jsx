import { useState } from "react";
import axios from "axios";
import { getInitials } from "../utils/avatar";

function Profile() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    name: storedUser?.name || "",
    email: storedUser?.email || "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(
        "http://localhost:3001/profile",
        {
          id: storedUser.id,
          name: form.name,
          email: form.email,
          password: form.password,
        }
      );

      if (res.data.success) {
        alert("✅ Profile updated successfully");

        // update localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...storedUser,
            name: form.name,
            email: form.email,
          })
        );
      } else {
        alert("❌ Update failed");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("❌ Server error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-full bg-orange-500 text-white
                          flex items-center justify-center text-2xl font-bold">
            {getInitials(storedUser?.name)}
          </div>

          <div>
            <h2 className="text-2xl font-bold">{storedUser?.name}</h2>
            <p className="text-gray-500">{storedUser?.email}</p>
          </div>
        </div>

        {/* Basic Info */}
        <h3 className="text-lg font-semibold mb-4 border-b pb-2">
          Basic Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div>
            <label className="text-sm font-medium text-gray-600">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
            />
          </div>
        </div>

        {/* Security */}
        <h3 className="text-lg font-semibold mb-4 border-b pb-2">
          Security
        </h3>

        <div className="mb-6">
          <label className="text-sm font-medium text-gray-600">
            Change Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full border p-3 rounded mt-1"
            placeholder="Enter new password"
          />
        </div>

        {/* Save Button */}
        <div className="text-right">
          <button
            onClick={handleSave}
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}

export default Profile;
