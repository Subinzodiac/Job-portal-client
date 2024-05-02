import React, { useState } from 'react';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mfaCode, setMfaCode] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      // Perform authentication
      // Verify username and password
      // Implement MFA if enabled
      // Check user role for admin access
      // Redirect to admin dashboard upon successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
    {error && <p className="text-red-500 mb-4">{error}</p>}
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="block text-gray-700">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      {/* Additional fields for MFA if implemented */}
      <div className="mb-4">
        <label className="block text-gray-700">MFA Code:</label>
        <input
          type="text"
          value={mfaCode}
          onChange={(e) => setMfaCode(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
    type="submit"
     onClick={handleLogin} // Add onClick event handler
    className="py-1 px-2 border rounded bg-Green text-white ">
    Login
    </button>
    </form>
  </div>
  );
};

export default AdminLoginPage;
