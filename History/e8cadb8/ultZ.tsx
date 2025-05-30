function Button({ children, ...others }) {
  return (
    <button className="btn" {...others}>
      Default
    </button>
  );
}

export default Button;
