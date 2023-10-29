export const AddEmployee = () => {
  const employeer = {
    firstName: "",
    lastName: "",
    age: "",
  };
  const AddEmployer = async () => {
    try {
      const data = await fetch(``, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employeer,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form action="">
        <label htmlFor="firstName">
          <input type="text" id="firstName" />
        </label>
        <label htmlFor="lastName">
          <input type="text" id="lastName" />
        </label>
        <label htmlFor="age">
          <input type="number" id="age" />
        </label>

        <button>Add employeer</button>
      </form>
    </>
  );
};
