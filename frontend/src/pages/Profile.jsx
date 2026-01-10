/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { getInitials } from "../utils/avatar";

function Profile() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    name: storedUser?.name || "",
    email: storedUser?.email || "",
    phone: storedUser?.phone || "",
    role: storedUser?.role || "user",
    address: storedUser?.address || "",
    bio: storedUser?.bio || "",
    password: "",
  });

  const [avatar, setAvatar] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("id", storedUser.id);
      Object.keys(form).forEach((key) =>
        formData.append(key, form[key])
      );
      if (avatar) formData.append("avatar", avatar);

      const res = await axios.put(
        "http://localhost:3001/profile",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        alert("✅ Profile updated successfully");

        localStorage.setItem(
          "user",
          JSON.stringify({
            ...storedUser,
            ...form,
            avatar: res.data.user.avatar || storedUser.avatar,
          })
        );
      } else {
        alert("❌ Update failed");
      }
    } catch (err) {
      alert("❌ Server error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

        {/* PROFILE HEADER */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-full bg-orange-500 text-white
                          flex items-center justify-center text-3xl font-bold overflow-hidden">
            {storedUser?.avatar ? (
              <img
                src={`http://localhost:3001/uploads/${storedUser.avatar}`}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              getInitials(form.name)
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
          </div>
        </div>

        {/* BASIC INFO */}
        <h3 className="text-lg font-semibold mb-4 border-b pb-2">
          Basic Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone", name: "phone", type: "text" },
            { label: "Role", name: "role", type: "text" },
          ].map((field) => (
            <div key={field.name}>
              <label className="text-sm font-medium text-gray-600">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                className="w-full border p-3 rounded mt-1"
              />
            </div>
          ))}
        </div>

        {/* EXTRA INFO */}
        <h3 className="text-lg font-semibold mb-4 border-b pb-2">
          Additional Information
        </h3>

        <div className="mb-6">
          <label className="text-sm font-medium text-gray-600">
            Address
          </label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-3 rounded mt-1"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-gray-600">
            Bio
          </label>
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            className="w-full border p-3 rounded mt-1"
          />
        </div>

        {/* SECURITY */}
        <h3 className="text-lg font-semibold mb-4 border-b pb-2">
          Security
        </h3>

        <div className="mb-8">
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

        {/* SAVE BUTTON */}
        <div className="text-right">
          <button
            onClick={handleSave}
            className="bg-orange-500 text-white px-8 py-2 rounded hover:bg-orange-600"
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}

export default Profile;
