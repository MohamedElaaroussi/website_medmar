
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


export default function ContactForm() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  const form = useRef();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const sendEmail = (data) => {
    emailjs.sendForm('service_68w3e5r', 'template_9q4ojeu', form.current, 'YuQm28pQsPx_H0Slh')
      .then((result) => {
        console.log(result.text);
        // Show success message with SweetAlert including the user's name
        Swal.fire({
          icon: 'success',
          title: `Success, ${data.from_name}!`,
          text: 'Your message has been sent successfully.',
        });
      })
      .catch((error) => {
        console.log(error.text);
        // Show error message with SweetAlert including the user's name
        Swal.fire({
          icon: 'error',
          title: `Oops, ${data.from_name}...`,
          text: 'Something went wrong! Please try again later.',
        });
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-md-6">
              <form className="row g-3" ref={form} onSubmit={handleSubmit(sendEmail)}>
                <div className="form-floating col-12">
                  <input
                    {...register('from_name', { required: 'First Name is required' })}
                    className={`form-control border-0 bg-blue-200 rounded-pill px-3 ${errors.from_name ? 'is-invalid' : ''}`}
                    type="text"
                    placeholder="First Name"
                  />
                  <label className="ms-3">{t("Entrez votre nom")}</label>
                  {errors.from_name && <div className="invalid-feedback">{errors.from_name.message}</div>}
                </div>
                <div className="form-floating col-12">
                  <input
                    {...register('last_name', { required: 'Last Name is required' })}
                    className={`form-control border-0 bg-blue-200 rounded-pill px-3 ${errors.last_name ? 'is-invalid' : ''}`}
                    type="text"
                    placeholder="Last Name"
                  />
                  <label className="ms-3">{t("Entrez votre prénom")}</label>
                  {errors.last_name && <div className="invalid-feedback">{errors.last_name.message}</div>}
                </div>
                <div className="form-floating col-12">
                  <input
                    {...register('from_email', { required: 'Email is required' })}
                    className={`form-control border-0 bg-blue-200 rounded-pill px-3 ${errors.from_email ? 'is-invalid' : ''}`}
                    type="email"
                    placeholder="Email Id"
                  />
                  <label className="ms-3">{t("Entrez votre email")}</label>
                  {errors.from_email && <div className="invalid-feedback">{errors.from_email.message}</div>}
                </div>
                <div className="form-floating col-12">
                  <input
                    {...register('from_phone', { required: 'Number is required' })}
                    className={`form-control border-0 bg-blue-200 rounded-pill px-3 ${errors.from_phone ? 'is-invalid' : ''}`}
                    type="number"
                    placeholder="Mobile Number"
                  />
                  <label className="ms-3">{t('Entrez votre Téléphone')}</label>
                  {errors.from_phone && <div className="invalid-feedback">{errors.from_phone.message}</div>}
                </div>
                <div className="form-floating col-12">
                  <textarea
                    className="form-control border-0 bg-blue-200 b-6 px-3"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    {...register('message')}
                  ></textarea>
                  <label className="ms-3">  {t("Message")}</label>
                </div>
                <div className="col-12 pt-3">
                  <button
                    id="applyFormSubmitBtn"
                    type="submit"
                    className="btn  rounded-pill bg-brand-primay px-5 py-2"
                  >
                    {t("Envoyer")}
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 overflow-hidden b-6">
              <iframe height="100%" width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11488.425931931753!2d-9.556381716121866!3d30.4034579677218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b70ae1316977%3A0x3a9cb2983f13cd5b!2sMedmar%20media%20marketing%20services!5e1!3m2!1sfr!2sma!4v1702845971503!5m2!1sfr!2sma"  ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
