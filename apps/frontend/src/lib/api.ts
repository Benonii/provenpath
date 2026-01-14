import type { ContactFormInputs } from "@/components/sections/contact-form";

const apiUrl = import.meta.env.VITE_API_URL || '/api';

export const sendContactForm = async (data: ContactFormInputs) => {
  const response = await fetch(`${apiUrl}/email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Failed to send message');
  }

  return result;
};

