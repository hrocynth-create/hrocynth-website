// import { useState, type ChangeEvent, type FormEvent } from "react";
// import { z } from "zod";
// import { ArrowUpRight, Mail, MessageSquare, Building2, CheckCircle2 } from "lucide-react";
// import PageHero from "../components/PageHero";
// import SectionHeading from "../components/SectionHeading";

// const schema = z.object({
//   name: z.string().min(2, "Please enter your name."),
//   email: z.string().email("Enter a valid business email."),
//   company: z.string().optional(),
//   interest: z.string().min(1, "Please select an area of interest."),
//   message: z.string().min(10, "Please provide a little more detail (at least 10 characters)."),
// });

// export default function Contact() {
//   const [form, setForm] = useState({name:"",email:"",company:"",interest:"",message:""});
//   const [errors, setErrors] = useState<Record<string,string>>({});
//   const [submitted, setSubmitted] = useState(false);
//   function update(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
//     setForm({...form,[e.target.name]:e.target.value});
//     setErrors({...errors,[e.target.name]:""});
//   }
//   function submit(e: FormEvent) {
//     e.preventDefault();
//     const parsed = schema.safeParse(form);
//     if (!parsed.success) {
//       const next: Record<string,string> = {};
//       parsed.error.issues.forEach(issue => { const key = String(issue.path[0]); next[key] = issue.message; });
//       setErrors(next); return;
//     }
//     setSubmitted(true);
//   }
//   return <>
//     <PageHero eyebrow="CONTACT HROCYNTH" title="Let's start a" highlight="meaningful conversation." text="Whether you are exploring a transformation, considering a partnership or simply want to learn more, we would be pleased to hear from you."/>
//     <section className="section section-white"><div className="container contact-layout">
//       <div className="contact-aside"><span className="eyebrow">CONNECT WITH US</span><h2>Every meaningful journey starts with a conversation.</h2><p className="lead">Tell us what you are working toward. We will use your enquiry to understand the context and identify a useful next step.</p>
//         <div className="contact-detail"><span className="icon-box"><Mail/></span><div><small>BUSINESS ENQUIRIES</small><a href="mailto:hello@hrocynth.com">hello@hrocynth.com</a><p>Replace with your verified corporate email before launch.</p></div></div>
//         <div className="contact-detail"><span className="icon-box"><MessageSquare/></span><div><small>PARTNERSHIPS</small><strong>Let's explore possibilities</strong><p>For strategic collaborations and partnership discussions.</p></div></div>
//         <div className="contact-detail"><span className="icon-box"><Building2/></span><div><small>OUR APPROACH</small><strong>Listen. Understand. Explore.</strong><p>We begin by understanding your objectives and context.</p></div></div>
//       </div>
//       <div className="contact-form-wrap">
//         {submitted ? <div className="form-success"><CheckCircle2 size={42}/><h3>Thank you for reaching out.</h3><p>Your details passed the frontend validation. This demo form is not connected to an email service or backend yet.</p><button className="button button-dark" onClick={()=>{setSubmitted(false);setForm({name:"",email:"",company:"",interest:"",message:""});}}>Send another enquiry</button></div> :
//         <form className="contact-form" onSubmit={submit} noValidate><h3>Send an enquiry</h3><p>Fields marked with * are required.</p>
//           <div className="form-row"><label>Full name *<input name="name" value={form.name} onChange={update} placeholder="Your full name"/>{errors.name&&<small className="field-error">{errors.name}</small>}</label><label>Business email *<input name="email" type="email" value={form.email} onChange={update} placeholder="you@company.com"/>{errors.email&&<small className="field-error">{errors.email}</small>}</label></div>
//           <label>Company / Organization<input name="company" value={form.company} onChange={update} placeholder="Your organization"/></label>
//           <label>Area of interest *<select name="interest" value={form.interest} onChange={update}><option value="">Select an area</option><option>Technology Consulting</option><option>Digital Transformation</option><option>Artificial Intelligence & Automation</option><option>Enterprise Applications</option><option>Cloud & Infrastructure</option><option>Cyber Security</option><option>Industry Solutions</option><option>Strategic Partnership</option><option>Government & Public Sector</option><option>Other</option></select>{errors.interest&&<small className="field-error">{errors.interest}</small>}</label>
//           <label>How can we help? *<textarea name="message" value={form.message} onChange={update} rows={5} placeholder="Tell us a little about your objectives..."/>{errors.message&&<small className="field-error">{errors.message}</small>}</label>
//           <button className="button button-primary form-submit" type="submit">Submit Enquiry <ArrowUpRight size={17}/></button>
//           <small className="form-disclaimer">Frontend demonstration only. Connect a secure backend and publish a privacy notice before collecting real enquiries.</small>
//         </form>}
//       </div>
//     </div></section>
//   </>;
// }

import { useState, type ChangeEvent, type FormEvent } from "react";
import { z } from "zod";
import {
  ArrowUpRight,
  Mail,
  MessageSquare,
  Building2,
  CheckCircle2,
} from "lucide-react";

import PageHero from "../components/PageHero";

// Form validation
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Enter a valid business email."),
  company: z.string().optional(),
  interest: z.string().min(1, "Please select an area of interest."),
  message: z.string().trim().min(
    10,
    "Please provide a little more detail (at least 10 characters)."
  ),
});

type ContactForm = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  company: "",
  interest: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  // Update form fields
  function update(
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSendError("");
  }

  // Submit enquiry to backend
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSendError("");

    // Validate form
    const parsed = schema.safeParse(form);

    if (!parsed.success) {
      const next: Record<string, string> = {};

      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        next[key] = issue.message;
      });

      setErrors(next);
      return;
    }

    setErrors({});
    setSending(true);

    try {
      // Check backend URL
      // const apiUrl = (import.meta as ImportMeta & {
      //   env: { VITE_API_URL?: string };
      // }).env.VITE_API_URL;

      // if (!apiUrl) {
      //   throw new Error(
      //     "Backend API URL is missing. Please configure VITE_API_URL in your frontend .env file."
      //   );
      // }

      // // Send enquiry to backend
      // const response = await fetch(
      //   `${apiUrl.replace(/\/+$/, "")}/api/contact`,
      // Send enquiry to backend through the same domain
const response = await fetch(
  "/api/contact",  
      {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parsed.data),
        }
      );

      // Safely read server response
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message || `Server error: ${response.status}`
        );
      }

      if (!result.success) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      // Success
      setSubmitted(true);
      setForm(initialForm);
      setErrors({});

    } catch (error) {
      console.error("Contact form submission error:", error);

      setSendError(
        error instanceof Error
          ? error.message
          : "Unable to send your enquiry. Please try again."
      );

    } finally {
      setSending(false);
    }
  }

  // Reset form
  function resetForm() {
    setSubmitted(false);
    setForm(initialForm);
    setErrors({});
    setSendError("");
  }

  return (
    <>
      <PageHero
        eyebrow="CONTACT HROCYNTH"
        title="Let's start a"
        highlight="meaningful conversation."
        text="Whether you are exploring a transformation, considering a partnership or simply want to learn more, we would be pleased to hear from you."
      />

      <section className="section section-white">
        <div className="container contact-layout">

          {/* Contact information */}
          <div className="contact-aside">

            <span className="eyebrow">CONNECT WITH US</span>

            <h2>
              Every meaningful journey starts with a conversation.
            </h2>

            <p className="lead">
              Tell us what you are working toward. We will use your
              enquiry to understand the context and identify a useful
              next step.
            </p>

            <div className="contact-detail">
              <span className="icon-box">
                <Mail />
              </span>

              <div>
                <small>BUSINESS ENQUIRIES</small>

                <a href="mailto:hello@hrocynth.com">
                  hello@hrocynth.com
                </a>

                <p>
                  Reach out to us for business enquiries and consultations.
                </p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="icon-box">
                <MessageSquare />
              </span>

              <div>
                <small>PARTNERSHIPS</small>

                <strong>Let's explore possibilities</strong>

                <p>
                  For strategic collaborations and partnership discussions.
                </p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="icon-box">
                <Building2 />
              </span>

              <div>
                <small>OUR APPROACH</small>

                <strong>Listen. Understand. Explore.</strong>

                <p>
                  We begin by understanding your objectives and context.
                </p>
              </div>
            </div>

          </div>

          {/* Contact form */}
          <div className="contact-form-wrap">

            {submitted ? (

              <div className="form-success">

                <CheckCircle2 size={42} />

                <h3>
                  Thank you for reaching out.
                </h3>

                <p>
                  Your enquiry has been successfully submitted.
                  Our team will review your message and get back
                  to you shortly.
                </p>

                <button
                  type="button"
                  className="button button-dark"
                  onClick={resetForm}
                >
                  Send another enquiry
                </button>

              </div>

            ) : (

              <form
                className="contact-form"
                onSubmit={submit}
                noValidate
              >

                <h3>Send an enquiry</h3>

                <p>Fields marked with * are required.</p>

                {/* Name and email */}
                <div className="form-row">

                  <label>
                    Full name *

                    <input
                      name="name"
                      value={form.name}
                      onChange={update}
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />

                    {errors.name && (
                      <small className="field-error">
                        {errors.name}
                      </small>
                    )}
                  </label>

                  <label>
                    Business email *

                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update}
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                    />

                    {errors.email && (
                      <small className="field-error">
                        {errors.email}
                      </small>
                    )}
                  </label>

                </div>

                {/* Company */}
                <label>
                  Company / Organization

                  <input
                    name="company"
                    value={form.company}
                    onChange={update}
                    placeholder="Your organization"
                    autoComplete="organization"
                  />
                </label>

                {/* Interest */}
                <label>
                  Area of interest *

                  <select
                    name="interest"
                    value={form.interest}
                    onChange={update}
                    required
                  >
                    <option value="">Select an area</option>
                    <option>Technology Consulting</option>
                    <option>Digital Transformation</option>
                    <option>Artificial Intelligence & Automation</option>
                    <option>Enterprise Applications</option>
                    <option>Cloud & Infrastructure</option>
                    <option>Cyber Security</option>
                    <option>Industry Solutions</option>
                    <option>Strategic Partnership</option>
                    <option>Government & Public Sector</option>
                    <option>Other</option>
                  </select>

                  {errors.interest && (
                    <small className="field-error">
                      {errors.interest}
                    </small>
                  )}
                </label>

                {/* Message */}
                <label>
                  How can we help? *

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    rows={5}
                    placeholder="Tell us a little about your objectives..."
                    required
                  />

                  {errors.message && (
                    <small className="field-error">
                      {errors.message}
                    </small>
                  )}
                </label>

                {/* Backend error */}
                {sendError && (
                  <small
                    className="field-error"
                    role="alert"
                  >
                    {sendError}
                  </small>
                )}

                {/* Submit button */}
                <button
                  className="button button-primary form-submit"
                  type="submit"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Submit Enquiry"}

                  {!sending && (
                    <ArrowUpRight size={17} />
                  )}
                </button>

                <small className="form-disclaimer">
                  Your enquiry will be processed by our server
                  and shared with our team for follow-up.
                </small>

              </form>

            )}

          </div>

        </div>
      </section>
    </>
  );
}
