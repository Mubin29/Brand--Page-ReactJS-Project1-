const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/puma logo.png" width="80px" height="80px" alt="logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;
