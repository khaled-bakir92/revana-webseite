import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import SuccessAlert from './SuccessAlert';

interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Name ist erforderlich';
    }
    
    if (!formData.from_email.trim()) {
      newErrors.from_email = 'Email ist erforderlich';
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      newErrors.from_email = 'Ungültige Email-Adresse';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (!formRef.current) return;

      const result = await emailjs.sendForm(
        'service_5zhy7wt',
        'template_nr1ax1w',
        formRef.current,
        'CVl99TLunZdNHcc6F'
      );

      if (result.status === 200) {
        setShowSuccess(true);
        setFormData({ from_name: '', from_email: '', message: '' });
      }
    } catch (error) {
      toast.error('Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="p-6 rounded-lg">
      <Toaster position="top-right" />
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Name"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          error={errors.from_name}
          disabled={isSubmitting}
        />
        <FormInput
          label="Email"
          name="from_email"
          type="email"
          value={formData.from_email}
          onChange={handleChange}
          error={errors.from_email}
          disabled={isSubmitting}
        />
        <FormTextarea
          label="Nachricht"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-6 py-3 bg-[#A3D9AC] text-white rounded-lg font-medium 
                  hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2
                  disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
          {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
        </button>
      </form>

      <SuccessAlert 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
      />
    </div>
  );
};

export default ContactForm;