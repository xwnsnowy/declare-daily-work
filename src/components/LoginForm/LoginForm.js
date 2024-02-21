const LoginForm = ({
  username,
  password,
  rememberMe,
  setUsername,
  setPassword,
  setRememberMe,
  handleLogin,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full mb-4 p-2 rounded border border-gray-300"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 rounded border border-gray-300"
      />
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="mr-2"
        />
        Remember Me
      </label>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
