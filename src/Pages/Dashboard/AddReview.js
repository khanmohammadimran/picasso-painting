import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const AddAReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const review = {
      name: data.name,
      review: data.review,
    };
    console.log(review);
    fetch("https://mighty-everglades-23547.herokuapp.com/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Your review added", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
  return (
    <section className="w-full mt-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 font-raleway ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-8 py-4">
              Add Your Valuable Review
            </h2>

            <input
              type="name"
              placeholder="Your name"
              className="input input-bordered text-secondary w-4/5 mx-auto"
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </label>
          </div>

          <div className="form-control">
            <textarea
              type="text"
              placeholder="Write a Review"
              className="input input-bordered text-secondary w-4/5 mx-auto h-24"
              {...register("review", {
                required: {
                  value: true,
                  message: "Review is required",
                },
              })}
            />
            <label className="label">
              {errors.review?.type === "required" && (
                <span className="text-red-500">{errors.review.message}</span>
              )}
            </label>
          </div>
          <div className="form-control mt-6 items-center">
            <input
              type="submit"
              className="btn btn-ghost border-0 font-sans text-white w-1/2 bg-gradient-to-r from-purple-400 to-pink-600"
              value="Add a Review"
            />
          </div>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </section>
  );
};

export default AddAReview;
