import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleNestedChange = (e: React.ChangeEvent<HTMLInputElement>, parent: 'address' | 'company') => {
    const { name, value } = e.target;
    setUser(prevUser => ({
        ...prevUser,
        [parent]: {
            ...prevUser[parent],
            [name]: value
        }
    }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="tel" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="url" name="website" value={user.website} onChange={handleChange} placeholder="Website" className="w-full px-4 py-2 border rounded-lg md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <fieldset className="border p-4 rounded-lg">
            <legend className="text-lg font-semibold text-gray-700 px-2">Address</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="street" value={user.address.street} onChange={(e) => handleNestedChange(e, 'address')} placeholder="Street" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" name="suite" value={user.address.suite} onChange={(e) => handleNestedChange(e, 'address')} placeholder="Suite" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" name="city" value={user.address.city} onChange={(e) => handleNestedChange(e, 'address')} placeholder="City" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" name="zipcode" value={user.address.zipcode} onChange={(e) => handleNestedChange(e, 'address')} placeholder="Zipcode" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </fieldset>

          <fieldset className="border p-4 rounded-lg">
            <legend className="text-lg font-semibold text-gray-700 px-2">Company</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" value={user.company.name} onChange={(e) => handleNestedChange(e, 'company')} placeholder="Company Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" name="catchPhrase" value={user.company.catchPhrase} onChange={(e) => handleNestedChange(e, 'company')} placeholder="Catchphrase" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <div className="md:col-span-2">
                <input type="text" name="bs" value={user.company.bs} onChange={(e) => handleNestedChange(e, 'company')} placeholder="Business Slogan (bs)" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          </fieldset>

          <div className="flex justify-between items-center pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
