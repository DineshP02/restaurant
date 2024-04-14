import { useForm } from "react-hook-form";
import { useState } from "react";

function Table() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="Table">
        <div className="container">
          <div style={{ color: "whitesmoke" }}>
            <h5>Reservation</h5>
          </div>
          <div>
            <h2 style={{ color: "#FFC72C" }}>Book a Table</h2>
          </div>
          <form
            className="row g-3"
            style={{ marginTop: "20px" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                style={{ color: isInputFocused ? "black" : "white" }}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => {
                  setTimeout(() => setIsInputFocused(false), 0);
                }}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className="col-md-4">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/,
                    message: "Invalid email address",
                  },
                })}
                style={{ color: isInputFocused ? "black" : "white" }}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => {
                  setTimeout(() => setIsInputFocused(false), 0);
                }}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Your Number"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
                style={{ color: isInputFocused ? "black" : "white" }}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => {
                  setTimeout(() => setIsInputFocused(false), 0);
                }}
              />
              {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Date"
                {...register("date", { required: "Date is required" })}
                style={{ color: isInputFocused ? "black" : "white" }}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => {
                  setTimeout(() => setIsInputFocused(false), 0);
                }}
              />
              {errors.date && <p>{errors.date.message}</p>}
            </div>
            <div className="col-md-4">
              <input
                type="time"
                className="form-control"
                placeholder="Time"
                {...register("time", { required: "Time is required" })}
                style={{ color: isInputFocused ? "black" : "white" }}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => {
                  setTimeout(() => setIsInputFocused(false), 0);
                }}
              />
              {errors.time && <p>{errors.time.message}</p>}
            </div>
            <div className="col-md-4">
              <input
                type="number"
                className="form-control"
                placeholder="# of people"
                {...register("numberOfPeople", {
                  required: "Number of people is required",
                  min: {
                    value: 1,
                    message: "Please enter a valid number of people",
                  },
                })}
                style={{ color: isInputFocused ? "black" : "white" }}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => {
                  setTimeout(() => setIsInputFocused(false), 0);
                }}
              />
              {errors.numberOfPeople && <p>{errors.numberOfPeople.message}</p>}
            </div>
            <div className="col-md-12 ">
              <input
                type="text"
                className="form-control"
                placeholder="Message"
                {...register("message")}
                style={{
                  paddingBottom: "70px",
                  color: isInputFocused ? "black" : "white",
                }}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => {
                  setTimeout(() => setIsInputFocused(false), 0);
                }}
              />
            </div>
            <div style={{ paddingLeft: "45%", marginTop: "20px" }}>
              <button
                className="btn btn-dark nav-item text-light border border-warning rounded-pill"
                style={{ backgroundColor: "#F0E68C" }}
                type="submit"
              >
                Book a table
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Table;
