import "./AddEmployee.scss";

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
  AddEmployer();
  return (
    <div className="addFormMain">
      <div className="addForm_box">
        <form action="">
          <h2>Persolnal Information</h2>
          <p>Use a permanent address where you can receive mail.</p>
          <div className="labelBox">
            <label htmlFor="firstName">
              Name:
              <input type="text" id="firstName" placeholder="Enter name" />
            </label>
          </div>
          <div>
            <label htmlFor="lastName">
              Lastname:
              <input type="text" id="lastName" placeholder="Enter lastname" />
            </label>
          </div>
          <div>
            <label htmlFor="age">
              Age:
              <input type="number" id="age" placeholder="Enter age" />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input type="nutextmber" id="email" placeholder="Enter email" />
            </label>
          </div>
          <div>
            <label htmlFor="country">
              Country:
              <input type="number" id="country" placeholder="Enter country" />
            </label>
          </div>
          <div>
            <label htmlFor="streetAddress">
              Street Address:
              <input
                type="number"
                id="streetAddress"
                placeholder="Enter street address"
              />
            </label>
          </div>
          <div>
            <label htmlFor="city">
              City:
              <input type="number" id="city" placeholder="Enter city" />
            </label>
          </div>
          <div>
            <label htmlFor="postalCode">
              Postal Code:
              <input
                type="number"
                id="postalCode"
                placeholder="Enter postal code"
              />
            </label>
          </div>
          <div>
            <label htmlFor="state">
              State:
              <input type="number" id="state" placeholder="Enter state" />
            </label>
          </div>
          <div>
            <label htmlFor="workplace">
              Workplace:
              <input
                type="number"
                id="worklplace"
                placeholder="Enter workplace"
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              Phone:
              <input type="number" id="phone" placeholder="Enter phone" />
            </label>
          </div>

          <button>Add employeer</button>
        </form>
      </div>
    </div>
  );
};
