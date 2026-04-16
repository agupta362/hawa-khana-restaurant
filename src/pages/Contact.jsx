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
  // This checks all form fields and returns any errors found.
  // ============================================================
  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  }

  // ============================================================
  // HANDLE INPUT CHANGES
  // Updates form data as the user types. Also clears errors
  // for that field so the red message disappears.
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
  // Validates first. If valid, shows success and clears form.
  // ============================================================
  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // TODO: You can customize this success message
    setStatus("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  }

  return (
    <div className="page">
      {/* ============================================================
          TODO: Customize the heading and subtitle text below.
          ============================================================ */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
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
              placeholder="Your full name"
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
              placeholder="your.email@example.com"
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
              placeholder="How can we help you?"
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
