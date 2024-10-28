export const createReview = async (reviewData) => {
  try {
    const url = `http://localhost:3000/moviematch/reviews/create/${reviewData.movie_id}`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(reviewData),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return { message: error.message, status: 500 };
  }
};
