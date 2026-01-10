import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const API_URL = "http://localhost:3001";

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        showToast(
          `Welcome ${response.data.user.name}! Login successful! 🎉`,
          "success"
        );

        // Navigate after a short delay to show the toast
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        showToast(response.data.message || "Invalid credentials", "error");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (_err) {
      showToast("Server error. Please try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

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

      <div>
        <form
          onSubmit={handleLogin}
          className="bg-gray-100 p-8 rounded shadow-md w-96 mx-auto mt-20"
        >
          <h2 className="text-2xl font-bold mb-6">Login</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded text-white transition font-medium
              ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"}`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

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

export default Login;