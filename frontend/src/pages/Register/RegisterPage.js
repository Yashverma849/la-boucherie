import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import RegisterForm from "../../components/RegisterPage/Form";
import RegisterBtn from "../../components/RegisterPage/RegisterBtn";
import RegisterLeft from "../../components/RegisterPage/RegisterLeft";
import RegisterPolicy from "../../components/RegisterPage/RegisterPolicy";
import { Navigate } from "react-router-dom";

export default function RegisterPage() {
  const { register } = useAuth();
  const [redirect, setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const submit = async () => {
    console.log(formData);

    const value = await register(formData); // Pass the formData to the register function
    if (value === "Success") {
      setRedirect(true); // Set redirect state to true upon success
    }
  };

  // Conditional redirect after registration
  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="flex mt-12">
        <RegisterLeft />
        <div className="w-2/3 px-4">
          <div className="border py-6 px-6 items-center justify-center register">
            <div>
              <h3 className="text-3xl font-medium">Register Here</h3>
            </div>
            <RegisterForm formData={formData} handleInputChange={handleInputChange} />
            <RegisterPolicy />
            <RegisterBtn submit={submit} /> {/* Pass submit function to RegisterBtn */}
          </div>
        </div>
      </div>
    </>
  );
}
