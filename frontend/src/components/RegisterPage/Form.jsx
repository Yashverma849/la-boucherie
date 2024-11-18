export default function RegisterForm({ formData, handleInputChange }) {
  return (
    <div className="flex flex-col space-y-4 mt-10">
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        className="border px-3 py-3 rounded-md outline-primary"
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        className="border px-3 py-3 rounded-md outline-primary"
      />
      <input
        type="number"
        placeholder="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        className="border px-3 py-3 rounded-md outline-primary"
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="border px-3 py-3 rounded-md outline-primary"
      />
      <div className="flex gap-8">
        <div className="w-1/2">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="border px-3 py-3 rounded-md w-full outline-primary"
          />
        </div>
        <div className="w-1/2">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="border px-3 py-3 rounded-md w-full outline-primary"
          />
        </div>
      </div>
      <input
        type="text"
        placeholder="Address"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        className="border px-3 py-3 rounded-md outline-primary"
      />
    </div>
  );
}
