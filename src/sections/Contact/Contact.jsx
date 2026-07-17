import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactStyles.module.css';
import SpotlightCard from '../../common/SpotlightCard';
import SpecularButton from '../../common/SpecularButton';

// To receive emails, create a free form at https://formspree.io/ and paste your Form ID here:
const FORMSPREE_FORM_ID = ''; 

function Contact() {
  const [focused, setFocused] = useState({});
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleFocus = (field) => setFocused(prev => ({ ...prev, [field]: true }));
  const handleBlur = (field) => {
    if (!values[field]) setFocused(prev => ({ ...prev, [field]: false }));
  };
  const handleChange = (field, value) => setValues(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Trim values to sanitize slightly
    const sanitizedName = values.name.trim();
    const sanitizedEmail = values.email.trim();
    const sanitizedMessage = values.message.trim();

    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      if (FORMSPREE_FORM_ID) {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: sanitizedName,
            email: sanitizedEmail,
            message: sanitizedMessage
          })
        });

        if (response.ok) {
          setStatus('success');
          setValues({ name: '', email: '', message: '' });
          setFocused({});
        } else {
          setStatus('error');
        }
      } else {
        // Fallback simulated success if no Formspree ID is set yet
        await new Promise(resolve => setTimeout(resolve, 1200));
        setStatus('success');
        setValues({ name: '', email: '', message: '' });
        setFocused({});
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h1>

      <motion.div
        className={styles.formContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <SpotlightCard className={styles.formWrapper} spotlightColor="rgba(124, 58, 237, 0.2)">
          <form onSubmit={handleSubmit} className={styles.form}>
          {/* Name */}
          <div className={`${styles.inputGroup} ${focused.name ? styles.focused : ''}`}>
            <label htmlFor="contact-name" className={styles.label}>Name</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={values.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              disabled={status === 'submitting'}
              required
            />
            <div className={styles.inputLine} />
          </div>

          {/* Email */}
          <div className={`${styles.inputGroup} ${focused.email ? styles.focused : ''}`}>
            <label htmlFor="contact-email" className={styles.label}>Email</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={values.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              disabled={status === 'submitting'}
              required
            />
            <div className={styles.inputLine} />
          </div>

          {/* Message */}
          <div className={`${styles.inputGroup} ${styles.textareaGroup} ${focused.message ? styles.focused : ''}`}>
            <label htmlFor="contact-message" className={styles.label}>Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              value={values.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onFocus={() => handleFocus('message')}
              onBlur={() => handleBlur('message')}
              disabled={status === 'submitting'}
              required
            />
            <div className={styles.inputLine} />
          </div>

          {/* Submit */}
          <div className={styles.actionsRow}>
            <SpecularButton
              className={styles.submitBtnSpecular}
              type="submit"
              disabled={status === 'submitting'}
              size="lg"
              radius={14}
              tint="#7c3aed"
              tintOpacity={0.2}
              textColor="#ffffff"
              lineColor="#06b6d4"
              baseColor="#7c3aed"
              intensity={1.2}
            >
              <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </SpecularButton>

            <AnimatePresence>
              {status === 'success' && (
                <motion.p
                  className={styles.successMessage}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ✓ Message sent successfully!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  className={styles.errorMessage}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ⚠ Please check inputs and try again.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </form>
        </SpotlightCard>
      </motion.div>
    </section>
  );
}

export default Contact;