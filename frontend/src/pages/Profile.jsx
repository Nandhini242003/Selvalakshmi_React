/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { getInitials } from "../utils/avatar";

// Toast Component
function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center gap-3 animate-slide-in`}>
      <span className="text-lg">
        {type === "success" ? "✅" : "❌"}
      </span>
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 text-xl hover:text-gray-200">
        ×
      </button>
    </div>
  );
}

function Profile() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "user",
    address: "",
    bio: "",
    password: "",
  });

  const [avatar, setAvatar] = useState(null);
  const [currentAvatar, setCurrentAvatar] = useState(null);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data from database on mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/profile/${storedUser.id}`);
        if (res.data.success) {
          const userData = res.data.user;
          setForm({
            name: userData.name || "",
            email: userData.email || "",
            phone: userData.phone || "",
            role: userData.role || "user",
            address: userData.address || "",
            bio: userData.bio || "",
            password: "",
          });
          setCurrentAvatar(userData.avatar);
        }
      } catch (err) {
        showToast("Failed to load profile data", "error");
      } finally {
        setLoading(false);
      }
    };

    if (storedUser?.id) {
      fetchUserData();
    }
  }, [storedUser.id]);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("id", storedUser.id);
      
      Object.keys(form).forEach((key) => {
        if (form[key] || key === "password") {
          formData.append(key, form[key]);
        }
      });
      
      if (avatar) formData.append("avatar", avatar);

      const res = await axios.put(
        "http://localhost:3001/profile",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        showToast("Profile updated successfully", "success");

        // Update localStorage with new data
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...storedUser,
            name: form.name,
            email: form.email,
            avatar: res.data.user.avatar || currentAvatar,
          })
        );

        // Update current avatar display
        if (res.data.user.avatar) {
          setCurrentAvatar(res.data.user.avatar);
        }

        // Clear password field after successful update
        setForm({ ...form, password: "" });
        setAvatar(null);
      } else {
        showToast(res.data.message || "Update failed", "error");
      }
    } catch (err) {
      showToast(err.response?.data?.message || "Server error", "error");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* PROFILE HEADER */}
          <div className="flex items-center gap-6 mb-10">
            <div className="w-24 h-24 rounded-full bg-orange-500 text-white flex items-center justify-center text-3xl font-bold overflow-hidden">
              {currentAvatar ? (
                <img
                  src={`http://localhost:3001/uploads/${currentAvatar}`}
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
                className="text-sm"
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
                  className="w-full border p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            ))}
          </div>

          {/* EXTRA INFO */}
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">
            Additional Information
          </h3>

          <div className="mb-6">
            <label className="text-sm font-medium text-gray-600">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows="3"
              className="w-full border p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium text-gray-600">Bio</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows="4"
              className="w-full border p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* SECURITY */}
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Security</h3>

          <div className="mb-8">
            <label className="text-sm font-medium text-gray-600">
              Change Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Leave blank to keep current password"
            />
          </div>

          {/* SAVE BUTTON */}
          <div className="text-right">
            <button
              onClick={handleSave}
              className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors font-medium"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* CSS for Toast Animation */}
        <style>{`
          @keyframes slide-in {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide-in {
            animation: slide-in 0.3s ease-out;
          }
        `}</style>
      </div>
    </>
  );
}

export default Profile;