function doAsyncTask(callback) {
  const error = Math.random() > 0.5 ? new Error("Something went wrong") : null;
  const result = "Task completed";

  setTimeout(() => {
    callback(error, result);
  }, 1000);
}

doAsyncTask((err, result) => {
  if (err) {
    console.error("Error:", err.message);
  } else {
    console.log("Success:", result);
  }
});
