import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function UserDetail() {
  const { id } = useParams(); // 从 URL 获取用户 id
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, [id]);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center text-gray-500 px-4 py-12">
        Loading user details...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 flex items-start justify-center px-4 py-12">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">{user.name}</h1>

        <p className="text-gray-700">
          <strong>Username:</strong> {user.username}
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="text-gray-700">
          <strong>Website:</strong> {user.website}
        </p>

        <h2 className="text-lg font-semibold text-gray-800 mt-4">🏢 Company</h2>
        <p className="text-gray-700">{user.company.name}</p>
        <p className="text-gray-500 italic">"{user.company.catchPhrase}"</p>
        <p className="text-gray-500 italic">bs:"{user.company.bs}"</p>

        <h2 className="text-lg font-semibold text-gray-800 mt-4">📍 Address</h2>
        <p className="text-gray-700">
          {user.address.suite}, {user.address.street}, {user.address.city},{' '}
          {user.address.zipcode}
        </p>

        <Link
          to="/"
          className="inline-block mt-6 text-blue-600 hover:underline font-medium"
        >
          ← Back to Contacts
        </Link>
      </div>
    </section>
  );
}

export default UserDetail;
