import { createContext, useContext, useState } from "react";

const RegisterContext = createContext();

export function RegisterProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [registerData, setRegisterData] = useState({
    fullName: "",
    myKadNumber: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    preschool: "",
  });

  const updateRegisterData = (field, value) => {
    setRegisterData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const resetRegisterData = () => {
    setRegisterData({
      fullName: "",
      myKadNumber: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      preschool: "",
    });
    setCurrentStep(1);
  };

  const value = {
    currentStep,
    registerData,
    updateRegisterData,
    nextStep,
    prevStep,
    resetRegisterData,
  };

  return (
    <RegisterContext.Provider value={value}>
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegister() {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error("useRegister must be used within RegisterProvider");
  }
  return context;
}

export default RegisterContext;
