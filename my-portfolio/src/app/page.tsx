export default function Home() {
  return (
    <div className="main-container">
      <div>
        <h1 className="main-title ">About me</h1>
        <p>Hey there !</p>
        <p>
          Je suis Anne-Gaëlle, conceptrice développeuse d'applications web et
          mobile
        </p>
      </div>
      <div>
        <h1 className="main-title ">My projects</h1>
        <div className="grid">{/* //TODO: grid avec mes cards de projet*/}</div>
      </div>
      <div>
        <h1 className="main-title ">My skills</h1>
        <div className="grid">{/* //TODO: grid avec mes cards de projet*/}</div>
      </div>
    </div>
  );
}
