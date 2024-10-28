
function Home() {
  return (
    <div>
      <h1>Registration Form</h1>
      <form action="" method="get">
        <fieldset>
          <legend>Data</legend>
          <label htmlFor="first-name">First Name:
            <input type="text" name="first-name" id="first-name" placeholder="First Name"/>
          </label>
          <label htmlFor="last-name">Last Name:
            <input type="text" name="last-name" id="last-name" placeholder="Last Name"/>
          </label>
          <label htmlFor="email">Email:
            <input type="email" name="email" id="email" placeholder="Email"/>
          </label>
          <label htmlFor="tel">Telephone:
            <input type="tel" name="tel" id="tel" placeholder="Telephone"/>
          </label>
        </fieldset>
        <fieldset>
          <legend>Location</legend>
          <label htmlFor="address">Address:
            <input type="text" name="address" id="address" placeholder="Address"/>
          </label>
          <label htmlFor="country">Country:
            <input type="text" name="country" id="country" />
          </label>
          <label htmlFor="nationality">Nationality:
            <input type="text" name="nationality" id="nationality" placeholder="Nationality"/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
