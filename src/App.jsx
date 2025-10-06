import { useEffect, useState } from 'react';
import axios from 'axios';
import ContactCard from './components/ContactCard';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setContacts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredContacts = contacts.filter(contact => {
    const term = searchTerm.toLowerCase();
    return (
      contact.name.toLowerCase().includes(term) ||
      contact.username.toLowerCase().includes(term)
    );
  });

  return (
    <section className="min-h-screen bg-gray-100 flex justify-center overflow-x-hidden">
      <div className="max-w-6xl mt-10 w-full px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          📇 My Contacts
        </h1>

        {loading ? null : (
          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Search by name or username..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full sm:w-2/3 md:w-[1/2] p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        <div className="mb-20">
          {loading ? (
            <p className="text-gray-500 text-center">Loading contacts...</p>
          ) : filteredContacts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {filteredContacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No contacts found matching "{searchTerm}"
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
