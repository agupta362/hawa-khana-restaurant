import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  // ============================================================
  // VALIDATION FUNCTION
  // Acts as the gatekeeper to ensure we get real info.
  // ============================================================
  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "We need to know who to thank!";
    }

    if (!formData.email.trim()) {
      newErrors.email = "We can't reply if we don't have your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "That doesn't look like a real email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Don't leave us hanging—say something!";
    }

    return newErrors;
  }

  // ============================================================
  // HANDLE INPUT CHANGES
  // Updates state as you type and clears red error messages.
  // ============================================================
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }

    if (status) {
      setStatus("");
    }
  }

  // ============================================================
  // HANDLE FORM SUBMISSION
  // The final check before showing the success message.
  // ============================================================
  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Custom success message for Bigreko Khana
    setStatus("Message sent! We'll get back to you faster than a fresh plate of momos.");
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  }

  return (
    <div className="page">
      <div className="contact-header">
        {/* Custom Heading & Subtitle */}
        <h1>Contact Bigreko Khana</h1>
        <p>Got a question? A compliment? Just want to talk about our weird name? We're all ears.</p>
      </div>

      <div className="form-container">
        {/* Success message (appears after valid submission) */}
        {status && <p className="success-msg">{status}</p>}

        <div className="contact-form">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="What should we call you?"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your digital address goes here..."
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us everything..."
              rows="5"
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <button onClick={handleSubmit} className="submit-btn">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;