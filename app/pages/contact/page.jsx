
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MonBouton from '../../components/Nouv/MonBouton.jsx';
import SectionTitle from '../../components/SectionTitle.jsx';
import btn from '../../css/MonBouton.module.css';
import Icon from '../../components/Icon.jsx';



// Page Contact

const ContactPage = () => {
  const { t } = useTranslation('contact');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(t('sending'));

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(t('successMessage'));
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus(`${t('error')}: ${result.message || t('defaultError')}`);
      }
    } catch (error) {
      console.error('Form error:', error);
      setStatus(t('serverError'));
    }
  };

  return (
    <main className="pt-10 bg-gray-50">
      <section className="py-16 container mx-auto px-6">
        <SectionTitle
          title={t('pageTitle')}
          subtitle={t('pageSubtitle')}
        />
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t('name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">{t('subject')}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('message')}</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              ></textarea>
            </div>
              <div className="flex justify-center">
            <MonBouton text={t('sendButton')} type="submit" ClassName={`${btn.boutonLogin} w-full`} />
            </div>
            {status && (
              <p className={`mt-4 text-center ${status.includes('succès') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
          </form>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('directInfoTitle')}</h3>
            <p className="text-gray-700 text-lg mb-2">
              <Icon name="Mail" className="inline-block w-6 h-6 mr-2 text-[#AD9551]" />
              contact@mhbusiness.com
            </p>
            <p className="text-gray-700 text-lg">
              <Icon name="Phone" className="inline-block w-6 h-6 mr-2 text-[#AD9551]" />
              0477 64 46 42
            </p>
            <p className="text-gray-700 text-lg mt-2">
              {t('responseCommitment')}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
