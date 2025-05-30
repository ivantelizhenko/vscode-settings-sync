function Textarea({ ...other }) {
  return (
    <textarea
      className="textarea border border-solid border-gray-400 focus:border-black"
      {...other}
    />
  );
}

export default Textarea;
