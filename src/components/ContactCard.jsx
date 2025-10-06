import React from 'react';
import { Link } from 'react-router-dom';

function ContactCard({ contact }) {
  return (
    <Link
      to={`/user/${contact.id}`}
      className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1 block"
    >
      <h2 className="text-lg font-semibold text-blue-600 mb-1">
        {contact.name}
      </h2>
      <p className="text-gray-700">👤 Username: {contact.username}</p>
      <p className="text-gray-700">📧 Email: {contact.email}</p>
      <p className="text-gray-700">🏢 Company: {contact.company.name}</p>
      <p className="text-gray-700">📍 City: {contact.address.city}</p>
      <p className="text-gray-700">📞 Phone: {contact.phone}</p>
    </Link>
  );
}

export default ContactCard;
