function Textarea({ children }) {
  return (
    <textarea className="textarea" placeholder="Bio">
      {children}
    </textarea>
  );
}

export default Textarea;
