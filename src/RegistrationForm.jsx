import React, { useState } from "react";
import "./App.css";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!age) {
      newErrors.age = "Age is required";
    } else if (isNaN(age) || age < 18) {
      newErrors.age = "You must be 18 or older";
    }

    if (!course) newErrors.course = "Please select a course";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      setErrors({});
      setIsSubmitted(true);

      setFirstName("");
      setLastName("");
      setEmail("");
      setAge("");
      setCourse("");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Course Registration</h2>

        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {errors.email && <p className="error">{errors.email}</p>}

        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        {errors.age && <p className="error">{errors.age}</p>}

        <label>
          Select Course:
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">-- Select a course --</option>
            <option value="react">React Fundamentals</option>
            <option value="node">Node.js Essentials</option>
            <option value="python">Python for Beginners</option>
            <option value="javascript">Advanced JavaScript</option>
            <option value="css">CSS & HTML Mastery</option>
            <option value="database">Database Design & SQL</option>
            <option value="webdev">Full-Stack Web Development</option>
          </select>
        </label>
        {errors.course && <p className="error">{errors.course}</p>}

        <button type="submit">Register</button>

        {isSubmitted && (
          <p className="success">🎉 Registration successful!</p>
        )}
      </form>
    </div>
  );
}

export default RegistrationForm;
