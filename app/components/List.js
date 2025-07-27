import { ethers } from "ethers"

function List({ toggleCreate, fee, provider, factory }) {

  async function ListHandler(form) {
    const name = form.get("name")
    const ticker = form.get("ticker")
    const signer = await provider.getSigner();
    const transaction = await factory.connect(signer).create(name, ticker, { value: fee })
    await transaction.wait();

    toggleCreate();
  }
  return (
    <div className="list">
      <h2>List new token</h2>
      <div className="list_description">
        <p>fee: {ethers.formatEther(fee)} ETH</p>
      </div>
      <button onClick={toggleCreate} className="btn--fancy">cancel</button>

      <form action={ListHandler}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="ticker" placeholder="ticker" />
        <input type="submit" value="[List]" />
      </form>
    </div>
  );
}

export default List;
