
 const Dashboard = () => {
  return (
    <div className="flex  flex-col  md:flex-row md:justify-between ">
<div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">USERS!</h2>
    {/* <p>We are using cookies for no reason.</p> */}
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Count:20/day</button>
      <button className="btn btn-ghost">Tottal:2500</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">POSTS!</h2>
    {/* <p>We are using cookies for no reason.</p> */}
    <div className="card-actions justify-end">
      <button className="btn btn-accent">Count:40/day</button>
      <button className="btn btn-ghost">Total:5000</button>
    </div>
  </div>
</div>
    </div>
  )
}
export default Dashboard