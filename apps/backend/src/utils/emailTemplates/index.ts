import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ContactFormEmail } from './contactForm';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const renderContactFormEmail = (data: ContactFormData): string => {
  return renderToStaticMarkup(React.createElement(ContactFormEmail, data));
};

export const generateContactFormEmailText = (data: ContactFormData): string => {
  const { firstName, lastName, email, message } = data;
  return `New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}

---
Sent from Proven Path Contact Form`;
};